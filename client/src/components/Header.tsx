import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt="ChainSync" className="h-20 w-auto" />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/how-it-works">
              <a className="text-foreground hover:text-primary transition-colors text-base font-medium">
                How It Works
              </a>
            </Link>
            <Link href="/technology">
              <a className="text-foreground hover:text-primary transition-colors text-base font-medium">
                Technology
              </a>
            </Link>
            <Link href="/walkthrough">
              <a className="text-foreground hover:text-primary transition-colors text-base font-medium">
                Walkthrough
              </a>
            </Link>
            <Link href="/about">
              <a className="text-foreground hover:text-primary transition-colors text-base font-medium">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-foreground hover:text-primary transition-colors text-base font-medium">
                Pilot Partnership
              </a>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 flex flex-col gap-3">
            <Link href="/how-it-works">
              <a className="text-foreground hover:text-primary transition-colors text-sm font-medium block py-2">
                How It Works
              </a>
            </Link>
            <Link href="/technology">
              <a className="text-foreground hover:text-primary transition-colors text-sm font-medium block py-2">
                Technology
              </a>
            </Link>
            <Link href="/walkthrough">
              <a className="text-foreground hover:text-primary transition-colors text-sm font-medium block py-2">
                Walkthrough
              </a>
            </Link>
            <Link href="/about">
              <a className="text-foreground hover:text-primary transition-colors text-sm font-medium block py-2">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-foreground hover:text-primary transition-colors text-sm font-medium block py-2">
                Pilot Partnership
              </a>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
