"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { testimonials } from "@/lib/data";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
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

  const totalSlides = testimonials.length;
  // On desktop show 2 at a time, mobile 1
  const desktopPairs = Math.ceil(totalSlides / 2);

  const goTo = useCallback(
    (index: number) => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 300);
    },
    []
  );

  const next = useCallback(() => {
    goTo((current + 1) % totalSlides);
  }, [current, totalSlides, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + totalSlides) % totalSlides);
  }, [current, totalSlides, goTo]);

  // Auto-play
  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next]);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 5000);
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[200px]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-14 md:mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-mono text-[13px] uppercase tracking-[0.3em] text-primary mb-6">
            Client Stories
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-text-primary mb-6">
            Loved by brands that{" "}
            <span className="text-gradient"><br></br>demand better
            </span>
          </h2>
          <p className="font-body text-text-muted text-base md:text-lg max-w-2xl mx-auto">
            Hear from brands across Pakistan and UAE who trust SAFIZ to deliver excellence.
          </p>
        </div>

        {/* Carousel */}
        <div
          className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Cards - Mobile: 1 card, Desktop: 2 cards */}
          <div className="relative">
            {/* Mobile: Single card */}
            <div className="md:hidden">
              <div
                className={`transition-all duration-300 ${isTransitioning
                  ? "opacity-0 scale-95"
                  : "opacity-100 scale-100"
                  }`}
              >
                <TestimonialCard testimonial={testimonials[current]} />
              </div>
            </div>

            {/* Desktop & Tablet: Grid layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                className={`transition-all duration-300 ${isTransitioning
                  ? "opacity-0 scale-95"
                  : "opacity-100 scale-100"
                  }`}
              >
                <TestimonialCard testimonial={testimonials[current]} />
              </div>
              <div
                className={`transition-all duration-300 delay-75 ${isTransitioning
                  ? "opacity-0 scale-95"
                  : "opacity-100 scale-100"
                  }`}
              >
                <TestimonialCard
                  testimonial={
                    testimonials[(current + 1) % totalSlides]
                  }
                />
              </div>
              <div
                className={`hidden lg:block transition-all duration-300 delay-150 ${isTransitioning
                  ? "opacity-0 scale-95"
                  : "opacity-100 scale-100"
                  }`}
              >
                <TestimonialCard
                  testimonial={
                    testimonials[(current + 2) % totalSlides]
                  }
                />
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            {/* Prev */}
            <button
              onClick={() => {
                prev();
                resetInterval();
              }}
              className="w-12 h-12 rounded-xl bg-bg-card border border-border hover:border-primary/40 flex items-center justify-center text-text-muted hover:text-primary transition-all duration-300 hover:scale-105"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    goTo(i);
                    resetInterval();
                  }}
                  className={`transition-all duration-300 rounded-full ${i === current
                    ? "w-8 h-2.5 bg-primary"
                    : "w-2.5 h-2.5 bg-text-muted/20 hover:bg-text-muted/40"
                    }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => {
                next();
                resetInterval();
              }}
              className="w-12 h-12 rounded-xl bg-bg-card border border-border hover:border-primary/40 flex items-center justify-center text-text-muted hover:text-primary transition-all duration-300 hover:scale-105"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="relative p-8 md:p-10 rounded-2xl bg-bg-card border border-border hover:border-primary/20 transition-all duration-500 group h-full">
      {/* Top accent line */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Quote Icon */}
      <Quote className="w-10 h-10 text-primary/20 mb-6 group-hover:text-primary/40 transition-colors duration-500" />

      {/* Stars */}
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-primary text-primary"
          />
        ))}
      </div>

      {/* Quote Text */}
      <p className="font-body text-text-primary text-base md:text-lg leading-relaxed mb-8">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        {/* Avatar placeholder */}
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-display font-bold text-text-primary text-sm">
            {testimonial.name}
          </p>
          <p className="font-body text-text-muted text-xs">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
