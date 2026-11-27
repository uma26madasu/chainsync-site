const phases = [
  ["Detection", "Receive an event from existing monitoring infrastructure."],
  ["Analysis", "Assess the incident and identify response needs."],
  ["Notification", "Notify the appropriate personnel through agreed channels."],
  ["Coordination", "Organize ownership, availability, and response activity."],
  ["State Tracking", "Maintain a shared record as the incident changes."],
  [
    "Compliance Documentation",
    "Prepare supporting documentation for human review.",
  ],
  ["Closure", "Record the outcome and retain the incident history."],
];
export default function Lifecycle() {
  return (
    <div>
      <p className="cs-note">
        Proposed operational workflow. Capabilities and integrations are
        validated during pilot scoping.
      </p>
      <ol className="cs-lifecycle">
        {phases.map(([name, body]) => (
          <li key={name}>
            <h3>{name}</h3>
            <p>{body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
