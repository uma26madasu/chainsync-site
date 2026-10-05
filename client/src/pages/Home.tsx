import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import AnimatedHeroFlow from "@/components/AnimatedHeroFlow";
import ArchitectureAnimation from "@/components/ArchitectureAnimation";

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"water" | "healthcare">("water");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.6], [0, 40]);

  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <Header />

      {/* ─────────────────────────────────────────────────────── HERO */}
      <section ref={heroRef} className="relative min-h-[92dvh] flex flex-col justify-center overflow-hidden bg-white pt-8 pb-24">
        {/* Noise grain overlay — fixed, GPU-safe */}
        <div
          className="pointer-events-none fixed inset-0 z-[1] opacity-[0.025]"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "160px 160px",
          }}
        />

        <motion.div
          className="container mx-auto px-4 md:px-8 relative z-10"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 lg:gap-20 items-center">

            {/* Left */}
            <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8 max-w-2xl">
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Founding Pilot Program — 3 slots open
                </span>
              </motion.div>

              {/* Headline — three staggered lines */}
              <div className="space-y-1 overflow-hidden">
                {[
                  "Response team assembled.",
                  "Compliance record started.",
                  "Before your first manual call.",
                ].map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: "0%" }}
                    transition={{ duration: 0.75, delay: 0.1 + i * 0.12, ease: EASE }}
                  >
                    <h1
                      className={`font-bold leading-[1.1] tracking-[-0.02em] text-slate-900 ${
                        i === 2
                          ? "text-[clamp(1.5rem,3.2vw,2.6rem)] text-slate-400 font-semibold"
                          : "text-[clamp(1.7rem,3.8vw,3rem)]"
                      }`}
                    >
                      {line}
                    </h1>
                  </motion.div>
                ))}
              </div>

              <motion.p
                variants={fadeUp}
                className="text-[15px] md:text-base text-slate-500 leading-[1.75] max-w-[480px]"
              >
                ChainSync coordinates the people, the documentation, and the scheduling automatically the moment an incident is detected. Your team focuses on response, not the logistics of forming one.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <a className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-slate-900 px-6 py-3.5 text-[13px] font-semibold text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-slate-700 active:scale-[0.97]">
                    Apply for Founding Partnership
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.12] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                      <ArrowRight size={11} />
                    </span>
                  </a>
                </Link>
                <Link href="/how-it-works">
                  <a className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-[13px] font-semibold text-slate-700 shadow-[0_1px_4px_rgba(0,0,0,0.05)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-slate-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] active:scale-[0.97]">
                    How It Works
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                      <ArrowRight size={11} />
                    </span>
                  </a>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — double-bezel animated flow card */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: EASE }}
            >
              <div className="bg-slate-50 border border-slate-200/80 rounded-[2rem] p-1.5 shadow-[0_8px_48px_rgba(0,0,0,0.08),0_1px_0_rgba(255,255,255,0.9)_inset]">
                <div className="bg-white rounded-[calc(2rem_-_0.375rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                  <AnimatedHeroFlow />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Subtle bottom edge fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* ──────────────────────────────────────────── EDITORIAL STATS */}
      <section className="bg-slate-950 overflow-hidden">
        <motion.div
          className="container mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {[
              { value: "17", suffix: "", label: "Coordination agents,\neach owning one job" },
              { value: "4–6", suffix: "hrs", label: "Average coordination time,\nnow measured in minutes" },
              { value: "3", suffix: "", label: "Founding pilot slots\ncurrently open", accent: true },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative px-8 py-14 md:px-12 md:py-16 border-b sm:border-b-0 sm:border-r border-white/[0.06] last:border-r-0"
              >
                <div className="flex items-end gap-2 mb-4">
                  <span
                    className={`font-mono text-[clamp(3.5rem,8vw,6.5rem)] font-bold leading-none tracking-tight tabular-nums ${
                      s.accent ? "text-sky-400" : "text-white"
                    }`}
                  >
                    {s.value}
                  </span>
                  {s.suffix && (
                    <span className="font-mono text-2xl font-bold text-white/30 mb-2">{s.suffix}</span>
                  )}
                </div>
                <p className="text-slate-500 text-sm leading-snug whitespace-pre-line font-medium">{s.label}</p>
                {/* Hover accent line */}
                <span className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ──────────────────────────────────────── PROBLEM — EDITORIAL */}
      <section className="py-24 md:py-36 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-24 items-start max-w-6xl">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="space-y-8"
            >
              <motion.p variants={fadeUp} className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                The problem
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-[-0.025em] leading-[1.08] text-slate-900"
              >
                Detection works.<br />
                Coordination doesn't.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-500 leading-relaxed max-w-xl">
                Water utilities and hospitals share the same gap: sensors and monitoring systems work well. The bottleneck is what comes after. When an incident is flagged, getting the right people in the same room with a shared understanding of what's happening takes 4 to 6 hours of phone calls, emails, and manual handoffs. By the time coordination finishes, the critical response window has often closed. The compliance documentation is still unwritten.
              </motion.p>
            </motion.div>

            {/* Right — hard-edged accent card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="lg:mt-16"
            >
              <div className="bg-slate-950 rounded-[2rem] p-1.5">
                <div className="bg-slate-900 rounded-[calc(2rem_-_0.375rem)] p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
                  <p className="font-mono text-[3.5rem] font-bold text-white leading-none tracking-tight mb-1">4–6</p>
                  <p className="font-mono text-lg font-medium text-slate-500 mb-6 tracking-tight">hours</p>
                  <div className="h-[1px] bg-white/[0.06] mb-6" />
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Average coordination time for multi-agency environmental and facility incidents. ChainSync reduces that to minutes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────── BUYER OUTCOMES — DARK */}
      <section className="py-20 md:py-28 bg-slate-950">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-14"
          >
            <motion.p variants={fadeUp} className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-600 mb-3">Why ChainSync</motion.p>
            <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-white tracking-[-0.02em] leading-tight">
              Three gaps, one platform.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-0"
          >
            {[
              {
                n: "01",
                title: "4–6 hours of coordination time, gone",
                body: "Detection triggers the full response structure automatically: stakeholders identified, notifications sent simultaneously, response meeting scheduled. No one lifts a phone.",
                tags: ["No missed escalations", "Compliance record starts at detection", "Parallel notification"],
                color: "sky",
              },
              {
                n: "02",
                title: "Five vendor contracts become one",
                body: "Notification tools, scheduling platforms, documentation systems, escalation trackers, compliance logs: each is a separate vendor, a separate contract, separate per-event billing. ChainSync consolidates all of it. One platform from alert receipt to closed incident record.",
                tags: ["No per-event notification fees", "No separate documentation tool", "No manual calendar coordination"],
                color: "emerald",
              },
              {
                n: "03",
                title: "Incident data stays in your environment",
                body: "For healthcare facilities, every vendor in your incident workflow is a potential HIPAA liability. Notification platforms, scheduling tools, and documentation systems each receive and store incident records, including potential PHI. With ChainSync, that data never leaves your infrastructure. No third-party middleware touches sensitive records. Your audit trail is yours.",
                tags: ["No vendor custody of your records", "PHI and PII stay in your infrastructure", "Joint Commission / CMS / HIPAA"],
                color: "violet",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group grid grid-cols-[3.5rem_1fr] md:grid-cols-[7rem_1fr] gap-6 md:gap-10 py-10 md:py-12 border-t border-white/[0.06] first:border-t-0 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <div className="font-mono text-[11px] font-semibold text-slate-700 pt-1.5 tracking-widest">{item.n}</div>
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{item.title}</h3>
                  <p className="text-sm md:text-[15px] text-slate-400 leading-relaxed max-w-2xl">{item.body}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[11px] font-medium rounded-full px-3 py-1 border ${
                          item.color === "sky"
                            ? "text-sky-400/80 bg-sky-500/[0.07] border-sky-500/20"
                            : item.color === "emerald"
                            ? "text-emerald-400/80 bg-emerald-500/[0.07] border-emerald-500/20"
                            : "text-violet-400/80 bg-violet-500/[0.07] border-violet-500/20"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────────────────────────────── 7-STAGE PIPELINE — DARK */}
      <section className="py-24 md:py-32 bg-slate-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="space-y-3"
            >
              <motion.p variants={fadeUp} className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                How it works
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-slate-100 tracking-[-0.02em] leading-tight">
                From alert to coordinated response
              </motion.h2>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
              <Link href="/how-it-works">
                <a className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-[13px] font-semibold text-slate-300 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-white/20 hover:bg-white/[0.07] whitespace-nowrap active:scale-[0.97]">
                  Full walkthrough
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                    <ArrowRight size={10} />
                  </span>
                </a>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 max-w-4xl"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {[
              { num: 1, label: "Detection", desc: "Universal Webhook receives events from any monitoring system, SCADA, or BMS." },
              { num: 2, label: "Analysis", desc: "AI coordination agents classify severity, identify impact, and determine response scope." },
              { num: 3, label: "Notification", desc: "Right stakeholders identified and notified simultaneously. No manual phone trees." },
              { num: 4, label: "Coordination", desc: "Scheduling layer books the response meeting with conflict detection and emergency override." },
              { num: 5, label: "State Tracking", desc: "Incident state maintained across all agents and participants throughout the response." },
              { num: 6, label: "Documentation", desc: "Audit-ready compliance record generated automatically as the incident progresses." },
              { num: 7, label: "Closure", desc: "Incident closed with complete documented record ready for regulatory review." },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group flex gap-5 py-6 border-b border-white/[0.05] last:border-0 transition-colors duration-300"
              >
                <div className="shrink-0 w-8 h-8 rounded-full border border-sky-500/30 bg-sky-950/50 flex items-center justify-center mt-0.5 transition-colors duration-300 group-hover:border-sky-400/60 group-hover:bg-sky-900/50">
                  <span className="font-mono text-sky-400/80 font-semibold text-xs group-hover:text-sky-300 transition-colors duration-300">{s.num}</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-200 text-sm mb-1.5">{s.label}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────── ILLUSTRATIVE SCENARIO */}
      <section className="py-24 md:py-32 bg-[#F8F9FB]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="space-y-8">
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 border border-slate-200 bg-white rounded-full px-3 py-1.5">
                  Example workflow
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-slate-900 tracking-[-0.02em]">
                Illustrative scenario
              </motion.h2>
              <motion.p variants={fadeUp} className="text-sm text-slate-500 max-w-prose leading-relaxed">
                This is a representative example to show how ChainSync handles an incident end-to-end. Not a live deployment or real customer data.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mt-10 bg-slate-950 rounded-[2rem] p-1.5 shadow-[0_24px_64px_rgba(0,0,0,0.12)]"
            >
              <div className="bg-slate-900 rounded-[calc(2rem_-_0.375rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
                {/* Trigger */}
                <div className="px-6 py-5 border-b border-white/[0.06] bg-sky-950/40">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-400/70 mb-1.5">Trigger event</p>
                  <p className="font-semibold text-white text-sm">Water Quality Alert Detected</p>
                  <p className="text-xs text-slate-500 mt-1">Alert received from SCADA monitoring system via Universal Webhook</p>
                </div>
                {/* Steps */}
                <div>
                  {[
                    { arrow: true, label: "Event ingested", desc: "ChainSync receives the webhook payload and begins processing" },
                    { arrow: true, label: "Severity classified", desc: "Analysis agents evaluate the event and determine response scope" },
                    { arrow: true, label: "Response teams identified", desc: "Required stakeholders determined: Operations, Regulatory, Executive" },
                    { arrow: true, label: "Coordination initiated", desc: "Response meeting scheduled automatically with all required participants" },
                    { arrow: true, label: "Incident state tracked", desc: "All agents and participants share a consistent view of the incident" },
                    { arrow: true, label: "Documentation prepared in parallel", desc: "Compliance record built continuously as the incident progresses" },
                    { arrow: false, label: "Incident closed", desc: "Complete audit record available for regulatory review" },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4 px-6 py-4 border-b border-white/[0.04] last:border-0">
                      <div className="shrink-0 w-5 pt-0.5">
                        <span className={`text-base leading-none font-bold ${step.arrow ? "text-sky-500/40" : "text-emerald-400"}`}>
                          {step.arrow ? "↓" : "✓"}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-300 text-sm">{step.label}</p>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mt-6">
              <Link href="/walkthrough">
                <a className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-semibold text-slate-700 shadow-[0_1px_4px_rgba(0,0,0,0.05)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)] active:scale-[0.97]">
                  View full walkthrough
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                    <ArrowRight size={10} />
                  </span>
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────── PLATFORM — BENTO */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="mb-14 space-y-4">
            <motion.p variants={fadeUp} className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              Platform
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-slate-900 tracking-[-0.02em] leading-tight max-w-lg">
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
            <motion.div variants={fadeUp} className="md:col-span-7">
              <div className="h-full bg-[#F4F6F9] border border-slate-200/60 rounded-[2rem] p-1.5">
                <div className="h-full bg-white rounded-[calc(2rem_-_0.375rem)] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_3px_rgba(0,0,0,0.03)]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100/80 flex items-center justify-center shrink-0">
                      <svg className="text-sky-600" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">Integration Layer</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-7">
                    Built on FastAPI, swappable with MuleSoft, Workato, Boomi, or any iPaaS. Connects to your existing SCADA and monitoring systems via standard HTTP. No rip-and-replace.
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {["SCADA & BMS", "IoT sensors", "Weather APIs", "Custom webhooks"].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 bg-slate-50 border border-slate-100 rounded-xl px-3.5 py-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                        <span className="text-xs text-slate-600 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Coordination Engine */}
            <motion.div variants={fadeUp} className="md:col-span-5">
              <div className="h-full bg-slate-950 rounded-[2rem] p-1.5">
                <div className="h-full bg-slate-900 rounded-[calc(2rem_-_0.375rem)] p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <svg className="text-emerald-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-white text-base">Coordination Engine</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-7">
                    17 coordination agents, each owning one job. Plus a scheduling layer that books the right people without manual intervention.
                  </p>
                  <ul className="space-y-3">
                    {["Detection", "Severity analysis", "Stakeholder notification", "Calendar coordination", "Compliance documentation"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-950/50">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────── VERTICALS — TABBED */}
      <section className="py-24 md:py-32 bg-[#F8F9FB]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="mb-10 space-y-4">
            <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-slate-900 tracking-[-0.02em]">
              Built for regulated environments
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-xl text-[15px]">
              Same coordination infrastructure. Domain-specific agents and integrations for each vertical.
            </motion.p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mb-8">
            <div className="inline-flex bg-white border border-slate-200 rounded-full p-1 gap-1 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
              {(["water", "healthcare"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    activeTab === tab
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {tab === "water" ? "Water Utilities" : "Healthcare"}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="max-w-3xl">
            {activeTab === "water" && (
              <motion.div key="water" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, ease: EASE }}>
                <div className="bg-white border border-slate-200/80 rounded-[2rem] p-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                  <div className="bg-white rounded-[calc(2rem_-_0.375rem)] p-8 md:p-10">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Water &amp; Wastewater Utilities</h3>
                    <p className="text-slate-500 mb-8 leading-relaxed text-[15px]">
                      A contamination alert or infrastructure failure at 2am doesn't wait for business hours. ChainSync assembles the response structure across Operations, Regulatory, and Executive before your first manual call would even be answered. EPA notification workflows trigger automatically. No deadline missed because someone wasn't reached in time.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { label: "SCADA + BMS integration", desc: "Connects via standard HTTP. No proprietary protocols or rip-and-replace." },
                        { label: "EPA notification workflows", desc: "Regulatory notifications triggered automatically at the moment of detection." },
                        { label: "Multi-agency coordination", desc: "All required stakeholders notified simultaneously, not one call at a time." },
                      ].map((item) => (
                        <div key={item.label} className="bg-sky-50 border border-sky-100/80 rounded-2xl p-4">
                          <p className="font-bold text-slate-900 text-[13px] mb-1.5">{item.label}</p>
                          <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            {activeTab === "healthcare" && (
              <motion.div key="healthcare" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, ease: EASE }}>
                <div className="bg-white border border-slate-200/80 rounded-[2rem] p-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                  <div className="bg-white rounded-[calc(2rem_-_0.375rem)] p-8 md:p-10">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Hospital &amp; Healthcare Facilities</h3>
                    <p className="text-slate-500 mb-8 leading-relaxed text-[15px]">
                      An HVAC failure, sterile environment breach, or equipment failure requires Facilities, Clinical, and Administration in the same room fast, with a Joint Commission-ready documentation trail already started. ChainSync coordinates all of it automatically. Incident data never leaves your environment. No third-party vendor touches PHI.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { label: "BMS integration", desc: "Connects to building management systems via standard HTTP. No proprietary protocols." },
                        { label: "Cross-department coordination", desc: "Facilities, Clinical, and Admin notified and assembled without manual handoffs." },
                        { label: "In-environment audit trail", desc: "Joint Commission, CMS, and HIPAA documentation built into the response. Incident data stays in your infrastructure." },
                      ].map((item) => (
                        <div key={item.label} className="bg-emerald-50 border border-emerald-100/80 rounded-2xl p-4">
                          <p className="font-bold text-slate-900 text-[13px] mb-1.5">{item.label}</p>
                          <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────── ARCHITECTURE */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-20 items-start mb-12">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-slate-900 tracking-[-0.02em]">
              Technical Architecture
            </motion.h2>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="text-slate-500 leading-relaxed text-[15px] lg:mt-3">
              Three independently maintainable layers connected through standard HTTP. Built for reliability in regulated environments.
            </motion.p>
          </div>

          <div className="max-w-3xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mb-6">
              <ArchitectureAnimation />
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mt-8 bg-sky-50 border border-sky-100/80 rounded-2xl p-6">
              <h4 className="text-sm font-bold text-slate-900 mb-2">Platform-Agnostic by Design</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                ChainSync's integration layer is decoupled from any single platform. FastAPI is the current implementation, but any platform that supports HTTP POST — MuleSoft, Workato, Boomi, Azure Logic Apps, or a customer's existing integration stack — can connect through the Universal Webhook Endpoint without changes to the agent or scheduling layers.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mt-6">
              <Link href="/technology">
                <a className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-semibold text-slate-700 shadow-[0_1px_4px_rgba(0,0,0,0.05)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_2px_10px_rgba(0,0,0,0.09)] active:scale-[0.97]">
                  View Full Technical Details
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                    <ArrowRight size={10} />
                  </span>
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────── FOUNDER */}
      <section className="py-20 md:py-24 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="flex flex-col md:flex-row md:items-center gap-8 max-w-3xl"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div
              variants={fadeUp}
              className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0 text-white font-bold text-lg shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
            >
              U
            </motion.div>
            <motion.div variants={fadeUp} className="flex-1">
              <p className="text-slate-900 font-bold text-sm mb-1">Uma Madasu, Founder</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Built ChainSync after repeatedly watching coordination break down in high-pressure environments: not because the data wasn't there, but because the structure to act on it wasn't.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="shrink-0">
              <a
                href="https://www.linkedin.com/company/getchainsync/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-semibold text-slate-700 shadow-[0_1px_4px_rgba(0,0,0,0.05)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.09)] whitespace-nowrap active:scale-[0.97]"
              >
                Connect on LinkedIn
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                  <ArrowUpRight size={10} />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────── PILOT CTA — FULL BLEED DARK */}
      <section id="pilot" className="relative py-28 md:py-40 bg-slate-950 overflow-hidden">
        {/* Subtle radial glow — architectural, not blobby */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Left */}
            <motion.div variants={fadeUp} className="space-y-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-400/80">Pilot Program</p>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white tracking-[-0.025em] leading-[1.08]">
                Three founding pilot partnerships open now.
              </h2>
              <p className="text-slate-400 leading-relaxed text-[15px] max-w-lg">
                Three organizations will validate ChainSync in their real incident environments: one water utility, one healthcare facility, one open slot. No upfront cost. No long-term commitment. You keep the audit trail, the workflow data, and the coordination time you recover.
              </p>
              <ul className="space-y-3.5">
                {[
                  "See the 4–6 hour coordination cycle drop to minutes in your environment",
                  "Direct integration support from the founding team throughout",
                  "Founding pricing locked in at public launch",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-sm text-slate-400">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sky-500/30 bg-sky-950/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/contact">
                  <a className="group inline-flex items-center gap-3 rounded-full bg-sky-500 px-7 py-3.5 text-[13px] font-bold text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-sky-400 active:scale-[0.97]">
                    Apply for Founding Partnership
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                      <ArrowRight size={11} />
                    </span>
                  </a>
                </Link>
              </div>
              <p className="text-slate-700 text-xs">
                Not in water or healthcare?{" "}
                <Link href="/contact">
                  <a className="text-sky-400 hover:text-sky-300 transition-colors duration-300">Join the waitlist →</a>
                </Link>
              </p>
            </motion.div>

            {/* Right — editorial stacked stats */}
            <motion.div variants={fadeUp} className="space-y-0 divide-y divide-white/[0.06]">
              {[
                { value: "4–6", unit: "hrs", label: "Average coordination time without ChainSync", color: "text-white" },
                { value: "17", unit: "", label: "Coordination agents, each owning one job", color: "text-white" },
                { value: "3", unit: "", label: "Founding partnership slots available", color: "text-sky-400" },
              ].map((s, i) => (
                <div key={i} className="py-8 first:pt-0 last:pb-0">
                  <div className="flex items-end gap-2 mb-2">
                    <span className={`font-mono text-[clamp(2.8rem,6vw,4.5rem)] font-bold leading-none tracking-tight tabular-nums ${s.color}`}>
                      {s.value}
                    </span>
                    {s.unit && <span className="font-mono text-xl text-slate-600 font-semibold mb-1">{s.unit}</span>}
                  </div>
                  <p className="text-sm text-slate-500">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
