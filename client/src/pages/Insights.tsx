import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BookOpen, TrendingUp, AlertCircle, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";



export default function Insights() {
  const isTouch = window.matchMedia('(hover: none)').matches;
  const articles = [
    {
      title: "I Got Tired of Living Across 4 Calendar Apps, So I Built Slotify",
      description: "The personal journey behind building ChainSync's autonomous scheduling layer. What started as calendar chaos became a core component for emergency meeting coordination.",
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
    <div className="min-h-screen flex flex-col">
      <Header /><main id="main-content" tabIndex={-1}>

      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-[clamp(2.2rem,4.4vw,3.8rem)] font-bold text-slate-900 tracking-[-0.03em] leading-[1.08] mb-4 text-center"
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
            Founder perspectives on environmental incident coordination and integration architecture. Articles reflect their publication dates and may discuss proposed capabilities.
          </motion.p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1] mb-12 text-center"
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
                  whileHover={isTouch ? undefined : { y: -4, transition: { duration: 0.15 } }}
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
                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-[gap]">
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

      {/* CTA */}
      <section className="py-12 md:py-16 border-t border-[#DCECEF]">
        <motion.div
          className="container mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-slate-900 tracking-[-0.025em] leading-[1.1] mb-4">
            Discuss your incident workflow.
          </h2>
          <p className="text-lg text-slate-500 mb-8">
            Explore whether a bounded pilot fits your operational needs.
          </p>

          <Link href="/contact?intent=pilot">
            <a className="group inline-flex items-center gap-2.5 rounded-full bg-sky-500 hover:bg-sky-400 px-7 py-3.5 text-[13px] font-bold text-white transition-[background-color] duration-200 active:scale-[0.97] min-h-[44px]">
              Apply for Founding Partnership
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-150 group-hover:translate-x-0.5">
                <ArrowRight size={11} />
              </span>
            </a>
          </Link>
        </motion.div>
      </section>

      </main><Footer />
    </div>
  );
}
