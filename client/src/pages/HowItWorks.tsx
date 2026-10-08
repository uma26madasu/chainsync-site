import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Radio, Brain, Users, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import ProcessFlowAnimation from "@/components/ProcessFlowAnimation";
import ArchitectureAnimation from "@/components/ArchitectureAnimation";

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];

const STEPS = [
  {
    icon: Radio,
    label: "Detect",
    num: "1",
    summary: "Sensor data and external alerts ingested via API gateway. Anomaly detection triggers immediate analysis.",
    badge: "~2s (target)",
    badgeColor: "sky",
    detail: "ChainSync receives events from IoT sensors, SCADA systems, weather APIs, and external alert systems. When a turbidity spike, emissions breach, or unusual pattern is detected, it is flagged immediately and processing begins.",
    callout: { label: "Integration Hub", text: "Supports flow implementations across MuleSoft, Workato, Boomi, and custom integrations via FastAPI and a Universal Webhook Endpoint with zero vendor lock-in." },
    dark: false,
  },
  {
    icon: Brain,
    label: "Analyze",
    num: "2",
    summary: "Context enrichment, risk scoring, and root cause analysis. Historical data combined with regulatory thresholds.",
    badge: "~30s (target)",
    badgeColor: "emerald",
    detail: "Coordination agents perform intelligent analysis. Specialized agents identify the anomaly type, enrich context with historical data and regulatory thresholds, and determine risk level and recommended actions.",
    callout: { label: "Coordination Agents", text: "17 specialized agents organized by function, each owning one discrete job in the coordination pipeline." },
    dark: true,
  },
  {
    icon: Users,
    label: "Coordinate",
    num: "3",
    summary: "Right teams notified, stakeholders alerted, regulators informed. Emergency meetings scheduled automatically.",
    badge: "~50s (target)",
    badgeColor: "amber",
    detail: "Based on the analysis, ChainSync automatically determines who needs to be notified and what actions are required. Notifications go to relevant teams via email, SMS, or webhook. The scheduling layer automatically books emergency meetings with the right stakeholders, checking calendars across Google Calendar, Microsoft 365, and other systems.",
    callout: { label: "Scheduling Layer", text: "Intelligent meeting coordination with multi-calendar conflict detection and automatic authority selection." },
    dark: false,
  },
  {
    icon: Shield,
    label: "Protect",
    num: "4",
    summary: "Complete audit trails, automated reports, compliance tracking. Your team focuses on resolution, not paperwork.",
    badge: "Continuous",
    badgeColor: "slate",
    detail: "ChainSync maintains a full audit trail throughout the incident and generates compliance documentation automatically: incident reports, regulatory notifications, and compliance records. Your team makes decisions. The documentation is already being written.",
    callout: { label: "Compliance records", text: "Full audit trail maintained throughout the incident lifecycle. Compliance documentation auto-generated and exportable." },
    dark: true,
  },
];

const ARCH_CARDS = [
  {
    title: "Sensor Integration Hub",
    body: "Platform-agnostic orchestration connecting sensors, APIs, and external systems via standard webhooks. Supports weather sensors, gas and chemical sensors, satellite data, and custom APIs.",
  },
  {
    title: "AI Agent Layer",
    body: "17 coordination agents for detection, analysis, coordination, and documentation. AI-powered reasoning engine organizes each job as a discrete, independently maintainable unit.",
  },
  {
    title: "Response Coordination",
    body: "Team notifications, emergency scheduling, compliance reporting. Integrates with Google Calendar, Microsoft 365, and custom notification systems.",
  },
];

function IconBadge({ icon: Icon, color }: { icon: React.ElementType; color: string }) {
  const styles: Record<string, string> = {
    sky: "bg-sky-50 border-sky-100 text-sky-600",
    emerald: "bg-emerald-50 border-emerald-100 text-emerald-600",
    amber: "bg-amber-50 border-amber-100 text-amber-600",
    slate: "bg-slate-50 border-slate-200 text-slate-600",
  };
  return (
    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${styles[color]}`}>
      <Icon size={18} strokeWidth={1.5} />
    </div>
  );
}

export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* ── Hero */}
      <section className="py-12 md:py-18 border-b border-[#DCECEF]">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-600 mb-4">
              How It Works
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(2.2rem,4.4vw,3.8rem)] font-bold text-slate-900 tracking-[-0.03em] leading-[1.08] mb-5"
            >
              From detection to coordinated response
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[17px] text-slate-500 leading-[1.7] max-w-2xl">
              When an incident is detected, ChainSync builds the response structure automatically. Here is how it works.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Process Flow Animation */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mb-14">
            <ProcessFlowAnimation />
          </motion.div>

          {/* 4-step overview cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {STEPS.map((s) => (
              <motion.div
                key={s.num}
                variants={fadeUp}
                whileHover={{ y: -3, transition: { duration: 0.2, ease: EASE } }}
                className="h-full"
              >
                <div className="h-full bg-[#F4F6F9] border border-slate-200/60 rounded-[1.75rem] p-1.5">
                  <div className="h-full bg-white rounded-[calc(1.75rem_-_0.375rem)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] flex flex-col gap-3">
                    <IconBadge icon={s.icon} color={s.badgeColor} />
                    <div>
                      <p className="font-mono text-[11px] font-semibold text-slate-400 mb-1">0{s.num}</p>
                      <h3 className="text-[15px] font-bold text-slate-900 mb-1">{s.label}</h3>
                      <p className="text-[13px] text-slate-500 leading-relaxed">{s.summary}</p>
                    </div>
                    <span className="mt-auto text-[12px] font-semibold text-slate-400 font-mono">{s.badge}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Detailed Breakdown */}
      <section className="py-12 md:py-18">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-10"
          >
            <motion.p variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-600 mb-3">
              Process
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2rem,3.8vw,3.2rem)] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1]"
            >
              Detailed process breakdown
            </motion.h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {STEPS.map((s) =>
              s.dark ? (
                <motion.div key={s.num} variants={fadeUp}>
                  <div className="bg-slate-950 rounded-[2rem] p-1.5">
                    <div className="bg-slate-900 rounded-[calc(2rem_-_0.375rem)] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
                      <div className="flex items-start gap-5">
                        <IconBadge icon={s.icon} color={s.badgeColor} />
                        <div className="flex-1">
                          <h3 className="text-[16px] font-bold text-white mb-3">Step {s.num}: {s.label}</h3>
                          <p className="text-[14px] text-slate-400 leading-relaxed mb-4">{s.detail}</p>
                          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
                            <p className="text-[13px] text-slate-400 leading-relaxed">
                              <span className="font-semibold text-slate-200">{s.callout.label}:</span>{" "}
                              {s.callout.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div key={s.num} variants={fadeUp}>
                  <div className="bg-[#F4F6F9] border border-slate-200/60 rounded-[2rem] p-1.5">
                    <div className="bg-white rounded-[calc(2rem_-_0.375rem)] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                      <div className="flex items-start gap-5">
                        <IconBadge icon={s.icon} color={s.badgeColor} />
                        <div className="flex-1">
                          <h3 className="text-[16px] font-bold text-slate-900 mb-3">Step {s.num}: {s.label}</h3>
                          <p className="text-[14px] text-slate-600 leading-relaxed mb-4">{s.detail}</p>
                          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                            <p className="text-[13px] text-slate-600 leading-relaxed">
                              <span className="font-semibold text-slate-800">{s.callout.label}:</span>{" "}
                              {s.callout.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Architecture */}
      <section className="py-12 md:py-18">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-10"
          >
            <motion.p variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-600 mb-3">
              Architecture
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2rem,3.8vw,3.2rem)] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1]"
            >
              System architecture
            </motion.h2>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mb-12 max-w-3xl">
            <ArchitectureAnimation />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {ARCH_CARDS.map((card) => (
              <motion.div key={card.title} variants={fadeUp}>
                <div className="h-full bg-[#F4F6F9] border border-slate-200/60 rounded-[2rem] p-1.5">
                  <div className="h-full bg-white rounded-[calc(2rem_-_0.375rem)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                    <h3 className="text-[15px] font-bold text-slate-900 mb-2">{card.title}</h3>
                    <p className="text-[13.5px] text-slate-600 leading-relaxed">{card.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA */}
      <section className="py-12 md:py-18 bg-slate-950 border-t border-white/[0.04]">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400/80 mb-4">
              Pilot Program
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2rem,3.8vw,3.2rem)] font-bold text-white tracking-[-0.025em] leading-[1.08] mb-4"
            >
              Ready to see it in action?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[15px] text-slate-400 leading-relaxed mb-8 max-w-xl">
              Apply for our founding pilot program and help validate ChainSync in a real water utility or healthcare environment.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Link href="/contact">
                <a className="group inline-flex items-center gap-2.5 rounded-full bg-sky-500 hover:bg-sky-400 px-7 py-3.5 text-[13px] font-bold text-white transition-all duration-200 active:scale-[0.97] min-h-[44px]">
                  Apply for Founding Partnership
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px">
                    <ArrowRight size={11} />
                  </span>
                </a>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
