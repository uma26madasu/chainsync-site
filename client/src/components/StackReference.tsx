export const STACK = [
  [
    "Server",
    "Python 3.11+ / FastAPI 0.115+ / Uvicorn",
    "HTTP server with async request handling",
  ],
  [
    "Database",
    "SQLAlchemy ORM with Alembic migrations",
    "SQLite (dev) / PostgreSQL (prod) for data persistence",
  ],
  [
    "AI Models",
    "OpenAI GPT-4, Anthropic Claude 3.5, Google Gemini",
    "Multi-model AI support via OmniRoute gateway",
  ],
  [
    "LLM Gateway",
    "OmniRoute (optional)",
    "Unified routing layer for multi-model AI requests",
  ],
  [
    "Vector Store",
    "Pinecone",
    "Context retrieval and pattern matching for incidents",
  ],
  ["SMS Notifications", "Twilio", "Multi-stakeholder SMS alerting"],
  ["Email", "SendGrid", "Email notifications and compliance document delivery"],
  [
    "Chat Integrations",
    "Slack SDK, Microsoft Teams (pymsteams)",
    "Real-time team notifications",
  ],
  [
    "Incident Management",
    "PagerDuty (pdpyras)",
    "Critical incident escalation and on-call routing",
  ],
  [
    "PDF Generation",
    "ReportLab",
    "Compliance documents and incident closure reports",
  ],
  [
    "Calendar APIs",
    "Google Calendar API, Microsoft Graph API",
    "Emergency meeting scheduling with conflict detection",
  ],
  [
    "Monitoring",
    "Prometheus + Grafana",
    "System health metrics and operational dashboards",
  ],
  [
    "Security",
    "Rate limiting, OWASP validation, Bandit",
    "Multi-layer security with pre-commit hooks",
  ],
  [
    "Infrastructure",
    "Docker, Terraform (AWS)",
    "Container orchestration and cloud infrastructure as code",
  ],
];
export const ENDPOINTS = [
  ["GET", "/", "API info and version"],
  ["GET", "/health", "Health check with database status"],
  ["GET", "/status", "System status and agent count"],
  [
    "POST",
    "/webhooks/chainsync/alert",
    "Receive and process a ChainSync alert",
  ],
  ["POST", "/webhooks/slotify/meeting", "Receive meeting scheduling webhook"],
  ["POST", "/webhooks/alerts", "Universal alert ingestion endpoint"],
  ["POST", "/webhook/scada", "Receive SCADA alert (water utilities)"],
  ["POST", "/webhook/bms", "Receive BMS alert (healthcare facilities)"],
  ["GET", "/agents/list", "List all registered agents"],
  ["GET", "/meetings/recent", "List recent scheduled meetings"],
  ["GET", "/alerts/recent", "List recent alerts processed"],
  [
    "GET",
    "/api/v1/incidents/{incident_id}/timeline",
    "Get chronological event timeline for incident audit",
  ],
  [
    "POST",
    "/incidents/{incident_id}/close",
    "Close incident with resolution and PDF export",
  ],
];
export default function StackReference() {
  return (
    <div>
      <p className="cs-note">
        Platform stack documented in the earlier ChainSync website. This
        describes the incident coordination platform, not the React/Vite
        marketing site. Versions, integrations, security tooling, and
        infrastructure are confirmed against the actual backend and deployment
        during technical assessment.
      </p>
      <div
        className="cs-table-scroll"
        tabIndex={0}
        role="region"
        aria-label="Platform technology stack"
      >
        <table className="cs-reference-table">
          <caption>
            Technology and its role in the platform architecture
          </caption>
          <thead>
            <tr>
              <th scope="col">Component</th>
              <th scope="col">Technology</th>
              <th scope="col">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {STACK.map(([component, technology, purpose]) => (
              <tr key={component}>
                <th scope="row">{component}</th>
                <td>{technology}</td>
                <td>{purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="mt-8">Documented platform API reference</h3>
      <p className="cs-note">
        These paths are reference material from the platform architecture, not
        active endpoints on this marketing website. Authentication, request
        schemas, and deployed availability must be checked against the backend
        API documentation.
      </p>
      <div
        className="cs-table-scroll"
        tabIndex={0}
        role="region"
        aria-label="Platform API endpoints"
      >
        <table className="cs-reference-table">
          <caption>Incident platform API paths</caption>
          <thead>
            <tr>
              <th scope="col">Method</th>
              <th scope="col">Path</th>
              <th scope="col">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {ENDPOINTS.map(([method, path, description]) => (
              <tr key={path}>
                <td>{method}</td>
                <th scope="row">
                  <code>{path}</code>
                </th>
                <td>{description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
