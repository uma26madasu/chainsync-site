import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code2, Database, Cloud, Shield } from "lucide-react";

export default function Technology() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Technical Architecture
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            ChainSync is built on production-grade infrastructure designed for reliability, scalability, and zero downtime. Explore our technical stack and architecture.
          </p>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Production-Grade Infrastructure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-white border border-border">
              <Cloud className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-foreground mb-3">Multi-Region Deployment</h3>
              <p className="text-muted-foreground text-sm mb-4">
                ChainSync is deployed across multiple AWS regions (US-East-1, US-West-2, EU-West-1) with automatic failover and load balancing.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>AWS Multi-AZ with automatic failover</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>99.99% uptime SLA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Zero downtime deployments</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white border border-border">
              <Shield className="text-secondary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-foreground mb-3">Security & Compliance</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Enterprise-grade security with SOC2 compliance, encryption at rest and in transit, and comprehensive audit logging.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>SOC2 Type II compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>AES-256 encryption at rest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>TLS 1.3 for all data in transit</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Technical Stack
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Component</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Technology</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border bg-white">
                  <td className="py-3 px-4 text-muted-foreground">Agent Framework</td>
                  <td className="py-3 px-4 text-foreground font-medium">Python 3.11 + FastAPI</td>
                  <td className="py-3 px-4 text-muted-foreground">Specialized agent execution and API webhooks</td>
                </tr>
                <tr className="border-b border-border bg-slate-50">
                  <td className="py-3 px-4 text-muted-foreground">AI Models</td>
                  <td className="py-3 px-4 text-foreground font-medium">GPT-4 + Custom Models</td>
                  <td className="py-3 px-4 text-muted-foreground">Reasoning, analysis, and decision support</td>
                </tr>
                <tr className="border-b border-border bg-white">
                  <td className="py-3 px-4 text-muted-foreground">Vector Storage</td>
                  <td className="py-3 px-4 text-foreground font-medium">ChromaDB</td>
                  <td className="py-3 px-4 text-muted-foreground">Memory and pattern learning for agents</td>
                </tr>
                <tr className="border-b border-border bg-slate-50">
                  <td className="py-3 px-4 text-muted-foreground">Scheduler</td>
                  <td className="py-3 px-4 text-foreground font-medium">React + Express + MongoDB</td>
                  <td className="py-3 px-4 text-muted-foreground">Emergency meeting scheduling (Slotify)</td>
                </tr>
                <tr className="border-b border-border bg-white">
                  <td className="py-3 px-4 text-muted-foreground">Database</td>
                  <td className="py-3 px-4 text-foreground font-medium">PostgreSQL + MongoDB</td>
                  <td className="py-3 px-4 text-muted-foreground">Structured data and document storage</td>
                </tr>
                <tr className="border-b border-border bg-slate-50">
                  <td className="py-3 px-4 text-muted-foreground">Message Queue</td>
                  <td className="py-3 px-4 text-foreground font-medium">AWS SQS</td>
                  <td className="py-3 px-4 text-muted-foreground">Asynchronous event processing</td>
                </tr>
                <tr className="border-b border-border bg-white">
                  <td className="py-3 px-4 text-muted-foreground">Monitoring</td>
                  <td className="py-3 px-4 text-foreground font-medium">CloudWatch + DataDog</td>
                  <td className="py-3 px-4 text-muted-foreground">System health and performance tracking</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="py-3 px-4 text-muted-foreground">Integration</td>
                  <td className="py-3 px-4 text-foreground font-medium">Standard Webhooks</td>
                  <td className="py-3 px-4 text-muted-foreground">Platform-agnostic API integration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Core Components
          </h2>

          <div className="space-y-8">
            {/* Universal Integration Hub */}
            <Card className="p-8 bg-white border border-border">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Code2 className="text-primary" size={32} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Universal Integration Hub</h3>
                  <p className="text-muted-foreground mb-4">
                    Platform-agnostic orchestration layer that connects to any sensor, API, or external system via standard webhooks. No vendor lock-in, no proprietary protocols.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">Supported Integrations</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>✓ AWS IoT Core</li>
                        <li>✓ Azure IoT Hub</li>
                        <li>✓ MuleSoft</li>
                        <li>✓ Custom REST APIs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">Data Sources</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>✓ 22+ flow implementations</li>
                        <li>✓ NASA satellite data</li>
                        <li>✓ Weather APIs</li>
                        <li>✓ Custom sensors</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* AI Agent Layer */}
            <Card className="p-8 bg-white border border-border">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Code2 className="text-secondary" size={32} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">AI Agent Layer</h3>
                  <p className="text-muted-foreground mb-4">
                    14 specialized Python agents, each designed to excel at a specific task. Modular architecture means we can improve individual agents without disrupting the entire system.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">Core Agents</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>✓ Detection Agent</li>
                        <li>✓ Analysis Agent</li>
                        <li>✓ Reasoning Agent (GPT-4)</li>
                        <li>✓ Coordination Agent</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">Specialized Agents</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>✓ Water Emergency Suite (5 agents)</li>
                        <li>✓ Industrial Compliance Suite</li>
                        <li>✓ Documentation Agent</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Slotify Scheduler */}
            <Card className="p-8 bg-white border border-border">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Database className="text-accent" size={32} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Slotify Emergency Scheduler</h3>
                  <p className="text-muted-foreground mb-4">
                    Autonomous meeting coordination that intelligently selects the right stakeholders and books emergency meetings across multiple calendar systems with conflict detection and override protocols.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">Calendar Integration</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>✓ Google Calendar</li>
                        <li>✓ Microsoft 365</li>
                        <li>✓ Custom calendar systems</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">Features</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>✓ Multi-calendar conflict detection</li>
                        <li>✓ Emergency override protocols</li>
                        <li>✓ Intelligent authority selection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance & Reliability */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Performance & Reliability
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Uptime & Availability</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">SLA Guarantee</p>
                  <p className="text-2xl font-bold text-primary">99.99%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Automatic Failover</p>
                  <p className="text-lg font-semibold text-foreground">Multi-AZ with &lt;1s recovery</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Deployment Strategy</p>
                  <p className="text-lg font-semibold text-foreground">Zero-downtime deployments</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Response Times</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Detection</p>
                  <p className="text-2xl font-bold text-primary">~2 seconds</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Analysis & Coordination</p>
                  <p className="text-2xl font-bold text-primary">~80 seconds</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Response Time</p>
                  <p className="text-2xl font-bold text-primary">&lt;90 seconds</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            API Documentation
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            ChainSync provides comprehensive REST APIs for integration, monitoring, and management. Full documentation is available to pilot partners.
          </p>
          <div className="text-center">
            <Button variant="outline" className="px-6 py-3 h-auto text-base">
              View Full Technical Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in the Technical Details?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get access to our full API documentation and technical specifications as a pilot partner.
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
