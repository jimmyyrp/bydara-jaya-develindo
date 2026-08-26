"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mainNavigation, siteConfig } from "@/lib/data";
import { Logo } from "@/components/logo";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleDropdownEnter = useCallback((name: string) => {
    setOpenDropdown(name);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background-alt/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-background-alt"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Logo size={scrolled ? "sm" : "md"} showText={true} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {mainNavigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.children && handleDropdownEnter(item.name)
                }
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-foreground-muted hover:text-primary transition-colors py-2"
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-background-alt border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-foreground-muted hover:text-primary hover:bg-accent/50 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground-muted hover:text-primary"
              asChild
            >
              <a
                href={`tel:${siteConfig.phone}`}
                aria-label="Telepon Sales"
              >
                <Phone className="h-4 w-4" />
              </a>
            </Button>
            <Button
              className="rounded-full bg-primary hover:bg-primary-hover px-5 py-2.5 text-[10px] font-bold tracking-wider uppercase shadow-md transition-all duration-300"
              asChild
            >
              <Link href="/booking">Booking Sekarang</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-accent rounded-lg transition-colors z-[60] relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background-alt animate-in fade-in duration-300 lg:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-border h-16">
              <Logo size="sm" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-foreground hover:bg-accent rounded-lg transition-colors"
                aria-label="Tutup menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col p-6 gap-1 items-center justify-start flex-1 overflow-y-auto">
              {mainNavigation.map((item) => (
                <div key={item.name} className="w-full">
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 text-lg font-serif font-bold text-foreground hover:text-primary transition-colors text-center"
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-2 text-sm text-foreground-muted hover:text-primary transition-colors text-center"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="w-full max-w-xs space-y-3 pt-8 text-center">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-hover py-6 text-[10px] font-bold shadow-lg tracking-widest uppercase"
                  asChild
                >
                  <Link href="/booking" onClick={() => setIsMenuOpen(false)}>
                    BOOKING SEKARANG
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-primary py-6 text-[10px] font-bold tracking-widest uppercase"
                  asChild
                >
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    CHAT WHATSAPP
                  </a>
                </Button>
                <p className="text-[8px] text-foreground-subtle font-bold tracking-[0.2em] uppercase pt-4">
                  Developed by {siteConfig.creator}
                </p>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
