import Layout, { Section, CTA } from "@/components/MarketingLayout";
import { Link } from "wouter";
export default function Integrations() {
  return (
    <Layout
      eyebrow="Integrations"
      title="Connect the systems your teams already use."
      intro="ChainSync is designed to complement monitoring and detection infrastructure through an HTTP webhook integration approach."
    >
      <Section title="Monitoring event to response workflow">
        <div className="cs-grid three">
          {[
            [
              "Source systems",
              "SCADA, BMS, environmental monitoring, and other event-producing platforms.",
            ],
            [
              "Integration boundary",
              "Agree event fields, authentication, network access, and delivery behavior before connecting.",
            ],
            [
              "Coordination workflow",
              "Map the event to the selected incident workflow and authorized personnel.",
            ],
          ].map(([t, b]) => (
            <article className="cs-card" key={t}>
              <h3>{t}</h3>
              <p>{b}</p>
            </article>
          ))}
        </div>
        <p className="cs-note">
          These are integration approaches, not a list of certified or pre-built
          vendor connectors.
        </p>
      </Section>
      <Section title="What we assess together">
        <ul className="cs-list">
          <li>
            How the source system exports alerts and whether an adapter is
            needed.
          </li>
          <li>
            Payload minimization, event identifiers, timestamps, retries, and
            duplicate handling.
          </li>
          <li>
            Authentication, transport security, access boundaries, and permitted
            destinations.
          </li>
          <li>
            Read-only access and a way to disable or revoke the integration.
          </li>
          <li>Historical validation before any live shadow-mode evaluation.</li>
        </ul>
        <p>
          Supporting HTTP POST does not by itself establish a ready-to-use SCADA
          or BMS integration. Technical compatibility is assessed for each
          pilot.
        </p>
      </Section>
      <Section title="Build an integration partnership" dark>
        <p>
          We welcome monitoring providers, SCADA and BMS integrators, and
          engineering organizations interested in a complementary incident
          coordination layer.
        </p>
        <Link className="cs-button" href="/partnerships">
          Explore Partnerships
        </Link>
      </Section>
      <Section title="Discuss your infrastructure">
        <CTA />
      </Section>
    </Layout>
  );
}
