"use client";

import { useEffect, useRef, useState } from "react";
import { serviceCategories } from "@/lib/data";
import {
  Printer,
  SignpostBig,
  Frame,
  Gift,
  PenTool,
  Store,
  Car,
  MonitorPlay,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Printer: <Printer className="w-7 h-7" />,
  SignpostBig: <SignpostBig className="w-7 h-7" />,
  Frame: <Frame className="w-7 h-7" />,
  Gift: <Gift className="w-7 h-7" />,
  PenTool: <PenTool className="w-7 h-7" />,
  Store: <Store className="w-7 h-7" />,
  Car: <Car className="w-7 h-7" />,
  MonitorPlay: <MonitorPlay className="w-7 h-7" />,
  Cpu: <Cpu className="w-7 h-7" />,
};

export default function Services() {
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

  return (
    <section
      id="services"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-mono text-[13px] uppercase tracking-[0.3em] text-primary mb-6">
            Our Services
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-text-primary mb-6">
            What We Do
          </h2>
          <p className="font-body text-text-muted text-base md:text-lg max-w-2xl mx-auto">
            Six categories. Hundreds of products. One creative partner.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {serviceCategories.map((service, i) => (
            <div
              key={service.id}
              className={`group relative p-6 md:p-8 rounded-2xl bg-bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/5 overflow-hidden ${visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-98 group-hover:opacity-99 transition-opacity duration-500" />

              {/* Content Wrapper */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/20 backdrop-blur-sm border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {iconMap[service.icon]}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg md:text-xl text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-body text-text-muted text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* Bottom row */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-mono text-xs text-primary bg-primary/20 backdrop-blur-sm border border-primary/20 px-3 py-1.5 rounded-full">
                    {service.itemCount} products
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
