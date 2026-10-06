import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { stagger, viewport } from "@/lib/motion";
import AnimatedHeroFlow from "@/components/AnimatedHeroFlow";
import ArchitectureAnimation from "@/components/ArchitectureAnimation";
import CountUp from "@/components/CountUp";

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];

// Fade-up that respects prefers-reduced-motion
function FadeUp({
  children,
  delay = 0,
  className = "",
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20, filter: "blur(4px)" }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-48px" }}
      transition={{ duration: prefersReduced ? 0.2 : 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

// Card hover lift
const cardHover = {
  rest: { y: 0, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" },
  hover: { y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.10)" },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<"water" | "healthcare">("water");
  const heroRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.7], [0, 32]);

  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <Header />

      {/* ══════════════════════════════════════════════════════ HERO */}
      <section
        ref={heroRef}
        className="relative flex flex-col justify-center overflow-hidden bg-white py-12 md:py-16 min-h-[78dvh]"
      >
        {/* Grain — fixed, pointer-events-none */}
        <div
          className="pointer-events-none fixed inset-0 z-[1] opacity-[0.022]"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "160px 160px",
          }}
        />

        <motion.div
          className="container mx-auto px-4 md:px-6 relative z-10"
          style={prefersReduced ? {} : { opacity: heroOpacity, y: heroY }}
          {...({ style: prefersReduced ? {} : { opacity: heroOpacity, y: heroY } } as {})}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-10 lg:gap-16 items-center" style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {/* Left */}
            <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6 max-w-2xl">
              <motion.div
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <span className={`w-1.5 h-1.5 rounded-full bg-emerald-400 ${prefersReduced ? "" : "animate-pulse"}`} />
                  Founding Pilot Program · 3 slots open
                </span>
              </motion.div>

              {/* Headline — masked line-by-line reveal */}
              <div className="space-y-1">
                {[
                  { text: "Response team assembled.", muted: false },
                  { text: "Compliance record started.", muted: false },
                  { text: "Before your first manual call.", muted: true },
                ].map(({ text, muted }, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.h1
                      className={`font-bold leading-[1.12] tracking-[-0.025em] ${
                        muted
                          ? "text-[clamp(1.4rem,2.8vw,2.4rem)] text-slate-400 font-semibold"
                          : "text-[clamp(1.6rem,3.4vw,2.8rem)] text-slate-900"
                      }`}
                      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: "105%" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.08 + i * 0.11, ease: EASE }}
                    >
                      {text}
                    </motion.h1>
                  </div>
                ))}
              </div>

              <motion.p
                className="text-base md:text-[17px] text-slate-500 leading-[1.7] max-w-[500px]"
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.42, ease: EASE }}
              >
                ChainSync coordinates the people, the documentation, and the scheduling automatically the moment an incident is detected. Your team focuses on response, not the logistics of forming one.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3"
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.52, ease: EASE }}
              >
                <Link href="/contact">
                  <a className="group inline-flex items-center gap-2.5 rounded-full bg-slate-900 hover:bg-slate-700 px-6 py-3 text-[13px] font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] min-h-[44px]">
                    Apply for Founding Partnership
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.12] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                      <ArrowRight size={11} />
                    </span>
                  </a>
                </Link>
                <Link href="/how-it-works">
                  <a className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white hover:border-slate-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] px-6 py-3 text-[13px] font-semibold text-slate-700 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] min-h-[44px]">
                    How It Works
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                      <ArrowRight size={11} />
                    </span>
                  </a>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — diagram in double-bezel */}
            <motion.div
              className="hidden lg:block"
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
            >
              <div className="bg-[#F4F6F9] border border-slate-200/70 rounded-[2rem] p-1.5 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
                <div className="bg-white rounded-[calc(2rem_-_0.375rem)] overflow-hidden">
                  <AnimatedHeroFlow />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom edge */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* ════════════════════════════════════ EDITORIAL STATS */}
      <section className="bg-slate-950 overflow-hidden border-t border-white/[0.04]">
        <div className="container mx-auto" style={{ maxWidth: "1200px" }}>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {[
              { end: 17, display: "17", label: "Coordination agents,\neach owning one job" },
              { end: null, display: "4–6 hrs", label: "Average coordination time,\nnow measured in minutes" },
              { end: 3, display: "3", label: "Founding pilot slots\ncurrently open", accent: true },
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <motion.div
                  className="group relative px-8 py-12 md:px-10 border-b sm:border-b-0 sm:border-r border-white/[0.06] last:border-r-0 cursor-default"
                  whileHover={prefersReduced ? {} : { backgroundColor: "rgba(255,255,255,0.02)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-end gap-2 mb-3">
                    <span className={`font-mono text-[clamp(3rem,7vw,5.5rem)] font-bold leading-none tracking-tight tabular-nums ${s.accent ? "text-sky-400" : "text-white"}`}>
                      {s.end !== null ? (
                        <CountUp end={s.end} duration={1800} />
                      ) : (
                        s.display
                      )}
                    </span>
                  </div>
                  <p className="text-slate-400 text-[14px] leading-snug whitespace-pre-line font-medium">{s.label}</p>
                  <span className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-sky-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ PROBLEM */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-20 items-start">
            <div className="space-y-6">
              <FadeUp>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-600">The problem</p>
              </FadeUp>
              <FadeUp delay={0.06}>
                <h2 className="text-[clamp(1.8rem,3.5vw,2.9rem)] font-bold tracking-[-0.025em] leading-[1.1] text-slate-900">
                  Detection works.<br />Coordination doesn't.
                </h2>
              </FadeUp>
              <FadeUp delay={0.12}>
                <p className="text-[16px] text-slate-600 leading-[1.72] max-w-xl">
                  Water utilities and hospitals share the same gap: sensors and monitoring systems work well. The bottleneck is what comes after. When an incident is flagged, getting the right people in the same room with a shared understanding of what's happening takes 4 to 6 hours of phone calls, emails, and manual handoffs. By the time coordination finishes, the critical response window has often closed. The compliance documentation is still unwritten.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.1} className="lg:mt-12">
              <div className="bg-slate-950 rounded-[2rem] p-1.5">
                <div className="bg-slate-900 rounded-[calc(2rem_-_0.375rem)] p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
                  <p className="font-mono text-[3.2rem] font-bold text-white leading-none tracking-tight mb-1">
                    <CountUp end={6} prefix="4–" duration={1600} />
                  </p>
                  <p className="font-mono text-base font-semibold text-slate-500 mb-5 tracking-tight">hours</p>
                  <div className="h-[1px] bg-white/[0.07] mb-5" />
                  <p className="text-[14px] text-slate-400 leading-relaxed">
                    Average coordination time for multi-agency environmental and facility incidents. ChainSync reduces that to minutes.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════ THREE GAPS — CARD GRID */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <FadeUp className="mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400 mb-3">Why ChainSync</p>
            <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-bold text-white tracking-[-0.02em] leading-tight">
              Three gaps, one platform.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                n: "01",
                title: "4–6 hours of coordination time, gone",
                body: "Detection triggers the full response structure automatically: stakeholders identified, notifications sent simultaneously, response meeting scheduled. No one lifts a phone.",
                tags: ["No missed escalations", "Compliance record starts at detection", "Parallel notification"],
                accent: "sky",
              },
              {
                n: "02",
                title: "Five vendor contracts become one",
                body: "Notification tools, scheduling platforms, documentation systems, escalation trackers, compliance logs: each is a separate vendor, a separate contract, separate per-event billing. ChainSync consolidates all of it. One platform from alert receipt to closed incident record.",
                tags: ["No per-event notification fees", "No separate documentation tool", "No manual calendar coordination"],
                accent: "emerald",
              },
              {
                n: "03",
                title: "Incident data stays in your environment",
                body: "For healthcare facilities, every vendor in your incident workflow is a potential HIPAA liability. Notification platforms, scheduling tools, and documentation systems each receive and store incident records, including potential PHI. With ChainSync, that data never leaves your infrastructure. No third-party middleware touches sensitive records. Your audit trail is yours.",
                tags: ["No vendor custody of records", "PHI stays in your infrastructure", "Joint Commission / CMS / HIPAA"],
                accent: "violet",
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.09}>
                <motion.div
                  className="h-full bg-white/[0.03] border border-white/[0.07] rounded-[1.5rem] p-1.5"
                  variants={cardHover}
                  initial="rest"
                  whileHover={prefersReduced ? "rest" : "hover"}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-full bg-white/[0.02] rounded-[calc(1.5rem_-_0.375rem)] p-6 flex flex-col gap-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)]">
                    <span className="font-mono text-[11px] font-semibold text-slate-600 tracking-widest">{item.n}</span>
                    <h3 className="text-[15px] font-bold text-white leading-snug">{item.title}</h3>
                    <p className="text-[14px] text-slate-400 leading-relaxed flex-1">{item.body}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[11px] font-medium rounded-full px-2.5 py-1 border ${
                            item.accent === "sky"
                              ? "text-sky-300 bg-sky-500/[0.08] border-sky-500/20"
                              : item.accent === "emerald"
                              ? "text-emerald-300 bg-emerald-500/[0.08] border-emerald-500/20"
                              : "text-violet-300 bg-violet-500/[0.08] border-violet-500/20"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ 7-STAGE PIPELINE */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
            <div className="space-y-2">
              <FadeUp>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400">How it works</p>
              </FadeUp>
              <FadeUp delay={0.06}>
                <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-bold text-slate-100 tracking-[-0.02em] leading-tight">
                  From alert to coordinated response
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={0.1}>
              <Link href="/how-it-works">
                <a className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-[13px] font-semibold text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.07] whitespace-nowrap active:scale-[0.97] min-h-[44px]">
                  Full walkthrough
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight size={10} />
                  </span>
                </a>
              </Link>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 max-w-4xl">
            {[
              { num: 1, label: "Detection", desc: "Universal Webhook receives events from any monitoring system, SCADA, or BMS." },
              { num: 2, label: "Analysis", desc: "AI coordination agents classify severity, identify impact, and determine response scope." },
              { num: 3, label: "Notification", desc: "Right stakeholders identified and notified simultaneously. No manual phone trees." },
              { num: 4, label: "Coordination", desc: "Scheduling layer books the response meeting with conflict detection and emergency override." },
              { num: 5, label: "State Tracking", desc: "Incident state maintained across all agents and participants throughout the response." },
              { num: 6, label: "Documentation", desc: "Audit-ready compliance record generated automatically as the incident progresses." },
              { num: 7, label: "Closure", desc: "Incident closed with complete documented record ready for regulatory review." },
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <motion.div
                  className="group flex gap-4 py-5 border-b border-white/[0.05] last:border-0"
                  whileHover={prefersReduced ? {} : { x: 2 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="shrink-0 w-8 h-8 rounded-full border border-sky-500/30 bg-sky-950/50 flex items-center justify-center mt-0.5 transition-colors duration-200 group-hover:border-sky-400/50 group-hover:bg-sky-900/50">
                    <span className="font-mono text-sky-400/80 font-semibold text-[12px] group-hover:text-sky-300 transition-colors duration-200">{s.num}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200 text-[14px] mb-1">{s.label}</p>
                    <p className="text-[14px] text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ SCENARIO */}
      <section className="py-16 md:py-24 bg-[#F8F9FB]">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <div className="max-w-3xl">
            <FadeUp><span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 border border-slate-200 bg-white rounded-full px-3 py-1.5 inline-block mb-6">Example workflow</span></FadeUp>
            <FadeUp delay={0.05}><h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-bold text-slate-900 tracking-[-0.02em] mb-3">Illustrative scenario</h2></FadeUp>
            <FadeUp delay={0.1}><p className="text-[14px] text-slate-500 max-w-prose leading-relaxed mb-8">This is a representative example to show how ChainSync handles an incident end-to-end. Not a live deployment or real customer data.</p></FadeUp>

            <FadeUp delay={0.12}>
              <div className="bg-slate-950 rounded-[2rem] p-1.5 shadow-[0_16px_48px_rgba(0,0,0,0.10)]">
                <div className="bg-slate-900 rounded-[calc(2rem_-_0.375rem)] overflow-hidden">
                  <div className="px-6 py-5 border-b border-white/[0.06] bg-sky-950/40">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-400/80 mb-1.5">Trigger event</p>
                    <p className="font-semibold text-white text-[14px]">Water Quality Alert Detected</p>
                    <p className="text-[13px] text-slate-500 mt-1">Alert received from SCADA monitoring system via Universal Webhook</p>
                  </div>
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
                      <div key={i} className="flex gap-4 px-6 py-3.5 border-b border-white/[0.04] last:border-0">
                        <div className="shrink-0 w-5 pt-0.5">
                          <span className={`text-base leading-none font-bold ${step.arrow ? "text-sky-500/35" : "text-emerald-400"}`}>
                            {step.arrow ? "↓" : "✓"}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-300 text-[13px]">{step.label}</p>
                          <p className="text-[12px] text-slate-600 mt-0.5 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.16} className="mt-6">
              <Link href="/walkthrough">
                <a className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-semibold text-slate-700 shadow-[0_1px_4px_rgba(0,0,0,0.05)] transition-all duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.09)] active:scale-[0.97] min-h-[44px]">
                  View full walkthrough
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight size={10} />
                  </span>
                </a>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ PLATFORM */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <FadeUp className="mb-10 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-600">Platform</p>
            <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-bold text-slate-900 tracking-[-0.02em] leading-tight max-w-lg">
              Two layers, one coordinated response
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <FadeUp className="md:col-span-7">
              <motion.div
                className="h-full bg-[#F4F6F9] border border-slate-200/60 rounded-[2rem] p-1.5"
                variants={cardHover} initial="rest" whileHover={prefersReduced ? "rest" : "hover"} transition={{ duration: 0.2 }}
              >
                <div className="h-full bg-white rounded-[calc(2rem_-_0.375rem)] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                      <svg className="text-sky-600" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-900 text-[15px]">Integration Layer</h3>
                  </div>
                  <p className="text-[14px] text-slate-600 leading-relaxed mb-5">
                    Built on FastAPI, swappable with MuleSoft, Workato, Boomi, or any iPaaS. Connects to your existing SCADA and monitoring systems via standard HTTP. No rip-and-replace.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {["SCADA & BMS", "IoT sensors", "Weather APIs", "Custom webhooks"].map((item) => (
                      <div key={item} className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-3 py-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                        <span className="text-[13px] text-slate-600 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeUp>

            <FadeUp className="md:col-span-5" delay={0.08}>
              <motion.div
                className="h-full bg-slate-950 rounded-[2rem] p-1.5"
                variants={cardHover} initial="rest" whileHover={prefersReduced ? "rest" : "hover"} transition={{ duration: 0.2 }}
              >
                <div className="h-full bg-slate-900 rounded-[calc(2rem_-_0.375rem)] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-emerald-950/60 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <svg className="text-emerald-400" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-white text-[15px]">Coordination Engine</h3>
                  </div>
                  <p className="text-[14px] text-slate-400 leading-relaxed mb-5">
                    17 coordination agents, each owning one job. Plus a scheduling layer that books the right people without manual intervention.
                  </p>
                  <ul className="space-y-2.5">
                    {["Detection", "Severity analysis", "Stakeholder notification", "Calendar coordination", "Compliance documentation"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[14px] text-slate-300">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-950/50">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ VERTICALS */}
      <section className="py-16 md:py-24 bg-[#F8F9FB]">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <FadeUp className="mb-8 space-y-3">
            <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-bold text-slate-900 tracking-[-0.02em]">
              Built for regulated environments
            </h2>
            <p className="text-[16px] text-slate-600 max-w-xl leading-relaxed">
              Same coordination infrastructure. Domain-specific agents and integrations for each vertical.
            </p>
          </FadeUp>

          <FadeUp delay={0.06} className="mb-7">
            <div className="inline-flex bg-white border border-slate-200 rounded-full p-1 gap-1 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
              {(["water", "healthcare"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] min-h-[44px] ${
                    activeTab === tab
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {tab === "water" ? "Water Utilities" : "Healthcare"}
                </button>
              ))}
            </div>
          </FadeUp>

          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              {activeTab === "water" && (
                <motion.div
                  key="water"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: prefersReduced ? 0.1 : 0.22, ease: EASE }}
                >
                  <div className="bg-white border border-slate-200/80 rounded-[2rem] p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                    <div className="bg-white rounded-[calc(2rem_-_0.375rem)] p-7 md:p-9">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Water &amp; Wastewater Utilities</h3>
                      <p className="text-[15px] text-slate-600 mb-7 leading-relaxed">
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
                            <p className="text-[12px] text-slate-600 leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              {activeTab === "healthcare" && (
                <motion.div
                  key="healthcare"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: prefersReduced ? 0.1 : 0.22, ease: EASE }}
                >
                  <div className="bg-white border border-slate-200/80 rounded-[2rem] p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                    <div className="bg-white rounded-[calc(2rem_-_0.375rem)] p-7 md:p-9">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Hospital &amp; Healthcare Facilities</h3>
                      <p className="text-[15px] text-slate-600 mb-7 leading-relaxed">
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
                            <p className="text-[12px] text-slate-600 leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FUTURE VERTICALS */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <FadeUp className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-amber-400">
                Roadmap
              </span>
            </div>
            <h2 className="text-[1.75rem] md:text-[2.1rem] font-bold text-white leading-tight mb-3 max-w-2xl">
              Where We're Heading
            </h2>
            <p className="text-slate-400 text-base max-w-xl leading-relaxed">
              ChainSync currently serves Water Utilities and Healthcare Facilities. These six verticals are next, shaped by the organizations we work with now.
            </p>
          </FadeUp>

          {/* 6-card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              {
                num: "01",
                name: "Manufacturing",
                need: "Equipment downtime, quality failures, and supply chain disruptions cost millions per hour.",
                does: "Detect equipment anomalies, coordinate maintenance response, trace root causes, and generate compliance reports across the full production floor.",
              },
              {
                num: "02",
                name: "Energy",
                need: "Grid failures and renewable integration errors have cascading regional impact. NERC and FERC compliance is non-negotiable.",
                does: "Real-time grid incident coordination, demand forecasting alerts, and automated regulatory filing.",
              },
              {
                num: "03",
                name: "Financial Services",
                need: "Regulatory breaches, fraud patterns, and risk events require immediate coordinated response with a complete audit trail.",
                does: "Detect anomalies, coordinate response across risk, compliance, and operations teams, and generate immutable audit records.",
              },
              {
                num: "04",
                name: "Transportation",
                need: "Fleet incidents, route disruptions, and safety compliance across distributed operations require fast, coordinated response.",
                does: "Incident detection and coordination across fleet and infrastructure, impact assessment, and regulatory mapping.",
                wip: true,
              },
              {
                num: "05",
                name: "Food & Agriculture",
                need: "Supply chain disruptions and food safety incidents require rapid response and USDA/FDA compliance documentation.",
                does: "Coordinate response to contamination or supply events, regulatory mapping, and automated closure documentation.",
                wip: true,
              },
              {
                num: "06",
                name: "Healthcare Administration",
                sub: "Payer-side",
                need: "Claims routing errors, network gaps, and multi-carrier coordination delays create revenue leakage and compliance risk.",
                does: "Coordinate claims workflows, map payer network requirements, track status across major carriers, and maintain a complete audit trail for CMS and HIPAA compliance.",
              },
            ].map(({ num, name, sub, need, does, wip }, i) => (
              <FadeUp key={num} delay={i * 0.06}>
                <motion.div
                  className="relative rounded-2xl p-5 h-full"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={{
                    rest: { y: 0, borderColor: "rgba(255,255,255,0.08)" },
                    hover: { y: -3, borderColor: "rgba(255,255,255,0.16)" },
                  }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-[11px] font-semibold text-slate-600 tabular-nums" style={{ fontFamily: "'Geist Mono', monospace" }}>{num}</span>
                    {wip && (
                      <span className="text-[10px] font-medium text-slate-500 border border-slate-700 rounded-full px-2 py-0.5">In Definition</span>
                    )}
                  </div>
                  <h3 className="text-[15px] font-bold text-white mb-0.5">{name}</h3>
                  {sub && <p className="text-[11px] text-slate-500 mb-2">{sub}</p>}
                  <p className="text-[12.5px] text-slate-500 leading-relaxed mb-3">{need}</p>
                  <p className="text-[12.5px] text-slate-300 leading-relaxed">{does}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>

          {/* Callout bar */}
          <FadeUp delay={0.4}>
            <div className="rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-3"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}>
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7l3.5 3.5L12 3.5" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[13.5px] text-slate-300 leading-relaxed">
                All six verticals are powered by ChainSync's existing 17-agent framework. No new infrastructure required.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════ ARCHITECTURE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-16 items-start mb-10">
            <FadeUp>
              <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-bold text-slate-900 tracking-[-0.02em]">
                Technical Architecture
              </h2>
            </FadeUp>
            <FadeUp delay={0.06}>
              <p className="text-[16px] text-slate-600 leading-relaxed lg:mt-2">
                Three independently maintainable layers connected through standard HTTP. Built for reliability in regulated environments.
              </p>
            </FadeUp>
          </div>

          <div className="max-w-3xl">
            <FadeUp><ArchitectureAnimation /></FadeUp>

            <FadeUp delay={0.1} className="mt-6">
              <div className="bg-sky-50 border border-sky-100/80 rounded-2xl p-5">
                <h4 className="text-[14px] font-bold text-slate-900 mb-2">Platform-Agnostic by Design</h4>
                <p className="text-[14px] text-slate-600 leading-relaxed">
                  ChainSync's integration layer is decoupled from any single platform. FastAPI is the current implementation, but any platform that supports HTTP POST (MuleSoft, Workato, Boomi, Azure Logic Apps, or a customer's existing integration stack) can connect through the Universal Webhook Endpoint without changes to the agent or scheduling layers.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.14} className="mt-5">
              <Link href="/technology">
                <a className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-semibold text-slate-700 shadow-[0_1px_4px_rgba(0,0,0,0.05)] transition-all duration-200 hover:shadow-[0_2px_10px_rgba(0,0,0,0.09)] active:scale-[0.97] min-h-[44px]">
                  View Full Technical Details
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight size={10} />
                  </span>
                </a>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ FOUNDER */}
      <section className="py-14 md:py-20 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-center gap-7 max-w-3xl">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0 text-white font-bold text-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                U
              </div>
              <div className="flex-1">
                <p className="text-slate-900 font-bold text-[14px] mb-1">Uma Madasu, Founder</p>
                <p className="text-[14px] text-slate-600 leading-relaxed">
                  Built ChainSync after repeatedly watching coordination break down in high-pressure environments: not because the data wasn't there, but because the structure to act on it wasn't.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/company/getchainsync/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-semibold text-slate-700 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.09)] whitespace-nowrap active:scale-[0.97] shrink-0 min-h-[44px]"
              >
                Connect on LinkedIn
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px">
                  <ArrowUpRight size={10} />
                </span>
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════ PILOT CTA */}
      <section id="pilot" className="relative py-24 md:py-36 bg-slate-950 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10" style={{ maxWidth: "1200px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <FadeUp className="space-y-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400/80">Pilot Program</p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.9rem)] font-bold text-white tracking-[-0.025em] leading-[1.08]">
                Three founding pilot partnerships open now.
              </h2>
              <p className="text-[15px] text-slate-400 leading-relaxed max-w-lg">
                Three organizations will validate ChainSync in their real incident environments: one water utility, one healthcare facility, one open slot. No upfront cost. No long-term commitment. You keep the audit trail, the workflow data, and the coordination time you recover.
              </p>
              <ul className="space-y-3">
                {[
                  "See the 4–6 hour coordination cycle drop to minutes in your environment",
                  "Direct integration support from the founding team throughout",
                  "Founding pricing locked in at public launch",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-slate-400">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sky-500/30 bg-sky-950/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link href="/contact">
                  <a className="group inline-flex items-center gap-2.5 rounded-full bg-sky-500 hover:bg-sky-400 px-7 py-3.5 text-[13px] font-bold text-white transition-all duration-200 active:scale-[0.97] min-h-[44px]">
                    Apply for Founding Partnership
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px">
                      <ArrowRight size={11} />
                    </span>
                  </a>
                </Link>
              </div>
              <p className="text-slate-700 text-[12px]">
                Not in water or healthcare?{" "}
                <Link href="/contact">
                  <a className="text-sky-400 hover:text-sky-300 transition-colors duration-200">Join the waitlist →</a>
                </Link>
              </p>
            </FadeUp>

            <FadeUp delay={0.1} className="divide-y divide-white/[0.06]">
              {[
                { end: null, display: "4–6", unit: "hrs", label: "Average coordination time without ChainSync", accent: false },
                { end: 17, display: "17", unit: "", label: "Coordination agents, each owning one job", accent: false },
                { end: 3, display: "3", unit: "", label: "Founding partnership slots available", accent: true },
              ].map((s, i) => (
                <div key={i} className="py-7 first:pt-0 last:pb-0">
                  <div className="flex items-end gap-2 mb-2">
                    <span className={`font-mono text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none tracking-tight tabular-nums ${s.accent ? "text-sky-400" : "text-white"}`}>
                      {s.end !== null ? <CountUp end={s.end} duration={1600} /> : s.display}
                    </span>
                    {s.unit && <span className="font-mono text-lg text-slate-600 font-semibold mb-1">{s.unit}</span>}
                  </div>
                  <p className="text-[14px] text-slate-500">{s.label}</p>
                </div>
              ))}
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
