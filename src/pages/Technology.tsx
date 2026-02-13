import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import EnhancedButton from "@/components/EnhancedButton";
import SectionDivider from "@/components/SectionDivider";
import { Link } from "wouter";
import { Code2, Database, Cloud, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Technology() {
  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-gradient-to-bl from-purple-100/40 via-transparent to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-blue-100/30 via-transparent to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-[800px] h-[800px] bg-gradient-to-r from-green-50/20 via-blue-50/20 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 via-white to-transparent relative">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-secondary">
                Technical Architecture
              </h1>
            </motion.div>
            <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              ChainSync is built on production-grade infrastructure designed for reliability, scalability, and zero downtime. Explore our technical stack and architecture.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* Infrastructure */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Production-Grade Infrastructure
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <GlassCard className="p-10" delay={0.1}>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mb-6"
              >
                <Cloud className="text-primary" size={56} />
              </motion.div>
              <h3 className="text-3xl font-semibold text-foreground mb-4">Multi-Region Deployment</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                ChainSync is deployed across multiple AWS regions (US-East-1, US-West-2, EU-West-1) with automatic failover and load balancing.
              </p>
              <ul className="space-y-3 text-base text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">✓</span>
                  <span>AWS Multi-AZ with automatic failover</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">✓</span>
                  <span>99.99% uptime SLA</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">✓</span>
                  <span>Zero downtime deployments</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard className="p-10" delay={0.2}>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="mb-6"
              >
                <Shield className="text-secondary" size={56} />
              </motion.div>
              <h3 className="text-3xl font-semibold text-foreground mb-4">Security & Compliance</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Enterprise-grade security with SOC2 compliance, encryption at rest and in transit, and comprehensive audit logging.
              </p>
              <ul className="space-y-3 text-base text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1 text-xl">✓</span>
                  <span>SOC2 Type II compliant</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1 text-xl">✓</span>
                  <span>AES-256 encryption at rest</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1 text-xl">✓</span>
                  <span>TLS 1.3 for all data in transit</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      <SectionDivider variant="diagonal" />

      {/* Technical Stack */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              Technical Stack
            </h2>
          </AnimatedSection>

          <GlassCard className="overflow-hidden" delay={0.2}>
            <div className="overflow-x-auto">
              <table className="w-full text-base">
                <thead>
                  <tr className="border-b-2 border-primary/20 bg-gradient-to-r from-blue-50 to-purple-50">
                    <th className="text-left py-5 px-6 font-semibold text-foreground text-lg">Component</th>
                    <th className="text-left py-5 px-6 font-semibold text-foreground text-lg">Technology</th>
                    <th className="text-left py-5 px-6 font-semibold text-foreground text-lg">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 hover:bg-blue-50/30 transition-colors">
                    <td className="py-5 px-6 text-muted-foreground font-medium">Agent Framework</td>
                    <td className="py-5 px-6 text-foreground font-semibold">Python 3.11 + FastAPI</td>
                    <td className="py-5 px-6 text-muted-foreground">Specialized agent execution and API webhooks</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-blue-50/30 transition-colors">
                    <td className="py-5 px-6 text-muted-foreground font-medium">AI Models</td>
                    <td className="py-5 px-6 text-foreground font-semibold">GPT-4 + Custom Models</td>
                    <td className="py-5 px-6 text-muted-foreground">Reasoning, analysis, and decision support</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-blue-50/30 transition-colors">
                    <td className="py-5 px-6 text-muted-foreground font-medium">Vector Storage</td>
                    <td className="py-5 px-6 text-foreground font-semibold">ChromaDB</td>
                    <td className="py-5 px-6 text-muted-foreground">Memory and pattern learning for agents</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-blue-50/30 transition-colors">
                    <td className="py-5 px-6 text-muted-foreground font-medium">Scheduler</td>
                    <td className="py-5 px-6 text-foreground font-semibold">React + Express + MongoDB</td>
                    <td className="py-5 px-6 text-muted-foreground">Emergency meeting scheduling (Slotify)</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-blue-50/30 transition-colors">
                    <td className="py-5 px-6 text-muted-foreground font-medium">Database</td>
                    <td className="py-5 px-6 text-foreground font-semibold">PostgreSQL + MongoDB</td>
                    <td className="py-5 px-6 text-muted-foreground">Structured data and document storage</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-blue-50/30 transition-colors">
                    <td className="py-5 px-6 text-muted-foreground font-medium">Message Queue</td>
                    <td className="py-5 px-6 text-foreground font-semibold">AWS SQS</td>
                    <td className="py-5 px-6 text-muted-foreground">Asynchronous event processing</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-blue-50/30 transition-colors">
                    <td className="py-5 px-6 text-muted-foreground font-medium">Monitoring</td>
                    <td className="py-5 px-6 text-foreground font-semibold">CloudWatch + DataDog</td>
                    <td className="py-5 px-6 text-muted-foreground">System health and performance tracking</td>
                  </tr>
                  <tr className="hover:bg-blue-50/30 transition-colors">
                    <td className="py-5 px-6 text-muted-foreground font-medium">Integration</td>
                    <td className="py-5 px-6 text-foreground font-semibold">Standard Webhooks</td>
                    <td className="py-5 px-6 text-muted-foreground">Platform-agnostic API integration</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
      </section>

      <SectionDivider variant="dots" />

      {/* Core Components */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
              Core Components
            </h2>
          </AnimatedSection>

          <div className="space-y-10">
            {/* Universal Integration Hub */}
            <GlassCard className="p-10" delay={0.1}>
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16"
                  >
                    <Code2 className="text-primary w-full h-full" />
                  </motion.div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl font-semibold text-foreground mb-4">Universal Integration Hub</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Platform-agnostic orchestration layer that connects to any sensor, API, or external system via standard webhooks. No vendor lock-in, no proprietary protocols.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-6 border border-blue-200/50">
                      <h4 className="font-semibold text-foreground text-lg mb-3">Supported Integrations</h4>
                      <ul className="space-y-2 text-base text-muted-foreground">
                        <li>✓ AWS IoT Core</li>
                        <li>✓ Azure IoT Hub</li>
                        <li>✓ MuleSoft</li>
                        <li>✓ Custom REST APIs</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border border-purple-200/50">
                      <h4 className="font-semibold text-foreground text-lg mb-3">Data Sources</h4>
                      <ul className="space-y-2 text-base text-muted-foreground">
                        <li>✓ 22+ flow implementations</li>
                        <li>✓ NASA satellite data</li>
                        <li>✓ Weather APIs</li>
                        <li>✓ Custom sensors</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* AI Agent Layer */}
            <GlassCard className="p-10" delay={0.2}>
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16"
                  >
                    <Code2 className="text-secondary w-full h-full" />
                  </motion.div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl font-semibold text-foreground mb-4">AI Agent Layer</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    12 specialized Python agents, each designed to excel at a specific task. Modular architecture means we can improve individual agents without disrupting the entire system.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-6 border border-green-200/50">
                      <h4 className="font-semibold text-foreground text-lg mb-3">Core Agents</h4>
                      <ul className="space-y-2 text-base text-muted-foreground">
                        <li>✓ Detection Agent</li>
                        <li>✓ Analysis Agent</li>
                        <li>✓ Reasoning Agent (GPT-4)</li>
                        <li>✓ Coordination Agent</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl p-6 border border-amber-200/50">
                      <h4 className="font-semibold text-foreground text-lg mb-3">Specialized Agents</h4>
                      <ul className="space-y-2 text-base text-muted-foreground">
                        <li>✓ Water Emergency Suite (5 agents)</li>
                        <li>✓ Industrial Compliance Suite</li>
                        <li>✓ Documentation Agent</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Slotify Scheduler */}
            <GlassCard className="p-10" delay={0.3}>
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16"
                  >
                    <Database className="text-accent w-full h-full" />
                  </motion.div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl font-semibold text-foreground mb-4">Slotify Emergency Scheduler</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Autonomous meeting coordination that intelligently selects the right stakeholders and books emergency meetings across multiple calendar systems with conflict detection and override protocols.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-xl p-6 border border-red-200/50">
                      <h4 className="font-semibold text-foreground text-lg mb-3">Calendar Integration</h4>
                      <ul className="space-y-2 text-base text-muted-foreground">
                        <li>✓ Google Calendar</li>
                        <li>✓ Microsoft 365</li>
                        <li>✓ Custom calendar systems</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-orange-200/50">
                      <h4 className="font-semibold text-foreground text-lg mb-3">Features</h4>
                      <ul className="space-y-2 text-base text-muted-foreground">
                        <li>✓ Multi-calendar conflict detection</li>
                        <li>✓ Emergency override protocols</li>
                        <li>✓ Intelligent authority selection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* Performance & Reliability */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Performance & Reliability
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <GlassCard className="p-10" delay={0.1}>
              <h3 className="text-3xl font-semibold text-foreground mb-8">Uptime & Availability</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-base text-muted-foreground mb-2">SLA Guarantee</p>
                  <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">99.99%</p>
                </div>
                <div>
                  <p className="text-base text-muted-foreground mb-2">Automatic Failover</p>
                  <p className="text-2xl font-semibold text-foreground">Multi-AZ with &lt;1s recovery</p>
                </div>
                <div>
                  <p className="text-base text-muted-foreground mb-2">Deployment Strategy</p>
                  <p className="text-2xl font-semibold text-foreground">Zero-downtime deployments</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-10" delay={0.2}>
              <h3 className="text-3xl font-semibold text-foreground mb-8">Response Times</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-base text-muted-foreground mb-2">Detection</p>
                  <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-700">~2 seconds</p>
                </div>
                <div>
                  <p className="text-base text-muted-foreground mb-2">Analysis & Coordination</p>
                  <p className="text-2xl font-semibold text-foreground">~80 seconds</p>
                </div>
                <div>
                  <p className="text-base text-muted-foreground mb-2">Total Response Time</p>
                  <p className="text-2xl font-semibold text-foreground">&lt;90 seconds</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <SectionDivider variant="diagonal" />

      {/* API Documentation */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
              API Documentation
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto leading-relaxed">
              ChainSync provides comprehensive REST APIs for integration, monitoring, and management. Full documentation is available to pilot partners.
            </p>
            <div className="text-center">
              <EnhancedButton variant="outline" size="lg">
                View Full Technical Documentation
              </EnhancedButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xMDUuODk1LTIgMi0yczIgLjg5NSAyIDItLjg5NSAyLTIgMi0yLS44OTUtMi0yem0tOC04YzAtMS4xMDUuODk1LTIgMi0yczIgLjg5NSAyIDItLjg5NSAyLTIgMi0yLS44OTUtMi0yem0yNCAyNGMwLTEuMTA1Ljg5NS0yIDItMnMyIC44OTUgMiAyLS44OTUgMi0yIDItMi0uODk1LTItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Interested in the Technical Details?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Get access to our full API documentation and technical specifications as a pilot partner.
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
