import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import TechStackFlow from "@/components/TechStackFlow";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import SwappableIntegration from "@/components/SwappableIntegration";
import AgentDeploymentMap from "@/components/AgentDeploymentMap";
import TechComparisonTable from "@/components/TechComparisonTable";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import CapabilityMatrix from "@/components/CapabilityMatrix";

export default function Technology() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <motion.h1
            className="text-[clamp(2.2rem,4.4vw,3.8rem)] font-bold text-slate-900 tracking-[-0.03em] leading-[1.08] mb-4 text-center"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Enterprise-Grade Technology for Critical Infrastructure
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Reliable, flexible, and compliance-ready. Built from the ground up with specialized components that each do one thing well.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {["17 AI Agents", "Multi-Model AI Routing", "Event Sourcing", "13 API Endpoints", "Timeline API", "OmniRoute Gateway"].map((tag) => (
              <span key={tag} className="text-[11px] font-semibold px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 1. Tech Stack Overview */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1] mb-3 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            What Powers ChainSync
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Four distinct layers, each independently deployable, communicating via standard HTTP.
          </motion.p>
          <TechStackFlow />
        </div>
      </section>

      {/* 2. Architecture Deep Dive */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1] mb-3 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Data Flow: Incident to Resolution
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            From the first sensor reading to a scheduled emergency response meeting. Every step is automated.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <ArchitectureFlow />
          </motion.div>
        </div>
      </section>

      {/* 3. Swappable Integration Layer */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp} className="text-center mb-3">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">The Moat</span>
            </motion.div>
            <motion.h2
              className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1] mb-3 text-center"
              variants={fadeUp}
            >
              Not Locked In. Ever.
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto"
              variants={fadeUp}
            >
              ChainSync's Universal Webhook Endpoint accepts HTTP POST from any integration platform. Switch from MuleSoft to Workato, Boomi, or Azure Logic Apps without touching the AI agent or scheduling layers.
            </motion.p>
            <motion.div variants={fadeUp}>
              <SwappableIntegration />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Agent Ecosystem */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1] mb-3 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            17 Coordination Agents Built. Seeking First Production Deployment.
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Modular by design: each agent is an independent service. Improve one without disrupting the rest. Seeking founding pilot partners for first production deployment.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <AgentDeploymentMap />
          </motion.div>
        </div>
      </section>

      {/* 5. Technology Comparison */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1] mb-3 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Why Purpose-Built Matters
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Generic tools require humans to coordinate. ChainSync coordinates so humans can act.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <TechComparisonTable />
          </motion.div>
        </div>
      </section>

      {/* 6. Performance Metrics */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1] mb-3 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Built for Scale
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Design targets for the coordination pipeline.
          </motion.p>
          <PerformanceMetrics />
        </div>
      </section>

      {/* 7. Capability Matrix */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1] mb-3 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Comprehensive Coverage Across Sectors
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            The same core architecture applies across verticals. Specialized agents handle domain-specific logic.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <CapabilityMatrix />
          </motion.div>
        </div>
      </section>

      {/* 8. Tech Stack Details */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1] mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Stack Reference
          </motion.h2>

          <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-slate-100">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Component</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Technology</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Server", "Python 3.11+ / FastAPI 0.115+ / Uvicorn", "HTTP server with async request handling"],
                  ["Database", "SQLAlchemy ORM with Alembic migrations", "SQLite (dev) / PostgreSQL (prod) for data persistence"],
                  ["AI Models", "OpenAI GPT-4, Anthropic Claude 3.5, Google Gemini", "Multi-model AI support via OmniRoute gateway"],
                  ["LLM Gateway", "OmniRoute (optional)", "Unified routing layer for multi-model AI requests"],
                  ["Vector Store", "Pinecone", "Context retrieval and pattern matching for incidents"],
                  ["SMS Notifications", "Twilio", "Multi-stakeholder SMS alerting"],
                  ["Email", "SendGrid", "Email notifications and compliance document delivery"],
                  ["Chat Integrations", "Slack SDK, Microsoft Teams (pymsteams)", "Real-time team notifications"],
                  ["Incident Management", "PagerDuty (pdpyras)", "Critical incident escalation and on-call routing"],
                  ["PDF Generation", "ReportLab", "Compliance documents and incident closure reports"],
                  ["Calendar APIs", "Google Calendar API, Microsoft Graph API", "Emergency meeting scheduling with conflict detection"],
                  ["Monitoring", "Prometheus + Grafana", "System health metrics and operational dashboards"],
                  ["Security", "Rate limiting, OWASP validation, Bandit", "Multi-layer security with pre-commit hooks"],
                  ["Infrastructure", "Docker, Terraform (AWS)", "Container orchestration and cloud infrastructure as code"],
                ].map(([comp, tech, purpose], i) => (
                  <motion.tr
                    key={comp}
                    className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    transition={{ delay: i * 0.06 }}
                  >
                    <td className="py-3 px-4 text-muted-foreground">{comp}</td>
                    <td className="py-3 px-4 text-foreground font-medium">{tech}</td>
                    <td className="py-3 px-4 text-muted-foreground">{purpose}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div
            className="mt-6 bg-sky-50 border border-sky-100 rounded-xl p-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h3 className="text-sm font-semibold text-foreground mb-2">Platform-Agnostic by Design</h3>
            <p className="text-sm text-muted-foreground">
              ChainSync uses FastAPI 0.115+ with Uvicorn as the production server. The architecture supports OmniRoute LLM gateway for unified multi-model AI routing (OpenAI, Anthropic, Google). All integrations connect via standard HTTP webhooks — MuleSoft, Workato, Boomi, or any HTTP POST-capable system can integrate without changes to agent or coordination layers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 9. API Endpoints */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1] mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            API Endpoints (13 Total)
          </motion.h2>

          <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-slate-100">
                  <th className="text-left py-3 px-4 font-semibold text-foreground w-20">Method</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Path</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["GET",  "/",                                          "API info and version"],
                  ["GET",  "/health",                                    "Health check with database status"],
                  ["GET",  "/status",                                    "System status and agent count"],
                  ["POST", "/webhooks/chainsync/alert",                  "Receive and process a ChainSync alert"],
                  ["POST", "/webhooks/slotify/meeting",                  "Receive meeting scheduling webhook"],
                  ["POST", "/webhooks/alerts",                           "Universal alert ingestion endpoint"],
                  ["POST", "/webhook/scada",                             "Receive SCADA alert (water utilities)"],
                  ["POST", "/webhook/bms",                               "Receive BMS alert (healthcare facilities)"],
                  ["GET",  "/agents/list",                               "List all registered agents"],
                  ["GET",  "/meetings/recent",                           "List recent scheduled meetings"],
                  ["GET",  "/alerts/recent",                             "List recent alerts processed"],
                  ["GET",  "/api/v1/incidents/{incident_id}/timeline",   "Get chronological event timeline for incident audit"],
                  ["POST", "/incidents/{incident_id}/close",             "Close incident with resolution and PDF export"],
                ].map(([method, path, desc], i) => (
                  <motion.tr
                    key={path}
                    className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    transition={{ delay: i * 0.04 }}
                  >
                    <td className="py-3 px-4">
                      <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded font-mono ${
                        method === "GET"
                          ? "bg-sky-100 text-sky-700"
                          : "bg-emerald-100 text-emerald-700"
                      }`}>
                        {method}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono text-[13px] text-slate-700">{path}</td>
                    <td className="py-3 px-4 text-muted-foreground">{desc}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10. Compliance Coverage */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1] mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Compliance Coverage
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              className="bg-sky-50 border border-sky-200 rounded-xl p-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <h3 className="text-[14px] font-bold text-slate-900 mb-4">Water Utilities</h3>
              <ul className="space-y-3">
                {[
                  { label: "EPA SDWA (40 CFR 141)", desc: "Auto-generated Tier 2 public notification PDF" },
                  { label: "State Drinking Water Program", desc: "State drinking water program notifications" },
                  { label: "County Health Department", desc: "County Health Department notification tracking" },
                ].map(({ label, desc }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                    <div>
                      <p className="text-[13px] font-semibold text-slate-800">{label}</p>
                      <p className="text-[12px] text-slate-500 leading-snug">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-purple-50 border border-purple-200 rounded-xl p-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: 0.08 }}
            >
              <h3 className="text-[14px] font-bold text-slate-900 mb-4">Healthcare</h3>
              <ul className="space-y-3">
                {[
                  { label: "Joint Commission EC.02.05", desc: "Utility Systems Management" },
                  { label: "Joint Commission EC.02.06", desc: "Medical Equipment Management" },
                  { label: "CMS Conditions of Participation (QSO-17-30)", desc: "CMS Conditions of Participation" },
                  { label: "Infection Control Protocols", desc: "Infection Control environmental event protocols" },
                ].map(({ label, desc }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                    <div>
                      <p className="text-[13px] font-semibold text-slate-800">{label}</p>
                      <p className="text-[12px] text-slate-500 leading-snug">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 11. Core Components Detail */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="mb-10">
            <motion.p variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-600 mb-3">
              Components
            </motion.p>
            <motion.h2
              className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1]"
              variants={fadeUp}
            >
              Core Components
            </motion.h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Integration Hub */}
            <motion.div variants={fadeUp}>
              <div className="bg-[#F4F6F9] border border-slate-200/60 rounded-[2rem] p-1.5">
                <div className="bg-white rounded-[calc(2rem_-_0.375rem)] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                      <svg className="text-sky-600" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[16px] font-bold text-slate-900 mb-2">Universal Integration Hub</h3>
                      <p className="text-[14px] text-slate-600 leading-relaxed mb-5">
                        Platform-agnostic orchestration connecting any sensor, API, or external system via standard webhooks. No vendor lock-in, no proprietary protocols.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">Built Integrations</p>
                          <ul className="space-y-1.5">
                            {["FastAPI 0.115+ / Uvicorn", "SQLAlchemy ORM with Alembic migrations", "Pinecone vector store", "Twilio SMS / SendGrid Email", "Slack SDK / Microsoft Teams", "PagerDuty incident management", "Google Calendar / Microsoft Graph API", "ReportLab PDF generation", "Prometheus + Grafana monitoring", "Docker + Terraform (AWS)", "SCADA systems via HTTP webhooks"].map((item) => (
                              <li key={item} className="flex items-start gap-2 text-[13px] text-slate-600">
                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">Planned Additions</p>
                          <ul className="space-y-1.5">
                            {["AWS IoT Core", "Azure IoT Hub", "Building Management Systems", "Weather APIs", "Satellite data"].map((item) => (
                              <li key={item} className="flex items-start gap-2 text-[13px] text-slate-500">
                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Agent Layer */}
            <motion.div variants={fadeUp}>
              <div className="bg-slate-950 rounded-[2rem] p-1.5">
                <div className="bg-slate-900 rounded-[calc(2rem_-_0.375rem)] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <svg className="text-emerald-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[16px] font-bold text-white mb-2">Coordination Agent Layer</h3>
                      <p className="text-[14px] text-slate-400 leading-relaxed mb-5">
                        17 coordination agents, each owning one discrete job. Modular architecture means individual agents can be updated without affecting the rest of the system.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2">Intelligence & Coordination</p>
                          <ul className="space-y-1.5">
                            {["Pattern recognition & early warning", "Multi-factor reasoning & root cause analysis", "Impact assessment", "Stakeholder identification", "Emergency meeting coordination"].map((item) => (
                              <li key={item} className="flex items-start gap-2 text-[13px] text-slate-400">
                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400/60 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2">Compliance & Documentation</p>
                          <ul className="space-y-1.5">
                            {["Compliance automation & regulatory reporting", "Accreditation documentation", "Hospital operations coordination", "Infection control response", "Public communication drafting"].map((item) => (
                              <li key={item} className="flex items-start gap-2 text-[13px] text-slate-400">
                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400/60 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Scheduling Layer */}
            <motion.div variants={fadeUp}>
              <div className="bg-[#F4F6F9] border border-slate-200/60 rounded-[2rem] p-1.5">
                <div className="bg-white rounded-[calc(2rem_-_0.375rem)] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                      <svg className="text-amber-600" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[16px] font-bold text-slate-900 mb-2">Scheduling Layer</h3>
                      <p className="text-[14px] text-slate-600 leading-relaxed mb-5">
                        Autonomous meeting coordination. Selects the right stakeholders and books emergency meetings across multiple calendar systems with conflict detection and override protocols.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">Calendar Integration</p>
                          <ul className="space-y-1.5">
                            {["Google Calendar", "Microsoft 365", "Custom calendar systems"].map((item) => (
                              <li key={item} className="flex items-start gap-2 text-[13px] text-slate-600">
                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">Capabilities</p>
                          <ul className="space-y-1.5">
                            {["Multi-calendar conflict detection", "Emergency override protocols", "Automatic authority selection"].map((item) => (
                              <li key={item} className="flex items-start gap-2 text-[13px] text-slate-600">
                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-slate-950 border-t border-white/[0.04]">
        <motion.div
          className="container mx-auto px-4 md:px-6 text-center"
          style={{ maxWidth: "1200px" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400/80 mb-4">Pilot Program</p>
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4">
            Interested in the Technical Details?
          </h2>
          <p className="text-[15px] text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
            Get access to our full technical specifications and integration documentation as a founding pilot partner.
          </p>
          <Link href="/contact">
            <a className="group inline-flex items-center gap-2.5 rounded-full bg-sky-500 hover:bg-sky-400 px-7 py-3.5 text-[13px] font-bold text-white transition-[background-color] duration-200 active:scale-[0.97] min-h-[44px]">
              Apply for Founding Partnership
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-px">
                <ArrowRight size={11} />
              </span>
            </a>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
