import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Radio, Brain, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import ProcessFlowAnimation from "@/components/ProcessFlowAnimation";
import ArchitectureAnimation from "@/components/ArchitectureAnimation";


export default function HowItWorks() {
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
            From Threat Detection to Coordinated Response
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground text-center max-w-3xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            ChainSync handles the coordination overhead so your team can focus on protecting communities. See how our four-step process works.
          </motion.p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-12"
          >
            <ProcessFlowAnimation />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Step 1 */}
            <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}>
              <Card className="p-6 bg-white border border-border h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <Radio className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">1. Detect</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Sensor data and external alerts ingested via API gateway. Anomaly detection triggers immediate analysis.
                </p>
                <div className="bg-blue-50 rounded px-3 py-1 inline-block">
                  <p className="text-sm font-semibold text-primary">~2 seconds</p>
                </div>
              </Card>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}>
              <Card className="p-6 bg-white border border-border h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <Brain className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">2. Analyze</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Context enrichment, risk scoring, and root cause analysis. Historical data + weather patterns + regulatory thresholds.
                </p>
                <div className="bg-green-50 rounded px-3 py-1 inline-block">
                  <p className="text-sm font-semibold text-secondary">~30 seconds</p>
                </div>
              </Card>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}>
              <Card className="p-6 bg-white border border-border h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4">
                  <Users className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">3. Coordinate</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Right teams notified, stakeholders alerted, regulators informed. Emergency meetings scheduled automatically.
                </p>
                <div className="bg-amber-50 rounded px-3 py-1 inline-block">
                  <p className="text-sm font-semibold text-accent">~50 seconds</p>
                </div>
              </Card>
            </motion.div>

            {/* Step 4 */}
            <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}>
              <Card className="p-6 bg-white border border-border h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg mb-4">
                  <Shield className="text-slate-700" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">4. Protect</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Complete audit trails, automated reports, compliance tracking. Your team focuses on resolution, not paperwork.
                </p>
                <div className="bg-slate-50 rounded px-3 py-1 inline-block">
                  <p className="text-sm font-semibold text-slate-700">Continuous</p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Detailed Process Breakdown
          </motion.h2>

          <motion.div
            className="space-y-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Detect */}
            <motion.div variants={fadeUp}>
            <Card className="p-8 bg-white border border-border">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg">
                    <Radio className="text-primary" size={32} />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Step 1: Detect</h3>
                  <p className="text-muted-foreground mb-4">
                    ChainSync ingests data from multiple sources: IoT sensors, SCADA systems, weather APIs, satellite data, and external alert systems. When anomalies are detected—whether it's a turbidity spike in water systems, an emissions threshold breach, or an unusual weather pattern—the system immediately flags the event and begins analysis.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Integration Hub:</span> Supports 22+ flow implementations across AWS, Azure, MuleSoft, and custom APIs with zero vendor lock-in.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            </motion.div>

            {/* Analyze */}
            <motion.div variants={fadeUp}>
            <Card className="p-8 bg-white border border-border">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg">
                    <Brain className="text-secondary" size={32} />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Step 2: Analyze</h3>
                  <p className="text-muted-foreground mb-4">
                    Our AI Agent Layer performs intelligent analysis. The detection agent identifies the anomaly type, the analysis agent enriches context with historical data and regulatory thresholds, and the reasoning agent (AI-powered) determines risk level and recommended actions.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">AI Agents:</span> 17 specialized Python agents including water emergency suite, industrial compliance suite, and general analysis agents.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            </motion.div>

            {/* Coordinate */}
            <motion.div variants={fadeUp}>
            <Card className="p-8 bg-white border border-border">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-lg">
                    <Users className="text-accent" size={32} />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Step 3: Coordinate</h3>
                  <p className="text-muted-foreground mb-4">
                    Based on the analysis, ChainSync automatically determines who needs to be notified and what actions are required. The coordination agent sends notifications to relevant teams via email, SMS, or webhook. The Slotify scheduler automatically books emergency meetings with the right stakeholders, checking calendars across Google Calendar, Microsoft 365, and other systems, with emergency override protocols for critical incidents.
                  </p>
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Slotify Scheduler:</span> Intelligent meeting coordination with multi-calendar conflict detection and automatic authority selection.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            </motion.div>

            {/* Protect */}
            <motion.div variants={fadeUp}>
            <Card className="p-8 bg-white border border-border">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-slate-100 rounded-lg">
                    <Shield className="text-slate-700" size={32} />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Step 4: Protect</h3>
                  <p className="text-muted-foreground mb-4">
                    Throughout the entire process, ChainSync maintains complete audit trails and generates compliance documentation automatically. The documentation agent creates incident reports, regulatory notifications, and compliance records. Your team can focus on the actual response—making decisions and taking action—while the system handles all the administrative overhead.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Compliance:</span> SOC2 compliant, 99.99% uptime SLA, multi-region deployment with automatic failover.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            System Architecture
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-12"
          >
            <ArchitectureAnimation />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp}>
            <Card className="p-6 bg-white border border-border h-full">
              <h3 className="text-lg font-semibold text-foreground mb-3">Sensor Integration Hub</h3>
              <p className="text-muted-foreground text-sm">
                Platform-agnostic orchestration connecting sensors, APIs, and external systems via standard webhooks. Supports weather sensors, gas/chemical sensors, satellite data, and custom APIs.
              </p>
            </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
            <Card className="p-6 bg-white border border-border h-full">
              <h3 className="text-lg font-semibold text-foreground mb-3">AI Agent Layer</h3>
              <p className="text-muted-foreground text-sm">
                17 specialized Python agents for detection, analysis, coordination, and documentation. AI-powered reasoning engine.
              </p>
            </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
            <Card className="p-6 bg-white border border-border h-full">
              <h3 className="text-lg font-semibold text-foreground mb-3">Response Coordination</h3>
              <p className="text-muted-foreground text-sm">
                Team notifications, emergency scheduling, compliance reporting. Integrates with Google Calendar, Microsoft 365, and custom notification systems.
              </p>
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
            Ready to See It in Action?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join our Q3 2026 pilot program and experience automated environmental emergency response.
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
