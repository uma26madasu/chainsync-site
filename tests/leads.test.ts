import { test } from "node:test";
import assert from "node:assert/strict";
import handler, { type LeadRequest } from "../api/leads.js";
import { leadSchema } from "../shared/lead.js";
import type { ServerResponse } from "node:http";
const valid = {
  intent: "pilot",
  name: "Test User",
  email: "test@example.org",
  company: "Example Utility",
  jobTitle: "Engineer",
  industry: "water",
  token: "test-token",
};
function response() {
  let status = 200,
    body = "";
  const headers: Record<string, unknown> = {};
  return {
    res: {
      setHeader: (k: string, v: unknown) => {
        headers[k] = v;
      },
      get statusCode() {
        return status;
      },
      set statusCode(v: number) {
        status = v;
      },
      end: (v: string) => {
        body = v;
      },
    } as unknown as ServerResponse,
    result: () => ({ status, body, headers }),
  };
}
async function run(
  body: unknown,
  method = "POST",
  headers: Record<string, string> = {
    "content-type": "application/json",
    origin: "https://www.getchainsync.com",
  }
) {
  const out = response();
  await handler({ body, method, headers } as LeadRequest, out.res);
  return out.result();
}
test("lead validation trims text, accepts optional details and rejects invalid or excessive input", () => {
  assert.equal(
    leadSchema.parse({ ...valid, name: "  Test User  " }).name,
    "Test User"
  );
  assert.equal(
    leadSchema.safeParse({ ...valid, email: "invalid" }).success,
    false
  );
  assert.equal(
    leadSchema.safeParse({ ...valid, intent: "unknown" }).success,
    false
  );
  assert.equal(
    leadSchema.safeParse({ ...valid, message: "x".repeat(2001) }).success,
    false
  );
  assert.equal(
    leadSchema.safeParse({ ...valid, extra: "field" }).success,
    false
  );
});
test("inquiry endpoint validates requests and fails closed before delivery", async () => {
  const saved = { ...process.env };
  const oldFetch = globalThis.fetch;
  let calls = 0;
  try {
    for (const key of [
      "EMAILJS_SERVICE_ID",
      "EMAILJS_TEMPLATE_ID",
      "EMAILJS_PUBLIC_KEY",
      "EMAILJS_PRIVATE_KEY",
      "TURNSTILE_SECRET_KEY",
    ])
      delete process.env[key];
    globalThis.fetch = async () => {
      calls++;
      throw new Error("Unexpected fetch");
    };
    assert.equal((await run(valid, "GET")).status, 405);
    assert.equal(
      (await run(valid, "POST", { "content-type": "text/plain" })).status,
      415
    );
    assert.equal(
      (
        await run(valid, "POST", {
          "content-type": "application/json",
          origin: "https://untrusted.example",
        })
      ).status,
      403
    );
    assert.equal((await run({ ...valid, email: "bad" })).status, 400);
    assert.equal((await run("x".repeat(17000))).status, 400);
    assert.equal((await run({ ...valid, website: "spam" })).status, 200);
    const unconfigured = await run(valid);
    assert.equal(unconfigured.status, 503);
    assert.equal(calls, 0);
    assert.equal(unconfigured.headers["Cache-Control"], "no-store");
  } finally {
    process.env = saved;
    globalThis.fetch = oldFetch;
  }
});
test("verification gates delivery and only provider success returns success", async () => {
  const saved = { ...process.env };
  const oldFetch = globalThis.fetch;
  try {
    Object.assign(process.env, {
      EMAILJS_SERVICE_ID: "service",
      EMAILJS_TEMPLATE_ID: "template",
      EMAILJS_PUBLIC_KEY: "public",
      EMAILJS_PRIVATE_KEY: "private",
      TURNSTILE_SECRET_KEY: "secret",
      SITE_ORIGIN: "https://www.getchainsync.com",
    });
    let sends = 0;
    globalThis.fetch = async input => {
      if (String(input).includes("siteverify"))
        return Response.json({ success: false });
      sends++;
      return new Response("OK");
    };
    assert.equal((await run(valid)).status, 400);
    assert.equal(sends, 0);
    globalThis.fetch = async () =>
      Response.json({ success: true, hostname: "wrong.example" });
    assert.equal((await run(valid)).status, 400);
    globalThis.fetch = async input =>
      String(input).includes("siteverify")
        ? Response.json({ success: true, hostname: "www.getchainsync.com" })
        : new Response("Unavailable", { status: 500 });
    assert.equal((await run(valid)).status, 502);
    globalThis.fetch = async (input, init) => {
      if (String(input).includes("siteverify"))
        return Response.json({
          success: true,
          hostname: "www.getchainsync.com",
        });
      const payload = JSON.parse(String(init?.body));
      assert.equal(payload.accessToken, "private");
      assert.equal(payload.template_params.reply_to, valid.email);
      assert.ok(!("token" in payload.template_params));
      sends++;
      return new Response("OK");
    };
    assert.equal((await run(valid)).status, 200);
    assert.equal(sends, 1);
    globalThis.fetch = async () => {
      throw new Error("timeout");
    };
    assert.equal((await run(valid)).status, 502);
  } finally {
    process.env = saved;
    globalThis.fetch = oldFetch;
  }
});
