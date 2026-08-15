import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            About ChainSync
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground text-center max-w-3xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Incident coordination infrastructure for regulated environments. Built by someone who watched coordination break down too many times.
          </motion.p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-8"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The problem worth solving
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Water utilities and hospitals have built serious monitoring infrastructure. Sensors, SCADA systems, BMS platforms, dashboards. They know when something goes wrong almost immediately.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The breakdown happens after detection. Getting the right people in the same room, with shared context, clear ownership, and a documented record: that still happens manually. Phone calls. Emails. Spreadsheet updates. Group chats with missing context.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For a water quality incident or a hospital facility emergency, that coordination gap can take 4–6 hours. In environments where the response window is measured in minutes, those hours have consequences: regulatory penalties, remediation costs, and community health outcomes.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-foreground font-semibold mb-2">The gap ChainSync fills</p>
                <p className="text-muted-foreground">
                  Everbridge pushes notifications. ServiceNow tracks work after the fact. Slack enables conversation. None of them automatically build a coordinated response structure: assigning ownership, notifying the right stakeholders simultaneously, maintaining incident state, and generating the compliance documentation. That's the gap ChainSync fills.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How it works — brief */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            What ChainSync does
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            17 coordination agents, each an independent Python service, handle the response pipeline automatically.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <Card className="p-6 bg-white border border-border h-full">
                <h3 className="text-lg font-semibold text-foreground mb-3">Integration Layer</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Connects to any monitoring system, SCADA platform, or building management system via standard HTTP webhooks. Built on MuleSoft, fully swappable. No rip-and-replace.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="p-6 bg-white border border-border h-full">
                <h3 className="text-lg font-semibold text-foreground mb-3">Coordination Agents</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Detection, analysis, coordination, and documentation, each handled by a separate agent. Modular by design: improve one without touching the others.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="p-6 bg-white border border-border h-full">
                <h3 className="text-lg font-semibold text-foreground mb-3">Scheduling Layer</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Autonomous meeting coordination. The right stakeholders, identified and booked across Google Calendar and Microsoft 365, with conflict detection and emergency override protocols.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="p-6 bg-white border border-border h-full">
                <h3 className="text-lg font-semibold text-foreground mb-3">Compliance Documentation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every action is logged. Incident reports, regulatory notifications, and audit trails are generated automatically, so your team focuses on response, not paperwork.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-6"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-foreground"
              variants={fadeUp}
            >
              Who built it
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              variants={fadeUp}
            >
              <span className="font-semibold text-foreground">Uma Madasu</span> spent 6+ years as a MuleSoft Integration Engineer connecting enterprise systems at organizations including Blue Cross Blue Shield, Alfa Insurance, and EnerSys. He built ChainSync after repeatedly watching coordination break down in high-pressure environments: not because the data wasn't there, but because the structure to act on it wasn't.
            </motion.p>

            <motion.p
              className="text-muted-foreground leading-relaxed"
              variants={fadeUp}
            >
              Dual Master's in MIS and Cybersecurity. MuleSoft Developer Level 1 certified. Based in Atlanta, GA.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://www.linkedin.com/company/getchainsync/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Connect on LinkedIn →
              </a>
              <a
                href="https://medium.com/@umamadasu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Read the Insights articles →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Verticals */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Who it's for
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            ChainSync is designed for regulated environments where incidents require fast, documented, multi-stakeholder response.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <Card className="p-8 bg-white border border-border h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold text-xl">💧</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Water & Wastewater Utilities</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Mid-size regional utilities dealing with SCADA-connected monitoring, EPA reporting requirements, and multi-agency coordination needs. The founding vertical.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ SCADA integration via standard HTTP</li>
                  <li>✓ EPA notification workflows</li>
                  <li>✓ Multi-agency response coordination</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="p-8 bg-white border border-border h-full">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold text-xl">🏥</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Hospital & Healthcare Facilities</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Facilities teams managing HVAC failures, hazmat incidents, and power events across complex, multi-department environments. ChainSync is designed to connect to building management systems via standard HTTP webhooks.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ BMS integration via standard HTTP webhooks</li>
                  <li>✓ Facilities + Clinical + Admin coordination</li>
                  <li>✓ HIPAA-ready audit trails</li>
                </ul>
              </Card>
            </motion.div>
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
            Founding pilot partnerships open now
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Water utilities and healthcare facilities. No upfront costs. No long-term commitment. Direct access to the founding team throughout.
          </p>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 h-auto text-base font-semibold">
                Apply for Founding Partnership
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
