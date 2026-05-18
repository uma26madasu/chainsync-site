import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Radio, Brain, Users, Shield } from "lucide-react";

const processImage = "https://private-us-east-1.manuscdn.com/sessionFile/fLHByENkh1NN8vyrgLTxDx/sandbox/AOG14CIjCWaDgvTPqw9mk1-img-3_1770941842000_na1fn_Y2hhaW5zeW5jLXByb2Nlc3MtZmxvdw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZkxIQnlFTmtoMU5OOHZ5cmdMVHhEeC9zYW5kYm94L0FPRzE0Q0lqQ1dhRGd2VFBxdzltazEtaW1nLTNfMTc3MDk0MTg0MjAwMF9uYTFmbl9ZMmhoYVc1emVXNWpMWEJ5YjJObGMzTXRabXh2ZHcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JretJQ4Hi8GU13PkcYiqz~dAUEME2EjUs1WkHNSZXWVw8ExRe3q4E29Nf5t3KiwbzWVxbNqjo2j4WMmrlhwyyjhEAquOYHRgcXCzyj0MwmFE172OIF0S8-nA81rRVsxM2gnR15PBQF2zUKqW8FPMNWpkG4OUsXmKjLUNaWdAk2eA8uYlAyI2SDUMYAC9DjdjHvUKD9GTKwaUk0-HtHmDOwVYANGAoKdEiI9~brbXdgjfnr9fVI5fq6yEhQKjVQHI3PnHdIeJP8nwHYkik-pfyEtW-uZRpeHhzTb2f7Mzb3M2f-ffjBaiNXtI-W08PWcpCqCFexSHlQnyyzl~oIMQgA__";

const architectureImage = "https://private-us-east-1.manuscdn.com/sessionFile/fLHByENkh1NN8vyrgLTxDx/sandbox/AOG14CIjCWaDgvTPqw9mk1-img-2_1770941846000_na1fn_Y2hhaW5zeW5jLWFyY2hpdGVjdHVyZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZkxIQnlFTmtoMU5OOHZ5cmdMVHhEeC9zYW5kYm94L0FPRzE0Q0lqQ1dhRGd2VFBxdzltazEtaW1nLTJfMTc3MDk0MTg0NjAwMF9uYTFmbl9ZMmhoYVc1emVXNWpMV0Z5WTJocGRHVmpkSFZ5WlEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TyTZFqdgFxPPBUTfMpLMtOWw75zmDnbW-ZH6Q4NcJv1rfyGlzsyi-S-Go23Oos6CiMA-awcLnGvVuZA~MOmBvHG4VksTMI-Mtob4G9lqpaoZSPRSJ7yc4qCiazwnGyLS0300OAiFc0Y9C9Ses2PqmOIAJOqybthXnKKCpxAORlQINTeorGyunpqzpX40YTcd2Jo~zmsztbaYJuAF1Yf9tVbamrMwXO0T2VqnW59iplToJfOqzHRhTuXiZSeAAtTjfhlPng3ouJYD-MAHWTDSMbeUXe8mi3h5WmXMvkex7MRHTHzOh7p4aJ1Ozb0m~fp7bhdxQjaAIsKwgwzK4~2~Sg__";

export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            From Threat Detection to Coordinated Response
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            ChainSync handles the coordination overhead so your team can focus on protecting communities. See how our four-step process works.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <img
            src={processImage}
            alt="ChainSync 4-Step Process"
            className="w-full rounded-lg shadow-lg mb-12"
          />

          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground">
              <span className="font-semibold text-foreground">Total: Under 90 seconds</span> from threat detection to coordinated response
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <Card className="p-6 bg-white border border-border">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Radio className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">1. Detect</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Sensor data and external alerts ingested via API gateway. Anomaly detection triggers immediate analysis.
              </p>
              <div className="bg-blue-50 rounded px-3 py-1 inline-block">
                <p className="text-sm font-semibold text-primary">~2 seconds</p>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="p-6 bg-white border border-border">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <Brain className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">2. Analyze</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Context enrichment, risk scoring, and root cause analysis. Historical data + weather patterns + regulatory thresholds.
              </p>
              <div className="bg-green-50 rounded px-3 py-1 inline-block">
                <p className="text-sm font-semibold text-secondary">~30 seconds</p>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="p-6 bg-white border border-border">
              <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4">
                <Users className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">3. Coordinate</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Right teams notified, stakeholders alerted, regulators informed. Emergency meetings scheduled automatically.
              </p>
              <div className="bg-amber-50 rounded px-3 py-1 inline-block">
                <p className="text-sm font-semibold text-accent">~50 seconds</p>
              </div>
            </Card>

            {/* Step 4 */}
            <Card className="p-6 bg-white border border-border">
              <div className="flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg mb-4">
                <Shield className="text-slate-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">4. Protect</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Complete audit trails, automated reports, compliance tracking. Your team focuses on resolution, not paperwork.
              </p>
              <div className="bg-slate-50 rounded px-3 py-1 inline-block">
                <p className="text-sm font-semibold text-slate-700">Continuous</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Detailed Process Breakdown
          </h2>

          <div className="space-y-8">
            {/* Detect */}
            <Card className="p-8 bg-white border border-border">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg">
                    <Radio className="text-primary" size={32} />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Step 1: Detect</h3>
                  <p className="text-muted-foreground mb-4">
                    ChainSync ingests data from multiple sources: IoT sensors, SCADA systems, weather APIs, satellite data, and external alert systems. When anomalies are detected—whether it's a turbidity spike in water systems, an emissions threshold breach, or an unusual weather pattern—the system immediately flags the event and begins analysis.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Integration Hub:</span> Supports 22+ flow implementations across AWS, Azure, MuleSoft, and custom APIs with zero vendor lock-in.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Analyze */}
            <Card className="p-8 bg-white border border-border">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg">
                    <Brain className="text-secondary" size={32} />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Step 2: Analyze</h3>
                  <p className="text-muted-foreground mb-4">
                    Our AI Agent Layer performs intelligent analysis. The detection agent identifies the anomaly type, the analysis agent enriches context with historical data and regulatory thresholds, and the reasoning agent (powered by GPT-4) determines risk level and recommended actions. All analysis is stored in ChromaDB for pattern learning and continuous improvement.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">AI Agents:</span> 17 specialized Python agents including water emergency suite, industrial compliance suite, and general analysis agents.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Coordinate */}
            <Card className="p-8 bg-white border border-border">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-lg">
                    <Users className="text-accent" size={32} />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Step 3: Coordinate</h3>
                  <p className="text-muted-foreground mb-4">
                    Based on the analysis, ChainSync automatically determines who needs to be notified and what actions are required. The coordination agent sends notifications to relevant teams via email, SMS, or webhook. The Slotify scheduler automatically books emergency meetings with the right stakeholders, checking calendars across Google Calendar, Microsoft 365, and other systems, with emergency override protocols for critical incidents.
                  </p>
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Slotify Scheduler:</span> Intelligent meeting coordination with multi-calendar conflict detection and automatic authority selection.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Protect */}
            <Card className="p-8 bg-white border border-border">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-slate-100 rounded-lg">
                    <Shield className="text-slate-700" size={32} />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Step 4: Protect</h3>
                  <p className="text-muted-foreground mb-4">
                    Throughout the entire process, ChainSync maintains complete audit trails and generates compliance documentation automatically. The documentation agent creates incident reports, regulatory notifications, and compliance records. Your team can focus on the actual response—making decisions and taking action—while the system handles all the administrative overhead.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Compliance:</span> SOC2 compliant, 99.99% uptime SLA, multi-region deployment with automatic failover.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            System Architecture
          </h2>

          <img
            src={architectureImage}
            alt="ChainSync System Architecture"
            className="w-full rounded-lg shadow-lg mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Sensor Integration Hub</h3>
              <p className="text-muted-foreground text-sm">
                Platform-agnostic orchestration connecting sensors, APIs, and external systems via standard webhooks. Supports weather sensors, gas/chemical sensors, satellite data, and custom APIs.
              </p>
            </Card>

            <Card className="p-6 bg-white border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">AI Agent Layer</h3>
              <p className="text-muted-foreground text-sm">
                17 specialized Python agents for detection, analysis, coordination, and documentation. Memory agent with ChromaDB vector storage and GPT-4 powered reasoning engine.
              </p>
            </Card>

            <Card className="p-6 bg-white border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Response Coordination</h3>
              <p className="text-muted-foreground text-sm">
                Team notifications, emergency scheduling, compliance reporting. Integrates with Google Calendar, Microsoft 365, and custom notification systems.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to See It in Action?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join our Q3 2026 pilot program and experience automated environmental emergency response.
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
