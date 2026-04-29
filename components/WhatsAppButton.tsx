"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "923151282583";
  const message = "Hi SAFIZ, I would like to inquire about your printing and signage services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] active:scale-95 transition-all duration-300 group"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      <MessageCircle className="w-7 h-7 fill-white" />

      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-4 py-2 bg-bg-card/90 backdrop-blur-md border border-border text-text-primary text-sm font-medium rounded-xl opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-2xl">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
