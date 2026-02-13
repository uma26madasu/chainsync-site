import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import EnhancedButton from "@/components/EnhancedButton";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { BookOpen, TrendingUp, AlertCircle, ExternalLink } from "lucide-react";

export default function Insights() {
  const articles = [
    {
      title: "The Infrastructure for Specialized Intelligence is Live",
      description: "Exploring the foundational infrastructure that powers specialized AI agents and how it enables rapid deployment across multiple domains.",
      url: "https://medium.com/@umamadasu/the-infrastructure-for-specialized-intelligence-is-live-95fe628f90c9",
      icon: AlertCircle,
      color: "text-primary"
    },
    {
      title: "Why Your Incident Response Shouldn't Be Held Hostage by Your Integration Stack",
      description: "Breaking free from integration constraints: how modern platforms enable rapid incident response without legacy system dependencies.",
      url: "https://medium.com/@umamadasu/why-your-incident-response-shouldnt-be-held-hostage-by-your-integration-stack-cde3bc320293",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "The Real Cost of Integration Gaps: What I Learned Building for Water Utilities",
      description: "Real-world lessons from building environmental response systems: how integration gaps create operational friction and delay critical response.",
      url: "https://medium.com/@umamadasu/the-real-cost-of-integration-gaps-what-i-learned-building-for-water-utilities-88f6dc4b3851",
      icon: AlertCircle,
      color: "text-amber-600"
    },
    {
      title: "12 AI Agents Walk Into a Water Crisis: How Specialized Intelligence Beats Generic Automation",
      description: "Why specialized AI agents outperform generic automation in environmental emergencies: a case study in domain-specific intelligence.",
      url: "https://medium.com/@umamadasu/12-ai-agents-walk-into-a-water-crisis-how-specialized-intelligence-beats-generic-automation-808a5a585a33",
      icon: BookOpen,
      color: "text-blue-600"
    },
    {
      title: "Why I Chose MuleSoft + Python + AI Over Pure Enterprise Platforms",
      description: "Technical architecture decisions: balancing enterprise integration platforms with modern AI capabilities for environmental response systems.",
      url: "https://medium.com/@umamadasu/why-i-chose-mulesoft-python-ai-over-pure-enterprise-platforms-for-environmental-emergency-24e232b40dcb",
      icon: TrendingUp,
      color: "text-red-600"
    },
    {
      title: "Environmental Emergency Response in Utilities: An Integration Challenge",
      description: "Understanding the integration complexity of environmental response systems and how to architect solutions that work across disparate systems.",
      url: "https://medium.com/@umamadasu/environmental-emergency-response-in-utilities-an-integration-challenge-0098fc6eb086",
      icon: AlertCircle,
      color: "text-purple-600"
    },
    {
      title: "Building ChainSync: An Environmental Emergency Response Platform with MuleSoft",
      description: "The complete journey of building ChainSync: architecture decisions, integration patterns, and lessons learned from the ground up.",
      url: "https://medium.com/@umamadasu/building-chainsync-an-environmental-emergency-response-platform-with-mulesoft-bdda38e1d07a",
      icon: BookOpen,
      color: "text-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #0F5A8F 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-center tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-purple-600">
                Insights & Articles
              </span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Deep dives into environmental emergency response, AI-powered automation, and the technical challenges of building specialized intelligence systems.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10 text-center tracking-tight">
              Featured Articles
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articles.map((article, index) => {
              const IconComponent = article.icon;
              return (
                <motion.a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                >
                  <GlassCard className="p-6 h-full flex flex-col hover:border-primary">
                    <div className="mb-6">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className={`${article.color}`} size={40} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-3">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-base mb-6 flex-grow leading-relaxed">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-base group-hover:gap-3 transition-all">
                      <span>Read on Medium</span>
                      <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </GlassCard>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Data */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10 text-center tracking-tight">
              Environmental Emergency Response Facts
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <GlassCard className="p-6 bg-gradient-to-br from-blue-50 to-white border-2 border-primary">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700 mb-4">
                  <AnimatedCounter end={50000} />+
                </div>
                <h3 className="font-bold text-foreground mb-4 text-xl">Annual U.S. Environmental Incidents</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Water quality violations, chemical spills, and waste emergencies reported each year to EPA and state agencies.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <GlassCard className="p-6 bg-gradient-to-br from-green-50 to-white border-2 border-green-600">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 mb-4">4-6 hrs</div>
                <h3 className="font-bold text-foreground mb-4 text-xl">Average Manual Coordination Time</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Time required for phone calls, emails, and spreadsheet updates to mobilize multi-agency environmental response.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <GlassCard className="p-6 bg-gradient-to-br from-red-50 to-white border-2 border-red-600">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-700 mb-4">
                  <AnimatedCounter end={73} />%
                </div>
                <h3 className="font-bold text-foreground mb-4 text-xl">Delayed Response Rate</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Percentage of environmental incidents where response was delayed due to coordination failures, missing the critical response window.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10 text-center tracking-tight">
              Key Topics Covered
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Infrastructure & Architecture",
                description: "Specialized intelligence infrastructure, integration patterns, and technical decisions for building scalable environmental response systems."
              },
              {
                title: "AI & Automation",
                description: "How specialized AI agents outperform generic automation, domain-specific intelligence, and the future of autonomous response systems."
              },
              {
                title: "Integration Challenges",
                description: "Real-world integration gaps, breaking free from legacy constraints, and building systems that work across disparate platforms."
              },
              {
                title: "Operational Impact",
                description: "Cost of coordination delays, response time improvements, and the business case for modernizing environmental emergency systems."
              }
            ].map((topic, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <GlassCard className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{topic.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {topic.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12 leading-relaxed">
              Subscribe to receive updates on new articles, industry research, and ChainSync product announcements.
            </p>

            <GlassCard className="p-10">
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@organization.com"
                    className="w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-foreground mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    placeholder="Your organization name"
                    className="w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <EnhancedButton variant="primary" size="lg" className="w-full">
                    Subscribe to Updates
                  </EnhancedButton>
                </motion.div>
              </form>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Transform Your Response?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Learn how ChainSync helps organizations respond to environmental emergencies faster.
            </p>

            <Link href="/contact">
              <EnhancedButton variant="secondary" size="xl" showArrow className="bg-white text-primary hover:bg-gray-100">
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
