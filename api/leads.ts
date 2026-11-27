import type { IncomingMessage, ServerResponse } from "node:http";
import { leadSchema } from "../shared/lead.js";
export type LeadRequest = IncomingMessage & { body?: unknown };
const MAX_BYTES = 16_384;
async function readBody(req: LeadRequest) {
  if (req.body !== undefined) {
    if (
      Buffer.byteLength(
        typeof req.body === "string" ? req.body : JSON.stringify(req.body)
      ) > MAX_BYTES
    )
      throw new Error("size");
    return typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  }
  let size = 0;
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    const b = Buffer.from(chunk);
    size += b.length;
    if (size > MAX_BYTES) throw new Error("size");
    chunks.push(b);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}
export default async function handler(req: LeadRequest, res: ServerResponse) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");
  const reply = (status: number, message: string) => {
    res.statusCode = status;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message }));
  };
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return reply(405, "Method not allowed.");
  }
  if (!req.headers["content-type"]?.startsWith("application/json"))
    return reply(415, "JSON is required.");
  const allowed = process.env.SITE_ORIGIN || "https://www.getchainsync.com";
  if (req.headers.origin && req.headers.origin !== allowed)
    return reply(403, "Origin not allowed.");
  let body: unknown;
  try {
    body = await readBody(req);
  } catch {
    return reply(400, "Invalid request body.");
  }
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) return reply(400, "Check the submitted fields.");
  const lead = parsed.data;
  if (lead.website) return reply(200, "Inquiry received.");
  const {
    EMAILJS_SERVICE_ID: service,
    EMAILJS_TEMPLATE_ID: template,
    EMAILJS_PUBLIC_KEY: publicKey,
    EMAILJS_PRIVATE_KEY: privateKey,
    TURNSTILE_SECRET_KEY: secret,
  } = process.env;
  // Fail closed. A missing delivery service or spam verifier must never report success.
  if (!service || !template || !publicKey || !privateKey || !secret)
    return reply(503, "Inquiry service is not configured.");
  try {
    const verify = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: lead.token }),
        signal: AbortSignal.timeout(8000),
      }
    );
    const result = (await verify.json()) as {
      success?: boolean;
      hostname?: string;
    };
    if (
      !verify.ok ||
      !result.success ||
      result.hostname !== new URL(allowed).hostname
    )
      return reply(400, "Spam verification failed.");
    const subject = {
      demo: "Demo request",
      pilot: "Founding pilot application",
      partnership: "Partnership inquiry",
      general: "Business inquiry",
    }[lead.intent];
    const formatted = `${subject}\n\nName: ${lead.name}\nWork email: ${lead.email}\nOrganization: ${lead.company}\nJob title: ${lead.jobTitle}\nIndustry: ${lead.industry}\nInfrastructure: ${lead.infrastructure}\nCountry: ${lead.country}\n\n${lead.message}`;
    const delivery = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: service,
          template_id: template,
          user_id: publicKey,
          accessToken: privateKey,
          template_params: {
            subject: `${subject}: ${lead.company}`,
            company: lead.company,
            name: lead.name,
            email: lead.email,
            reply_to: lead.email,
            job_title: lead.jobTitle,
            industry: lead.industry,
            message: lead.message,
            formatted_message: formatted,
          },
        }),
        signal: AbortSignal.timeout(10000),
      }
    );
    if (!delivery.ok) return reply(502, "Delivery failed. Please try again.");
    return reply(200, "Inquiry sent.");
  } catch {
    return reply(502, "Inquiry service is temporarily unavailable.");
  }
}
