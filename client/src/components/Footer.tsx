import { Link } from "wouter";
export default function Footer() {
  return (
    <footer className="cs-footer">
      <div className="container">
        <div className="cs-grid three">
          <div>
            <Link href="/" className="cs-brand">
              <img src="/logo-icon.png" alt="" width="36" height="40" />
              <span>ChainSync</span>
            </Link>
            <p>
              Incident coordination for critical infrastructure. Seeking
              founding pilot partners.
            </p>
          </div>
          <nav aria-label="Platform links">
            <h2>Explore</h2>
            <Link href="/how-it-works">Platform</Link>
            <Link href="/use-cases">Industries</Link>
            <Link href="/technology">Integrations</Link>
            <Link href="/walkthrough">Illustrative walkthrough</Link>
            <Link href="/security">Security and Reliability</Link>
          </nav>
          <nav aria-label="Company links">
            <h2>Connect</h2>
            <Link href="/pilot-program">Pilot Program</Link>
            <Link href="/partnerships">Partnerships</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/roadmaps">Roadmap</Link>
            <Link href="/privacy">Data handling</Link>
            <a
              href="https://www.linkedin.com/company/getchainsync/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </nav>
        </div>
        <p className="cs-note">
          © {new Date().getFullYear()} ChainSync. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
