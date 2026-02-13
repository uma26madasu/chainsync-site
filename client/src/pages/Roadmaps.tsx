import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

export default function Roadmaps() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Product Roadmap
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            ChainSync is actively being developed with input from pilot partners. Here's what we've built and what's coming next.
          </p>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Current Status: Early Access
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white border-2 border-green-500">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="text-green-600" size={24} />
                <h3 className="text-lg font-semibold text-foreground">Built & Operational</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Universal Integration Hub (22+ flows)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>AI Agent Layer (12 specialized agents)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Slotify Emergency Scheduler</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Real-time Dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Compliance Reporting</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white border-2 border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <Circle className="text-blue-600" size={24} />
                <h3 className="text-lg font-semibold text-foreground">Q2 2026: Pilot Phase</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span>Pilot partner onboarding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span>Real-world testing & validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span>Feedback integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span>Security hardening</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white border-2 border-amber-500">
              <div className="flex items-center gap-2 mb-4">
                <Circle className="text-amber-600" size={24} />
                <h3 className="text-lg font-semibold text-foreground">Q3 2026: Expansion</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">→</span>
                  <span>Additional environmental scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">→</span>
                  <span>Advanced analytics & reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">→</span>
                  <span>Mobile app launch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">→</span>
                  <span>Enhanced integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">→</span>
                  <span>Pricing model finalization</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Timeline */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Development Timeline
          </h2>

          <div className="max-w-3xl mx-auto">
            {/* Q2 2026 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="text-blue-600">Q2 2026</span>
                <span className="text-sm font-normal text-muted-foreground">(Current Phase)</span>
              </h3>
              <Card className="p-6 bg-white border border-border">
                <h4 className="font-semibold text-foreground mb-4">Pilot Program Launch & Validation</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>Onboard select pilot partners across water treatment, industrial, and municipal sectors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>Validate system performance in real-world environmental scenarios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>Gather detailed feedback on features and user experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>Optimize response times and system reliability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span>Finalize security and compliance certifications</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Q3 2026 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="text-amber-600">Q3 2026</span>
                <span className="text-sm font-normal text-muted-foreground">(Planned)</span>
              </h3>
              <Card className="p-6 bg-white border border-border">
                <h4 className="font-semibold text-foreground mb-4">Feature Expansion & Scale</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Circle className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                    <span>Expand AI agent suite with additional environmental scenarios (air quality, flooding, hazmat)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Circle className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                    <span>Launch advanced analytics dashboard with predictive capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Circle className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                    <span>Release mobile app for iOS and Android</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Circle className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                    <span>Add integrations with additional sensor networks and data sources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Circle className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                    <span>Announce public launch date and pricing</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Q4 2026+ */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="text-slate-600">Q4 2026+</span>
                <span className="text-sm font-normal text-muted-foreground">(Vision)</span>
              </h3>
              <Card className="p-6 bg-white border border-border">
                <h4 className="font-semibold text-foreground mb-4">General Availability & Beyond</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Circle className="text-slate-600 mt-1 flex-shrink-0" size={20} />
                    <span>Public launch with full feature set and pricing tiers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Circle className="text-slate-600 mt-1 flex-shrink-0" size={20} />
                    <span>Global expansion with multi-region support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Circle className="text-slate-600 mt-1 flex-shrink-0" size={20} />
                    <span>Advanced AI capabilities with machine learning model improvements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Circle className="text-slate-600 mt-1 flex-shrink-0" size={20} />
                    <span>Industry partnerships and ecosystem development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Circle className="text-slate-600 mt-1 flex-shrink-0" size={20} />
                    <span>Continuous innovation based on real-world environmental needs</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Partner Benefits */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Pilot Partner Benefits
          </h2>

          <Card className="p-8 bg-blue-50 border-2 border-primary max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white font-bold text-sm">✓</div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Priority Access to Platform</h3>
                  <p className="text-sm text-foreground">
                    Get early access to features and updates before general availability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white font-bold text-sm">✓</div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Direct Input on Features</h3>
                  <p className="text-sm text-foreground">
                    Your feedback directly shapes product development and roadmap priorities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white font-bold text-sm">✓</div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Preferential Pricing</h3>
                  <p className="text-sm text-foreground">
                    Special pricing at public launch, rewarding your early commitment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white font-bold text-sm">✓</div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Dedicated Technical Support</h3>
                  <p className="text-sm text-foreground">
                    Priority support and direct access to our engineering team.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-primary/20">
              <p className="text-sm text-foreground font-medium">
                No long-term commitment required. No upfront costs during pilot phase.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shape the Future of Environmental Response
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join our pilot program and help us build the next generation of environmental emergency response technology.
          </p>

          <Link href="/contact">
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 h-auto text-base font-semibold">
              Request Early Access
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
