import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { AlertCircle, Zap, Lock, Plug, TrendingDown, Gauge, Layers, Calendar, Bot } from "lucide-react";

const heroImage = "https://private-us-east-1.manuscdn.com/sessionFile/fLHByENkh1NN8vyrgLTxDx/sandbox/AOG14CIjCWaDgvTPqw9mk1-img-1_1770941850000_na1fn_Y2hhaW5zeW5jLWhlcm8.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZkxIQnlFTmtoMU5OOHZ5cmdMVHhEeC9zYW5kYm94L0FPRzE0Q0lqQ1dhRGd2VFBxdzltazEtaW1nLTFfMTc3MDk0MTg1MDAwMF9uYTFmbl9ZMmhoYVc1emVXNWpMV2hsY204LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fPdd~r9jerr1LgKsR4PlbPIsR05w33-GCfuabBbEhLszznLamJyF~wnTDxtxie0efwIq8hYp7BGSa-CIfYdj-CFkMHm9C8jcoGS5CCt3U19qFlRdfF-57-5wF~kwW4H7kuZpak9UUrsGmQlib9JVWCzRRweNk1GukcpgYJxzvZ6WAwPZRBDhbevihD67D1uvCFTw~vZWv5CScO5lBnBq~Y~MHs9pWgMhqMUg3Sd06UFCG2Io9VRiBuhyNep6T2N0bfUaFD4bL5N5ValtU2YqONleXZVpMDim95HLOZfr4aHOXvdx6THz5OI9F8iOD9gqqoFo-QPzc2RMMr6empwoTA__";

const processImage = "https://private-us-east-1.manuscdn.com/sessionFile/fLHByENkh1NN8vyrgLTxDx/sandbox/AOG14CIjCWaDgvTPqw9mk1-img-3_1770941842000_na1fn_Y2hhaW5zeW5jLXByb2Nlc3MtZmxvdw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZkxIQnlFTmtoMU5OOHZ5cmdMVHhEeC9zYW5kYm94L0FPRzE0Q0lqQ1dhRGd2VFBxdzltazEtaW1nLTNfMTc3MDk0MTg0MjAwMF9uYTFmbl9ZMmhoYVc1emVXNWpMWEJ5YjJObGMzTXRabXh2ZHcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JretJQ4Hi8GU13PkcYiqz~dAUEME2EjUs1WkHNSZXWVw8ExRe3q4E29Nf5t3KiwbzWVxbNqjo2j4WMmrlhwyyjhEAquOYHRgcXCzyj0MwmFE172OIF0S8-nA81rRVsxM2gnR15PBQF2zUKqW8FPMNWpkG4OUsXmKjLUNaWdAk2eA8uYlAyI2SDUMYAC9DjdjHvUKD9GTKwaUk0-HtHmDOwVYANGAoKdEiI9~brbXdgjfnr9fVI5fq6yEhQKjVQHI3PnHdIeJP8nwHYkik-pfyEtW-uZRpeHhzTb2f7Mzb3M2f-ffjBaiNXtI-W08PWcpCqCFexSHlQnyyzl~oIMQgA__";

const architectureImage = "https://private-us-east-1.manuscdn.com/sessionFile/fLHByENkh1NN8vyrgLTxDx/sandbox/AOG14CIjCWaDgvTPqw9mk1-img-2_1770941846000_na1fn_Y2hhaW5zeW5jLWFyY2hpdGVjdHVyZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZkxIQnlFTmtoMU5OOHZ5cmdMVHhEeC9zYW5kYm94L0FPRzE0Q0lqQ1dhRGd2VFBxdzltazEtaW1nLTJfMTc3MDk0MTg0NjAwMF9uYTFmbl9ZMmhoYVc1emVXNWpMV0Z5WTJocGRHVmpkSFZ5WlEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TyTZFqdgFxPPBUTfMpLMtOWw75zmDnbW-ZH6Q4NcJv1rfyGlzsyi-S-Go23Oos6CiMA-awcLnGvVuZA~MOmBvHG4VksTMI-Mtob4G9lqpaoZSPRSJ7yc4qCiazwnGyLS0300OAiFc0Y9C9Ses2PqmOIAJOqybthXnKKCpxAORlQINTeorGyunpqzpX40YTcd2Jo~zmsztbaYJuAF1Yf9tVbamrMwXO0T2VqnW59iplToJfOqzHRhTuXiZSeAAtTjfhlPng3ouJYD-MAHWTDSMbeUXe8mi3h5WmXMvkex7MRHTHzOh7p4aJ1Ozb0m~fp7bhdxQjaAIsKwgwzK4~2~Sg__";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block bg-blue-50 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Early Access Program • Q3 2026 Pilot
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Environmental Emergency Response in Under 90 Seconds
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ChainSync is a live platform that ingests real-time sensor data, correlates alerts with AI, and automates cross-team dispatch workflows. Coordinate response in seconds, not hours.
              </p>

              {/* Key Features */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <Zap className="text-primary" size={20} />
                  <span className="text-foreground font-medium">Sub-90 Second Response</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="text-secondary" size={20} />
                  <span className="text-foreground font-medium">SOC2 Compliant Cloud</span>
                </div>
                <div className="flex items-center gap-3">
                  <Plug className="text-accent" size={20} />
                  <span className="text-foreground font-medium">Universal API Integration</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link href="#early-access">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 h-auto text-base">
                    Request Early Access
                  </Button>
                </Link>
                <Button variant="outline" className="px-6 py-3 h-auto text-base">
                  View Architecture
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block">
              <img
                src={heroImage}
                alt="ChainSync Environmental Monitoring Dashboard"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            The Reality of Environmental Emergencies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white border border-border">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <h3 className="font-semibold text-foreground mb-2">Annual U.S. Environmental Incidents</h3>
              <p className="text-muted-foreground text-sm">
                Water quality violations, chemical spills, and waste emergencies reported each year
              </p>
            </Card>

            <Card className="p-6 bg-white border border-border">
              <div className="text-4xl font-bold text-secondary mb-2">4-6hrs</div>
              <h3 className="font-semibold text-foreground mb-2">Average Manual Coordination Time</h3>
              <p className="text-muted-foreground text-sm">
                Phone calls, emails, spreadsheet updates to mobilize multi-agency response
              </p>
            </Card>

            <Card className="p-6 bg-white border border-border">
              <div className="text-4xl font-bold text-accent mb-2">73%</div>
              <h3 className="font-semibold text-foreground mb-2">Responses Delayed by Coordination</h3>
              <p className="text-muted-foreground text-sm">
                Environmental incidents where response was delayed, missing the window for effective action
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            From Threat Detection to Coordinated Response
          </h2>

          <div className="mb-12">
            <img
              src={processImage}
              alt="ChainSync 4-Step Process Flow"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              ChainSync handles the coordination overhead so your team can focus on protecting communities.
            </p>
            <Link href="/how-it-works">
              <Button variant="outline" className="px-6 py-3 h-auto text-base">
                Learn More About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Components */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Our Platform
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Three integrated components working together to deliver end-to-end environmental emergency coordination.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white border border-border hover:shadow-lg transition-shadow">
              <Layers className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-foreground mb-3">Integration Layer</h3>
              <p className="text-muted-foreground text-sm">
                Platform-agnostic orchestration built on MuleSoft — swappable with Workato, Boomi, and more. Connects sensors, APIs, and external systems via standard webhooks.
              </p>
            </Card>

            <Card className="p-6 bg-white border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <Calendar className="text-secondary" size={32} />
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-200">
                  Under Development
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Slotify</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Intelligent emergency response scheduling and multi-agency coordination. Autonomous meeting coordination with Google Calendar and Microsoft 365 integration.
              </p>
              <a
                href="https://slotify.getchainsync.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-secondary font-medium text-sm hover:underline"
              >
                Open Slotify →
              </a>
            </Card>

            <Card className="p-6 bg-white border border-border hover:shadow-lg transition-shadow">
              <Bot className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-semibold text-foreground mb-3">AI Agents</h3>
              <p className="text-muted-foreground text-sm">
                12 specialized Python agents providing intelligent risk analysis and incident coordination. Memory agent with ChromaDB vector storage and GPT-4 powered reasoning.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Preview */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Built for Environmental Protection Teams
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white border border-border hover:shadow-lg transition-shadow">
              <AlertCircle className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-foreground mb-3">Water Treatment Facilities</h3>
              <p className="text-muted-foreground text-sm">
                Detect contamination events, coordinate multi-agency response, automate regulatory reporting for drinking water systems.
              </p>
            </Card>

            <Card className="p-6 bg-white border border-border hover:shadow-lg transition-shadow">
              <Gauge className="text-secondary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-foreground mb-3">Industrial Environmental Compliance</h3>
              <p className="text-muted-foreground text-sm">
                Monitor emissions, manage incident response, maintain compliance documentation automatically for manufacturing sites.
              </p>
            </Card>

            <Card className="p-6 bg-white border border-border hover:shadow-lg transition-shadow">
              <TrendingDown className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-semibold text-foreground mb-3">Municipal Emergency Response</h3>
              <p className="text-muted-foreground text-sm">
                Coordinate environmental emergencies across departments, stakeholders, and regulatory bodies for local government.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/use-cases">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 h-auto text-base">
                Explore All Use Cases
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Highlight */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Built on Production-Grade Infrastructure
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Universal Integration Hub</h3>
                  <p className="text-muted-foreground">
                    Platform-agnostic orchestration connecting sensors, APIs, and external systems via standard webhooks. 22 flow implementations deployed with AWS, Azure, and MuleSoft compatibility.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">AI Agent Layer</h3>
                  <p className="text-muted-foreground">
                    12 specialized Python agents providing intelligent analysis, decision support, and response coordination. Memory agent with ChromaDB vector storage and GPT-4 powered reasoning.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Slotify Emergency Scheduler</h3>
                  <p className="text-muted-foreground">
                    Autonomous meeting coordination with intelligent authority selection and multi-calendar conflict detection. Google Calendar and Microsoft 365 integration with emergency override protocols.
                  </p>
                </div>

                <Link href="/technology">
                  <Button variant="outline" className="mt-6">
                    View Full Technical Details
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <img
                src={architectureImage}
                alt="ChainSync System Architecture"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Built by someone who's done this
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            <span className="font-semibold text-foreground">Uma Madasu</span> — 6+ years as a MuleSoft Integration Engineer, working with enterprise clients including Blue Cross Blue Shield, Alfa Insurance, and EnerSys. I built ChainSync because I kept seeing the same problem: critical systems that couldn't talk to each other when it mattered most. Emergency response shouldn't depend on phone trees and spreadsheets.
          </p>
          <p className="text-muted-foreground mb-6">
            Dual Master's in MIS and Cybersecurity. MuleSoft Developer Level 1 certified. Based in Atlanta, GA.
          </p>
          <a
            href="https://www.linkedin.com/in/madasu-r-3265aba7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Connect on LinkedIn →
          </a>
        </div>
      </section>

      {/* Early Access CTA */}
      <section id="early-access" className="py-12 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Q3 2026 Pilot Program</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            We're working with select pilot partners to validate real-world performance across different environmental scenarios. Limited spots available.
          </p>

          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto shadow-lg">
            <div className="space-y-4 text-left mb-6">
              <div className="flex items-start gap-3">
                <div className="text-green-600 mt-1 font-bold text-lg">✓</div>
                <div>
                  <p className="font-semibold text-slate-900">Priority access to the platform</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-600 mt-1 font-bold text-lg">✓</div>
                <div>
                  <p className="font-semibold text-slate-900">Direct input on feature development</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-600 mt-1 font-bold text-lg">✓</div>
                <div>
                  <p className="font-semibold text-slate-900">Preferential pricing at public launch</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-600 mt-1 font-bold text-lg">✓</div>
                <div>
                  <p className="font-semibold text-slate-900">Dedicated technical support</p>
                </div>
              </div>
            </div>

            <p className="text-slate-700 text-sm mb-6">
              No long-term commitment required. No upfront costs during pilot phase.
            </p>

            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 h-auto text-base font-semibold">
                Request Early Access
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
