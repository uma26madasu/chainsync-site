import { track } from "@vercel/analytics";
const events = [
  "demo_cta_clicked",
  "pilot_cta_clicked",
  "demo_request_submitted",
  "pilot_application_submitted",
  "partnership_inquiry_submitted",
  "industry_page_visited",
  "contact_form_completed",
] as const;
export function trackConversion(
  event: (typeof events)[number],
  industry?: "water" | "healthcare"
) {
  if (import.meta.env.PROD)
    track(event, {
      path: window.location.pathname,
      ...(industry ? { industry } : {}),
    });
}
