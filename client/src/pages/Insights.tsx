import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BookOpen, TrendingUp, AlertCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import CountUp from "@/components/CountUp";
import CoordinationTimeComparison from "@/components/insights/CoordinationTimeComparison";

export default function Insights() {
  const articles = [
    {
      title: "I Got Tired of Living Across 4 Calendar Apps, So I Built Slotify",
      description: "The personal journey behind building Slotify, ChainSync's autonomous scheduling engine. What started as calendar chaos became a core component for emergency meeting coordination.",
      url: "https://medium.com/@umamadasu/i-got-tired-of-living-across-4-calendar-apps-so-i-built-slotify-b0445c595648",
      icon: BookOpen,
      color: "text-orange-600"
    },
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
      <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Insights & Articles
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground text-center max-w-3xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Deep dives into environmental emergency response, AI-powered automation, and the technical challenges of building specialized intelligence systems.
          </motion.p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Featured Articles
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {articles.map((article, index) => {
              const IconComponent = article.icon;
              return (
                <motion.a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.15 } }}
                >
                  <Card className="p-6 bg-white border border-border hover:shadow-lg hover:border-primary transition-shadow h-full flex flex-col">
                    <div className="mb-4">
                      <IconComponent className={`${article.color}`} size={32} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-3">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 flex-grow">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      <span>Read on Medium</span>
                      <ExternalLink size={16} />
                    </div>
                  </Card>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Industry Data */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Environmental Emergency Response Facts
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}>
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-2 border-primary h-full">
                <div className="text-5xl font-bold text-primary mb-3">
                  <CountUp end={50} suffix="K+" />
                </div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Annual U.S. Environmental Incidents</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  Water quality violations, chemical spills, and waste emergencies reported each year to EPA and state agencies.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}>
              <Card className="p-8 bg-gradient-to-br from-green-50 to-white border-2 border-green-600 h-full">
                <div className="text-5xl font-bold text-green-600 mb-3">4-6 hrs</div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Average Manual Coordination Time</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  Time required for phone calls, emails, and spreadsheet updates to mobilize multi-agency environmental response.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}>
              <Card className="p-8 bg-gradient-to-br from-red-50 to-white border-2 border-red-600 h-full">
                <div className="text-5xl font-bold text-red-600 mb-3">
                  <CountUp end={73} suffix="%" />
                </div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Delayed Response Rate</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  Percentage of environmental incidents where response was delayed due to coordination failures, missing the critical response window.
                </p>
              </Card>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Coordination Time Comparison */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Coordination Time: Manual vs. ChainSync
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Every vertical has different bottlenecks, agency overlaps, and compliance burdens.
            Each graph reflects that reality — same platform, different response profiles.
          </motion.p>
          <CoordinationTimeComparison />
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Key Topics Covered
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <Card className="p-6 bg-white border border-border h-full">
                <h3 className="text-lg font-semibold text-foreground mb-3">Infrastructure & Architecture</h3>
                <p className="text-muted-foreground text-sm">
                  Specialized intelligence infrastructure, integration patterns, and technical decisions for building scalable environmental response systems.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="p-6 bg-white border border-border h-full">
                <h3 className="text-lg font-semibold text-foreground mb-3">AI & Automation</h3>
                <p className="text-muted-foreground text-sm">
                  How specialized AI agents outperform generic automation, domain-specific intelligence, and the future of autonomous response systems.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="p-6 bg-white border border-border h-full">
                <h3 className="text-lg font-semibold text-foreground mb-3">Integration Challenges</h3>
                <p className="text-muted-foreground text-sm">
                  Real-world integration gaps, breaking free from legacy constraints, and building systems that work across disparate platforms.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="p-6 bg-white border border-border h-full">
                <h3 className="text-lg font-semibold text-foreground mb-3">Operational Impact</h3>
                <p className="text-muted-foreground text-sm">
                  Cost of coordination delays, response time improvements, and the business case for modernizing environmental emergency systems.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Subscribe to receive updates on new articles, industry research, and ChainSync product announcements.
          </p>

          <Card className="p-8 bg-white border border-border">
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@organization.com"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  placeholder="Your organization name"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 h-auto text-base">
                Subscribe to Updates
              </Button>
            </form>
          </Card>
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
            Ready to Transform Your Response?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Learn how ChainSync helps organizations respond to environmental emergencies faster.
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
