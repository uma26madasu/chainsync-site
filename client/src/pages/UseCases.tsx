import Layout, { Section, CTA } from "@/components/MarketingLayout";
import { Link } from "wouter";
export default function Industries() {
  return (
    <Layout
      eyebrow="Industries"
      title="Built around operational response needs."
      intro="Our initial pilot focus is water and wastewater utilities and healthcare facilities. Start with one workflow your team can evaluate safely."
    >
      <Section title="Explore your operational context">
        <div className="cs-grid">
          <article className="cs-card">
            <h2>Water and wastewater</h2>
            <p>
              Pump failures, tank-level alarms, water system incidents, and
              after-hours response coordination.
            </p>
            <Link href="/industries/water-wastewater" className="cs-text-link">
              Explore water and wastewater
            </Link>
          </article>
          <article className="cs-card">
            <h2>Healthcare facilities</h2>
            <p>
              BMS alerts, HVAC incidents, equipment failures, and facilities
              engineering coordination.
            </p>
            <Link
              href="/industries/healthcare-facilities"
              className="cs-text-link"
            >
              Explore healthcare facilities
            </Link>
          </article>
        </div>
      </Section>
      <Section title="Another critical infrastructure workflow?">
        <p>
          Facilities managers, environmental monitoring teams, and
          infrastructure operators can discuss fit with us. Availability outside
          our initial focus is assessed individually.
        </p>
        <CTA />
      </Section>
    </Layout>
  );
}
