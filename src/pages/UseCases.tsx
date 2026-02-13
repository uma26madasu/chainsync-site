import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AlertCircle, Gauge, Building2, TrendingDown } from "lucide-react";

const waterImage = "https://private-us-east-1.manuscdn.com/sessionFile/fLHByENkh1NN8vyrgLTxDx/sandbox/AOG14CIjCWaDgvTPqw9mk1-img-4_1770941851000_na1fn_Y2hhaW5zeW5jLXdhdGVyLW1vbml0b3Jpbmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZkxIQnlFTmtoMU5OOHZ5cmdMVHhEeC9zYW5kYm94L0FPRzE0Q0lqQ1dhRGd2VFBxdzltazEtaW1nLTRfMTc3MDk0MTg1MTAwMF9uYTFmbl9ZMmhoYVc1emVXNWpMWGRoZEdWeUxXMXZibWwwYjNKcGJtYy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Yrws-~L2p0hQkTjEcUwHNEao4wTpjSSRioF1eg6PdrxmZCXN8q0-QvRpXMWvSjH9vsOFlz~pA7j0On-79rXDIlTbkCWIVsKXBuy0J9V0ieLSkMQ7TrYf4DPpXYKIT0zTp7ZkcKDiA6Sl0gV9wTM14Q3kVP87Dw7o2neTgqCPKMKytVY2f0PQGvS0OIGDTtOYxqn6G6sLi-biQ0U1hguQsKDv85Zvvgt-tZLJx9rzX0nb2I1OlSsmphtYNV-~Gf7o4E2IQ6I5XKkXYjsgkxlJI4E57IPCupeULGdF2~8EHbdHbySdBXX3NaV2yKH6LGB-DjFgxOqw6vWn~ur~bAT6uQ__";

export default function UseCases() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Use Cases for Environmental Emergency Response
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            ChainSync is purpose-built for organizations responsible for detecting and responding to environmental emergencies. Explore how different sectors benefit from automated coordination.
          </p>
        </div>
      </section>

      {/* Water Treatment Facilities */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                Water Quality Protection
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Water Treatment Facilities
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">The Challenge</h3>
                  <p className="text-muted-foreground">
                    Drinking water systems face constant threats from contamination events. When turbidity spikes, chemical anomalies appear, or pathogens are detected, treatment facilities must coordinate immediate response across multiple agencies and regulatory bodies—all while maintaining public safety and compliance documentation.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">ChainSync Solution</h3>
                  <p className="text-muted-foreground">
                    Real-time sensor monitoring detects anomalies in seconds. The platform automatically analyzes water quality data, correlates it with historical patterns and regulatory thresholds, and initiates coordinated response. Notifications go to treatment operators, public health officials, and regulatory agencies simultaneously. Compliance reports are generated automatically.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Benefits</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Detect contamination events in seconds, not hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Automated multi-agency coordination and notifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Compliance documentation generated automatically</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Reduced public health risk through faster response</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <img
                src={waterImage}
                alt="Water Treatment Facility Monitoring"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Environmental Compliance */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <Gauge className="text-secondary mx-auto mb-4" size={48} />
                  <p className="text-muted-foreground">Industrial emissions monitoring and compliance tracking</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block bg-green-100 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
                Emissions & Compliance
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Industrial Environmental Compliance
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">The Challenge</h3>
                  <p className="text-muted-foreground">
                    Manufacturing and industrial facilities must continuously monitor emissions, manage environmental incidents, and maintain detailed compliance documentation. Regulatory requirements are complex, penalties for violations are severe, and response coordination across multiple departments and external agencies is time-consuming and error-prone.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">ChainSync Solution</h3>
                  <p className="text-muted-foreground">
                    Continuous monitoring of emissions data with AI-powered anomaly detection. When thresholds are exceeded or incidents occur, ChainSync automatically notifies relevant teams, coordinates response actions, and generates compliance documentation. Integration with environmental management systems ensures seamless data flow.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Benefits</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">✓</span>
                      <span>Continuous emissions monitoring with instant alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">✓</span>
                      <span>Automated incident response coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">✓</span>
                      <span>Compliance documentation always audit-ready</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">✓</span>
                      <span>Reduced regulatory penalties and operational downtime</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Municipal Emergency Response */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-amber-100 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                Emergency Coordination
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Municipal Emergency Response
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">The Challenge</h3>
                  <p className="text-muted-foreground">
                    Cities and municipalities face diverse environmental threats—from flooding and chemical spills to air quality emergencies and waste management crises. Coordinating response across multiple departments, agencies, and jurisdictions is complex. Communication delays and coordination failures often result in delayed response and increased impact.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">ChainSync Solution</h3>
                  <p className="text-muted-foreground">
                    A unified platform for all environmental emergencies. Real-time monitoring feeds data from multiple sources. When incidents are detected, ChainSync automatically coordinates response across fire departments, public health, environmental agencies, and external partners. Emergency meetings are scheduled automatically with the right stakeholders.
                  </p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Benefits</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Unified platform for all environmental incident types</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Cross-department and cross-agency coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Faster response reduces community impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Improved public communication and transparency</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="text-accent mx-auto mb-4" size={48} />
                  <p className="text-muted-foreground">Multi-agency emergency coordination and response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Is Your Organization a Good Fit?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            If you're responsible for detecting and responding to environmental emergencies, ChainSync can help you respond faster and coordinate better.
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
