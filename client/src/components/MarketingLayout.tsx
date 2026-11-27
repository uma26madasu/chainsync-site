import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "wouter";
import { trackConversion } from "@/lib/analytics";
export function CTA({ pilot = false }: { pilot?: boolean }) {
  return (
    <div className="cta-row">
      <Link
        className="cs-button"
        href={pilot ? "/contact?intent=pilot" : "/contact?intent=demo"}
        onClick={() =>
          trackConversion(pilot ? "pilot_cta_clicked" : "demo_cta_clicked")
        }
      >
        {pilot ? "Apply for a Founding Pilot" : "Request a Demo"}
      </Link>
      <Link
        className="cs-button secondary"
        href={pilot ? "/contact?intent=demo" : "/pilot-program"}
        onClick={() =>
          trackConversion(pilot ? "demo_cta_clicked" : "pilot_cta_clicked")
        }
      >
        {pilot ? "Request a Demo" : "Become a Pilot Partner"}
      </Link>
    </div>
  );
}
export default function MarketingLayout({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (window.location.hash) {
      const id = decodeURIComponent(window.location.hash.slice(1));
      requestAnimationFrame(() =>
        document.getElementById(id)?.scrollIntoView()
      );
    }
  }, []);
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="cs-main">
        <section className="cs-page-hero container">
          <p className="cs-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="cs-intro">{intro}</p>
        </section>
        {children}
      </main>
      <Footer />
    </>
  );
}
export function Section({
  title,
  children,
  dark = false,
}: {
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={dark ? "cs-section cs-dark" : "cs-section"}>
      <div className="container">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
