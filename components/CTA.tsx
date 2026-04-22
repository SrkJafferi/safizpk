"use client";

import { useState } from "react";
import { ArrowRight, Phone, Send } from "lucide-react";

export default function CTA() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <section className="relative pb-20 md:pb-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto z-10">
      <div className="relative rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-dark p-8 sm:p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl shadow-primary/20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Decorative Light */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        
        {/* Left Content */}
        <div className="relative z-10 lg:w-3/5">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6 leading-[1.1]">
            Ready to print<br />your ideas?
          </h2>
          <p className="font-body text-white/90 text-lg sm:text-xl mb-10 max-w-lg leading-relaxed">
            Tell us what you're launching. We'll deliver a tailored quote in
            under 2 working hours — backed by zero-surprise pricing.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black hover:bg-gray-900 text-white font-display font-bold text-base rounded-full transition-all hover:scale-105 hover:shadow-xl"
            >
              Request a Quote <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+923002168915"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-display font-bold text-base rounded-full transition-all"
            >
              <Phone className="w-5 h-5" /> Call +92 300 2168915
            </a>
          </div>
        </div>

        {/* Right Content - Newsletter */}
        <div className="relative z-10 w-full lg:w-2/5 flex lg:justify-end">
          <div className="bg-black/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 w-full max-w-md shadow-2xl">
            <h3 className="font-display font-bold text-2xl text-white mb-3">
              Stay in the Loop
            </h3>
            <p className="font-body text-white/80 text-sm mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest printing trends, exclusive offers, and portfolio updates.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-white font-body text-sm animate-pulse">
                <Send className="w-5 h-5 text-green-400" />
                Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:border-white focus:ring-1 focus:ring-white outline-none font-body transition-all"
                />
                <button
                  type="submit"
                  className="w-full px-5 py-4 bg-white text-primary font-display font-bold text-base rounded-xl hover:bg-gray-100 transition-all hover:scale-[1.02] shadow-xl shadow-black/10"
                >
                  Subscribe Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
