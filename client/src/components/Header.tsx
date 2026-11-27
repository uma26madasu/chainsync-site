import { Link, useLocation } from "wouter";
import { useEffect, useRef, useState } from "react";
import { trackConversion } from "@/lib/analytics";
const links = [
  ["/how-it-works", "Platform"],
  ["/use-cases", "Industries"],
  ["/technology", "Technology"],
  ["/security", "Security"],
  ["/pilot-program", "Pilot Program"],
];
export default function Header({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const button = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLElement>(null);
  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    const viewport = window.matchMedia("(min-width:901px)");
    const close = () => {
      if (viewport.matches) setOpen(false);
    };
    viewport.addEventListener("change", close);
    return () => viewport.removeEventListener("change", close);
  }, []);
  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
      if (e.key === "Tab") {
        const nodes = [
          button.current,
          ...Array.from(
            menu.current?.querySelectorAll<HTMLAnchorElement>("a") || []
          ),
        ].filter(Boolean) as HTMLElement[];
        const first = nodes[0],
          last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [open]);
  return (
    <>
      <a href="#main-content" className="cs-skip">
        Skip to content
      </a>
      <header className={dark ? "cs-header cs-header-dark" : "cs-header"}>
        <div className="container cs-header-inner">
          <Link href="/" className="cs-brand">
            <img src="/logo-icon.png" alt="" width="40" height="44" />
            <span>ChainSync</span>
          </Link>
          <button
            ref={button}
            className="cs-menu-toggle"
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close menu" : "Menu"}
          </button>
          <nav
            ref={menu}
            id="main-navigation"
            onClick={e => {
              if ((e.target as HTMLElement).closest("a")) setOpen(false);
            }}
            aria-label="Main navigation"
            className={open ? "cs-nav is-open" : "cs-nav"}
          >
            {links.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                aria-current={location === href ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
            <Link
              className="cs-button"
              href="/contact?intent=demo"
              onClick={() => trackConversion("demo_cta_clicked")}
            >
              Request a Demo
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
