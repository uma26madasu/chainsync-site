import ArchitectureAnimation from "@/components/ArchitectureAnimation";
import AgentDeploymentMap from "@/components/AgentDeploymentMap";
import Layout, { Section, CTA } from "@/components/MarketingLayout";
import Lifecycle from "@/components/Lifecycle";
export default function Platform() {
  return (
    <Layout
      eyebrow="Platform"
      title="Coordinate the work that follows an incident alert."
      intro="ChainSync is designed to connect incoming events with incident analysis, personnel notification, scheduling, state tracking, and supporting documentation."
    >
      <Section title="Architecture: monitoring to coordinated response">
        <div className="max-w-3xl">
          <ArchitectureAnimation />
        </div>
        <p>
          Three connected layers handle integration, intelligence, and
          coordination. Standard HTTP is the intended boundary between layers;
          integration behavior and operational safeguards are evaluated for your
          workflow.
        </p>
      </Section>
      <div id="agents" className="cs-anchor">
        <Section title="17 AI agents and their responsibilities">
          <AgentDeploymentMap />
        </Section>
      </div>
      <Section title="The seven-phase incident lifecycle">
        <Lifecycle />
      </Section>
      <Section title="A coordination layer around your infrastructure" dark>
        <div className="cs-grid">
          <div>
            <h3>Monitoring remains the source</h3>
            <p>
              SCADA, BMS, and environmental monitoring tools continue to detect
              conditions. An authorized integration passes agreed event data to
              ChainSync.
            </p>
          </div>
          <div>
            <h3>People remain accountable</h3>
            <p>
              Response teams review context and make operational decisions.
              Notification rules, approvals, escalation, and closure
              requirements are agreed before evaluation.
            </p>
          </div>
        </div>
      </Section>
      <Section title="Evaluate the fit before expanding">
        <p>
          The platform design includes 17 specialized coordination agents. Their
          availability, behavior, and integration requirements must be confirmed
          for your selected workflow. No production performance or operational
          outcome is guaranteed.
        </p>
        <CTA />
      </Section>
    </Layout>
  );
}
