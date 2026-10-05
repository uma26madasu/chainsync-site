import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Clock, ShieldCheck, Layers, Bot, ArrowRight, Lock, ArrowDown } from "lucide-react";
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

      {/* Hero Section — clean white, no blobs */}
      <section className="relative min-h-[88dvh] flex items-center py-24 md:py-36 overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-7"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 border border-slate-200 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium">
                Founding Pilot Program
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold text-slate-900 leading-[1.05] tracking-tight"
              >
                Response team assembled. Compliance record started. Before your first manual call is answered.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-slate-500 leading-relaxed max-w-lg">
                ChainSync coordinates the people, the documentation, and the scheduling automatically the moment an incident is detected. Your team focuses on response, not the logistics of forming one.
              </motion.p>

              {/* Pill CTAs */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-1">
                <Link href="/contact">
                  <a className="group inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-slate-700 px-6 py-3 text-white text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
                    Apply for Founding Partnership
                    <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      <ArrowRight size={12} />
                    </span>
                  </a>
                </Link>
                <Link href="/how-it-works">
                  <a className="group inline-flex items-center gap-2 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 px-6 py-3 text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
                    View How It Works
                    <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      <ArrowRight size={12} />
                    </span>
                  </a>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — Animated Flow Diagram */}
            <div className="hidden md:block">
              <AnimatedHeroFlow />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-300"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* Key Numbers Strip — editorial, clean */}
      <section className="border-y border-slate-100 bg-white">
        <motion.div
          className="container mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {[
              { value: "17", label: "coordination agents,\neach owning one job" },
              { value: "4–6 hrs", label: "average coordination time,\nreduced to minutes" },
              { value: "3", label: "founding pilot slots\ncurrently open", accent: true },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="px-8 py-12 md:px-12">
                <p className={`font-mono text-5xl md:text-6xl font-bold tracking-tight leading-none mb-4 ${stat.accent ? "text-sky-500" : "text-slate-900"}`}>
                  {stat.value}
                </p>
                <p className="text-slate-400 text-sm leading-snug whitespace-pre-line">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Three buyer-outcome blocks — editorial numbered layout */}
      <section className="py-20 md:py-28 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.p
            className="text-[10px] uppercase tracking-[0.2em] font-medium text-slate-500 mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Why ChainSync
          </motion.p>

          <motion.div
            className="space-y-0 divide-y divide-slate-800"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Block 1: Gain */}
            <motion.div variants={fadeUp} className="grid grid-cols-[3rem_1fr] md:grid-cols-[6rem_1fr_auto] gap-6 md:gap-12 py-12">
              <div className="font-mono text-slate-700 text-sm font-bold pt-1 select-none">01</div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                    <Clock className="text-sky-400" size={15} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">4–6 hours of coordination time, gone</h3>
                </div>
                <p className="text-slate-400 leading-relaxed max-w-2xl">
                  Detection triggers the full response structure automatically: stakeholders identified, notifications sent simultaneously, response meeting scheduled. No one lifts a phone.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["No missed escalations", "Compliance record starts at detection", "Parallel notification"].map((tag) => (
                    <span key={tag} className="text-xs text-slate-500 bg-slate-900 border border-slate-800 rounded-full px-3 py-1">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Block 2: Save */}
            <motion.div variants={fadeUp} className="grid grid-cols-[3rem_1fr] md:grid-cols-[6rem_1fr_auto] gap-6 md:gap-12 py-12">
              <div className="font-mono text-slate-700 text-sm font-bold pt-1 select-none">02</div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <Layers className="text-emerald-400" size={15} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Five vendor contracts become one</h3>
                </div>
                <p className="text-slate-400 leading-relaxed max-w-2xl">
                  Notification tools, scheduling platforms, documentation systems, escalation trackers, compliance logs: each is a separate vendor, a separate contract, separate per-event billing. ChainSync consolidates all of it. One platform from alert receipt to closed incident record.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["No per-event notification fees", "No separate documentation tool", "No manual calendar coordination"].map((tag) => (
                    <span key={tag} className="text-xs text-slate-500 bg-slate-900 border border-slate-800 rounded-full px-3 py-1">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Block 3: Risk */}
            <motion.div variants={fadeUp} className="grid grid-cols-[3rem_1fr] md:grid-cols-[6rem_1fr_auto] gap-6 md:gap-12 py-12">
              <div className="font-mono text-slate-700 text-sm font-bold pt-1 select-none">03</div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/25 flex items-center justify-center shrink-0">
                    <Lock className="text-sky-300" size={15} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Incident data stays in your environment</h3>
                </div>
                <p className="text-slate-400 leading-relaxed max-w-2xl">
                  For healthcare facilities, every vendor in your incident workflow is a potential HIPAA liability. Notification platforms, scheduling tools, and documentation systems each receive and store incident records, including potential PHI. With ChainSync, that data never leaves your infrastructure. No third-party middleware touches sensitive records. Your audit trail is yours.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["No vendor custody of your records", "PHI and PII stay in your infrastructure", "Joint Commission / CMS / HIPAA built in"].map((tag) => (
                    <span key={tag} className="text-xs text-sky-300/70 bg-sky-500/[0.07] border border-sky-500/20 rounded-full px-3 py-1">{tag}</span>
                  ))}
                </div>
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
            Water utilities and hospitals share the same gap: sensors and monitoring systems work well. The bottleneck is what comes after. When an incident is flagged, getting the right people in the same room with a shared understanding of what's happening takes 4 to 6 hours of phone calls, emails, and manual handoffs. By the time coordination finishes, the critical response window has often closed. The compliance documentation is still unwritten.
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

      {/* 7-Stage Pipeline — dark */}
      <section className="py-16 md:py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <motion.h2
              className="text-[32px] md:text-[40px] font-bold text-slate-100 tracking-tight max-w-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              From alert to coordinated response
            </motion.h2>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
              <Link href="/how-it-works">
                <a className="group inline-flex items-center gap-2 rounded-full border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-slate-100 px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
                  Full walkthrough
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <ArrowRight size={11} />
                  </span>
                </a>
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
                className="flex gap-4 py-5 border-b border-slate-800 last:border-0"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-sky-900/40 border border-sky-600/50 flex items-center justify-center mt-0.5">
                  <span className="text-sky-300 font-bold text-sm">{s.num}</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-100 text-sm mb-1">{s.label}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
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

            <motion.div
              className="mt-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <Link href="/walkthrough">
                <a className="group inline-flex items-center gap-2 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 px-5 py-2.5 text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
                  View full walkthrough
                  <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <ArrowRight size={11} />
                  </span>
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Components */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p variants={fadeUp} className="text-[10px] uppercase tracking-[0.2em] font-medium text-slate-400 mb-3">Platform</motion.p>
            <motion.h2 variants={fadeUp} className="text-[32px] md:text-[40px] font-bold text-slate-900 tracking-tight max-w-lg">
              Two layers, one coordinated response
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Integration Layer */}
            <motion.div variants={fadeUp} className="md:col-span-7 bg-slate-50/80 border border-slate-100 rounded-[2rem] p-1.5">
              <div className="bg-white rounded-[calc(2rem_-_0.375rem)] p-8 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                    <Layers className="text-primary" size={18} />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-lg">Integration Layer</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Built on FastAPI, swappable with MuleSoft, Workato, Boomi, or any iPaaS. Connects to your existing SCADA and monitoring systems via standard HTTP. No rip-and-replace.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  {["SCADA & BMS", "IoT sensors", "Weather APIs", "Custom webhooks"].map((item) => (
                    <div key={item} className="flex items-center gap-2 bg-slate-50 rounded-xl px-3 py-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                      <span className="text-xs text-slate-600 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Coordination Engine */}
            <motion.div variants={fadeUp} className="md:col-span-5 bg-emerald-50/40 border border-emerald-100/60 rounded-[2rem] p-1.5">
              <div className="bg-white rounded-[calc(2rem_-_0.375rem)] p-8 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Bot className="text-secondary" size={18} />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-lg">Coordination Engine</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  17 coordination agents, each owning one job. Plus a scheduling layer that books the right people without manual intervention.
                </p>
                <ul className="space-y-2.5">
                  {["Detection", "Severity analysis", "Stakeholder notification", "Calendar coordination", "Compliance documentation"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
                  A contamination alert or infrastructure failure at 2am doesn't wait for business hours. ChainSync assembles the response structure across Operations, Regulatory, and Executive before your first manual call would even be answered. EPA notification workflows trigger automatically. No deadline missed because someone wasn't reached in time.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "SCADA + BMS integration", desc: "Connects via standard HTTP. No proprietary protocols or rip-and-replace." },
                    { label: "EPA notification workflows", desc: "Regulatory notifications triggered automatically at the moment of detection." },
                    { label: "Multi-agency coordination", desc: "All required stakeholders notified simultaneously, not one call at a time." },
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
                  An HVAC failure, sterile environment breach, or equipment failure requires Facilities, Clinical, and Administration in the same room fast, with a Joint Commission-ready documentation trail already started. ChainSync coordinates all of it automatically. Incident data never leaves your environment. No third-party vendor touches PHI.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "BMS integration", desc: "Connects to building management systems via standard HTTP. No proprietary protocols." },
                    { label: "Cross-department coordination", desc: "Facilities, Clinical, and Admin notified and assembled without manual handoffs." },
                    { label: "In-environment audit trail", desc: "Joint Commission, CMS, and HIPAA documentation built into the response. Incident data stays in your infrastructure." },
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

            <div className="mt-8">
              <Link href="/technology">
                <a className="group inline-flex items-center gap-2 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 px-5 py-2.5 text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
                  View Full Technical Details
                  <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <ArrowRight size={11} />
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col md:flex-row md:items-center gap-8 max-w-3xl"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp} className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0 text-white font-bold text-xl">
              U
            </motion.div>
            <motion.div variants={fadeUp}>
              <p className="text-slate-900 font-semibold text-sm mb-1">Uma Madasu, Founder</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Built ChainSync after repeatedly watching coordination break down in high-pressure environments: not because the data wasn't there, but because the structure to act on it wasn't.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="shrink-0">
              <a
                href="https://www.linkedin.com/company/getchainsync/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 px-5 py-2.5 text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] whitespace-nowrap"
              >
                Connect on LinkedIn
                <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <ArrowRight size={11} />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pilot Program CTA */}
      <section id="pilot" className="py-24 md:py-32 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Left — text */}
            <motion.div variants={fadeUp}>
              <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-sky-400 mb-4">Pilot Program</p>
              <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-5 tracking-tight">
                Three founding pilot partnerships open now.
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Three organizations will validate ChainSync in their real incident environments: one water utility, one healthcare facility, one open slot. No upfront cost. No long-term commitment. You keep the audit trail, the workflow data, and the coordination time you recover.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "See the 4–6 hour coordination cycle drop to minutes in your environment",
                  "Direct integration support from the founding team throughout",
                  "Founding pricing locked in at public launch",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="mt-1.5 w-5 h-5 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <a className="group inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-400 px-6 py-3 text-white text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
                  Apply for Founding Partnership
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <ArrowRight size={12} />
                  </span>
                </a>
              </Link>
              <p className="text-slate-600 text-xs mt-4">
                Not in water or healthcare?{" "}
                <Link href="/contact">
                  <a className="text-sky-400 hover:underline transition-colors">Join the waitlist</a>
                </Link>
              </p>
            </motion.div>

            {/* Right — editorial stats */}
            <motion.div variants={fadeUp} className="divide-y divide-slate-800">
              <div className="pb-8">
                <p className="font-mono text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">4–6 hrs</p>
                <p className="text-sm text-slate-400">Average coordination time without ChainSync</p>
              </div>
              <div className="py-8">
                <p className="font-mono text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">17</p>
                <p className="text-sm text-slate-400">Coordination agents, each owning one job</p>
              </div>
              <div className="pt-8">
                <p className="font-mono text-5xl md:text-6xl font-bold text-sky-400 mb-3 tracking-tight">3</p>
                <p className="text-sm text-slate-400">Founding partnership slots available</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
