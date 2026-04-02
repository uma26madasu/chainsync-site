import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663256672386/xMegmORGETDJlabL.png" alt="ChainSync" className="h-16 w-auto" />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/use-cases">
              <a className="text-foreground hover:text-primary transition-colors text-base font-medium">
                Use Cases
              </a>
            </Link>
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
            <Link href="/roadmaps">
              <a className="text-foreground hover:text-primary transition-colors text-base font-medium">
                Roadmaps
              </a>
            </Link>
            <Link href="/insights">
              <a className="text-foreground hover:text-primary transition-colors text-base font-medium">
                Insights
              </a>
            </Link>
            <a
              href="https://slotify.getchainsync.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors text-base font-medium"
            >
              Slotify
            </a>
            <Link href="/contact">
              <a className="text-foreground hover:text-primary transition-colors text-base font-medium">
                Contact
              </a>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 text-base font-semibold">
                Request Early Access
              </Button>
            </Link>
          </div>

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
            <Link href="/use-cases">
              <a className="text-foreground hover:text-primary transition-colors text-sm font-medium block py-2">
                Use Cases
              </a>
            </Link>
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
            <Link href="/roadmaps">
              <a className="text-foreground hover:text-primary transition-colors text-sm font-medium block py-2">
                Roadmaps
              </a>
            </Link>
            <Link href="/insights">
              <a className="text-foreground hover:text-primary transition-colors text-sm font-medium block py-2">
                Insights
              </a>
            </Link>
            <a
              href="https://slotify.getchainsync.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium block py-2"
            >
              Slotify
            </a>
            <Link href="/contact">
              <a className="text-foreground hover:text-primary transition-colors text-sm font-medium block py-2">
                Contact
              </a>
            </Link>
            <Link href="/contact">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-2">
                Request Early Access
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
