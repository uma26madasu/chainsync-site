import Layout, { Section } from "@/components/MarketingLayout";
export default function Privacy() {
  return (
    <Layout
      eyebrow="Data handling"
      title="Share only what we need to start a conversation."
      intro="This notice describes the inquiry form and website analytics. Deployment-specific incident data handling is agreed separately before an evaluation."
    >
      <Section title="Inquiry information">
        <p>
          The form collects your name, work email, organization, job title,
          industry, and inquiry type. Monitoring infrastructure, operational
          challenge, and country are optional. We use this information to
          respond and assess a potential demo, pilot, or partnership.
        </p>
        <p>
          The form sends your inquiry directly to EmailJS for email delivery. Do
          not submit credentials, patient information, or confidential incident
          records.
        </p>
      </Section>
      <Section title="Website measurement">
        <p>
          The website uses Vercel Analytics when supported by the hosting
          environment. Conversion events contain an event name and page path,
          with an industry category for industry visits. Form contents and
          contact details are not included in these events.
        </p>
      </Section>
      <Section title="Questions and requests">
        <p>
          Use the general inquiry option on the contact page to ask about
          access, correction, deletion, retention, or processing locations.
          Retention arrangements and any deployment-specific data requirements
          should be confirmed with ChainSync before sharing operational data.
        </p>
        <a className="cs-button secondary" href="/contact?intent=general">
          Contact ChainSync
        </a>
      </Section>
    </Layout>
  );
}
