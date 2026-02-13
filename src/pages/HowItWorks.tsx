import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import EnhancedButton from "@/components/EnhancedButton";
import SectionDivider from "@/components/SectionDivider";
import { Link } from "wouter";
import { Radio, Brain, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";

const processImage = "https://private-us-east-1.manuscdn.com/sessionFile/fLHByENkh1NN8vyrgLTxDx/sandbox/AOG14CIjCWaDgvTPqw9mk1-img-3_1770941842000_na1fn_Y2hhaW5zeW5jLXByb2Nlc3MtZmxvdw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZkxIQnlFTmtoMU5OOHZ5cmdMVHhEeC9zYW5kYm94L0FPRzE0Q0lqQ1dhRGd2VFBxdzltazEtaW1nLTNfMTc3MDk0MTg0MjAwMF9uYTFmbl9ZMmhoYVc1emVXNWpMWEJ5YjJObGMzTXRabXh2ZHcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JretJQ4Hi8GU13PkcYiqz~dAUEME2EjUs1WkHNSZXWVw8ExRe3q4E29Nf5t3KiwbzWVxbNqjo2j4WMmrlhwyyjhEAquOYHRgcXCzyj0MwmFE172OIF0S8-nA81rRVsxM2gnR15PBQF2zUKqW8FPMNWpkG4OUsXmKjLUNaWdAk2eA8uYlAyI2SDUMYAC9DjdjHvUKD9GTKwaUk0-HtHmDOwVYANGAoKdEiI9~brbXdgjfnr9fVI5fq6yEhQKjVQHI3PnHdIeJP8nwHYkik-pfyEtW-uZRpeHhzTb2f7Mzb3M2f-ffjBaiNXtI-W08PWcpCqCFexSHlQnyyzl~oIMQgA__";

const architectureImage = "https://private-us-east-1.manuscdn.com/sessionFile/fLHByENkh1NN8vyrgLTxDx/sandbox/AOG14CIjCWaDgvTPqw9mk1-img-2_1770941846000_na1fn_Y2hhaW5zeW5jLWFyY2hpdGVjdHVyZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZkxIQnlFTmtoMU5OOHZ5cmdMVHhEeC9zYW5kYm94L0FPRzE0Q0lqQ1dhRGd2VFBxdzltazEtaW1nLTJfMTc3MDk0MTg0NjAwMF9uYTFmbl9ZMmhoYVc1emVXNWpMV0Z5WTJocGRHVmpkSFZ5WlEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TyTZFqdgFxPPBUTfMpLMtOWw75zmDnbW-ZH6Q4NcJv1rfyGlzsyi-S-Go23Oos6CiMA-awcLnGvVuZA~MOmBvHG4VksTMI-Mtob4G9lqpaoZSPRSJ7yc4qCiazwnGyLS0300OAiFc0Y9C9Ses2PqmOIAJOqybthXnKKCpxAORlQINTeorGyunpqzpX40YTcd2Jo~zmsztbaYJuAF1Yf9tVbamrMwXO0T2VqnW59iplToJfOqzHRhTuXiZSeAAtTjfhlPng3ouJYD-MAHWTDSMbeUXe8mi3h5WmXMvkex7MRHTHzOh7p4aJ1Ozb0m~fp7bhdxQjaAIsKwgwzK4~2~Sg__";

export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-blue-100/40 via-transparent to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-green-100/30 via-transparent to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-purple-50/20 via-blue-50/20 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <Header />

      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-blue-50 via-white to-transparent relative">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                From Threat Detection to Coordinated Response
              </h1>
            </motion.div>
            <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              ChainSync handles the coordination overhead so your team can focus on protecting communities. See how our four-step process works.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* Process Overview */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <img
                src={processImage}
                alt="ChainSync 4-Step Process"
                className="relative w-full rounded-2xl shadow-2xl ring-1 ring-white/50 mb-8"
              />
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="text-center mb-10">
              <p className="text-2xl md:text-3xl text-muted-foreground">
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Total: Under 90 seconds</span> from threat detection to coordinated response
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <GlassCard className="p-6" delay={0.1}>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-6 shadow-lg"
              >
                <Radio className="text-primary" size={32} />
              </motion.div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">1. Detect</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Sensor data and external alerts ingested via API gateway. Anomaly detection triggers immediate analysis.
              </p>
              <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg px-4 py-2 inline-block">
                <p className="font-semibold text-primary text-lg">~2 seconds</p>
              </div>
            </GlassCard>

            {/* Step 2 */}
            <GlassCard className="p-6" delay={0.2}>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl mb-6 shadow-lg"
              >
                <Brain className="text-secondary" size={32} />
              </motion.div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">2. Analyze</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Context enrichment, risk scoring, and root cause analysis. Historical data + weather patterns + regulatory thresholds.
              </p>
              <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-lg px-4 py-2 inline-block">
                <p className="font-semibold text-secondary text-lg">~30 seconds</p>
              </div>
            </GlassCard>

            {/* Step 3 */}
            <GlassCard className="p-6" delay={0.3}>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl mb-6 shadow-lg"
              >
                <Users className="text-accent" size={32} />
              </motion.div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">3. Coordinate</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Right teams notified, stakeholders alerted, regulators informed. Emergency meetings scheduled automatically.
              </p>
              <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-lg px-4 py-2 inline-block">
                <p className="font-semibold text-accent text-lg">~50 seconds</p>
              </div>
            </GlassCard>

            {/* Step 4 */}
            <GlassCard className="p-6" delay={0.4}>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl mb-6 shadow-lg"
              >
                <Shield className="text-slate-700" size={32} />
              </motion.div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">4. Protect</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Complete audit trails, automated reports, compliance tracking. Your team focuses on resolution, not paperwork.
              </p>
              <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg px-4 py-2 inline-block">
                <p className="font-semibold text-slate-700 text-lg">Continuous</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <SectionDivider variant="diagonal" />

      {/* Detailed Steps */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Detailed Process Breakdown
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {/* Detect */}
            <GlassCard className="p-6" delay={0.1}>
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-lg"
                  >
                    <Radio className="text-primary" size={40} />
                  </motion.div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl font-semibold text-foreground mb-4">Step 1: Detect</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    ChainSync ingests data from multiple sources: IoT sensors, SCADA systems, weather APIs, satellite data, and external alert systems. When anomalies are detected—whether it's a turbidity spike in water systems, an emissions threshold breach, or an unusual weather pattern—the system immediately flags the event and begins analysis.
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl p-6 border border-blue-200/50">
                    <p className="text-base text-foreground leading-relaxed">
                      <span className="font-semibold text-primary">Integration Hub:</span> Supports 22+ flow implementations across AWS, Azure, MuleSoft, and custom APIs with zero vendor lock-in.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Analyze */}
            <GlassCard className="p-6" delay={0.2}>
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-lg"
                  >
                    <Brain className="text-secondary" size={40} />
                  </motion.div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl font-semibold text-foreground mb-4">Step 2: Analyze</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Our AI Agent Layer performs intelligent analysis. The detection agent identifies the anomaly type, the analysis agent enriches context with historical data and regulatory thresholds, and the reasoning agent (powered by GPT-4) determines risk level and recommended actions. All analysis is stored in ChromaDB for pattern learning and continuous improvement.
                  </p>
                  <div className="bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl p-6 border border-green-200/50">
                    <p className="text-base text-foreground leading-relaxed">
                      <span className="font-semibold text-secondary">AI Agents:</span> 12 specialized Python agents including water emergency suite, industrial compliance suite, and general analysis agents.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Coordinate */}
            <GlassCard className="p-6" delay={0.3}>
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl shadow-lg"
                  >
                    <Users className="text-accent" size={40} />
                  </motion.div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl font-semibold text-foreground mb-4">Step 3: Coordinate</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Based on the analysis, ChainSync automatically determines who needs to be notified and what actions are required. The coordination agent sends notifications to relevant teams via email, SMS, or webhook. The Slotify scheduler automatically books emergency meetings with the right stakeholders, checking calendars across Google Calendar, Microsoft 365, and other systems, with emergency override protocols for critical incidents.
                  </p>
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-xl p-6 border border-amber-200/50">
                    <p className="text-base text-foreground leading-relaxed">
                      <span className="font-semibold text-accent">Slotify Scheduler:</span> Intelligent meeting coordination with multi-calendar conflict detection and automatic authority selection.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Protect */}
            <GlassCard className="p-6" delay={0.4}>
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl shadow-lg"
                  >
                    <Shield className="text-slate-700" size={40} />
                  </motion.div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl font-semibold text-foreground mb-4">Step 4: Protect</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Throughout the entire process, ChainSync maintains complete audit trails and generates compliance documentation automatically. The documentation agent creates incident reports, regulatory notifications, and compliance records. Your team can focus on the actual response—making decisions and taking action—while the system handles all the administrative overhead.
                  </p>
                  <div className="bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-xl p-6 border border-slate-200/50">
                    <p className="text-base text-foreground leading-relaxed">
                      <span className="font-semibold text-slate-700">Compliance:</span> SOC2 compliant, 99.99% uptime SLA, multi-region deployment with automatic failover.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <SectionDivider variant="dots" />

      {/* System Architecture */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              System Architecture
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative mb-10"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 via-accent/20 to-primary/20 rounded-2xl blur-2xl"></div>
              <img
                src={architectureImage}
                alt="ChainSync System Architecture"
                className="relative w-full rounded-2xl shadow-2xl ring-1 ring-white/50"
              />
            </motion.div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="p-8" delay={0.1}>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Sensor Integration Hub</h3>
              <p className="text-muted-foreground leading-relaxed">
                Platform-agnostic orchestration connecting sensors, APIs, and external systems via standard webhooks. Supports weather sensors, gas/chemical sensors, satellite data, and custom APIs.
              </p>
            </GlassCard>

            <GlassCard className="p-8" delay={0.2}>
              <h3 className="text-2xl font-semibold text-foreground mb-4">AI Agent Layer</h3>
              <p className="text-muted-foreground leading-relaxed">
                12 specialized Python agents for detection, analysis, coordination, and documentation. Memory agent with ChromaDB vector storage and GPT-4 powered reasoning engine.
              </p>
            </GlassCard>

            <GlassCard className="p-8" delay={0.3}>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Response Coordination</h3>
              <p className="text-muted-foreground leading-relaxed">
                Team notifications, emergency scheduling, compliance reporting. Integrates with Google Calendar, Microsoft 365, and custom notification systems.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xMDUuODk1LTIgMi0yczIgLjg5NSAyIDItLjg5NSAyLTIgMi0yLS44OTUtMi0yem0tOC04YzAtMS4xMDUuODk1LTIgMi0yczIgLjg5NSAyIDItLjg5NSAyLTIgMi0yLS44OTUtMi0yem0yNCAyNGMwLTEuMTA1Ljg5NS0yIDItMnMyIC44OTUgMiAyLS44OTUgMi0yIDItMi0uODk1LTItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to See It in Action?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Join our Q3 2026 pilot program and experience automated environmental emergency response.
            </p>

            <Link href="/contact">
              <EnhancedButton variant="outline" size="xl" showArrow className="bg-white text-primary hover:bg-blue-50 border-white">
                Request Early Access
              </EnhancedButton>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
