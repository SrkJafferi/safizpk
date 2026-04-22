"use client";

import { MapPin, Navigation, Package, Timer } from "lucide-react";
import { offices } from "@/lib/data";

export default function MapSection() {
  return (
    <section className="relative w-full h-auto min-h-[560px] lg:h-[560px] overflow-hidden bg-[#050505] border-t border-white/5">
      {/* Background Map Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
          alt="Global Reach Map"
          className="w-full h-full object-cover opacity-40 mix-blend-screen grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent opacity-80" />
      </div>

      {/* Decorative Map Pins */}
      {/* Ajman, UAE */}
      <div className="absolute top-[40%] left-[50%] lg:left-[55%] flex flex-col items-center z-0">
        <span className="absolute w-12 h-12 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: '3s' }} />
        <span className="relative w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(229,37,42,1)]" />
      </div>
      
      {/* Karachi DHA */}
      <div className="absolute top-[55%] left-[60%] lg:left-[65%] flex flex-col items-center z-0">
        <span className="absolute w-12 h-12 rounded-full bg-primary/30 animate-ping delay-700" style={{ animationDuration: '3s' }} />
        <span className="relative w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(229,37,42,1)]" />
      </div>
      
      {/* Karachi Saddar */}
      <div className="absolute top-[52%] left-[58%] lg:left-[63%] flex flex-col items-center z-0">
        <span className="absolute w-12 h-12 rounded-full bg-primary/30 animate-ping delay-300" style={{ animationDuration: '3s' }} />
        <span className="relative w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(229,37,42,1)]" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col justify-between py-12 lg:py-16">
        
        {/* Header */}
        <div className="mb-auto max-w-xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-6 backdrop-blur-md">
            Global Presence
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mb-6">
            Our Reach
          </h2>
          <p className="font-body text-white/70 text-base md:text-lg leading-relaxed">
            From the bustling markets of Karachi to the dynamic landscapes of the UAE, we deliver premium printing and signage solutions with speed and precision.
          </p>
        </div>

        {/* Coverage & Stats Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          {/* Pakistan Coverage */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-5 rounded overflow-hidden shadow-sm">
                <img src="https://flagcdn.com/pk.svg" alt="Pakistan Flag" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Pakistan Coverage</h4>
            </div>
            <p className="font-body text-primary text-lg font-medium">All Major Cities</p>
          </div>

          {/* UAE Coverage */}
          <div className="flex flex-col md:border-l md:border-white/10 md:pl-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-5 rounded overflow-hidden shadow-sm">
                <img src="https://flagcdn.com/ae.svg" alt="UAE Flag" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">UAE Coverage</h4>
            </div>
            <p className="font-body text-primary text-lg font-medium">Dubai · Ajman · Sharjah</p>
          </div>

          {/* Orders Stats */}
          <div className="flex flex-col lg:border-l lg:border-white/10 lg:pl-6">
            <div className="flex items-center gap-3 mb-3">
              <Package className="w-5 h-5 text-primary" />
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Orders Delivered</h4>
            </div>
            <p className="font-body text-primary text-3xl font-extrabold tracking-tight">10,000+</p>
          </div>

          {/* Turnaround Stats */}
          <div className="flex flex-col lg:border-l lg:border-white/10 lg:pl-6">
            <div className="flex items-center gap-3 mb-3">
              <Timer className="w-5 h-5 text-primary" />
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Avg. Turnaround</h4>
            </div>
            <p className="font-body text-primary text-3xl font-extrabold tracking-tight">48 Hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
