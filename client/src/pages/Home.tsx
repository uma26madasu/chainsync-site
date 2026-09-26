import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Clock, ShieldCheck, ClipboardList, Layers, Bot, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import AnimatedHeroFlow from "@/components/AnimatedHeroFlow";
import ArchitectureAnimation from "@/components/ArchitectureAnimation";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"water" | "healthcare">("water");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-6"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 border border-sky-100 px-3 py-1 rounded-full text-sm font-medium">
                Founding Pilot Program
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-[64px] font-bold text-slate-900 leading-tight tracking-tight">
                Your teams are ready. Your coordination isn't.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-slate-500 leading-relaxed max-w-xl">
                When an incident is detected, your response structure has to form in minutes. ChainSync builds it automatically: right people, clear ownership, documented record.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-1">
                <Link href="/contact">
                  <Button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 h-auto text-base font-semibold rounded-lg">
                    Apply for Founding Partnership
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 h-auto text-base font-semibold rounded-lg">
                    View How It Works
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — Animated Flow Diagram */}
            <div className="hidden lg:block">
              <AnimatedHeroFlow />
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Strip — separate from hero */}
      <section className="py-10 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp} className="flex items-start gap-4 py-6 sm:py-0 sm:pr-10">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center mt-0.5">
                <Clock className="text-primary" size={16} />
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm mb-0.5">Minutes, Not Hours</p>
                <p className="text-xs text-slate-500 leading-relaxed">From detection to a structured response with the right people assigned, automatically.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-start gap-4 py-6 sm:py-0 sm:px-10">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center mt-0.5">
                <ShieldCheck className="text-secondary" size={16} />
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm mb-0.5">No Rip-and-Replace</p>
                <p className="text-xs text-slate-500 leading-relaxed">Connects to your existing SCADA, BMS, or monitoring systems via standard HTTP.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-start gap-4 py-6 sm:py-0 sm:pl-10">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center mt-0.5">
                <ClipboardList className="text-primary" size={16} />
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm mb-0.5">Compliance Built In</p>
                <p className="text-xs text-slate-500 leading-relaxed">Every action is logged. Audit-ready documentation generated automatically.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            className="text-[32px] md:text-[40px] font-bold text-slate-900 mb-5 tracking-tight"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Detection works. Coordination doesn't.
          </motion.h2>

          <motion.p
            className="text-lg text-slate-500 mb-10 leading-relaxed max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Water utilities and hospitals share a coordination problem: detection works, response doesn't. When an incident is flagged, the actual bottleneck isn't the sensor data. It's the 4-6 hours of phone calls, emails, and manual handoffs required to get the right people in the same room with a shared understanding of what's happening. By the time coordination finishes, the critical response window has often closed.
          </motion.p>

          <motion.div
            className="bg-white border border-slate-200 border-l-4 border-l-primary rounded-lg p-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="text-slate-900 font-bold text-2xl mb-1">4-6 hours</p>
            <p className="text-slate-500 text-sm">
              Average coordination time for multi-agency environmental and facility incidents. ChainSync reduces that to minutes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7-Stage Pipeline */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <motion.h2
              className="text-[32px] md:text-[40px] font-bold text-slate-900 tracking-tight max-w-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              From alert to coordinated response
            </motion.h2>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
              <Link href="/how-it-works">
                <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 px-5 py-2 h-auto text-sm rounded-lg gap-2 whitespace-nowrap">
                  Full walkthrough <ArrowRight size={13} />
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 max-w-4xl"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {[
              {
                num: 1,
                label: "Detection",
                desc: "Universal Webhook receives events from any monitoring system, SCADA, or BMS.",
              },
              {
                num: 2,
                label: "Analysis",
                desc: "AI coordination agents classify severity, identify impact, and determine response scope.",
              },
              {
                num: 3,
                label: "Notification",
                desc: "Right stakeholders identified and notified simultaneously. No manual phone trees.",
              },
              {
                num: 4,
                label: "Coordination",
                desc: "Scheduling layer books the response meeting with conflict detection and emergency override.",
              },
              {
                num: 5,
                label: "State Tracking",
                desc: "Incident state maintained across all agents and participants throughout the response.",
              },
              {
                num: 6,
                label: "Documentation",
                desc: "Audit-ready compliance record generated automatically as the incident progresses.",
              },
              {
                num: 7,
                label: "Closure",
                desc: "Incident closed with complete documented record ready for regulatory review.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex gap-4 py-5 border-b border-slate-100 last:border-0"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center mt-0.5">
                  <span className="text-sky-600 font-bold text-sm">{s.num}</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">{s.label}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Illustrative Incident Scenario */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div
              className="flex items-center gap-3 mb-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                Example workflow
              </span>
            </motion.div>

            <motion.h2
              className="text-[32px] md:text-[40px] font-bold text-slate-900 tracking-tight mb-2"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              Illustrative scenario
            </motion.h2>
            <motion.p
              className="text-slate-500 text-sm mb-10 max-w-prose"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              This is a representative example to show how ChainSync handles an incident end-to-end. Not a live deployment or real customer data.
            </motion.p>

            <motion.div
              className="bg-white border border-slate-200 rounded-xl overflow-hidden"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {/* Trigger event */}
              <div className="bg-sky-50 border-b border-sky-100 px-6 py-4">
                <p className="text-xs font-semibold text-sky-600 uppercase tracking-widest mb-1">Trigger event</p>
                <p className="font-semibold text-slate-900">Water Quality Alert Detected</p>
                <p className="text-sm text-slate-500 mt-1">Alert received from SCADA monitoring system via Universal Webhook</p>
              </div>

              {/* Steps */}
              <div className="divide-y divide-slate-100">
                {[
                  {
                    arrow: true,
                    label: "Event ingested",
                    desc: "ChainSync receives the webhook payload and begins processing",
                  },
                  {
                    arrow: true,
                    label: "Severity classified",
                    desc: "Analysis agents evaluate the event and determine response scope",
                  },
                  {
                    arrow: true,
                    label: "Response teams identified",
                    desc: "Required stakeholders determined: Operations, Regulatory, Executive",
                  },
                  {
                    arrow: true,
                    label: "Coordination initiated",
                    desc: "Response meeting scheduled automatically with all required participants",
                  },
                  {
                    arrow: true,
                    label: "Incident state tracked",
                    desc: "All agents and participants share a consistent view of the incident",
                  },
                  {
                    arrow: true,
                    label: "Documentation prepared in parallel",
                    desc: "Compliance record built continuously as the incident progresses",
                  },
                  {
                    arrow: false,
                    label: "Incident closed",
                    desc: "Complete audit record available for regulatory review",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 px-6 py-4">
                    <div className="shrink-0 w-5 flex flex-col items-center pt-1">
                      <span className="text-slate-300 font-bold text-lg leading-none">{step.arrow ? "↓" : "✓"}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{step.label}</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Components */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Left — Integration Layer (wider) */}
            <motion.div variants={fadeUp} className="lg:col-span-3 bg-white border border-slate-200 rounded-xl p-8">
              <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 mb-2 tracking-tight">
                Two layers, one coordinated response
              </h2>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Each layer does one job. Together they take an incident from detection to a documented, owned response structure.
              </p>
              <div className="border-t border-slate-100 pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
                    <Layers className="text-primary" size={18} />
                  </div>
                  <h3 className="font-semibold text-slate-900">Integration Layer</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Built on FastAPI, swappable with MuleSoft, Workato, Boomi, or any iPaaS. Connects to your existing SCADA and monitoring systems via standard HTTP. No rip-and-replace.
                </p>
              </div>
            </motion.div>

            {/* Right — Coordination Engine (narrower) */}
            <motion.div variants={fadeUp} className="lg:col-span-2 bg-white border border-emerald-100 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                  <Bot className="text-secondary" size={18} />
                </div>
                <h3 className="font-semibold text-slate-900">Coordination Engine</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                17 Python agents, each owning one job. Plus a scheduling layer that books the right people without manual intervention.
              </p>
              <ul className="space-y-2 text-sm">
                {["Detection", "Severity analysis", "Stakeholder notification", "Calendar coordination", "Compliance documentation"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Verticals — Tabbed */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-[32px] md:text-[40px] font-bold text-slate-900 mb-2 tracking-tight"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Built for regulated environments
          </motion.h2>
          <motion.p
            className="text-slate-500 mb-8 max-w-xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Same coordination infrastructure. Domain-specific agents and integrations for each vertical.
          </motion.p>

          {/* Tab Buttons */}
          <motion.div
            className="flex mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="inline-flex bg-slate-100 rounded-lg p-1 gap-1">
              <button
                onClick={() => setActiveTab("water")}
                className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                  activeTab === "water"
                    ? "bg-white text-primary shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Water Utilities
              </button>
              <button
                onClick={() => setActiveTab("healthcare")}
                className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                  activeTab === "healthcare"
                    ? "bg-white text-primary shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Healthcare
              </button>
            </div>
          </motion.div>

          {/* Tab Content */}
          <div className="max-w-3xl">
            {activeTab === "water" && (
              <motion.div
                key="water"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-slate-200 rounded-xl p-8"
              >
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Water &amp; Wastewater Utilities</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  Environmental incidents don't wait for phone tag. ChainSync connects directly to your SCADA systems, triggers the response structure, and gets the right team assembled before your first manual call would even be answered.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "SCADA + BMS integration", desc: "Standard HTTP webhooks. No proprietary protocols." },
                    { label: "EPA notification workflows", desc: "Regulatory notifications triggered automatically." },
                    { label: "Multi-agency coordination", desc: "Right stakeholders assigned and notified simultaneously." },
                  ].map((item) => (
                    <div key={item.label} className="bg-sky-50 border border-sky-100 rounded-lg p-4">
                      <p className="font-semibold text-slate-900 text-sm mb-1">{item.label}</p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "healthcare" && (
              <motion.div
                key="healthcare"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-slate-200 rounded-xl p-8"
              >
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Hospital &amp; Healthcare Facilities</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  Facility emergencies (HVAC failures, hazmat incidents, power events) require cross-departmental response on short notice. ChainSync is designed to connect to building management systems and trigger coordinated response automatically.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "BMS integration", desc: "Designed to connect to building management systems via standard HTTP." },
                    { label: "Facilities + Clinical + Admin", desc: "Cross-department coordination without manual handoffs." },
                    { label: "Audit trails designed for HIPAA environments", desc: "Every action logged for compliance documentation." },
                  ].map((item) => (
                    <div key={item.label} className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                      <p className="font-semibold text-slate-900 text-sm mb-1">{item.label}</p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Architecture Showcase */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-8">
            <motion.h2
              className="text-[32px] md:text-[40px] font-bold text-slate-900 tracking-tight"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              Technical Architecture
            </motion.h2>
            <motion.p
              className="text-slate-500 leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              Three independently maintainable layers connected through standard HTTP. Built for reliability in regulated environments.
            </motion.p>
          </div>

          <div className="max-w-3xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mb-6"
            >
              <ArchitectureAnimation />
            </motion.div>

            <motion.div
              className="mt-6 bg-white border border-sky-100 rounded-xl p-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Platform-Agnostic by Design</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                ChainSync's integration layer is decoupled from any single platform. FastAPI is the current implementation, but any platform that supports HTTP POST (MuleSoft, Workato, Boomi, Azure Logic Apps, or a customer's existing integration stack) can connect through the Universal Webhook Endpoint without changes to the agent or scheduling layers.
              </p>
            </motion.div>

            <div className="text-center mt-8">
              <Link href="/technology">
                <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 px-6 py-2.5 h-auto text-sm rounded-lg gap-2">
                  View Full Technical Details <ArrowRight size={14} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo / Scenario Walkthrough */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <div>
                <h2 className="text-[32px] md:text-[40px] font-bold text-slate-900 mb-4 tracking-tight">
                  Scenario walkthrough available
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed mb-6">
                  We walk through a water quality or facility emergency end-to-end: from the sensor alert to a coordinated response meeting with the right people assigned and an audit-ready record generated. No live system access needed.
                </p>
                <Link href="/walkthrough">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 h-auto text-sm font-semibold rounded-lg gap-2">
                    View Scenario Walkthrough <ArrowRight size={14} />
                  </Button>
                </Link>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">Available to</p>
                <p className="text-slate-700 font-medium leading-relaxed">Founding pilot partners</p>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">A step-by-step walkthrough of a real incident scenario, from detection through documented resolution.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-4xl"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-[28px] font-bold text-slate-900 mb-4 tracking-tight">
                Built by someone who's watched coordination fail
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                <span className="font-semibold text-slate-900">Uma Madasu</span> spent years as a MuleSoft Integration Engineer connecting enterprise systems across regulated industries. He built ChainSync after repeatedly watching coordination break down in high-pressure environments: not because the data wasn't there, but because the structure to act on it wasn't.
              </p>
              <a
                href="https://www.linkedin.com/company/getchainsync/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm"
              >
                Connect on LinkedIn <ArrowRight size={14} />
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-4 pt-1">
              <div className="border-l-2 border-slate-200 pl-4">
                <p className="text-sm font-semibold text-slate-900">MuleSoft Integration Engineer</p>
                <p className="text-xs text-slate-500 mt-0.5">Enterprise systems integration across regulated industries</p>
              </div>
              <div className="border-l-2 border-slate-200 pl-4">
                <p className="text-sm font-semibold text-slate-900">MuleSoft Developer Level 1 Certified</p>
                <p className="text-xs text-slate-500 mt-0.5">Dual Master's in MIS and Cybersecurity</p>
              </div>
              <div className="border-l-2 border-slate-200 pl-4">
                <p className="text-sm font-semibold text-slate-900">Based in Atlanta, GA</p>
                <p className="text-xs text-slate-500 mt-0.5">Working directly with founding pilot partners</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pilot Program CTA */}
      <section id="pilot" className="py-16 md:py-20 border-t border-slate-200 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Left — text */}
            <motion.div variants={fadeUp}>
              <h2 className="text-[32px] md:text-[40px] font-bold text-slate-900 mb-4 tracking-tight">
                Three founding pilot partnerships open now.
              </h2>
              <p className="text-slate-500 mb-6 leading-relaxed">
                We're accepting three organizations to validate ChainSync in real incident environments: one water utility, one healthcare facility, one open slot. No upfront costs. No long-term commitment.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Your workflows shape the product direction",
                  "Direct integration support from the founding team",
                  "Preferential rates at public launch",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <Link href="/contact">
                  <Button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 h-auto text-base font-semibold rounded-lg">
                    Apply for Founding Partnership
                  </Button>
                </Link>
              </div>
              <p className="text-slate-400 text-xs mt-3">
                Not in water or healthcare?{" "}
                <Link href="/contact">
                  <a className="text-primary hover:underline transition-colors">Join the waitlist</a>
                </Link>
              </p>
            </motion.div>

            {/* Right — stats block */}
            <motion.div variants={fadeUp} className="bg-slate-50 border border-slate-200 rounded-xl p-8">
              <div className="space-y-6">
                <div className="border-b border-slate-200 pb-6">
                  <p className="text-4xl font-bold text-slate-900 mb-1">4-6 hrs</p>
                  <p className="text-sm text-slate-500">Average coordination time without ChainSync</p>
                </div>
                <div className="border-b border-slate-200 pb-6">
                  <p className="text-4xl font-bold text-slate-900 mb-1">17</p>
                  <p className="text-sm text-slate-500">Python coordination agents, each owning one job</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-slate-900 mb-1">3</p>
                  <p className="text-sm text-slate-500">Founding partnership slots available</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
