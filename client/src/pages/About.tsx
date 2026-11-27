import Layout, { Section, CTA } from "@/components/MarketingLayout";
export default function About() {
  return (
    <Layout
      eyebrow="About ChainSync"
      title="A clearer path from alert to coordinated action."
      intro="ChainSync is an early-stage environmental incident coordination platform focused on critical infrastructure operations."
    >
      <Section title="Why we are building it">
        <p>
          Monitoring can reveal a problem before teams have the context,
          ownership, and shared workflow to respond together. ChainSync is
          designed to help connect those steps, from incoming incident events
          through coordination and closure.
        </p>
        <p>
          Our initial focus is water and wastewater utilities and healthcare
          facilities. We are seeking founding pilot partners and our first
          paying customers.
        </p>
      </Section>
      <Section title="Built with operational partners">
        <h3>Uma Madasu, Founder</h3>
        <p>
          We want to evaluate the platform against real operational workflows,
          with clearly agreed scope, human oversight, and honest reporting of
          limitations.
        </p>
        <a
          className="cs-text-link"
          href="https://www.linkedin.com/company/getchainsync/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>
      </Section>
      <Section title="Discuss your coordination challenge">
        <CTA />
      </Section>
    </Layout>
  );
}
