import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Circle, ArrowRight, TrendingUp, Zap } from "lucide-react";

export default function Roadmaps() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            2026 Agent Development Roadmap
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            ChainSync is evolving from a specialized water emergency platform into a multi-vertical AI powerhouse. Our strategy prioritizes robust infrastructure to enable rapid scaling across high-impact industries.
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-8 md:py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Executive Summary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-white border-2 border-primary">
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <p className="text-sm text-muted-foreground">Production-ready agents (6 general + 6 water)</p>
            </Card>

            <Card className="p-6 bg-white border-2 border-green-600">
              <div className="text-4xl font-bold text-green-600 mb-2">30</div>
              <p className="text-sm text-muted-foreground">2026 Target: Specialized agents across 6 verticals</p>
            </Card>

            <Card className="p-6 bg-white border-2 border-blue-600">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.99%</div>
              <p className="text-sm text-muted-foreground">Target uptime by Q4 2026</p>
            </Card>

            <Card className="p-6 bg-white border-2 border-amber-600">
              <div className="text-4xl font-bold text-amber-600 mb-2">&lt;200ms</div>
              <p className="text-sm text-muted-foreground">Target average response time</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Quarterly Execution Plan */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            2026 Quarterly Execution Plan
          </h2>

          <div className="max-w-5xl mx-auto space-y-6">
            {/* Q1 */}
            <Card className="p-6 bg-gradient-to-r from-blue-50 to-white border-2 border-blue-600">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Phase 1: Q1 (Jan–Mar)</h3>
                  <p className="text-muted-foreground">Infrastructure Foundation</p>
                </div>
                <div className="text-blue-600 text-4xl font-bold">Q1</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">P0 Infrastructure Upgrades</p>
                    <p className="text-sm text-muted-foreground">Vector Databases for 10x faster retrieval and Multi-model AI support (Claude, Gemini)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Key Enhancements</p>
                    <p className="text-sm text-muted-foreground">V2 updates for Continuous Learning, Root Cause Analysis (RCA), and Compliance agents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Deliverables</p>
                    <p className="text-sm text-muted-foreground">Real-time monitoring dashboards and multi-region deployment across 3+ AWS regions</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Q2 */}
            <Card className="p-6 bg-gradient-to-r from-green-50 to-white border-2 border-green-600">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Phase 2: Q2 (Apr–Jun)</h3>
                  <p className="text-muted-foreground">Healthcare Suite Launch</p>
                </div>
                <div className="text-green-600 text-4xl font-bold">Q2</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">5 New Healthcare Agents</p>
                    <p className="text-sm text-muted-foreground">Hospital Operations, Clinical Decision Support, HIPAA Compliance, Medical Emergency Coordinator, Patient Flow Optimizer</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Expansion</p>
                    <p className="text-sm text-muted-foreground">Beta launch of Web UI and mobile applications (iOS and Android)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Strategic Milestone</p>
                    <p className="text-sm text-muted-foreground">First healthcare customer pilot with an 8-hospital system</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Q3 */}
            <Card className="p-6 bg-gradient-to-r from-amber-50 to-white border-2 border-amber-600">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Phase 3: Q3 (Jul–Sep)</h3>
                  <p className="text-muted-foreground">Manufacturing & Analytics</p>
                </div>
                <div className="text-amber-600 text-4xl font-bold">Q3</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">4 New Manufacturing Agents</p>
                    <p className="text-sm text-muted-foreground">Predictive Maintenance, Quality Control, Supply Chain Optimizer, Performance Optimization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Core Feature</p>
                    <p className="text-sm text-muted-foreground">Advanced Analytics Engine with predictive ML models (85%+ accuracy)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Milestone</p>
                    <p className="text-sm text-muted-foreground">Beta launch of Agent Marketplace</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Q4 */}
            <Card className="p-6 bg-gradient-to-r from-red-50 to-white border-2 border-red-600">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Phase 4: Q4 (Oct–Dec)</h3>
                  <p className="text-muted-foreground">Energy, Finance & Autonomy</p>
                </div>
                <div className="text-red-600 text-4xl font-bold">Q4</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-red-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">5 New Energy Agents</p>
                    <p className="text-sm text-muted-foreground">Grid Management, Oil & Gas Operations, Smart City Coordinator, Climate Risk Assessor, Environmental Compliance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-red-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">4 New Finance Agents</p>
                    <p className="text-sm text-muted-foreground">Fraud Detection, Risk Management, Customer Service, Financial Regulatory Reporting</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-red-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Advanced Capabilities</p>
                    <p className="text-sm text-muted-foreground">Autonomous self-healing workflows and zero-touch operations (70% manual intervention reduction)</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Growth Trajectory */}
      <section className="py-8 md:py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            2026 Growth Trajectory
          </h2>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Quarter</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">New Agents</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Total Agents</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Key Milestone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-blue-50">
                  <td className="py-4 px-4 font-semibold text-foreground">Current</td>
                  <td className="py-4 px-4 text-muted-foreground">—</td>
                  <td className="py-4 px-4 font-semibold text-foreground">12</td>
                  <td className="py-4 px-4 text-muted-foreground">Water Emergency Platform</td>
                </tr>
                <tr className="border-b border-border hover:bg-blue-50">
                  <td className="py-4 px-4 font-semibold text-foreground">Q1 2026</td>
                  <td className="py-4 px-4 text-muted-foreground">+0</td>
                  <td className="py-4 px-4 font-semibold text-foreground">12</td>
                  <td className="py-4 px-4 text-muted-foreground">Infrastructure Upgrades</td>
                </tr>
                <tr className="border-b border-border hover:bg-green-50">
                  <td className="py-4 px-4 font-semibold text-foreground">Q2 2026</td>
                  <td className="py-4 px-4 text-green-600 font-semibold">+5</td>
                  <td className="py-4 px-4 font-semibold text-foreground">17</td>
                  <td className="py-4 px-4 text-muted-foreground">Healthcare Suite Launch</td>
                </tr>
                <tr className="border-b border-border hover:bg-amber-50">
                  <td className="py-4 px-4 font-semibold text-foreground">Q3 2026</td>
                  <td className="py-4 px-4 text-amber-600 font-semibold">+4</td>
                  <td className="py-4 px-4 font-semibold text-foreground">21</td>
                  <td className="py-4 px-4 text-muted-foreground">Manufacturing Suite Launch</td>
                </tr>
                <tr className="hover:bg-red-50">
                  <td className="py-4 px-4 font-semibold text-foreground">Q4 2026</td>
                  <td className="py-4 px-4 text-red-600 font-semibold">+9</td>
                  <td className="py-4 px-4 font-semibold text-foreground">30</td>
                  <td className="py-4 px-4 text-muted-foreground">Energy & Finance Suites</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Healthcare Spotlight */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Healthcare Suite (Q2 Launch)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-white border-2 border-green-600">
              <h3 className="text-xl font-semibold text-foreground mb-4">Core Healthcare Agents</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span><strong>Clinical Decision Support:</strong> Treatment recommendations and protocol adherence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span><strong>Hospital Operations:</strong> Bed utilization, patient flow, staffing optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span><strong>Medical Emergency Coordinator:</strong> Code blue events, trauma alerts, resource dispatch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span><strong>HIPAA Compliance:</strong> Auditing, breach detection, regulatory reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span><strong>Patient Flow Optimizer:</strong> Admission/discharge timing for improved throughput</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-50 to-white border-2 border-green-600">
              <h3 className="text-xl font-semibold text-foreground mb-4">Projected Healthcare Impact</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Efficiency</p>
                  <p className="text-lg font-bold text-green-600">70% → 91%</p>
                  <p className="text-xs text-muted-foreground">Bed utilization increase</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Safety</p>
                  <p className="text-lg font-bold text-green-600">53% reduction</p>
                  <p className="text-xs text-muted-foreground">Hospital-acquired infections</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Compliance</p>
                  <p className="text-lg font-bold text-green-600">70% reduction</p>
                  <p className="text-xs text-muted-foreground">HIPAA audit-related costs</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Manufacturing Spotlight */}
      <section className="py-8 md:py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Manufacturing Suite (Q3 Launch)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-white border-2 border-amber-600">
              <h3 className="text-xl font-semibold text-foreground mb-4">Core Manufacturing Agents</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-1">•</span>
                  <span><strong>Predictive Maintenance:</strong> Equipment failure prediction and maintenance scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-1">•</span>
                  <span><strong>Quality Control:</strong> Defect detection and process optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-1">•</span>
                  <span><strong>Supply Chain Optimizer:</strong> Logistics and inventory coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-1">•</span>
                  <span><strong>Performance Optimization:</strong> OEE tracking and bottleneck identification</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-amber-50 to-white border-2 border-amber-600">
              <h3 className="text-xl font-semibold text-foreground mb-4">Projected Manufacturing Impact</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Downtime</p>
                  <p className="text-lg font-bold text-amber-600">40% reduction</p>
                  <p className="text-xs text-muted-foreground">Unplanned downtime</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Quality</p>
                  <p className="text-lg font-bold text-amber-600">85% → 96%</p>
                  <p className="text-xs text-muted-foreground">Quality pass rate</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Maintenance</p>
                  <p className="text-lg font-bold text-amber-600">40% reduction</p>
                  <p className="text-xs text-muted-foreground">Annual maintenance costs</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Energy & Utilities Spotlight */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Energy & Utilities Suite (Q4 Launch)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-white border-2 border-red-600">
              <h3 className="text-xl font-semibold text-foreground mb-4">Core Energy Agents</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span><strong>Grid Management:</strong> Load balancing, outage prevention, performance optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span><strong>Oil & Gas Operations:</strong> Pipeline monitoring, drilling optimization, safety compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span><strong>Smart City Coordinator:</strong> Traffic, utility, and emergency services coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span><strong>Climate Risk Assessor:</strong> Weather impact prediction and adaptation planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span><strong>Environmental Compliance:</strong> Emissions tracking and EPA/state reporting</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-red-50 to-white border-2 border-red-600">
              <h3 className="text-xl font-semibold text-foreground mb-4">Projected Energy Impact</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Grid Resilience</p>
                  <p className="text-lg font-bold text-red-600">+3%</p>
                  <p className="text-xs text-muted-foreground">Overall grid uptime increase</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Response Speed</p>
                  <p className="text-lg font-bold text-red-600">68% reduction</p>
                  <p className="text-xs text-muted-foreground">Average outage duration</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Cost Efficiency</p>
                  <p className="text-lg font-bold text-red-600">40% reduction</p>
                  <p className="text-xs text-muted-foreground">Annual outage-related costs</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-8 md:py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Technology Stack Evolution
          </h2>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Category</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Current (2025)</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Target (Q4 2026)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-blue-50">
                  <td className="py-4 px-4 font-semibold text-foreground">AI Models</td>
                  <td className="py-4 px-4 text-muted-foreground">GPT-4</td>
                  <td className="py-4 px-4 text-foreground">GPT-4 Turbo, Claude 3.5, Gemini Ultra</td>
                </tr>
                <tr className="border-b border-border hover:bg-blue-50">
                  <td className="py-4 px-4 font-semibold text-foreground">Memory</td>
                  <td className="py-4 px-4 text-muted-foreground">In-memory lists</td>
                  <td className="py-4 px-4 text-foreground">Vector DBs (Pinecone, Weaviate, Qdrant)</td>
                </tr>
                <tr className="border-b border-border hover:bg-blue-50">
                  <td className="py-4 px-4 font-semibold text-foreground">Security</td>
                  <td className="py-4 px-4 text-muted-foreground">API keys, HMAC</td>
                  <td className="py-4 px-4 text-foreground">Zero Trust, SOC 2 Type II, ISO 27001, FedRAMP</td>
                </tr>
                <tr className="border-b border-border hover:bg-blue-50">
                  <td className="py-4 px-4 font-semibold text-foreground">UI</td>
                  <td className="py-4 px-4 text-muted-foreground">CLI only</td>
                  <td className="py-4 px-4 text-foreground">Web Console, Mobile (iOS/Android)</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="py-4 px-4 font-semibold text-foreground">Integrations</td>
                  <td className="py-4 px-4 text-muted-foreground">ChainSync, Slotify</td>
                  <td className="py-4 px-4 text-foreground">ServiceNow, Jira, PagerDuty, Slack, Datadog</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Risk Mitigation & Next Steps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-white border-2 border-amber-600">
              <h3 className="text-lg font-semibold text-foreground mb-4">Technical Risks</h3>
              <p className="text-sm text-muted-foreground">
                Mitigating Vector DB integration delays and multi-model AI complexity through phased rollouts and buffers.
              </p>
            </Card>

            <Card className="p-6 bg-white border-2 border-blue-600">
              <h3 className="text-lg font-semibold text-foreground mb-4">Business Risks</h3>
              <p className="text-sm text-muted-foreground">
                Addressing competition and long healthcare sales cycles by focusing on domain-specific expertise and early pilot programs.
              </p>
            </Card>

            <Card className="p-6 bg-white border-2 border-green-600">
              <h3 className="text-lg font-semibold text-foreground mb-4">Immediate Next Steps</h3>
              <p className="text-sm text-muted-foreground">
                Finalize Q1 sprint planning, initiate SOC 2 Type II audit, and begin outreach for healthcare pilot programs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            We're building the future of AI-powered emergency response. Interested in partnering with us?
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
