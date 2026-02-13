import { Link } from "wouter";
import { Linkedin, Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">
                CS
              </div>
              <span className="font-bold text-lg">ChainSync</span>
            </div>
            <p className="text-gray-400 text-sm">
              Environmental emergency response in under 90 seconds.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/how-it-works">
                  <a className="hover:text-white transition-colors">How It Works</a>
                </Link>
              </li>
              <li>
                <Link href="/technology">
                  <a className="hover:text-white transition-colors">Technology</a>
                </Link>
              </li>
              <li>
                <Link href="/roadmaps">
                  <a className="hover:text-white transition-colors">Roadmaps</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/use-cases">
                  <a className="hover:text-white transition-colors">Use Cases</a>
                </Link>
              </li>
              <li>
                <Link href="/insights">
                  <a className="hover:text-white transition-colors">Insights</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/contact">
                  <a className="hover:text-white transition-colors">Contact</a>
                </Link>
              </li>
              <li>
                <a href="https://linkedin.com" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2026 ChainSync. All rights reserved. Early Access Program.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contact@chainsync.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
