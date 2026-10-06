import { Link } from "wouter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/technology", label: "Technology" },
  { href: "/walkthrough", label: "Walkthrough" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 pt-3 pb-2">
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <div
            className={`flex items-center justify-between rounded-full px-4 py-1.5 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              scrolled
                ? "bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-[0_4px_24px_rgba(15,90,143,0.10),0_1px_0_rgba(255,255,255,0.7)_inset]"
                : "bg-white/85 backdrop-blur-xl border border-slate-200/60 shadow-[0_2px_16px_rgba(15,90,143,0.06),0_1px_0_rgba(255,255,255,0.6)_inset]"
            }`}
          >
            <Link href="/">
              <a className="flex items-center hover:opacity-75 transition-opacity duration-[600ms] ease-[cubic-bezier(0.32,0.72,0,1)]">
                <img src="/logo.png" alt="ChainSync" className="h-8 md:h-9 w-auto" />
              </a>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a className="text-slate-600 hover:text-slate-900 text-[13px] font-medium transition-colors duration-200">
                    {link.label}
                  </a>
                </Link>
              ))}
              {/* Pilot Partnership as primary CTA */}
              <Link href="/contact">
                <a className="group inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-slate-700 px-4 py-2 text-[12px] font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]">
                  Pilot Partnership
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                    <ArrowRight size={9} />
                  </span>
                </a>
              </Link>
            </nav>

            {/* Morphing hamburger */}
            <button
              className="md:hidden relative flex flex-col items-end justify-center gap-[5px] w-8 h-8 p-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block h-[1.5px] w-5 bg-slate-900 origin-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block h-[1.5px] bg-slate-900 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "w-0 opacity-0" : "w-4"}`} />
              <span className={`block h-[1.5px] w-5 bg-slate-900 origin-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-white/96 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-300"
              aria-label="Close menu"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {[...NAV_LINKS, { href: "/contact", label: "Pilot Partnership" }].map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 14 }}
                transition={{ delay: 0.04 + i * 0.07, duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
              >
                <Link href={link.href}>
                  <a
                    className="text-3xl font-bold text-slate-900 hover:text-primary transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] block min-h-[44px] flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
