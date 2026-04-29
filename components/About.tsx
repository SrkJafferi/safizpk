"use client";

import { useEffect, useRef, useState } from "react";
import { stats, sisterCompanies } from "@/lib/data";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function AnimatedCounter({
  target,
  suffix,
  visible,
}: {
  target: number;
  suffix: string;
  visible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target]);

  return (
    <span className="font-display font-extrabold text-4xl md:text-5xl text-gradient">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const { ref, visible } = useInView(0.15);

  return (
    <section id="about" className="relative py-20 md:pt-32 md:pb-16 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
      >
        {/* Section Label */}

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-stretch">
          {/* Left — Text */}
          <div
            className={`transition-all duration-700 delay-150 ${visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-mono text-[13px] uppercase tracking-[0.3em] text-primary mb-6">
              About Us
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight text-text-primary mb-8">
              Turning Brand Ideas Into{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Bold Visual Experiences</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full" />
              </span>
            </h2>
            <p className="font-body text-text-muted text-base md:text-lg leading-relaxed mb-8">
              We are Safi &amp; Co., a division of Safiz Group. From standout
              signage to premium printing and impactful promotional materials,
              our work is designed to connect, communicate, and perform. With a team of experienced professionals and a commitment to quality.
            </p>
            <p className="font-body text-text-muted text-base md:text-lg leading-relaxed mb-10">
              With offices in Karachi and Ajman UAE, we serve 1000+ brands across
              Pakistan and the Gulf — delivering consistent quality, creative
              precision, and reliable turnaround every single time.
            </p>

            {/* Sister Companies */}
            <div className="mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-text-muted/60 mb-4 block">
                Part of Safiz Group
              </span>
              <div className="flex flex-wrap gap-2">
                {sisterCompanies.map((company) => (
                  company.href ? (
                    <a
                      key={company.name}
                      href={company.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#d02d2c] text-sm font-body text-white hover:bg-[#b82726] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                      {company.name}
                    </a>
                  ) : (
                    <span
                      key={company.name}
                      className="px-4 py-2 rounded-full bg-[#d02d2c] text-sm font-body text-white hover:bg-[#b82726] transition-all duration-300 cursor-default shadow-md"
                    >
                      {company.name}
                    </span>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Right — Visual Showcase */}
          <div
            className={`relative transition-all duration-1000 delay-300 h-full ${visible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-12"
              }`}
          >
            <div className="relative rounded-3xl overflow-hidden group border border-border h-full min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1610374792793-f016b77ca51a?w=1200&q=80"
                alt="Our Printing Facility"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Floating Info Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-bg-dark/80 backdrop-blur-md border border-border group-hover:border-primary/50 transition-all duration-500 shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <p className="font-display font-bold text-text-primary text-lg">Advanced Infrastructure</p>
                </div>
                <p className="font-body text-text-muted text-sm leading-relaxed">
                  Utilizing state-of-the-art European machinery to ensure pixel-perfect
                  precision in every print and signage project.
                </p>
              </div>
            </div>

            {/* Secondary Floating Image */}
            <div className="absolute -top-8 -right-8 w-32 h-32 md:w-48 md:h-48 rounded-2xl border-8 border-bg-dark overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hidden sm:block transition-transform duration-500 hover:scale-105">
              <img
                src="https://plus.unsplash.com/premium_photo-1661963902291-11c3d786ba51?w=800&q=80"
                alt="Branding and Signage"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Mission */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-[#0a0a0a] border border-white/5 border-l-4 border-l-primary overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(229,37,42,0.2)] hover:border-white/10">
            {/* Subtle interactive background glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <h3 className="relative font-display text-sm font-bold uppercase tracking-[0.25em] text-primary mb-6 transition-transform duration-500 group-hover:translate-x-2 flex items-center gap-3">
              Our Mission
            </h3>

            <p className="relative font-body text-white/80 text-base md:text-lg leading-relaxed">
              To empower businesses with world-class printing, signage, and
              advertising solutions that elevate brand visibility, drive
              engagement, and deliver measurable results — with unmatched quality
              and speed.
            </p>
          </div>

          {/* Vision */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-[#0a0a0a] border border-white/5 border-l-4 border-l-primary overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(229,37,42,0.2)] hover:border-white/10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <h3 className="relative font-display text-sm font-bold uppercase tracking-[0.25em] text-primary mb-6 transition-transform duration-500 group-hover:translate-x-2 flex items-center gap-3">
              Our Vision
            </h3>

            <p className="relative font-body text-white/80 text-base md:text-lg leading-relaxed">
              To become the most trusted creative production house across
              Pakistan and the Middle East — known for innovation, reliability,
              and turning every brand&apos;s vision into bold, tangible reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
