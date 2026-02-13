import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import EnhancedButton from "@/components/EnhancedButton";
import StatsCard from "@/components/StatsCard";
import FloatingBadge from "@/components/FloatingBadge";
import SectionDivider from "@/components/SectionDivider";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { AlertCircle, Zap, Lock, Plug, TrendingDown, Gauge, Clock } from "lucide-react";

const heroImage = "https://private-us-east-1.manuscdn.com/sessionFile/fLHByENkh1NN8vyrgLTxDx/sandbox/AOG14CIjCWaDgvTPqw9mk1-img-1_1770941850000_na1fn_Y2hhaW5zeW5jLWhlcm8.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZkxIQnlFTmtoMU5OOHZ5cmdMVHhEeC9zYW5kYm94L0FPRzE0Q0lqQ1dhRGd2VFBxdzltazEtaW1nLTFfMTc3MDk0MTg1MDAwMF9uYTFmbl9ZMmhoYVc1emVXNWpMV2hsY204LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fPdd~r9jerr1LgKsR4PlbPIsR05w33-GCfuabBbEhLszznLamJyF~wnTDxtxie0efwIq8hYp7BGSa-CIfYdj-CFkMHm9C8jcoGS5CCt3U19qFlRdfF-57-5wF~kwW4H7kuZpak9UUrsGmQlib9JVWCzRRweNk1GukcpgYJxzvZ6WAwPZRBDhbevihD67D1uvCFTw~vZWv5CScO5lBnBq~Y~MHs9pWgMhqMUg3Sd06UFCG2Io9VRiBuhyNep6T2N0bfUaFD4bL5N5ValtU2YqONleXZVpMDim95HLOZfr4aHOXvdx6THz5OI9F8iOD9gqqoFo-QPzc2RMMr6empwoTA__";

const processImage = "https://private-us-east-1.manuscdn.com/sessionFile/fLHByENkh1NN8vyrgLTxDx/sandbox/AOG14CIjCWaDgvTPqw9mk1-img-3_1770941842000_na1fn_Y2hhaW5zeW5jLXByb2Nlc3MtZmxvdw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZkxIQnlFTmtoMU5OOHZ5cmdMVHhEeC9zYW5kYm94L0FPRzE0Q0lqQ1dhRGd2VFBxdzltazEtaW1nLTNfMTc3MDk0MTg0MjAwMF9uYTFmbl9ZMmhoYVc1emVXNWpMWEJ5YjJObGMzTXRabXh2ZHcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JretJQ4Hi8GU13PkcYiqz~dAUEME2EjUs1WkHNSZXWVw8ExRe3q4E29Nf5t3KiwbzWVxbNqjo2j4WMmrlhwyyjhEAquOYHRgcXCzyj0MwmFE172OIF0S8-nA81rRVsxM2gnR15PBQF2zUKqW8FPMNWpkG4OUsXmKjLUNaWdAk2eA8uYlAyI2SDUMYAC9DjdjHvUKD9GTKwaUk0-HtHmDOwVYANGAoKdEiI9~brbXdgjfnr9fVI5fq6yEhQKjVQHI3PnHdIeJP8nwHYkik-pfyEtW-uZRpeHhzTb2f7Mzb3M2f-ffjBaiNXtI-W08PWcpCqCFexSHlQnyyzl~oIMQgA__";

const architectureImage = "https://private-us-east-1.manuscdn.com/sessionFile/fLHByENkh1NN8vyrgLTxDx/sandbox/AOG14CIjCWaDgvTPqw9mk1-img-2_1770941846000_na1fn_Y2hhaW5zeW5jLWFyY2hpdGVjdHVyZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZkxIQnlFTmtoMU5OOHZ5cmdMVHhEeC9zYW5kYm94L0FPRzE0Q0lqQ1dhRGd2VFBxdzltazEtaW1nLTJfMTc3MDk0MTg0NjAwMF9uYTFmbl9ZMmhoYVc1emVXNWpMV0Z5WTJocGRHVmpkSFZ5WlEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TyTZFqdgFxPPBUTfMpLMtOWw75zmDnbW-ZH6Q4NcJv1rfyGlzsyi-S-Go23Oos6CiMA-awcLnGvVuZA~MOmBvHG4VksTMI-Mtob4G9lqpaoZSPRSJ7yc4qCiazwnGyLS0300OAiFc0Y9C9Ses2PqmOIAJOqybthXnKKCpxAORlQINTeorGyunpqzpX40YTcd2Jo~zmsztbaYJuAF1Yf9tVbamrMwXO0T2VqnW59iplToJfOqzHRhTuXiZSeAAtTjfhlPng3ouJYD-MAHWTDSMbeUXe8mi3h5WmXMvkex7MRHTHzOh7p4aJ1Ozb0m~fp7bhdxQjaAIsKwgwzK4~2~Sg__";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      {/* Hero Section - Enhanced with gradients and animations */}
      <section className="relative py-10 md:py-14 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #0F5A8F 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <FloatingBadge delay={0.2}>
                Early Access Program • Q3 2026 Pilot
              </FloatingBadge>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Environmental Emergency Response in Under{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                  <AnimatedCounter end={90} /> Seconds
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                ChainSync is a live platform that ingests real-time sensor data, correlates alerts with AI, and automates cross-team dispatch workflows. Coordinate response in seconds, not hours.
              </motion.p>

              {/* Key Features */}
              <motion.div
                className="space-y-4 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {[
                  { icon: Zap, text: "Sub-90 Second Response", color: "text-primary" },
                  { icon: Lock, text: "SOC2 Compliant Cloud", color: "text-secondary" },
                  { icon: Plug, text: "Universal API Integration", color: "text-accent" }
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:shadow-lg transition-all">
                      <feature.icon className={feature.color} size={24} />
                    </div>
                    <span className="text-foreground font-semibold text-lg">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <Link href="#early-access">
                  <EnhancedButton variant="primary" size="xl" showArrow>
                    Request Early Access
                  </EnhancedButton>
                </Link>
                <Link href="/how-it-works">
                  <EnhancedButton variant="outline" size="xl">
                    View Architecture
                  </EnhancedButton>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="relative">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-3xl opacity-30"></div>
                <motion.img
                  src={heroImage}
                  alt="ChainSync Environmental Monitoring Dashboard"
                  className="relative w-full rounded-2xl shadow-2xl border-4 border-white"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="wave" />

      {/* Problem Statement - Enhanced with animated stats */}
      <section className="py-10 md:py-14 bg-slate-50 relative">
        <AnimatedSection>
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
                The Reality of Environmental Emergencies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <StatsCard
                value="50K+"
                numericValue={50000}
                title="Annual U.S. Environmental Incidents"
                description="Water quality violations, chemical spills, and waste emergencies reported each year"
                icon={AlertCircle}
                color="primary"
                delay={0.1}
              />

              <StatsCard
                value="4-6hrs"
                title="Average Manual Coordination Time"
                description="Phone calls, emails, spreadsheet updates to mobilize multi-agency response"
                icon={Clock}
                color="secondary"
                delay={0.2}
              />

              <StatsCard
                value="73%"
                numericValue={73}
                title="Responses Delayed by Coordination"
                description="Environmental incidents where response was delayed, missing the window for effective action"
                icon={TrendingDown}
                color="accent"
                delay={0.3}
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="diagonal" />

      {/* How It Works Preview - Enhanced with animations */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
                From Threat Detection to Coordinated Response
              </h2>
            </div>

            <motion.div
              className="mb-16 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-2xl opacity-20"></div>
              <motion.img
                src={processImage}
                alt="ChainSync 4-Step Process Flow"
                className="relative w-full rounded-2xl shadow-2xl border-4 border-white"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <div className="text-center">
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                ChainSync handles the coordination overhead so your team can focus on protecting communities.
              </p>
              <Link href="/how-it-works">
                <EnhancedButton variant="outline" size="lg" showArrow>
                  Learn More About Our Process
                </EnhancedButton>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Use Cases Preview - Enhanced with better cards */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
                Built for Environmental Protection Teams
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: AlertCircle,
                  title: "Water Treatment Facilities",
                  description: "Detect contamination events, coordinate multi-agency response, automate regulatory reporting for drinking water systems.",
                  gradient: "from-blue-500 to-blue-600"
                },
                {
                  icon: Gauge,
                  title: "Industrial Environmental Compliance",
                  description: "Monitor emissions, manage incident response, maintain compliance documentation automatically for manufacturing sites.",
                  gradient: "from-green-500 to-green-600"
                },
                {
                  icon: TrendingDown,
                  title: "Municipal Emergency Response",
                  description: "Coordinate environmental emergencies across departments, stakeholders, and regulatory bodies for local government.",
                  gradient: "from-amber-500 to-amber-600"
                }
              ].map((useCase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="p-8 h-full bg-white/80 backdrop-blur-sm border-2 border-white/50 hover:shadow-2xl transition-all duration-300">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${useCase.gradient} mb-6 shadow-lg`}>
                      <useCase.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{useCase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {useCase.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link href="/use-cases">
                <EnhancedButton variant="primary" size="lg" showArrow>
                  Explore All Use Cases
                </EnhancedButton>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technology Highlight - Enhanced with animations */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
                Built on Production-Grade Infrastructure
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-8">
                  {[
                    {
                      title: "Universal Integration Hub",
                      description: "Platform-agnostic orchestration connecting sensors, APIs, and external systems via standard webhooks. 22 flow implementations deployed with AWS, Azure, and MuleSoft compatibility."
                    },
                    {
                      title: "AI Agent Layer",
                      description: "12 specialized Python agents providing intelligent analysis, decision support, and response coordination. Memory agent with ChromaDB vector storage and GPT-4 powered reasoning."
                    },
                    {
                      title: "Slotify Emergency Scheduler",
                      description: "Autonomous meeting coordination with intelligent authority selection and multi-calendar conflict detection. Google Calendar and Microsoft 365 integration with emergency override protocols."
                    }
                  ].map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15, duration: 0.6 }}
                      className="group p-6 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                    >
                      <h3 className="font-bold text-foreground mb-3 text-xl group-hover:text-primary transition-colors">
                        {tech.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {tech.description}
                      </p>
                    </motion.div>
                  ))}

                  <div className="pt-6">
                    <Link href="/technology">
                      <EnhancedButton variant="outline" size="lg" showArrow>
                        View Full Technical Details
                      </EnhancedButton>
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-2xl opacity-30"></div>
                  <motion.img
                    src={architectureImage}
                    alt="ChainSync System Architecture"
                    className="relative w-full rounded-2xl shadow-2xl border-4 border-white"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Early Access CTA - Enhanced with animations */}
      <section id="early-access" className="py-16 md:py-24 bg-gradient-to-br from-primary via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Join the Q3 2026 Pilot Program
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                We're working with select pilot partners to validate real-world performance across different environmental scenarios. Limited spots available.
              </p>

              <motion.div
                className="backdrop-blur-lg bg-white/10 border border-white/30 rounded-2xl p-10 md:p-12 max-w-3xl mx-auto shadow-2xl"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6 mb-10">
                  {[
                    "Priority access to the platform",
                    "Direct input on feature development",
                    "Preferential pricing at public launch",
                    "Dedicated technical support"
                  ].map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="text-green-400 mt-1 font-bold text-2xl">✓</div>
                      </div>
                      <p className="font-semibold text-white text-lg text-left">{benefit}</p>
                    </motion.div>
                  ))}
                </div>

                <p className="text-white/90 mb-8 text-lg">
                  No long-term commitment required. No upfront costs during pilot phase.
                </p>

                <Link href="/contact">
                  <EnhancedButton variant="secondary" size="xl" showArrow className="bg-white text-primary hover:bg-gray-100 shadow-2xl">
                    Request Early Access
                  </EnhancedButton>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
