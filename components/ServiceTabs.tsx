"use client";

import { useState, useEffect, useRef } from "react";
import { serviceCategories } from "@/lib/data";

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const tabBarRef = useRef<HTMLDivElement>(null);
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

  const isFirstRender = useRef(true);

  // Auto-scroll active tab into view on mobile
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (tabBarRef.current) {
      const activeBtn = tabBarRef.current.children[activeTab] as HTMLElement;
      if (activeBtn) {
        const container = tabBarRef.current;
        const scrollPos = activeBtn.offsetLeft - (container.clientWidth / 2) + (activeBtn.clientWidth / 2);
        container.scrollTo({
          left: scrollPos,
          behavior: "smooth",
        });
      }
    }
  }, [activeTab]);

  return (
    <section className="relative py-20 md:py-32 bg-surface overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-mono text-[13px] uppercase tracking-[0.3em] text-primary mb-6">
            Product Catalog
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-primary mb-4">
            Explore Our Products
          </h2>
          <p className="font-body text-text-muted text-base md:text-lg max-w-2xl mx-auto">
            Browse through every product we offer across all six service
            categories.
          </p>
        </div>

        {/* Tab Bar */}
        <div
          className={`mb-10 md:mb-14 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div
            ref={tabBarRef}
            className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 px-1"
          >
            {serviceCategories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(i)}
                className={`relative whitespace-nowrap px-5 py-3 rounded-xl text-sm font-display font-semibold transition-all duration-300 shrink-0 ${activeTab === i
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-bg-card text-text-muted hover:text-text-primary hover:bg-bg-card-hover border border-border"
                  }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div
          className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {serviceCategories.map((cat, i) => (
            <div
              key={cat.id}
              className={`transition-all duration-500 ${activeTab === i
                ? "block opacity-100"
                : "hidden opacity-0"
                }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-8 bg-primary rounded-full" />
                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary">
                    {cat.title}
                  </h3>
                  <p className="font-body text-text-muted text-sm mt-1">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {cat.products.map((product, j) => {
                  // A set of premium dark/abstract backgrounds to cycle through
                  const bgImages = [
                    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
                    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80",
                    "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=600&q=80",
                    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&q=80",
                    "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=600&q=80",
                    "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=600&q=80",
                  ];
                  const bgImage = bgImages[j % bgImages.length];

                  return (
                    <div
                      key={product}
                      className="group relative w-full h-[280px] rounded-xl border border-border hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] cursor-default overflow-hidden flex items-end p-6"
                      style={{
                        animationDelay: `${j * 50}ms`,
                      }}
                    >
                      {/* Background Image */}
                      <img
                        src={bgImage}
                        alt={product}
                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                      />

                      {/* Gradient Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />

                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-start gap-2">
                        <div className="w-8 h-1 bg-primary rounded-full mb-2 transform origin-left transition-transform duration-300 group-hover:scale-x-150" />
                        <span className="font-display font-bold text-white text-lg md:text-xl group-hover:text-primary transition-colors">
                          {product}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Product Count */}
              <div className="mt-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-border" />
                <span className="font-mono text-xs text-text-muted">
                  {cat.products.length} products available
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
