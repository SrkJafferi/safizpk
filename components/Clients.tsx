"use client";

import { useEffect, useRef, useState } from "react";
import { uaeLogos, pakistanLogos } from "@/lib/data";
import Image from "next/image";

export default function Clients() {
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

  const uaeDoubled = [...uaeLogos, ...uaeLogos];
  const pkDoubled = [...pakistanLogos, ...pakistanLogos];

  return (
    <section
      id="clients"
      className="relative py-20 md:py-32 bg-surface overflow-hidden"
    >
      <div ref={ref} className="relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-14 md:mb-20 px-4 sm:px-6 md:px-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-mono text-[13px] uppercase tracking-[0.3em] text-primary mb-6">
            Our Clients
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-text-primary mb-6">
            Trusted By{" "}
            <span className="text-gradient">Leading Brands</span>
          </h2>
          <p className="font-body text-text-muted text-base md:text-lg max-w-2xl mx-auto">
            Empowering government institutions and global brands across Pakistan and the UAE.
          </p>
        </div>

        {/* UAE Row — scrolls left */}
        <div
          className={`mb-5 transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="flex items-center gap-3 mb-4 px-4 sm:px-6 md:px-8">
            <span className="font-mono text-[13px] uppercase tracking-[0.3em] text-primary">
              UAE Clients
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-surface to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-surface to-transparent z-10" />
            <div className="animate-marquee-left flex items-center gap-3 whitespace-nowrap">
              {uaeDoubled.map((client, i) => (
                <div
                  key={`uae-${i}`}
                  className="shrink-0 flex flex-col items-center gap-2 group"
                >
                  <div className="w-32 h-16 md:w-40 md:h-20 px-4 py-2 rounded-xl border border-border bg-bg-card/50 flex items-center justify-center group-hover:border-primary/30 transition-all duration-300">
                    <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500">
                      <Image
                        src={client.src}
                        alt={client.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <span className="text-[10px] md:text-xs font-body font-medium text-text-muted group-hover:text-primary transition-colors duration-300 uppercase tracking-tight text-center max-w-[120px] md:max-w-[160px] truncate">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pakistan Row — scrolls rights */}
        <div
          className={`transition-all duration-700 delay-400 ${visible ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="flex items-center gap-3 mb-4 px-4 sm:px-6 md:px-8">
            <span className="font-mono text-[13px] uppercase tracking-[0.3em] text-primary">
              Pakistan Clients
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-surface to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-surface to-transparent z-10" />
            <div className="animate-marquee-right flex items-center gap-3 whitespace-nowrap">
              {pkDoubled.map((client, i) => (
                <div
                  key={`pk-${i}`}
                  className="shrink-0 flex flex-col items-center gap-2 group"
                >
                  <div className="w-32 h-16 md:w-40 md:h-20 px-4 py-2 rounded-xl border border-border bg-bg-card/50 flex items-center justify-center group-hover:border-primary/30 transition-all duration-300">
                    <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500">
                      <Image
                        src={client.src}
                        alt={client.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <span className="text-[10px] md:text-xs font-body font-medium text-text-muted group-hover:text-primary transition-colors duration-300 uppercase tracking-tight text-center max-w-[120px] md:max-w-[160px] truncate">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
