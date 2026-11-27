import { test } from "node:test";
import assert from "node:assert/strict";
import { sendInquiry } from "../client/src/lib/sendInquiry.js";
import { leadSchema } from "../shared/lead.js";
const lead = leadSchema.parse({
  intent: "partnership",
  name: "Test User",
  email: "test@example.org",
  company: "Test Integrator",
  jobTitle: "Engineer",
  industry: "integrator",
  infrastructure: "BMS",
  country: "Example",
  message: "Discuss an integration",
});
test("restored delivery uses the original EmailJS account and preserves new fields for the old template", async () => {
  let calls = 0;
  await sendInquiry(lead, async (service, template, params, options) => {
    calls++;
    assert.equal(service, "service_6mitzhj");
    assert.equal(template, "template_4579caf");
    assert.equal(typeof options, "object");
    assert.equal(
      (options as { publicKey: string }).publicKey,
      "mvRcXt-RUQv_C4hzo"
    );
    assert.equal(params?.email, lead.email);
    assert.equal(params?.phone, "Not requested");
    for (const field of [
      lead.jobTitle,
      lead.infrastructure,
      lead.country,
      lead.message,
      "Partnership Inquiry",
    ]) {
      assert.ok(String(params?.message).includes(field));
      assert.ok(String(params?.formatted_message).includes(field));
    }
    return { status: 200, text: "OK" };
  });
  assert.equal(calls, 1);
});
test("provider failures propagate and a honeypot submission never calls delivery", async () => {
  await assert.rejects(
    sendInquiry(lead, async () => {
      throw new Error("Provider unavailable");
    }),
    /Provider unavailable/
  );
  await sendInquiry({ ...lead, website: "bot" }, async () => {
    assert.fail("Honeypot should prevent delivery");
  });
});
