import Layout, { Section, CTA } from "@/components/MarketingLayout";
export default function Security() {
  return (
    <Layout
      eyebrow="Security and operational reliability"
      title="Define the safeguards before the integration."
      intro="Critical infrastructure evaluations need clear boundaries. Security controls and deployment responsibilities must be verified for the actual environment before operational use."
    >
      <Section title="What we can state today">
        <p>
          ChainSync is early stage. This marketing repository includes an
          incident portal frontend, but it does not establish the security
          properties of its external backend or any customer deployment.
        </p>
        <p>
          We do not claim SOC 2 or ISO 27001 certification, HIPAA certification,
          regulatory approval, or independently verified compliance.
        </p>
      </Section>
      <Section title="Proposed pilot safeguards">
        <div className="cs-grid">
          {[
            [
              "Minimize access",
              "Use authorized read-only integration, agreed event fields, and no safety-critical control commands.",
            ],
            [
              "Keep people accountable",
              "Begin with historical validation and shadow mode. Live coordination requires approval and human supervision.",
            ],
            [
              "Make stopping possible",
              "Agree integration revocation, manual procedures, incident ownership, and rollback responsibilities.",
            ],
            [
              "Review the evidence",
              "Agree what is recorded, who can see it, retention, deletion, and how evaluation findings are reviewed.",
            ],
          ].map(([t, b]) => (
            <article className="cs-card" key={t}>
              <h3>{t}</h3>
              <p>{b}</p>
            </article>
          ))}
        </div>
        <p className="cs-note">
          These safeguards are proposed pilot requirements, not representations
          that every control is already implemented.
        </p>
      </Section>
      <Section title="Deployment-dependent controls to verify" dark>
        <ul className="cs-list">
          <li>
            Authentication, authorization, and facility-level data isolation
          </li>
          <li>
            Encryption in transit and at rest, key management, and network
            boundaries
          </li>
          <li>
            Audit logs, incident state history, retention, and access review
          </li>
          <li>
            Hosting region, subprocessors, external AI services, and data
            destinations
          </li>
          <li>
            Availability, recovery, manual override, and integration failure
            behavior
          </li>
        </ul>
        <p>
          Data residency, private deployment, and third-party processing cannot
          be promised without a reviewed deployment design.
        </p>
      </Section>
      <Section title="Documentation supports your review">
        <p>
          Generated records support incident documentation workflows. They do
          not replace required filings, professional review, mandatory emergency
          procedures, or safety-critical systems.
        </p>
        <CTA />
      </Section>
    </Layout>
  );
}
