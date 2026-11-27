import { useEffect } from "react";
import Layout, { Section, CTA } from "@/components/MarketingLayout";
import { trackConversion } from "@/lib/analytics";
export default function Industry({
  healthcare = false,
}: {
  healthcare?: boolean;
}) {
  useEffect(
    () =>
      trackConversion(
        "industry_page_visited",
        healthcare ? "healthcare" : "water"
      ),
    [healthcare]
  );
  const scenarios = healthcare
    ? [
        "BMS and environmental monitoring alerts",
        "HVAC-related operational incidents",
        "Water system incidents",
        "Facilities equipment failures",
        "Engineering team coordination",
      ]
    : [
        "Pump failure and equipment malfunction",
        "Water leak detection",
        "Tank-level alarms",
        "Water quality alerts",
        "After-hours response coordination",
      ];
  return (
    <Layout
      eyebrow={healthcare ? "Healthcare facilities" : "Water and wastewater"}
      title={
        healthcare
          ? "Coordinate facilities incidents with a shared response workflow."
          : "Turn a utility alarm into a coordinated operational response."
      }
      intro={
        healthcare
          ? "Help facilities and engineering teams organize ownership, response activity, and documentation around existing building management systems."
          : "Connect agreed monitoring events with the personnel, incident context, and documentation needed to evaluate the next step."
      }
    >
      <Section title="Where coordination becomes difficult">
        <p>
          An alert can arrive before the right team has a shared view of the
          situation. Manual handoffs, unclear ownership, and scattered records
          make response coordination harder.
        </p>
        <ul className="cs-list">
          {scenarios.map(s => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Section>
      <Section title="An illustrative response scenario" dark>
        <p className="cs-eyebrow">
          Illustration only. No customer incident or measured outcome.
        </p>
        <h3>
          {healthcare
            ? "An HVAC alarm arrives outside normal hours"
            : "A pump failure alarm arrives overnight"}
        </h3>
        <ol className="cs-list">
          <li>
            The existing {healthcare ? "BMS" : "monitoring system"} detects the
            condition and sends an agreed event payload.
          </li>
          <li>
            The proposed ChainSync workflow assesses context and identifies the
            authorized response team.
          </li>
          <li>
            The team reviews the incident, confirms ownership, and coordinates
            next steps under existing procedures.
          </li>
          <li>
            Status updates and supporting incident documentation are retained
            for review and closure.
          </li>
        </ol>
      </Section>
      <Section title="Fit the workflow to your infrastructure">
        <div className="cs-grid">
          <div>
            <h3>Integration assessment</h3>
            <p>
              Review event export, network boundaries, authentication, and
              required adapters. Begin with authorized read-only access and
              historical data where appropriate.
            </p>
          </div>
          <div>
            <h3>A supervised evaluation</h3>
            <p>
              Agree the workflow, personnel, approval gates, and evaluation
              criteria before shadow mode or supervised coordination.
            </p>
          </div>
        </div>
        {healthcare && (
          <p className="cs-note">
            This is facilities incident coordination. ChainSync does not provide
            clinical decision support, patient monitoring, or automated medical
            decisions. Patient information should not be included in inquiry
            forms or initial evaluation payloads.
          </p>
        )}
        <p>
          Documentation supports your workflows and review process. It does not
          guarantee regulatory compliance.
        </p>
        <CTA pilot />
      </Section>
    </Layout>
  );
}
