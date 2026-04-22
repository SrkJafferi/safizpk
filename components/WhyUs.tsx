"use client";

import { useEffect, useRef, useState } from "react";
import { whyUsFeatures, marqueeClients } from "@/lib/data";
import { Award, Users, Zap, Globe } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
};

export default function WhyUs() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const tickerItems = [...marqueeClients, ...marqueeClients];

  return (
    <section id="why-us" className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-[150px]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-mono text-[13px] uppercase tracking-[0.3em] text-primary mb-6">
            Why Us
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-text-primary mb-6">
            Why Brands Trust{" "}
            <span className="text-gradient">SAFIZ</span>
          </h2>
          <p className="font-body text-text-muted text-base md:text-lg max-w-2xl mx-auto">
            We combine decades of expertise with creative innovation to deliver
            results that speak for themselves.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {whyUsFeatures.map((feature, i) => (
            <div
              key={feature.title}
              className={`group relative p-6 md:p-8 rounded-2xl bg-bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] text-center overflow-hidden ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="font-display font-bold text-lg text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee Ticker */}
        <div
          className={`relative transition-all duration-700 delay-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-dark to-transparent z-10" />

          <div className="overflow-hidden py-6 border-y border-border">
            <div className="animate-ticker flex items-center gap-8 whitespace-nowrap">
              {tickerItems.map((client, i) => (
                <span
                  key={`${client}-${i}`}
                  className="flex items-center gap-3 text-text-muted/40 font-display font-bold text-lg md:text-xl shrink-0"
                >
                  {client}
                  <span className="w-2 h-2 bg-primary/30 rounded-full shrink-0" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
