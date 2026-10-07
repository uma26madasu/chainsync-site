import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import { Droplets, Building2, ArrowRight, ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <Header />

      {/* ── Hero */}
      <section className="py-12 md:py-18 bg-white border-b border-[#DCECEF]">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-600 mb-4">
              About
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(2.2rem,4.4vw,3.8rem)] font-bold text-slate-900 tracking-[-0.03em] leading-[1.08] mb-5"
            >
              About ChainSync
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[17px] text-slate-500 leading-[1.7] max-w-2xl">
              Incident coordination infrastructure for regulated environments. Built by someone who watched coordination break down too many times.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── The Problem */}
      <section className="py-12 md:py-18 bg-white">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="space-y-5"
            >
              <motion.p variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-600">
                The problem
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-[clamp(2rem,3.8vw,3.2rem)] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1]"
              >
                The problem worth solving
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4">
                <p className="text-[16px] text-slate-600 leading-[1.72]">
                  Water utilities and hospitals have built serious monitoring infrastructure. Sensors, SCADA systems, BMS platforms, dashboards. They know when something goes wrong almost immediately.
                </p>
                <p className="text-[16px] text-slate-600 leading-[1.72]">
                  The breakdown happens after detection. Getting the right people in the same room, with shared context, clear ownership, and a documented record: that still happens manually. Phone calls. Emails. Spreadsheet updates. Group chats with missing context.
                </p>
                <p className="text-[16px] text-slate-600 leading-[1.72]">
                  For a water quality incident or a hospital facility emergency, that coordination gap can take 4–6 hours. In environments where the response window is measured in minutes, those hours have consequences: regulatory penalties, remediation costs, and community health outcomes.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="lg:mt-16"
            >
              <div className="bg-slate-950 rounded-[2rem] p-1.5">
                <div className="bg-slate-900 rounded-[calc(2rem_-_0.375rem)] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400/80 mb-4">The gap ChainSync fills</p>
                  <p className="text-[14px] text-slate-300 leading-relaxed mb-4">
                    Everbridge pushes notifications. ServiceNow tracks work after the fact. Slack enables conversation. None of them automatically build a coordinated response structure.
                  </p>
                  <div className="h-[1px] bg-white/[0.07] mb-4" />
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    Assigning ownership, notifying the right stakeholders simultaneously, maintaining incident state, and generating compliance documentation. That's the gap ChainSync fills.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What ChainSync Does */}
      <section className="py-12 md:py-18 bg-white">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-10"
          >
            <motion.p variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-600 mb-3">
              Platform
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2rem,3.8vw,3.2rem)] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1] max-w-2xl"
            >
              What ChainSync does
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[16px] text-slate-600 mt-3 max-w-xl leading-relaxed">
              17 coordination agents, each owning one job in the response pipeline, run automatically from detection to closed record.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {[
              {
                title: "Integration Layer",
                body: "Connects to any monitoring system, SCADA platform, or building management system via standard HTTP webhooks. Built on FastAPI, swappable with MuleSoft, Workato, or Boomi. No rip-and-replace.",
                dark: false,
              },
              {
                title: "Coordination Agents",
                body: "Detection, analysis, coordination, and documentation, each handled by a separate agent. Modular by design: improve one without touching the others.",
                dark: true,
              },
              {
                title: "Scheduling Layer",
                body: "Autonomous meeting coordination. The right stakeholders, identified and booked across Google Calendar and Microsoft 365, with conflict detection and emergency override protocols.",
                dark: false,
              },
              {
                title: "Compliance Documentation",
                body: "Every action is logged. Incident reports, regulatory notifications, and audit trails are generated automatically, so your team focuses on response, not paperwork.",
                dark: true,
              },
            ].map((card, i) => (
              <motion.div key={i} variants={fadeUp} className="h-full">
                {card.dark ? (
                  <div className="h-full bg-slate-950 rounded-[2rem] p-1.5">
                    <div className="h-full bg-slate-900 rounded-[calc(2rem_-_0.375rem)] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
                      <h3 className="text-[15px] font-bold text-white mb-3">{card.title}</h3>
                      <p className="text-[14px] text-slate-400 leading-relaxed">{card.body}</p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full bg-[#F4F6F9] border border-slate-200/60 rounded-[2rem] p-1.5">
                    <div className="h-full bg-white rounded-[calc(2rem_-_0.375rem)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                      <h3 className="text-[15px] font-bold text-slate-900 mb-3">{card.title}</h3>
                      <p className="text-[14px] text-slate-600 leading-relaxed">{card.body}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Founder */}
      <section className="py-10 md:py-14 bg-white border-t border-[#DCECEF]">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="max-w-3xl space-y-5"
          >
            <motion.p variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-600">
              Founder
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2rem,3.8vw,3.2rem)] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1]"
            >
              Who built it
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[16px] text-slate-600 leading-[1.72]">
              <span className="font-semibold text-slate-900">Uma Madasu</span> built ChainSync after repeatedly watching coordination break down in high-pressure environments: not because the data wasn't there, but because the structure to act on it wasn't.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[15px] text-slate-500 leading-relaxed">
              Dual Master's in MIS and Cybersecurity. Based in Atlanta, GA.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="https://www.linkedin.com/company/getchainsync/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-semibold text-slate-700 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.09)] active:scale-[0.97] min-h-[44px]"
              >
                Connect on LinkedIn
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight size={10} />
                </span>
              </a>
              <a
                href="https://medium.com/@umamadasu"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-semibold text-slate-700 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.09)] active:scale-[0.97] min-h-[44px]"
              >
                Read the Insights articles
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight size={10} />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Who it's for */}
      <section className="py-12 md:py-18 bg-white">
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-10"
          >
            <motion.p variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-600 mb-3">
              Verticals
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2rem,3.8vw,3.2rem)] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1]"
            >
              Who it's for
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[16px] text-slate-600 mt-3 max-w-xl leading-relaxed">
              ChainSync is designed for regulated environments where incidents require fast, documented, multi-stakeholder response.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp} className="h-full">
              <div className="h-full bg-[#F4F6F9] border border-slate-200/60 rounded-[2rem] p-1.5">
                <div className="h-full bg-white rounded-[calc(2rem_-_0.375rem)] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-4">
                    <Droplets size={18} className="text-sky-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[17px] font-bold text-slate-900 mb-2">Water &amp; Wastewater Utilities</h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed mb-4">
                    Mid-size regional utilities dealing with SCADA-connected monitoring, EPA reporting requirements, and multi-agency coordination needs. The founding vertical.
                  </p>
                  <ul className="space-y-2">
                    {["SCADA integration via standard HTTP", "EPA notification workflows", "Multi-agency response coordination"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[13px] text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="h-full">
              <div className="h-full bg-[#F4F6F9] border border-slate-200/60 rounded-[2rem] p-1.5">
                <div className="h-full bg-white rounded-[calc(2rem_-_0.375rem)] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                    <Building2 size={18} className="text-emerald-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[17px] font-bold text-slate-900 mb-2">Hospital &amp; Healthcare Facilities</h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed mb-4">
                    Facilities teams managing HVAC failures, hazmat incidents, and power events across complex, multi-department environments. ChainSync is designed to connect to building management systems via standard HTTP webhooks.
                  </p>
                  <ul className="space-y-2">
                    {["BMS integration via standard HTTP webhooks", "Facilities + Clinical + Admin coordination", "HIPAA-ready audit trails"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[13px] text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
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
              Founding pilot partnerships open now
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[15px] text-slate-400 leading-relaxed mb-8 max-w-xl">
              Water utilities and healthcare facilities. No upfront costs. No long-term commitment. Direct access to the founding team throughout.
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
