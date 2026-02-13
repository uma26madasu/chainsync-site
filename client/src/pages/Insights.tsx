import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BookOpen, TrendingUp, AlertCircle } from "lucide-react";

export default function Insights() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Environmental Response Insights
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Research, best practices, and industry insights on environmental emergency response and coordination.
          </p>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Featured Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-white border border-border hover:shadow-lg transition-shadow">
              <AlertCircle className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                The Cost of Coordination Delays in Environmental Response
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                A comprehensive analysis of how coordination failures impact environmental incident response times and outcomes.
              </p>
              <p className="text-xs text-muted-foreground mb-4">Coming Soon</p>
              <Button variant="outline" className="w-full" disabled>
                Read Article
              </Button>
            </Card>

            <Card className="p-6 bg-white border border-border hover:shadow-lg transition-shadow">
              <TrendingUp className="text-secondary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Automation in Environmental Compliance: Best Practices
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                How leading organizations are using automation to improve compliance documentation and reduce regulatory risk.
              </p>
              <p className="text-xs text-muted-foreground mb-4">Coming Soon</p>
              <Button variant="outline" className="w-full" disabled>
                Read Article
              </Button>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              We're building a resource library of environmental response best practices and industry research.
            </p>
            <p className="text-sm text-muted-foreground">
              Subscribe below to be notified when new insights are published.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Data */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Environmental Emergency Response Facts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-2 border-primary">
              <div className="text-5xl font-bold text-primary mb-3">50K+</div>
              <h3 className="font-semibold text-foreground mb-3 text-lg">Annual U.S. Environmental Incidents</h3>
              <p className="text-foreground text-sm leading-relaxed">
                Water quality violations, chemical spills, and waste emergencies reported each year to EPA and state agencies.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-green-50 to-white border-2 border-green-600">
              <div className="text-5xl font-bold text-green-600 mb-3">4-6 hrs</div>
              <h3 className="font-semibold text-foreground mb-3 text-lg">Average Manual Coordination Time</h3>
              <p className="text-foreground text-sm leading-relaxed">
                Time required for phone calls, emails, and spreadsheet updates to mobilize multi-agency environmental response.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-red-50 to-white border-2 border-red-600">
              <div className="text-5xl font-bold text-red-600 mb-3">73%</div>
              <h3 className="font-semibold text-foreground mb-3 text-lg">Delayed Response Rate</h3>
              <p className="text-foreground text-sm leading-relaxed">
                Percentage of environmental incidents where response was delayed due to coordination failures, missing the critical response window.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Recommended Resources
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6 bg-white border border-border">
              <div className="flex items-start gap-4">
                <BookOpen className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    EPA Environmental Data & Resources
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Official EPA data on environmental incidents, water quality, air quality, and regulatory requirements.
                  </p>
                  <a
                    href="https://www.epa.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    Visit EPA.gov →
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-border">
              <div className="flex items-start gap-4">
                <BookOpen className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    FEMA Emergency Response Coordination
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Best practices and guidelines for emergency response coordination from the Federal Emergency Management Agency.
                  </p>
                  <a
                    href="https://www.fema.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary/80 text-sm font-medium"
                  >
                    Visit FEMA.gov →
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-border">
              <div className="flex items-start gap-4">
                <BookOpen className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Water Quality Association Standards
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Industry standards and best practices for water quality monitoring and emergency response.
                  </p>
                  <a
                    href="https://www.wqa.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 text-sm font-medium"
                  >
                    Visit WQA.org →
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Subscribe to receive updates on new insights, industry research, and ChainSync product announcements.
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
                Subscribe to Insights
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Response?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Learn how ChainSync helps organizations respond to environmental emergencies faster.
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
