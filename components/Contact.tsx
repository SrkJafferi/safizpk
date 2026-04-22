"use client";

import { useState, useEffect, useRef } from "react";
import { offices, serviceCategories } from "@/lib/data";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Send,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [captcha, setCaptcha] = useState({ num1: 5, num2: 3 });
  const [captchaInput, setCaptchaInput] = useState("");

  useEffect(() => {
    setCaptcha({
      num1: Math.floor(Math.random() * 10) + 1,
      num2: Math.floor(Math.random() * 10) + 1,
    });
  }, []);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(captchaInput) !== captcha.num1 + captcha.num2) {
      alert("Please enter the correct CAPTCHA answer.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-surface overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-[150px]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-14 md:mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-mono text-[13px] uppercase tracking-[0.3em] text-primary mb-6">
            Get In Touch
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-text-primary mb-6">
            Let&apos;s Create Something{" "}
            <span className="text-gradient">Bold</span>
          </h2>
          <p className="font-body text-text-muted text-base md:text-lg max-w-2xl mx-auto">
            Ready to elevate your brand? Get in touch with our team across
            Pakistan and UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — Office Cards */}
          <div
            className={`space-y-4 transition-all duration-700 delay-200 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {offices.map((office, i) => (
              <div
                key={office.label}
                className="relative p-6 md:p-8 rounded-2xl bg-bg-card border border-border border-l-4 border-l-primary hover:border-primary/30 transition-all duration-500 group"
                style={{ transitionDelay: `${i * 100 + 300}ms` }}
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <h3 className="font-display font-bold text-lg text-text-primary mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    {office.label}
                  </h3>

                  <p className="font-body text-text-muted text-sm leading-relaxed mb-4 pl-7">
                    {office.address}
                  </p>

                  <div className="space-y-2 pl-7">
                    <div className="flex items-center gap-2 text-sm font-body text-text-muted">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <span>{office.phones.join(" · ")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-body text-text-muted">
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <span>{office.emails.join(" · ")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-body text-text-muted">
                      <Globe className="w-4 h-4 text-primary shrink-0" />
                      <span>{office.website}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Quote Form */}
          <div
            className={`transition-all duration-700 delay-400 h-full ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="relative p-6 md:p-10 rounded-2xl border border-border overflow-hidden h-full flex flex-col"
            >
              {/* Background Image and Gradient */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80"
                  alt="Contact Background"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-bg-card/95 via-bg-card/90 to-primary/10" />
              </div>

              <div className="relative z-10 flex flex-col h-full flex-1">
              {/* Success Toast */}
              {submitted && (
                <div className="absolute top-4 left-4 right-4 flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 z-20 animate-pulse">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="font-body text-sm font-medium">
                    Thank you! Your enquiry has been submitted successfully.
                  </span>
                </div>
              )}

              <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary mb-2">
                Request a Quote
              </h3>
              <p className="font-body text-text-muted text-sm mb-8">
                Fill in the details below and our team will get back to you
                within 24 hours.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-text-primary font-body text-sm placeholder:text-text-muted/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all min-h-[48px]"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-text-primary font-body text-sm placeholder:text-text-muted/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all min-h-[48px]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-text-primary font-body text-sm placeholder:text-text-muted/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all min-h-[48px]"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-text-primary font-body text-sm placeholder:text-text-muted/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all min-h-[48px]"
                />
              </div>

              {/* Custom Select */}
              <div className="relative mb-4">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-left font-body text-sm flex items-center justify-between min-h-[48px] transition-all focus:border-primary/50"
                >
                  <span
                    className={
                      formData.service
                        ? "text-text-primary"
                        : "text-text-muted/50"
                    }
                  >
                    {formData.service || "Service Required *"}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-text-muted transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 rounded-xl bg-bg-card border border-border shadow-xl z-20 overflow-hidden">
                    {serviceCategories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, service: cat.title });
                          setDropdownOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left font-body text-sm text-text-muted hover:text-primary hover:bg-surface transition-all"
                      >
                        {cat.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-text-primary font-body text-sm placeholder:text-text-muted/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all resize-none mb-6 flex-1"
              />

              <div className="mt-auto pt-4">
                <div className="flex items-center gap-3 sm:gap-4 mb-6">
                  <div className="flex-shrink-0 px-4 py-3.5 sm:px-5 sm:py-3.5 bg-surface border border-border rounded-xl font-mono text-primary text-sm sm:text-base font-bold whitespace-nowrap min-h-[48px] flex items-center justify-center">
                    {captcha.num1} + {captcha.num2} =
                  </div>
                  <input
                    type="number"
                    placeholder="Answer *"
                    required
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-text-primary font-body text-sm placeholder:text-text-muted/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all min-h-[48px]"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-display font-bold text-base rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.01]"
                >
                  Send Enquiry
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
