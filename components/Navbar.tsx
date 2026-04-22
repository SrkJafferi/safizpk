"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("safiz-theme") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("safiz-theme", next);
  };

  const handleLinkClick = (href: string, disabled?: boolean) => {
    if (disabled) return;
    setIsOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-bg-dark/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/10"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#hero");
            }}
            className="flex flex-col group"
          >
            <img
              src="/assets/safizlogo.png"
              alt="Safiz Logo"
              className="h-10 md:h-10 w-auto object-contain"
            />

          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.disabled ? undefined : link.href}
                onClick={(e) => {
                  if (!link.disabled) {
                    e.preventDefault();
                    handleLinkClick(link.href, link.disabled);
                  }
                }}
                className={`relative px-3.5 py-2 text-sm font-body font-medium rounded-lg transition-all duration-300 ${link.disabled
                  ? "text-text-muted/40 cursor-not-allowed"
                  : "text-text-muted hover:text-text-primary hover:bg-white/5"
                  }`}
              >
                {link.label}
                {link.disabled && (
                  <span className="absolute -top-1 -right-1 text-[8px] bg-primary/20 text-primary px-1.5 py-0.5 rounded-full font-mono leading-none">
                    Soon
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Catalogue Button */}


            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-surface hover:bg-bg-card-hover border border-border transition-all duration-300 hover:border-primary/30"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-text-muted" />
              ) : (
                <Moon className="w-4 h-4 text-text-muted" />
              )}
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-display font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Get a Quote
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-surface border border-border transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-text-primary" />
              ) : (
                <Menu className="w-5 h-5 text-text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-bg-dark/98 backdrop-blur-2xl transition-all duration-500 ease-out ${isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="flex flex-col px-6 py-8 gap-2 h-full">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.disabled ? undefined : link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href, link.disabled);
              }}
              className={`flex items-center gap-3 px-4 py-4 rounded-xl text-lg font-display font-semibold transition-all duration-300 ${link.disabled
                ? "text-text-muted/40 cursor-not-allowed"
                : "text-text-primary hover:bg-surface hover:text-primary"
                }`}
              style={{
                transitionDelay: isOpen ? `${i * 50}ms` : "0ms",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(-20px)",
              }}
            >
              {link.label}
              {link.disabled && (
                <span className="text-[13px] bg-primary/20 text-primary px-2 py-1 rounded-full font-mono">
                  Coming Soon
                </span>
              )}
            </a>
          ))}

          <div className="mt-auto flex flex-col gap-3 pb-8">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 px-4 py-4 rounded-xl bg-surface border border-border text-text-primary font-body"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className="flex items-center justify-center px-6 py-4 bg-primary hover:bg-primary-dark text-white text-lg font-display font-bold rounded-xl transition-all"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
