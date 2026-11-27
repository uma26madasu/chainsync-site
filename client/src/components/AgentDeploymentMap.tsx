export const CATEGORIES = [
  {
    label: "Core Intelligence",
    color: "#10b981",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    textColor: "text-emerald-700",
    agents: [
      {
        label: "Continuous Learning Agent",
        desc: "Uses historical incident outcomes and feedback to inform future response analysis; improvements require validation.",
      },
      {
        label: "Root Cause Analysis Agent",
        desc: "Examines sensor data, event logs, and historical patterns to suggest possible incident causes for human review.",
      },
      {
        label: "Natural Language Query Agent",
        desc: "Enables plain-language queries against incident records, compliance data, and system status",
      },
      {
        label: "Memory Enabled Agent",
        desc: "Maintains persistent context across multi-step coordination workflows and multi-session incidents",
      },
      {
        label: "Multi-Step Reasoning Agent",
        desc: "Evaluates complex, multi-variable scenarios to determine response priority and escalation path",
      },
    ],
  },
  {
    label: "Emergency Coordination",
    color: "#3b82f6",
    bg: "bg-blue-50",
    border: "border-blue-200",
    textColor: "text-blue-700",
    agents: [
      {
        label: "Meeting Context Agent",
        desc: "Prepares and distributes a structured incident brief to all participants before the emergency response meeting",
      },
      {
        label: "Public Communication Agent",
        desc: "Drafts regulatory notifications and public-facing communications based on incident type and jurisdiction",
      },
      {
        label: "Impact Assessment Agent",
        desc: "Evaluates operational, regulatory, and community impact of an active incident to inform response scope",
      },
      {
        label: "Predictive Alert Agent",
        desc: "Identifies pre-threshold signals and trend deviations before a breach or failure occurs",
      },
      {
        label: "Historical Pattern Matching Agent",
        desc: "Finds similar historical incidents to provide context for response planning.",
      },
    ],
  },
  {
    label: "Compliance",
    color: "#f59e0b",
    bg: "bg-amber-50",
    border: "border-amber-200",
    textColor: "text-amber-700",
    agents: [
      {
        label: "Compliance Autopilot Agent",
        desc: "Identifies potentially relevant documentation workflows based on incident context, subject to qualified review.",
      },
      {
        label: "Regulatory Reporting Agent",
        desc: "Prepares draft incident reports to support water, environmental, and healthcare facilities documentation workflows.",
      },
    ],
  },
  {
    label: "Healthcare",
    color: "#8b5cf6",
    bg: "bg-purple-50",
    border: "border-purple-200",
    textColor: "text-purple-700",
    agents: [
      {
        label: "Hospital Operations Agent",
        desc: "Supports facilities and engineering coordination with designated organizational stakeholders for facility incidents.",
      },
      {
        label: "Joint Commission Documentation Agent",
        desc: "Prepares draft facilities incident documentation for review against applicable organizational and accreditation requirements.",
      },
      {
        label: "Infection Control Coordination Agent",
        desc: "Supports notification of designated infection control stakeholders for environmental facility events; does not make clinical decisions.",
      },
      {
        label: "Medical Equipment Failure Agent",
        desc: "Supports engineering response coordination and incident documentation for equipment failures; does not monitor patients or control medical devices.",
      },
      {
        label: "Preventive Maintenance Tracker Agent",
        desc: "Supports maintenance scheduling and tracking using incident history and agreed equipment priorities.",
      },
    ],
  },
];

export default function AgentDeploymentMap() {
  return (
    <div>
      <p className="cs-note">
        17 specialized agents organized by responsibility. These descriptions
        explain the platform design; availability and behavior are confirmed for
        the selected evaluation workflow.
      </p>
      <div className="cs-grid">
        {CATEGORIES.map(category => (
          <section className="cs-card" key={category.label}>
            <h3>{category.label}</h3>
            {category.agents.map(agent => (
              <details className="cs-agent" key={agent.label}>
                <summary>{agent.label}</summary>
                <p>{agent.desc}</p>
              </details>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
