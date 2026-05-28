import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
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
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center"
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
            {["17 Python Agents", "GPT-4 Reasoning", "MuleSoft Integration", "Slotify Scheduler", "Prometheus + Grafana"].map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 1. Tech Stack Overview */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center"
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
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center"
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
            From the first sensor reading to a scheduled emergency response meeting — every step is automated.
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
      <section className="py-12 md:py-20">
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
              className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center"
              variants={fadeUp}
            >
              Not Locked In. Ever.
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto"
              variants={fadeUp}
            >
              ChainSync's Universal Webhook Endpoint accepts HTTP POST from any integration platform. Switch from MuleSoft to Workato, Boomi, or Azure Logic Apps without touching the AI agent layer or Slotify.
            </motion.p>
            <motion.div variants={fadeUp}>
              <SwappableIntegration />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Agent Ecosystem */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            17 Live Agents. More Coming.
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Modular by design: each agent is an independent Python FastAPI service. Improve one without disrupting the rest.
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
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center"
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
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center"
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
            Key operational metrics from the live system.
          </motion.p>
          <PerformanceMetrics />
        </div>
      </section>

      {/* 7. Capability Matrix */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center"
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
            The same core architecture applies across verticals — specialized agents handle domain-specific logic.
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
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
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
                  ["Agent Framework", "Python 3.11 + FastAPI", "Specialized agent execution and HTTP webhook routing"],
                  ["AI Reasoning", "GPT-4 (OpenAI API)", "Context-aware analysis, risk classification, decision support"],
                  ["Integration Layer", "MuleSoft + DataWeave", "Enterprise integration and data transformation (swappable)"],
                  ["Scheduler", "Slotify (React + Express + MongoDB)", "Autonomous emergency meeting coordination"],
                  ["Database", "MongoDB", "Event storage, audit trails, and document records"],
                  ["Event Transport", "FastAPI HTTP Webhooks", "Platform-agnostic event routing between agents"],
                  ["Monitoring", "Prometheus + Grafana", "System health metrics and operational dashboards"],
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
            className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h3 className="text-sm font-semibold text-foreground mb-2">Platform-Agnostic by Design</h3>
            <p className="text-sm text-muted-foreground">
              ChainSync's integration layer is decoupled from any single platform. MuleSoft is the current implementation, but any platform supporting HTTP POST — Workato, Boomi, Azure Logic Apps, or a customer's existing enterprise integration stack — can connect through ChainSync's Universal Webhook Endpoint without changes to the agent layer or Slotify.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              See also:{" "}
              <button
                onClick={() => document.querySelector("[data-section='swappable']")?.scrollIntoView({ behavior: "smooth" })}
                className="text-primary underline hover:no-underline"
              >
                Swappable Integration Layer ↑
              </button>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 9. Core Components Detail */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Core Components
          </motion.h2>

          <motion.div
            className="space-y-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Integration Hub */}
            <motion.div variants={fadeUp}>
              <Card className="p-8 bg-white border border-border">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">↔</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Universal Integration Hub</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Platform-agnostic orchestration connecting any sensor, API, or external system via standard webhooks. No vendor lock-in, no proprietary protocols.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground text-xs mb-2 uppercase tracking-wide">Supported Integrations</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>✓ AWS IoT Core</li>
                          <li>✓ Azure IoT Hub</li>
                          <li>✓ MuleSoft</li>
                          <li>✓ Universal Webhook (HTTP POST from any system)</li>
                          <li>✓ Bosch Climatic BMS</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-xs mb-2 uppercase tracking-wide">Data Sources</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>✓ 22+ flow implementations</li>
                          <li>✓ NASA satellite data</li>
                          <li>✓ Weather APIs</li>
                          <li>✓ Custom sensors</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* AI Agent Layer */}
            <motion.div variants={fadeUp}>
              <Card className="p-8 bg-white border border-border">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-lg">⚡</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-foreground mb-2">AI Agent Layer</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      17 specialized Python agents, each an independent FastAPI service. Modular architecture means we can improve individual agents without disrupting the system.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground text-xs mb-2 uppercase tracking-wide">Core Agents</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>✓ Detection Agent</li>
                          <li>✓ Analysis Agent</li>
                          <li>✓ Reasoning Agent (GPT-4)</li>
                          <li>✓ Coordination Agent</li>
                          <li>✓ Documentation Agent</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-xs mb-2 uppercase tracking-wide">Specialized Suites</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>✓ Water Emergency Suite (5 agents)</li>
                          <li>✓ Healthcare Suite (5 agents)</li>
                          <li>✓ Notification Agent</li>
                          <li>✓ Scheduler Agent</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Slotify */}
            <motion.div variants={fadeUp}>
              <Card className="p-8 bg-white border border-border">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <span className="text-emerald-600 font-bold text-lg">📅</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Slotify Emergency Scheduler</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Autonomous meeting coordination that selects the right stakeholders and books emergency meetings across multiple calendar systems with conflict detection and override protocols.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground text-xs mb-2 uppercase tracking-wide">Calendar Integration</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>✓ Google Calendar</li>
                          <li>✓ Microsoft 365</li>
                          <li>✓ Custom calendar systems</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-xs mb-2 uppercase tracking-wide">Features</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>✓ Multi-calendar conflict detection</li>
                          <li>✓ Emergency override protocols</li>
                          <li>✓ Intelligent authority selection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 10. API Access */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              API Documentation
            </h2>
            <p className="text-muted-foreground mb-8">
              ChainSync provides REST APIs for integration, monitoring, and management. Full documentation available to pilot partners.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="px-6 py-3 h-auto text-base">
                Request API Documentation Access
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-primary text-white">
        <motion.div
          className="container mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in the Technical Details?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get access to our full API documentation and technical specifications as a pilot partner.
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 h-auto text-base font-semibold">
                Request Early Access
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
