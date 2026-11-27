import Layout, { Section } from "@/components/MarketingLayout";
import { Link } from "wouter";
export default function Partnerships() {
  return (
    <Layout
      eyebrow="Technology and integration partnerships"
      title="Keep the monitoring expertise. Connect the response."
      intro="ChainSync is designed to complement existing detection and monitoring platforms with incident coordination and supporting documentation."
    >
      <Section title="Who we would like to work with">
        <ul className="cs-list">
          <li>Water and environmental monitoring technology providers</li>
          <li>SCADA and BMS integrators</li>
          <li>Water and wastewater operators</li>
          <li>Facilities management service providers</li>
          <li>Engineering consulting organizations</li>
        </ul>
      </Section>
      <Section title="Start with a specific integration opportunity" dark>
        <p>
          Discuss an event source, an operational workflow, and the
          responsibilities of each party. We can assess technical fit and
          propose a bounded evaluation together.
        </p>
        <p>
          No commercial partnership or certified vendor integration is implied
          by these opportunities.
        </p>
      </Section>
      <Section title="Discuss a partnership">
        <Link className="cs-button" href="/contact?intent=partnership">
          Make a Partnership Inquiry
        </Link>
      </Section>
    </Layout>
  );
}
