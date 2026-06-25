import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Clock, ShieldCheck, Plug, Wifi, Cpu, GitBranch, ClipboardList, Play, Layers, Bot, Server, Wrench, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import AnimatedHeroFlow from "@/components/AnimatedHeroFlow";
import ArchitectureAnimation from "@/components/ArchitectureAnimation";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-6"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp} className="inline-block bg-blue-50 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Founding Pilot Program — Water Utilities
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Your teams are ready. Your coordination isn't.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                When a water quality incident is detected, your response structure has to form instantly. ChainSync builds it automatically — right people, clear ownership, documented record — in minutes, not hours of manual phone calls and emails.
              </motion.p>

              {/* Value Prop Micro-Cards */}
              <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="border border-border rounded-lg p-4 bg-white">
                  <Clock className="text-primary mb-2" size={20} />
                  <p className="font-semibold text-foreground text-sm mb-1">Coordination in Minutes</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">From detection to a structured response with the right people assigned, automatically.</p>
                </div>
                <div className="border border-border rounded-lg p-4 bg-white">
                  <ShieldCheck className="text-secondary mb-2" size={20} />
                  <p className="font-semibold text-foreground text-sm mb-1">No Rip-and-Replace</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">Connects to your existing SCADA, BMS, or monitoring systems via standard HTTP. Nothing changes in your stack.</p>
                </div>
                <div className="border border-border rounded-lg p-4 bg-white">
                  <Plug className="text-accent mb-2" size={20} />
                  <p className="font-semibold text-foreground text-sm mb-1">Universal Integration</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">Any system that sends HTTP POST connects through ChainSync's Universal Webhook Endpoint.</p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/contact">
                    <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 h-auto text-base font-semibold">
                      Apply for Founding Partnership
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/technology">
                    <Button variant="outline" className="px-6 py-3 h-auto text-base">
                      View Architecture
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right — Animated Flow Diagram */}
            <div className="hidden lg:block">
              <AnimatedHeroFlow />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Detection works. Coordination doesn't.
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Water utilities have sensors, SCADA systems, and monitoring infrastructure. The problem isn't detecting an incident. It's building a coordinated response fast enough to matter.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}>
              <Card className="p-6 bg-white border border-border h-full">
                <div className="text-4xl font-bold text-primary mb-2">4–6 hrs</div>
                <h3 className="font-semibold text-foreground mb-2">Manual Coordination Time</h3>
                <p className="text-muted-foreground text-sm">
                  Phone calls, emails, and spreadsheet updates to mobilize a response. Every minute spent coordinating is a minute the incident is uncontained.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}>
              <Card className="p-6 bg-white border border-border h-full">
                <div className="text-2xl font-bold text-secondary mb-2">Alerts ≠ Coordination</div>
                <h3 className="font-semibold text-foreground mb-2">Notifications don't build structure</h3>
                <p className="text-muted-foreground text-sm">
                  Everbridge pushes alerts. Slack enables conversation. ServiceNow tracks work after the fact. None of them build a coordinated response structure — that's still done manually.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}>
              <Card className="p-6 bg-white border border-border h-full">
                <div className="text-2xl font-bold text-accent mb-2">Minutes matter</div>
                <h3 className="font-semibold text-foreground mb-2">The regulatory window is narrow</h3>
                <p className="text-muted-foreground text-sm">
                  For water quality incidents, delayed coordination directly affects regulatory penalties, remediation costs, and community health outcomes. The response window isn't measured in days.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4-Step Timeline */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            From alert to coordinated response
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            ChainSync handles the alignment work so your team can focus on what matters: making decisions and taking action.
          </motion.p>

          <div className="relative">
            {/* Horizontal connector line — desktop only */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-border" />

            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {[
                {
                  label: "INGEST",
                  icon: <Wifi className="text-primary" size={24} />,
                  desc: "Universal Webhook receives events from any monitoring system, SCADA, BMS, or integration platform.",
                },
                {
                  label: "ANALYZE",
                  icon: <Cpu className="text-secondary" size={24} />,
                  desc: "Coordination agents evaluate the incident, classify severity, identify root cause, and map who needs to be involved.",
                },
                {
                  label: "ORCHESTRATE",
                  icon: <GitBranch className="text-accent" size={24} />,
                  desc: "ChainSync's scheduling layer books the response meeting, resolves calendar conflicts, and assigns ownership — automatically.",
                },
                {
                  label: "REPORT",
                  icon: <ClipboardList className="text-primary" size={24} />,
                  desc: "A complete, audit-ready compliance record is generated and stored for regulatory review.",
                },
              ].map((step, i) => (
                <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center mb-4 shadow-sm">
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold text-muted-foreground tracking-widest mb-2">{step.label}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link href="/how-it-works">
                <Button variant="outline" className="px-6 py-3 h-auto text-base">
                  See How It Works in Detail
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Components */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Three layers, one coordinated response
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Each layer does one job. Together they take an incident from detection to a documented, owned response structure.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}>
              <Card className="p-6 bg-white border border-border h-full">
                <Layers className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-semibold text-foreground mb-3">Integration Layer</h3>
                <p className="text-muted-foreground text-sm">
                  Built on MuleSoft, swappable with Workato, Boomi, or any iPaaS. Connects to your existing SCADA and monitoring systems via standard HTTP. No rip-and-replace.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}>
              <Card className="p-6 bg-white border border-border h-full">
                <Bot className="text-secondary mb-4" size={32} />
                <h3 className="text-xl font-semibold text-foreground mb-3">Coordination Agents</h3>
                <p className="text-muted-foreground text-sm">
                  17 Python coordination agents — each owns one job in the response pipeline: Detection, Analysis, Coordination, Documentation. Independent FastAPI services, modular by design.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}>
              <Card className="p-6 bg-white border border-border h-full">
                <Users className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-semibold text-foreground mb-3">Scheduling Layer</h3>
                <p className="text-muted-foreground text-sm">
                  Autonomous meeting coordination during incidents. Detects the right authority, resolves multi-calendar conflicts, applies emergency overrides. Google Calendar and Microsoft 365 supported.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Architecture Showcase */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Technical Architecture
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Three independently maintainable layers connected through standard HTTP. No proprietary protocols, no black boxes.
          </motion.p>

          <div className="max-w-3xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mb-6"
            >
              <ArchitectureAnimation />
            </motion.div>

            {/* Swappable callout */}
            <motion.div
              className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <h4 className="text-sm font-semibold text-foreground mb-2">Platform-Agnostic by Design</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                ChainSync's integration layer is decoupled from any single platform. MuleSoft is the current implementation, but any platform that supports HTTP POST — Workato, Boomi, Azure Logic Apps, or a customer's existing integration stack — can connect through the Universal Webhook Endpoint without changes to the agent or scheduling layers.
              </p>
            </motion.div>

            <div className="text-center mt-8">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Link href="/technology">
                  <Button variant="outline" className="px-6 py-3 h-auto text-base">
                    View Full Technical Details
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo / Scenario Walkthrough */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Scenario walkthrough available
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            We walk through a water quality incident end-to-end: from the SCADA alert to a coordinated response meeting with the right people assigned and an audit-ready record generated. No live system access needed.
          </motion.p>

          <motion.div
            className="relative max-w-4xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="bg-white border border-slate-200 rounded-xl flex items-center justify-center min-h-72 md:min-h-80 shadow-sm">
              <div className="text-center px-8">
                <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-5">
                  <Play className="text-primary ml-1" size={24} />
                </div>
                <p className="text-foreground font-semibold text-lg mb-2">Scenario Walkthrough</p>
                <p className="text-muted-foreground text-sm mb-6">Available to founding pilot partners</p>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                  <Link href="/contact">
                    <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 font-semibold">
                      Request a Walkthrough
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 md:py-20 bg-white">
        <motion.div
          className="container mx-auto px-4 max-w-3xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Built by someone who's watched coordination fail
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            <span className="font-semibold text-foreground">Uma Madasu</span> spent 6+ years as a MuleSoft Integration Engineer connecting enterprise systems at organizations including Blue Cross Blue Shield, Alfa Insurance, and EnerSys. He built ChainSync after repeatedly watching coordination break down in high-pressure environments — not because data was missing, but because teams lost shared context under pressure.
          </p>
          <p className="text-muted-foreground mb-6">
            Dual Master's in MIS and Cybersecurity. MuleSoft Developer Level 1 certified. Based in Atlanta, GA.
          </p>
          <a
            href="https://www.linkedin.com/company/getchainsync/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Connect on LinkedIn →
          </a>
        </motion.div>
      </section>

      {/* Pilot Program CTA */}
      <section id="pilot" className="py-12 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three founding pilot partnerships. Water utilities only.</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              We're accepting three mid-size regional water utilities to validate ChainSync in real incident environments. No upfront costs. No long-term commitment. Direct access to the founding team throughout.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp} className="bg-white/10 border border-white/20 rounded-lg p-6">
              <Server className="text-blue-200 mb-4" size={28} />
              <h3 className="font-semibold text-white mb-2">Direct influence over the product</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Your workflows shape what gets built. Founding partners define the product direction before public launch.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white/10 border border-white/20 rounded-lg p-6">
              <Wrench className="text-blue-200 mb-4" size={28} />
              <h3 className="font-semibold text-white mb-2">Hands-on integration support</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Direct help connecting ChainSync to your existing SCADA, BMS, or monitoring systems from the founding team.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white/10 border border-white/20 rounded-lg p-6">
              <ShieldCheck className="text-blue-200 mb-4" size={28} />
              <h3 className="font-semibold text-white mb-2">Priority pricing at launch</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                No upfront costs during the pilot. Founding partners receive preferential rates when ChainSync launches publicly.
              </p>
            </motion.div>
          </motion.div>

          <div className="text-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 h-auto text-base font-semibold">
                  Apply for Founding Partnership
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
