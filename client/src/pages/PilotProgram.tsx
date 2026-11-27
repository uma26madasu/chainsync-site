import Layout, { Section, CTA } from "@/components/MarketingLayout";
const steps = [
  [
    "Discovery conversation",
    "Discuss your operational challenge, team, and evaluation goals.",
  ],
  [
    "Infrastructure assessment",
    "Review monitoring systems, access boundaries, and integration requirements.",
  ],
  [
    "One incident workflow",
    "Choose a bounded workflow and agree evaluation criteria.",
  ],
  [
    "Authorized read-only integration",
    "Use only agreed data and permissions. Confirm how access can be revoked.",
  ],
  [
    "Historical incident validation",
    "Assess workflow behavior using authorized historical or synthetic events.",
  ],
  [
    "Live shadow-mode evaluation",
    "Observe proposed coordination without replacing existing response procedures.",
  ],
  [
    "Supervised coordination",
    "Proceed only with explicit organizational approval and human oversight.",
  ],
  [
    "Evaluation and commercial discussion",
    "Review findings, limitations, and whether a commercial deployment is appropriate.",
  ],
];
export default function Pilot() {
  return (
    <Layout
      eyebrow="Founding pilot program"
      title="Help shape incident coordination around real operations."
      intro="We are seeking founding pilot partners from water utilities and healthcare facilities. Evaluate one workflow with the founding team before discussing a wider deployment."
    >
      <Section title="A proposed pilot, with clear approval gates">
        <ol className="cs-pilot-steps">
          {steps.map(([t, b]) => (
            <li className="cs-card" key={t}>
              <h3>{t}</h3>
              <p>{b}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section title="Agree the terms before connecting" dark>
        <p>
          Pilot scope, duration, commercial terms, data handling, technical
          requirements, and responsibilities are agreed with each participating
          organization. There are no guaranteed results.
        </p>
        <p>
          Your emergency procedures and safety-critical control systems remain
          authoritative. You decide whether to progress beyond each evaluation
          stage.
        </p>
      </Section>
      <Section title="Bring us one coordination challenge">
        <p>
          Tell us who you are and which organization you represent.
          Infrastructure details and a description of the challenge are optional
          at this stage.
        </p>
        <CTA pilot />
      </Section>
    </Layout>
  );
}
