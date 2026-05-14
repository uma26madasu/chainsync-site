import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, Zap, Droplet, Heart, Factory, Bolt, Target, Layers, Users, Shield, MessageSquare, Brain, BarChart3 } from "lucide-react";

export default function Roadmaps() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            2026 Development Roadmap
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Building on our foundation of 14 live agents, we're expanding to 30 specialized agents across multiple verticals in 2026, enhanced by Slotify's intelligent scheduling and coordination capabilities.
          </p>
        </div>
      </section>

      {/* Agent Growth Overview */}
      <section className="py-8 md:py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            2026 Growth Trajectory
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-8">
            <Card className="p-6 bg-white border-2 border-slate-300 text-center">
              <div className="text-3xl font-bold text-slate-600 mb-2">12</div>
              <p className="text-sm font-semibold text-slate-700">Existing Agents</p>
              <p className="text-xs text-muted-foreground">Already deployed</p>
            </Card>

            <div className="flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-primary" />
            </div>

            <Card className="p-6 bg-green-50 border-2 border-green-400 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">✓ Completed</span>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">15</div>
              <p className="text-sm font-semibold text-green-700">Q1 — Done</p>
              <p className="text-xs text-muted-foreground">+3 agents</p>
            </Card>

            <Card className="p-6 bg-white border-2 border-green-300">
              <div className="text-3xl font-bold text-green-600 mb-2">18</div>
              <p className="text-sm font-semibold text-green-700">Q2 Target</p>
              <p className="text-xs text-muted-foreground">+3 agents</p>
            </Card>

            <Card className="p-6 bg-white border-2 border-amber-300">
              <div className="text-3xl font-bold text-amber-600 mb-2">24</div>
              <p className="text-sm font-semibold text-amber-700">Q3 Target</p>
              <p className="text-xs text-muted-foreground">+6 agents</p>
            </Card>

            <Card className="p-6 bg-white border-2 border-red-300">
              <div className="text-3xl font-bold text-red-600 mb-2">30</div>
              <p className="text-sm font-semibold text-red-700">Q4 Target</p>
              <p className="text-xs text-muted-foreground">+6 agents</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Q1 2026 */}
      <section className="py-8 md:py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-lg">
                Q1
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-bold text-foreground">Infrastructure Foundation</h2>
                  <span className="bg-green-100 text-green-700 border border-green-300 text-sm font-semibold px-3 py-1 rounded-full">✓ Completed</span>
                </div>
                <p className="text-muted-foreground">12 existing agents + 3 new agents = 15 total</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* ChainSync Q1 */}
              <Card className="p-6 bg-blue-50 border-2 border-blue-200">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-foreground">ChainSync Core</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>3 Infrastructure Agents:</strong> System Health Monitor, Data Integration, Event Orchestration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Distributed agent orchestration framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Real-time event streaming pipeline (&lt;200ms latency)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Multi-region deployment capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>SOC 2 Type II Compliance</strong> - Full audit completion</span>
                  </li>
                </ul>
              </Card>

              {/* Slotify Q1 */}
              <Card className="p-6 bg-purple-50 border-2 border-purple-200">
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-6 h-6 text-purple-600" />
                  <h3 className="text-lg font-semibold text-foreground">Slotify Enhancement</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Security Foundation:</strong> GDPR/HIPAA compliance framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>2FA authentication & comprehensive audit logging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Team Scheduling:</strong> Shift management, availability tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Resource Booking:</strong> Capacity planning, booking workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Calendar Integrations:</strong> Zoom, Teams, Google Meet, iCal sync</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Q2 2026 */}
      <section className="py-8 md:py-12 bg-slate-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-lg">
                Q2
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Healthcare Vertical Expansion</h2>
                <p className="text-muted-foreground">15 existing agents + 3 new agents = 18 total</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* ChainSync Q2 */}
              <Card className="p-6 bg-green-50 border-2 border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-foreground">ChainSync Healthcare</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>3 Healthcare Agents:</strong> Hospital Emergency Coordinator, Patient Safety Monitor, Crisis Response Coordinator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Multi-department emergency coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Real-time patient safety monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Mass casualty incident management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>HIPAA Compliance Certification</strong></span>
                  </li>
                </ul>
              </Card>

              {/* Slotify Q2 */}
              <Card className="p-6 bg-pink-50 border-2 border-pink-200">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-6 h-6 text-pink-600" />
                  <h3 className="text-lg font-semibold text-foreground">Slotify Communications</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span><strong>SMS Notifications:</strong> Twilio/Plivo integration, delivery tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Slack Integration:</strong> Channel notifications, incident alerts, bot commands</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Microsoft Teams Integration:</strong> Teams alerts, workflow automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span>Multi-channel reminders (Email, SMS, Slack, Teams, In-app)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span>Custom webhooks & delegation workflows</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Q3 2026 */}
      <section className="py-8 md:py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-lg">
                Q3
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Manufacturing Vertical Expansion</h2>
                <p className="text-muted-foreground">18 existing agents + 6 new agents = 24 total</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* ChainSync Q3 */}
              <Card className="p-6 bg-amber-50 border-2 border-amber-200">
                <div className="flex items-center gap-2 mb-4">
                  <Factory className="w-6 h-6 text-amber-600" />
                  <h3 className="text-lg font-semibold text-foreground">ChainSync Manufacturing</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>6 Manufacturing Agents:</strong> Facility Safety Monitor, Equipment Health, Supply Chain Disruption, Production Quality, Environmental Compliance, Operational Resilience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Facility safety system monitoring & violation detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Predictive equipment failure analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Supply chain disruption detection & alternative sourcing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>ISO 27001 Certification</strong></span>
                  </li>
                </ul>
              </Card>

              {/* Slotify Q3 */}
              <Card className="p-6 bg-blue-50 border-2 border-blue-200">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-foreground">Slotify AI & Automation</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Smart Scheduling Engine:</strong> ML-based recommendations, optimal resource allocation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>AI Meeting Summaries:</strong> Automatic transcription, key points extraction, action items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Context Enrichment:</strong> Historical context retrieval, incident linking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Sentiment analysis & automated follow-ups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Capacity planning & resource optimization</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Q4 2026 */}
      <section className="py-8 md:py-12 bg-slate-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg">
                Q4
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Energy & Finance Vertical Expansion</h2>
                <p className="text-muted-foreground">24 existing agents + 6 new agents = 30 total</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* ChainSync Q4 */}
              <Card className="p-6 bg-red-50 border-2 border-red-200">
                <div className="flex items-center gap-2 mb-4">
                  <Bolt className="w-6 h-6 text-red-600" />
                  <h3 className="text-lg font-semibold text-foreground">ChainSync Energy & Finance</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>6 Energy & Finance Agents:</strong> Grid Stability Monitor, Energy Demand Forecasting, Fraud Detection, Systemic Risk Monitor, Regulatory Compliance, Crisis Response</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Real-time grid stability monitoring & anomaly detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Financial fraud detection & transaction monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Systemic risk identification & mitigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>GDPR Compliance Validation</strong></span>
                  </li>
                </ul>
              </Card>

              {/* Slotify Q4 */}
              <Card className="p-6 bg-indigo-50 border-2 border-indigo-200">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-lg font-semibold text-foreground">Slotify Analytics & Integrations</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Deep Analytics Dashboard:</strong> Real-time metrics, KPI tracking, custom reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Vertical Integrations:</strong> Healthcare EHR, Education LMS, Legal case management, Real Estate MLS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Performance metrics tracking (agent performance, response time, accuracy)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Revenue Tracking & ROI Analytics:</strong> ROI calculation, cost-benefit analysis, value delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>SLA monitoring & compliance reporting</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Performance Summary */}
      <section className="py-8 md:py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            2026 Compliance & Performance Roadmap
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-slate-50 border-2 border-slate-200">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-slate-600" />
                Compliance Milestones
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Q1:</strong> SOC 2 Type II audit completion</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Q2:</strong> HIPAA compliance certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Q3:</strong> ISO 27001 certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Q4:</strong> GDPR compliance validation</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-slate-50 border-2 border-slate-200">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-slate-600" />
                Performance Targets
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Response Time:</strong> &lt;200ms average latency</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Uptime:</strong> 99.99% SLA by Q4</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Accuracy:</strong> 98%+ incident detection rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Scalability:</strong> Support 1000+ concurrent incidents</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            We're building the future of AI-powered emergency response with integrated scheduling capabilities. Interested in partnering with us?
          </p>

          <Link href="/contact">
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 h-auto text-base font-semibold">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
