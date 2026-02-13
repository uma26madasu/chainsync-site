import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import EnhancedButton from "@/components/EnhancedButton";
import SectionDivider from "@/components/SectionDivider";
import { Link } from "wouter";
import { AlertCircle, Gauge, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const waterImage = "https://private-us-east-1.manuscdn.com/sessionFile/fLHByENkh1NN8vyrgLTxDx/sandbox/AOG14CIjCWaDgvTPqw9mk1-img-4_1770941851000_na1fn_Y2hhaW5zeW5jLXdhdGVyLW1vbml0b3Jpbmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZkxIQnlFTmtoMU5OOHZ5cmdMVHhEeC9zYW5kYm94L0FPRzE0Q0lqQ1dhRGd2VFBxdzltazEtaW1nLTRfMTc3MDk0MTg1MTAwMF9uYTFmbl9ZMmhoYVc1emVXNWpMWGRoZEdWeUxXMXZibWwwYjNKcGJtYy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Yrws-~L2p0hQkTjEcUwHNEao4wTpjSSRioF1eg6PdrxmZCXN8q0-QvRpXMWvSjH9vsOFlz~pA7j0On-79rXDIlTbkCWIVsKXBuy0J9V0ieLSkMQ7TrYf4DPpXYKIT0zTp7ZkcKDiA6Sl0gV9wTM14Q3kVP87Dw7o2neTgqCPKMKytVY2f0PQGvS0OIGDTtOYxqn6G6sLi-biQ0U1hguQsKDv85Zvvgt-tZLJx9rzX0nb2I1OlSsmphtYNV-~Gf7o4E2IQ6I5XKkXYjsgkxlJI4E57IPCupeULGdF2~8EHbdHbySdBXX3NaV2yKH6LGB-DjFgxOqw6vWn~ur~bAT6uQ__";

export default function UseCases() {
  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-100/40 via-transparent to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-green-100/30 via-transparent to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-amber-50/20 via-blue-50/20 to-purple-50/20 rounded-full blur-3xl animate-spin-slow"></div>
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
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-700 to-secondary">
                Use Cases for Environmental Emergency Response
              </h1>
            </motion.div>
            <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              ChainSync is purpose-built for organizations responsible for detecting and responding to environmental emergencies. Explore how different sectors benefit from automated coordination.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* Water Treatment Facilities */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
            <AnimatedSection delay={0.1}>
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-block bg-gradient-to-r from-blue-100 to-blue-50 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
                >
                  Water Quality Protection
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
                  Water Treatment Facilities
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">The Challenge</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Drinking water systems face constant threats from contamination events. When turbidity spikes, chemical anomalies appear, or pathogens are detected, treatment facilities must coordinate immediate response across multiple agencies and regulatory bodies—all while maintaining public safety and compliance documentation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">ChainSync Solution</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Real-time sensor monitoring detects anomalies in seconds. The platform automatically analyzes water quality data, correlates it with historical patterns and regulatory thresholds, and initiates coordinated response. Notifications go to treatment operators, public health officials, and regulatory agencies simultaneously. Compliance reports are generated automatically.
                    </p>
                  </div>

                  <GlassCard className="p-6" delay={0.2}>
                    <h4 className="text-xl font-semibold text-foreground mb-4">Key Benefits</h4>
                    <ul className="space-y-3 text-base text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1 text-xl">✓</span>
                        <span>Detect contamination events in seconds, not hours</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1 text-xl">✓</span>
                        <span>Automated multi-agency coordination and notifications</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1 text-xl">✓</span>
                        <span>Compliance documentation generated automatically</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1 text-xl">✓</span>
                        <span>Reduced public health risk through faster response</span>
                      </li>
                    </ul>
                  </GlassCard>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-2xl"></div>
                <img
                  src={waterImage}
                  alt="Water Treatment Facility Monitoring"
                  className="relative w-full rounded-2xl shadow-2xl ring-1 ring-white/50"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider variant="diagonal" />

      {/* Industrial Environmental Compliance */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
            <AnimatedSection delay={0.1} className="order-2 lg:order-1">
              <GlassCard className="p-12 h-full flex items-center justify-center" delay={0.2}>
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="inline-block mb-6"
                  >
                    <Gauge className="text-secondary" size={80} />
                  </motion.div>
                  <p className="text-xl text-muted-foreground">Industrial emissions monitoring and compliance tracking</p>
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-block bg-gradient-to-r from-green-100 to-green-50 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6"
                >
                  Emissions & Compliance
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-green-700">
                  Industrial Environmental Compliance
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">The Challenge</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Manufacturing and industrial facilities must continuously monitor emissions, manage environmental incidents, and maintain detailed compliance documentation. Regulatory requirements are complex, penalties for violations are severe, and response coordination across multiple departments and external agencies is time-consuming and error-prone.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">ChainSync Solution</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Continuous monitoring of emissions data with AI-powered anomaly detection. When thresholds are exceeded or incidents occur, ChainSync automatically notifies relevant teams, coordinates response actions, and generates compliance documentation. Integration with environmental management systems ensures seamless data flow.
                    </p>
                  </div>

                  <GlassCard className="p-6" delay={0.3}>
                    <h4 className="text-xl font-semibold text-foreground mb-4">Key Benefits</h4>
                    <ul className="space-y-3 text-base text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-secondary mt-1 text-xl">✓</span>
                        <span>Continuous emissions monitoring with instant alerts</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-secondary mt-1 text-xl">✓</span>
                        <span>Automated incident response coordination</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-secondary mt-1 text-xl">✓</span>
                        <span>Compliance documentation always audit-ready</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-secondary mt-1 text-xl">✓</span>
                        <span>Reduced regulatory penalties and operational downtime</span>
                      </li>
                    </ul>
                  </GlassCard>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider variant="dots" />

      {/* Municipal Emergency Response */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
            <AnimatedSection delay={0.1}>
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-block bg-gradient-to-r from-amber-100 to-amber-50 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
                >
                  Emergency Coordination
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 bg-clip-text text-transparent bg-gradient-to-r from-accent to-orange-600">
                  Municipal Emergency Response
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">The Challenge</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Cities and municipalities face diverse environmental threats—from flooding and chemical spills to air quality emergencies and waste management crises. Coordinating response across multiple departments, agencies, and jurisdictions is complex. Communication delays and coordination failures often result in delayed response and increased impact.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">ChainSync Solution</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      A unified platform for all environmental emergencies. Real-time monitoring feeds data from multiple sources. When incidents are detected, ChainSync automatically coordinates response across fire departments, public health, environmental agencies, and external partners. Emergency meetings are scheduled automatically with the right stakeholders.
                    </p>
                  </div>

                  <GlassCard className="p-6" delay={0.2}>
                    <h4 className="text-xl font-semibold text-foreground mb-4">Key Benefits</h4>
                    <ul className="space-y-3 text-base text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1 text-xl">✓</span>
                        <span>Unified platform for all environmental incident types</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1 text-xl">✓</span>
                        <span>Cross-department and cross-agency coordination</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1 text-xl">✓</span>
                        <span>Faster response reduces community impact</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1 text-xl">✓</span>
                        <span>Improved public communication and transparency</span>
                      </li>
                    </ul>
                  </GlassCard>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <GlassCard className="p-12 h-full flex items-center justify-center" delay={0.3}>
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block mb-6"
                  >
                    <Building2 className="text-accent" size={80} />
                  </motion.div>
                  <p className="text-xl text-muted-foreground">Multi-agency emergency coordination and response</p>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xMDUuODk1LTIgMi0yczIgLjg5NSAyIDItLjg5NSAyLTIgMi0yLS44OTUtMi0yem0tOC04YzAtMS4xMDUuODk1LTIgMi0yczIgLjg5NSAyIDItLjg5NSAyLTIgMi0yLS44OTUtMi0yem0yNCAyNGMwLTEuMTA1Ljg5NS0yIDItMnMyIC44OTUgMiAyLS44OTUgMi0yIDItMi0uODk1LTItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Is Your Organization a Good Fit?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              If you're responsible for detecting and responding to environmental emergencies, ChainSync can help you respond faster and coordinate better.
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
