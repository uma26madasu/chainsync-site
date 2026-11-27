import Layout, { Section, CTA } from "@/components/MarketingLayout";
export default function Roadmap() {
  return (
    <Layout
      eyebrow="Roadmap"
      title="Validate the workflow before expanding the scope."
      intro="Our immediate priority is working with founding pilot partners in water utilities and healthcare facilities."
    >
      <Section title="Current evaluation priorities">
        <ul className="cs-list">
          <li>
            Validate one bounded incident workflow with an operational partner.
          </li>
          <li>
            Confirm integration behavior, personnel responsibilities, and
            documentation needs.
          </li>
          <li>
            Assess security, access, data handling, and failure behavior for the
            proposed deployment.
          </li>
          <li>
            Use evaluation findings to decide what needs to improve before
            commercial deployment.
          </li>
        </ul>
      </Section>
      <Section title="Future capabilities">
        <p>
          Additional infrastructure industries, broader integrations, and
          expanded coordination workflows remain potential directions. Dates,
          availability, certifications, and operational outcomes are not
          committed.
        </p>
        <CTA pilot />
      </Section>
    </Layout>
  );
}
