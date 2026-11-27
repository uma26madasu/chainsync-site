import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { CTA, Section } from "@/components/MarketingLayout";
import Lifecycle from "@/components/Lifecycle";
import HeroArchitecture from "@/components/HeroArchitecture";
import {
  Fingerprint,
  Layers3,
  Workflow,
  Waves,
  Building2,
  ShieldCheck,
} from "lucide-react";
export default function Home() {
  return (
    <>
      <Header dark />
      <main id="main-content" tabIndex={-1} className="cs-home">
        <div className="cs-hero-shell">
          <section className="cs-home-hero container">
            <div className="cs-hero-copy">
              <p className="cs-eyebrow">
                <span className="cs-label-rule" />
                Critical infrastructure. Coordinated.
              </p>
              <h1>
                Your systems detect the problem.
                <span>Coordinate what happens next.</span>
              </h1>
              <p className="cs-intro">
                ChainSync connects existing monitoring with incident analysis,
                response teams, and supporting documentation. A clearer path
                from the first alert to closure.
              </p>
              <CTA />
              <Link className="cs-text-link" href="/partnerships">
                Explore Integration Partnerships
              </Link>
              <p className="cs-stage-note">
                Early stage. Seeking founding operational pilot partners.
              </p>
            </div>
            <HeroArchitecture />
          </section>
          <div className="container cs-hero-baseline">
            <span>Designed around your existing infrastructure</span>
            <nav aria-label="Explore this page">
              <a href="#operational-value">Operational value</a>
              <a href="#industries">Industries</a>
              <a href="#workflow">Incident lifecycle</a>
            </nav>
          </div>
        </div>
        <div id="operational-value" className="cs-anchor">
          <Section title="Keep detection. Improve the handoff.">
            <div className="cs-value-layout">
              <p className="cs-section-lead">
                The alert is the starting point.
                <br />
                The response needs a structure.
              </p>
              <div className="cs-value-list">
                {[
                  [
                    Fingerprint,
                    "A clear owner",
                    "Help teams understand who needs to act and what happens next.",
                  ],
                  [
                    Layers3,
                    "Shared incident context",
                    "Bring the alert, response activity, and status into a coordinated workflow.",
                  ],
                  [
                    Workflow,
                    "Documentation alongside response",
                    "Support incident records without promising regulatory compliance.",
                  ],
                ].map(([Icon, title, body]) => {
                  const Glyph = Icon as typeof Fingerprint;
                  return (
                    <article key={String(title)}>
                      <div className="cs-feature-icon">
                        <Glyph size={23} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3>{String(title)}</h3>
                        <p>{String(body)}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </Section>
        </div>
        <div id="industries" className="cs-anchor">
          <Section title="Start with one operational workflow">
            <div className="cs-industry-grid">
              <article className="cs-industry-panel">
                <div className="cs-industry-art water" aria-hidden="true">
                  <svg viewBox="0 0 440 160" fill="none">
                    <path d="M0 80H100V45H180V110H260V65H340V80H440" />
                    <path d="M0 110H70V80H155V130H290V95H380V110H440" />
                    <circle cx="180" cy="45" r="6" />
                    <circle cx="260" cy="110" r="6" />
                  </svg>
                  <Waves size={46} strokeWidth={1} />
                </div>
                <div className="cs-industry-content">
                  <p className="cs-eyebrow">Water and wastewater</p>
                  <h3>From a pump alarm to a coordinated response.</h3>
                  <p>
                    Equipment failures, tank-level alerts, water quality events,
                    and after-hours team coordination.
                  </p>
                  <Link
                    className="cs-text-link"
                    href="/industries/water-wastewater"
                  >
                    Explore water utility workflows
                  </Link>
                </div>
              </article>
              <article className="cs-industry-panel">
                <div className="cs-industry-art facilities" aria-hidden="true">
                  <svg viewBox="0 0 440 160" fill="none">
                    <path d="M70 160V65H150V160M170 160V25H270V160M290 160V85H370V160M195 50H245M195 75H245M195 100H245M195 125H245" />
                  </svg>
                  <Building2 size={46} strokeWidth={1} />
                </div>
                <div className="cs-industry-content">
                  <p className="cs-eyebrow">Healthcare facilities</p>
                  <h3>Support the team behind the care environment.</h3>
                  <p>
                    BMS alarms, HVAC issues, water system incidents, and
                    facilities engineering coordination.
                  </p>
                  <Link
                    className="cs-text-link"
                    href="/industries/healthcare-facilities"
                  >
                    Explore healthcare facilities workflows
                  </Link>
                </div>
              </article>
            </div>
          </Section>
        </div>
        <Section title="Built to make the connections clear.">
          <div className="cs-technical-banner">
            <div>
              <p className="cs-eyebrow">Inside the platform</p>
              <p className="cs-section-lead">
                Integration. Intelligence.
                <br />
                Coordination.
              </p>
              <p>
                Explore the architecture, all 17 specialized agents and their
                responsibilities, and the technology stack behind the workflow.
              </p>
              <div className="cta-row">
                <Link className="cs-button" href="/how-it-works#agents">
                  Explore Architecture and AI Agents
                </Link>
                <Link className="cs-button secondary" href="/technology#stack">
                  View the Technology Stack
                </Link>
              </div>
            </div>
            <div className="cs-layer-map" aria-label="Platform layers">
              <div>
                <span>Integration</span>
                <p>Existing monitoring and HTTP webhooks</p>
              </div>
              <div>
                <span>Intelligence</span>
                <p>17 specialized coordination agents</p>
              </div>
              <div>
                <span>Coordination</span>
                <p>People, scheduling, and incident state</p>
              </div>
              <Link href="/how-it-works" className="cs-text-link">
                Explore the Platform
              </Link>
            </div>
          </div>
        </Section>
        <div id="workflow" className="cs-anchor">
          <Section title="One incident, through to closure.">
            <Lifecycle />
          </Section>
        </div>
        <div className="cs-pilot-close">
          <Section title="Evaluate it in your operations." dark>
            <div className="cs-grid">
              <div>
                <p>
                  ChainSync is early stage and seeking its first operational
                  pilot partners. Start with a discovery conversation, agree on
                  one incident workflow, and evaluate it against your existing
                  procedures.
                </p>
                <p>
                  Begin with authorized read-only integration and historical
                  validation. Any live coordination is supervised and subject to
                  your approval.
                </p>
                <CTA pilot />
              </div>
              <aside className="cs-safeguard">
                <ShieldCheck size={32} strokeWidth={1.5} aria-hidden="true" />
                <h3>Your procedures remain in control.</h3>
                <p>
                  ChainSync complements monitoring platforms. It does not
                  replace safety-critical controls, mandatory emergency
                  procedures, or accountable human decisions.
                </p>
                <Link className="cs-text-link" href="/security">
                  Review security and pilot safeguards
                </Link>
              </aside>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
