import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { CTA, Section } from "@/components/MarketingLayout";
import Lifecycle from "@/components/Lifecycle";
export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="cs-home-hero container">
          <div>
            <p className="cs-eyebrow">Seeking founding pilot partners</p>
            <h1>
              Your systems detect the problem.{" "}
              <span>ChainSync coordinates what happens next.</span>
            </h1>
            <p className="cs-intro">
              Connect existing monitoring infrastructure with incident analysis,
              response team coordination, and supporting documentation across
              critical infrastructure operations.
            </p>
            <CTA />
            <Link className="cs-text-link" href="/partnerships">
              Explore Integration Partnerships
            </Link>
          </div>
          <div
            className="cs-architecture"
            aria-label="Proposed integration architecture"
          >
            <p className="cs-eyebrow">Built around your existing systems</p>
            <div className="cs-system-row">
              <span>SCADA</span>
              <span>BMS</span>
              <span>Monitoring APIs</span>
            </div>
            <div className="cs-connector" aria-hidden="true" />
            <div className="cs-engine">
              <img src="/logo-icon.png" alt="" width="42" height="42" />
              <h2>ChainSync</h2>
              <p>
                Analyze incidents
                <br />
                Coordinate the response
                <br />
                Track progress
              </p>
            </div>
            <div className="cs-connector" aria-hidden="true" />
            <div className="cs-system-row">
              <span>Response teams</span>
              <span>Incident documentation</span>
            </div>
            <p className="cs-note">
              Architecture illustration, not a product screenshot.
            </p>
          </div>
        </section>
        <Section title="Keep detection. Improve the handoff.">
          <div className="cs-grid three">
            {[
              [
                "A clear owner",
                "Help teams understand who needs to act and what happens next.",
              ],
              [
                "Shared incident context",
                "Bring the alert, response activity, and status into a coordinated workflow.",
              ],
              [
                "Documentation alongside response",
                "Support incident records without promising regulatory compliance.",
              ],
            ].map(([t, b]) => (
              <article className="cs-card" key={t}>
                <h3>{t}</h3>
                <p>{b}</p>
              </article>
            ))}
          </div>
        </Section>
        <Section title="Start with one operational workflow" dark>
          <div className="cs-grid">
            <article>
              <p className="cs-eyebrow">Water and wastewater</p>
              <h3>From a pump alarm to a coordinated response</h3>
              <p>
                Explore equipment failures, tank-level alerts, water quality
                events, and after-hours team coordination.
              </p>
              <Link
                className="cs-text-link"
                href="/industries/water-wastewater"
              >
                Explore water utility workflows
              </Link>
            </article>
            <article>
              <p className="cs-eyebrow">Healthcare facilities</p>
              <h3>Support the facilities team behind the care environment</h3>
              <p>
                Explore BMS alarms, HVAC issues, water system incidents, and
                engineering team coordination.
              </p>
              <Link
                className="cs-text-link"
                href="/industries/healthcare-facilities"
              >
                Explore healthcare facilities workflows
              </Link>
            </article>
          </div>
        </Section>
        <Section title="Explore the architecture behind the workflow">
          <p>
            Integration, intelligence, and coordination layers connect existing
            monitoring with response teams. Explore the 17 specialized agents,
            their responsibilities, and the platform technology stack.
          </p>
          <div className="cta-row">
            <Link className="cs-button secondary" href="/how-it-works#agents">
              Explore Architecture and AI Agents
            </Link>
            <Link className="cs-button secondary" href="/technology#stack">
              View the Technology Stack
            </Link>
          </div>
        </Section>
        <Section title="One incident, through to closure">
          <Lifecycle />
        </Section>
        <Section title="An evaluation grounded in your operations">
          <div className="cs-grid">
            <div>
              <p>
                ChainSync is early stage and seeking its first operational pilot
                partners. Start with a discovery conversation, agree on one
                incident workflow, and evaluate it against your existing
                procedures.
              </p>
              <p>
                Begin with authorized read-only integration and historical
                validation. Any live coordination is supervised and subject to
                your approval.
              </p>
              <CTA pilot />
            </div>
            <aside className="cs-card">
              <h3>Your procedures remain in control</h3>
              <p>
                ChainSync is intended to complement monitoring platforms. It
                does not replace safety-critical controls, mandatory emergency
                procedures, or accountable human decisions.
              </p>
              <Link className="cs-text-link" href="/security">
                Review security and pilot safeguards
              </Link>
            </aside>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
