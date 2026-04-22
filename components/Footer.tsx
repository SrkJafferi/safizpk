"use client";

import { serviceCategories, sisterCompanies } from "@/lib/data";
const Facebook = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const Instagram = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);
const Linkedin = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);
const MessageCircle = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" /></svg>
);

const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Clients", href: "#clients" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
  { label: "Portfolio", href: "/portfolio", disabled: true },
  { label: "Blog", href: "/blog", disabled: true },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1760894942780-2b4b82a42ac3?w=1600&q=80"
          alt="Footer Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-[#050505]/80" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-16 md:pt-24 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {/* Col 1 — Brand */}
            <div className="lg:col-span-1 lg:pr-6">
              <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }} className="inline-block mb-6 group">
                <img 
                  src="/assets/safizlogo.png" 
                  alt="Safiz Logo" 
                  className="h-12 md:h-14 w-auto object-contain mb-2"
                />
                <span className="text-[11px] uppercase tracking-[0.3em] text-text-muted font-mono block group-hover:text-primary transition-colors">
                  You Think, We Create
                </span>
              </a>
              <p className="font-body text-text-muted text-sm leading-relaxed mb-8 max-w-xs">
                Pakistan&apos;s leading printing, signage &amp; advertising
                company. Delivering bold visual experiences since 2005.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {[
                  { icon: Facebook, label: "Facebook", href: "#" },
                  { icon: Instagram, label: "Instagram", href: "#" },
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: MessageCircle, label: "WhatsApp", href: "#" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div>
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-6">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.disabled ? undefined : link.href}
                      onClick={(e) => {
                        if (link.disabled) {
                          e.preventDefault();
                          return;
                        }
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          scrollTo(link.href);
                        }
                      }}
                      className={`inline-flex items-center gap-2 font-body text-sm transition-all duration-300 ${link.disabled
                        ? "text-text-muted/30 cursor-not-allowed"
                        : "text-text-muted hover:text-primary hover:translate-x-1"
                        }`}
                    >
                      {link.label}
                      {link.disabled && (
                        <span className="text-[9px] text-primary font-mono bg-primary/10 px-2 py-0.5 rounded-full">
                          (Soon)
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Services */}
            <div>
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-6">
                Services
              </h4>
              <ul className="space-y-4">
                {serviceCategories
                  .filter(cat => cat.id !== "it-services")
                  .map((cat) => (
                  <li key={cat.id}>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo("#services");
                      }}
                      className="font-body text-sm text-text-muted hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block"
                    >
                      {cat.id === "digital-design" ? "Digital Design / IT Services" : cat.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact Info */}
            <div>
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-6">
                Headquarters
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-sm text-text-muted leading-relaxed">
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span>Office 327, Hakim Center,<br />Abdullah Haroon Road,<br />Saddar, Karachi</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-text-muted hover:text-primary transition-colors">
                  <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <a href="mailto:info@safiz.pk">info@safiz.pk</a>
                </li>
                <li className="flex items-center gap-3 text-sm text-text-muted hover:text-primary transition-colors">
                  <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <a href="tel:+923002168915">+92 300 2168915</a>
                </li>
              </ul>

              {/* QR Code */}
              <div className="mt-8">
                <p className="text-xs text-text-muted/60 mb-3 font-display uppercase tracking-widest font-bold">
                  Scan to Connect
                </p>
                <div className="bg-white p-2 rounded-xl inline-block shadow-lg transition-transform hover:scale-105 duration-300">
                  <img
                    src="/assets/safiz-qr-code.png"
                    alt="SAFIZ QR Code"
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-text-muted/50 text-xs text-center sm:text-left">
              © 2026 SAFIZ Group. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 mt-4 sm:mt-0">
              {sisterCompanies.map((company) => (
                <span
                  key={company}
                  className="px-3 py-1.5 rounded-full bg-[#d02d2c] text-[11px] font-body text-white cursor-default shadow-md hover:bg-[#b82726] transition-colors"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
