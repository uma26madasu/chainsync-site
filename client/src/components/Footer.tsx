import { Link } from "wouter";
import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src="/logo.png" alt="ChainSync" className="h-8 w-auto mb-4" />
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Incident coordination infrastructure for water utilities. Reduces response time from hours to minutes.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/how-it-works">
                  <a className="text-slate-600 hover:text-slate-900 transition-colors">How It Works</a>
                </Link>
              </li>
              <li>
                <Link href="/technology">
                  <a className="text-slate-600 hover:text-slate-900 transition-colors">Technology</a>
                </Link>
              </li>
              <li>
                <Link href="/walkthrough">
                  <a className="text-slate-600 hover:text-slate-900 transition-colors">Walkthrough</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about">
                  <a className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-slate-600 hover:text-slate-900 transition-colors">Apply for Partnership</a>
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/getchainsync/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            &copy; 2026 ChainSync. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/getchainsync/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:contact@chainsync.com"
              className="text-slate-400 hover:text-slate-700 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
