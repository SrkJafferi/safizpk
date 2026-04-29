"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1715059382493-213b706e95f3?w=1800&q=90"
          alt="Large format printing press"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full py-32 md:py-0">
        <div className="max-w-3xl">
          {/* Location Label */}
          <div
            className={`transition-all duration-700 ${loaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              } stagger-1`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-20 rounded-full border border-primary/30 bg-primary/5 font-mono text-xs uppercase tracking-[0.3em] text-primary mb-8" style={{ marginBottom: "-40px" }}>
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Karachi · Pakistan · UAE
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-display font-extrabold leading-[0.95] tracking-tight mb-8 transition-all duration-700 delay-150 ${loaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
              You Think,
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gradient mt-2">
              We Create.
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`font-body font-light text-base sm:text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed transition-all duration-700 delay-300 ${loaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            Pakistan&apos;s leading printing, signage &amp; advertising partner
            — trusted by 100+ brands across Pakistan &amp; UAE since 1980.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-[450ms] ${loaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            <button
              onClick={() => scrollTo("#services")}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-display font-bold text-base rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02]"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="/assets/catalogue.pdf"
              download
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/20 hover:border-primary/50 text-white font-display font-semibold text-base rounded-xl transition-all duration-300 hover:bg-primary/5"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
              Download Catalogue
            </a>
          </div>

          {/* Trust Indicators */}
          <div
            className={`flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-white/10 transition-all duration-700 delay-[600ms] ${loaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-6xl text-white">
                20+
              </span>
              <span className="text-xs text-white/50 font-body leading-tight">
                Years of
                <br />
                Excellence
              </span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-6xl text-white">
                100+
              </span>
              <span className="text-xs text-white/50 font-body leading-tight">
                Brands
                <br />
                Served
              </span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="font-display font-extrabold text-6xl text-white">
                3
              </span>
              <span className="text-xs text-white/50 font-body leading-tight">
                Office
                <br />
                Locations
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge — hidden on mobile */}
      <div
        className={`hidden lg:flex absolute bottom-16 right-16 xl:right-24 transition-all duration-1000 delay-700 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
      >
        <div className="relative w-32 h-32 xl:w-36 xl:h-36">
          {/* Rotating text */}
          <svg
            className="animate-spin-slow w-full h-full"
            viewBox="0 0 200 200"
          >
            <defs>
              <path
                id="circlePath"
                d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
              />
            </defs>
            <text className="fill-text-muted text-[14px] uppercase tracking-[0.35em]">
              <textPath href="#circlePath" className="font-mono">
                EST. 1980 · SAFIZ GROUP · PREMIUM ·{" "}
              </textPath>
            </text>
          </svg>
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center pulse-glow">
              <div className="w-4 h-4 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-[13px] font-mono uppercase tracking-widest text-white/30">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
          <div className="absolute top-0 w-full h-4 bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
