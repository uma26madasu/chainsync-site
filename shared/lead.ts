import { z } from "zod";
export const leadSchema = z
  .object({
    intent: z.enum(["demo", "pilot", "partnership", "general"]),
    name: z.string().trim().min(2, "Enter your full name.").max(120),
    email: z.string().trim().email("Enter a valid work email.").max(254),
    company: z.string().trim().min(2, "Enter your organization.").max(160),
    jobTitle: z.string().trim().min(2, "Enter your job title.").max(120),
    industry: z.enum([
      "water",
      "healthcare",
      "facilities",
      "monitoring",
      "integrator",
      "other",
    ]),
    infrastructure: z.string().trim().max(500).default(""),
    message: z.string().trim().max(2000).default(""),
    country: z.string().trim().max(100).default(""),
    website: z.string().max(200).default(""),
    token: z.string().max(2048).default(""),
  })
  .strict();
export type Lead = z.infer<typeof leadSchema>;
