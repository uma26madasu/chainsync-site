import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Clock, ShieldCheck, Plug, Wifi, Cpu, GitBranch, ClipboardList, Droplets, Factory, Building2, Play, Layers, Bot, Calendar, ArrowRight, Server, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, fadeIn, stagger, viewport } from "@/lib/motion";
import CountUp from "@/components/CountUp";
import AnimatedHeroFlow from "@/components/AnimatedHeroFlow";
import ArchitectureAnimation from "@/components/ArchitectureAnimation";

const TAB_DATA = {
  water: {
    label: "Water Treatment",
    title: "Water Treatment Facilities",
    subtitle: "EPA SDWA compliance and contamination response",
    capabilities: [
      "Automated EPA violation triage and documentation",
      "Coordinated response when water quality thresholds are breached",
      "Audit-ready EPA SDWA compliance records",
      "Automated multi-agency notification when public health thresholds are crossed",
    ],
  },
  industrial: {
    label: "Industrial Compliance",
    title: "Industrial Environmental Compliance",
    subtitle: "OSHA, EPA RMP, and multi-facility coordination",
    capabilities: [
      "Equipment failure response coordination",
      "OSHA and EPA RMP incident documentation",
      "Multi-team coordination across facilities",
      "Continuous emissions threshold monitoring with automatic escalation",
    ],
  },
  municipal: {
    label: "Municipal Response",
    title: "Municipal Emergency Response",
    subtitle: "FEMA NIMS/ICS-aligned cross-agency coordination",
    capabilities: [
      "Multi-agency emergency coordination",
      "Incident timeline and documentation aligned to FEMA NIMS/ICS structure",
      "Automated stakeholder notification",
      "Cross-department response tracking from detection through resolution",
    ],
  },
} as const;



export default function Home() {
  const [activeTab, setActiveTab] = useState<keyof typeof TAB_DATA>("water");

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
                Early Access Program
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                From Hours of Coordination to Minutes — Automatically
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                ChainSync ingests alerts from any monitoring system, runs them through 17 specialized AI agents, and automatically coordinates the right people — from detection to a scheduled response meeting, without manual handoff.
              </motion.p>

              {/* Value Prop Micro-Cards */}
              <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="border border-border rounded-lg p-4 bg-white">
                  <Clock className="text-primary mb-2" size={20} />
                  <p className="font-semibold text-foreground text-sm mb-1">Coordination in Minutes, Not Hours</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">From detection to a scheduled emergency response with the right people — automatically.</p>
                </div>
                <div className="border border-border rounded-lg p-4 bg-white">
                  <ShieldCheck className="text-secondary mb-2" size={20} />
                  <p className="font-semibold text-foreground text-sm mb-1">Encrypted, Access-Controlled Infrastructure</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">AES-256 encryption, signed webhooks, and role-based access across every workflow.</p>
                </div>
                <div className="border border-border rounded-lg p-4 bg-white">
                  <Plug className="text-accent mb-2" size={20} />
                  <p className="font-semibold text-foreground text-sm mb-1">Universal API Integration</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">Any system that can send an HTTP POST connects through ChainSync's Universal Webhook Endpoint.</p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/contact">
                    <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 h-auto text-base font-semibold">
                      Request Early Access
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
            className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            The Reality of Environmental Emergencies
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}>
              <Card className="p-6 bg-white border border-border h-full">
                <div className="text-4xl font-bold text-primary mb-2">
                  <CountUp end={50} suffix="K+" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Annual U.S. Environmental Incidents</h3>
                <p className="text-muted-foreground text-sm">
                  Water quality violations, chemical spills, and waste emergencies reported each year
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}>
              <Card className="p-6 bg-white border border-border h-full">
                <div className="text-4xl font-bold text-secondary mb-2">4-6hrs</div>
                <h3 className="font-semibold text-foreground mb-2">Average Manual Coordination Time</h3>
                <p className="text-muted-foreground text-sm">
                  Phone calls, emails, spreadsheet updates to mobilize multi-agency response
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}>
              <Card className="p-6 bg-white border border-border h-full">
                <div className="text-4xl font-bold text-accent mb-2">
                  <CountUp end={73} suffix="%" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Responses Delayed by Coordination</h3>
                <p className="text-muted-foreground text-sm">
                  Environmental incidents where response was delayed, missing the window for effective action
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
            From Threat Detection to Coordinated Response
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            ChainSync's Closed-Loop Incident Management covers all 7 phases — from the first alert to a closed, documented record.
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
                  desc: "Universal Webhook receives events from any monitoring system, BMS, SCADA, or integration platform.",
                },
                {
                  label: "ANALYZE",
                  icon: <Cpu className="text-secondary" size={24} />,
                  desc: "17 specialized Python agents evaluate risk, classify severity, and identify root cause.",
                },
                {
                  label: "ORCHESTRATE",
                  icon: <GitBranch className="text-accent" size={24} />,
                  desc: "Slotify schedules an emergency response meeting and assigns action items automatically.",
                },
                {
                  label: "REPORT",
                  icon: <ClipboardList className="text-primary" size={24} />,
                  desc: "A complete, audit-ready compliance record is generated and exportable as a PDF.",
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
                  Learn More About Our Process
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
            Our Platform
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Three integrated components working together to deliver end-to-end environmental emergency coordination.
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
                  Platform-agnostic orchestration built on MuleSoft — swappable with Workato, Boomi, and more. Any external system can trigger ChainSync via HTTP POST using the Universal Webhook Endpoint.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}>
              <Card className="p-6 bg-white border border-border h-full">
                <div className="flex items-center justify-between mb-4">
                  <Calendar className="text-secondary" size={32} />
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-50 text-green-600 border border-green-200">
                    Live
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Slotify</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Intelligent emergency response scheduling and multi-agency coordination. Google Calendar two-way sync, automated emergency response scheduling, and Closed-Loop Incident Management across all 7 phases.
                </p>
                <a
                  href="https://slotify.getchainsync.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-secondary font-medium text-sm hover:underline"
                >
                  Open Slotify →
                </a>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}>
              <Card className="p-6 bg-white border border-border h-full">
                <Bot className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-semibold text-foreground mb-3">AI Agents</h3>
                <p className="text-muted-foreground text-sm">
                  17 specialized Python agents providing intelligent risk analysis and incident coordination. AI-powered reasoning for detection, analysis, and response coordination.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tabbed Verticals */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Built for Environmental Protection Teams
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            ChainSync is designed for organizations responsible for detecting and responding to environmental and compliance emergencies.
          </p>

          {/* Tab Buttons */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex border border-border rounded-lg p-1 bg-white gap-1">
              {(["water", "industrial", "municipal"] as const).map((key) => {
                const icons = { water: <Droplets size={16} />, industrial: <Factory size={16} />, municipal: <Building2 size={16} /> };
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === key
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {icons[key]}
                    {TAB_DATA[key].label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-white border border-border overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeTab}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-1">{TAB_DATA[activeTab].title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{TAB_DATA[activeTab].subtitle}</p>
                  <ul className="space-y-3">
                    {TAB_DATA[activeTab].capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-0.5">✓</span>
                        <span className="text-foreground text-sm leading-relaxed">{cap}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                      <Link href="/use-cases">
                        <Button variant="outline" className="gap-2">
                          Explore {TAB_DATA[activeTab].label} Details
                          <ArrowRight size={16} />
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>
          </div>
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
            Three independently maintainable layers connected through standard HTTP — no proprietary protocols, no black boxes.
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
                ChainSync's integration layer is decoupled from any single platform. MuleSoft is the current implementation, but any platform that supports HTTP POST — Workato, Boomi, Azure Logic Apps, or a customer's existing integration stack — can connect through the Universal Webhook Endpoint without changes to the agent layer or Slotify.
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

      {/* Demo Placeholder */}
      <section className="py-12 md:py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            See ChainSync in Action
          </motion.h2>
          <motion.p
            className="text-lg text-slate-400 text-center mb-12 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Product walkthrough coming soon. Request early access to schedule a live demo with the team.
          </motion.p>

          <motion.div
            className="relative max-w-4xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Main glassmorphism container */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center min-h-72 md:min-h-96">
              <div className="text-center px-8">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-5">
                  <Play className="text-white ml-1" size={24} />
                </div>
                <p className="text-white font-semibold text-lg mb-2">Product Walkthrough</p>
                <p className="text-slate-400 text-sm">Demo video coming soon</p>
              </div>
            </div>

            {/* Side badges — visible on large screens only */}
            <div className="hidden lg:flex flex-col gap-3 absolute -left-4 top-1/2 -translate-y-1/2">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2">
                <p className="text-white text-xs font-medium">Live Agent Processing Logs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2">
                <p className="text-white text-xs font-medium">MuleSoft Integration Layer</p>
              </div>
            </div>
            <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2">
                <p className="text-white text-xs font-medium">Closed-Loop Incident Tracking</p>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-10">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link href="/contact">
                <Button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 h-auto text-base font-semibold">
                  Schedule a Live Demo
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 md:py-20 bg-slate-50">
        <motion.div
          className="container mx-auto px-4 max-w-3xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Built by someone who's done this
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            <span className="font-semibold text-foreground">Uma Madasu</span> — 6+ years as a MuleSoft Integration Engineer, working with enterprise clients including Blue Cross Blue Shield, Alfa Insurance, and EnerSys. I built ChainSync because I kept seeing the same problem: critical systems that couldn't talk to each other when it mattered most. Emergency response shouldn't depend on phone trees and spreadsheets.
          </p>
          <p className="text-muted-foreground mb-6">
            Dual Master's in MIS and Cybersecurity. MuleSoft Developer Level 1 certified. Based in Atlanta, GA.
          </p>
          <a
            href="https://www.linkedin.com/in/madasu-r-3265aba7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Connect on LinkedIn →
          </a>
        </motion.div>
      </section>

      {/* Pilot Program CTA */}
      <section id="early-access" className="py-12 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Founding Pilot Partners</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              We're partnering with a small group of organizations to evaluate ChainSync against real workflows. No long-term commitment. No upfront costs. No disruption to what's already running.
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
              <h3 className="font-semibold text-white mb-2">Dedicated Sandbox Instance</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                An isolated environment to evaluate ChainSync against your own workflows — not a shared demo.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white/10 border border-white/20 rounded-lg p-6">
              <Wrench className="text-blue-200 mb-4" size={28} />
              <h3 className="font-semibold text-white mb-2">Hands-On Integration Support</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Direct help connecting ChainSync to your existing SCADA, BMS, or monitoring systems.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white/10 border border-white/20 rounded-lg p-6">
              <ShieldCheck className="text-blue-200 mb-4" size={28} />
              <h3 className="font-semibold text-white mb-2">Zero Disruption to Existing Operations</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                ChainSync runs alongside current systems. Nothing is replaced, nothing is interrupted.
              </p>
            </motion.div>
          </motion.div>

          <div className="text-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 h-auto text-base font-semibold">
                  Apply for Early Access
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
