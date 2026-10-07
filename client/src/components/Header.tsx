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
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled
            ? "bg-[#F6FBFC]/97 backdrop-blur-xl border-b border-[#DCECEF] shadow-[0_1px_10px_rgba(15,90,143,0.07)]"
            : "bg-[#F6FBFC]/90 backdrop-blur-md border-b border-[#DCECEF]/50"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6" style={{ maxWidth: "1200px" }}>
          <div className="flex items-center justify-between h-[76px]">

            {/* Logo */}
            <Link href="/">
              <a className="flex items-center shrink-0 hover:opacity-80 transition-opacity duration-300">
                <img
                  src="/logo.png"
                  alt="ChainSync"
                  className="w-[145px] sm:w-[158px] md:w-[172px] h-auto"
                />
              </a>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a className="px-3.5 py-2 rounded-lg text-[13.5px] font-medium text-slate-600 hover:text-slate-900 hover:bg-[#DCECEF]/50 transition-all duration-200">
                    {link.label}
                  </a>
                </Link>
              ))}

              <div className="w-px h-4 bg-[#DCECEF] mx-2.5 shrink-0" />

              <Link href="/contact">
                <a className="group inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 px-4.5 py-[9px] text-[12.5px] font-semibold text-white transition-all duration-200 active:scale-[0.97] min-h-[38px]">
                  Pilot Partnership
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight size={9} />
                  </span>
                </a>
              </Link>
            </nav>

            {/* Morphing hamburger */}
            <button
              className="md:hidden relative flex flex-col items-end justify-center gap-[5px] w-9 h-9 p-1"
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
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-[#F6FBFC]/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#DCECEF]/60 hover:bg-[#DCECEF] flex items-center justify-center transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {[...NAV_LINKS, { href: "/contact", label: "Pilot Partnership" }].map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: 0.04 + i * 0.06, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              >
                <Link href={link.href}>
                  <a
                    className="text-3xl font-bold text-slate-900 hover:text-primary transition-colors duration-200 block min-h-[44px] flex items-center"
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
