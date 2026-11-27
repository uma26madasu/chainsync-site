import emailjs from "@emailjs/browser";
import type { Lead } from "@shared/lead";

// Restore the identifiers used by the site's original contact form.
// EmailJS public keys identify browser clients; no private key belongs here.
export async function sendInquiry(lead: Lead, send = emailjs.send) {
  if (lead.website) return;
  const subjects = {
    demo: "Demo Request",
    pilot: "Founding Pilot Application",
    partnership: "Partnership Inquiry",
    general: "Business Inquiry",
  };
  const subject = `${subjects[lead.intent]} from ${lead.company}`;
  const details = `Inquiry type: ${subjects[lead.intent]}\nJob title: ${lead.jobTitle}\nInfrastructure: ${lead.infrastructure || "Not provided"}\nCountry: ${lead.country || "Not provided"}\n\n${lead.message}`;
  await send(
    "service_6mitzhj",
    "template_4579caf",
    {
      subject,
      company: lead.company,
      name: lead.name,
      email: lead.email,
      reply_to: lead.email,
      phone: "Not requested",
      industry: lead.industry,
      job_title: lead.jobTitle,
      // Keep the existing template's message and formatted_message fields usable.
      message: details,
      formatted_message: `${subject}\n\nCompany: ${lead.company}\nName: ${lead.name}\nEmail: ${lead.email}\nIndustry: ${lead.industry}\n${details}`,
    },
    { publicKey: "mvRcXt-RUQv_C4hzo" }
  );
}
