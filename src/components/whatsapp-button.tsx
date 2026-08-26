"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <Link
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi Sales via WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] bg-whatsapp text-white px-5 py-3 md:px-6 md:py-4 rounded-full shadow-lg flex items-center gap-2 hover:bg-whatsapp-hover hover:scale-110 active:scale-95 transition-all duration-300 group"
    >
      <MessageCircle className="h-5 w-5 md:h-6 md:w-6 fill-current" />
      <span className="font-bold text-[10px] md:text-sm hidden sm:block tracking-wide uppercase">
        Tanya Sales
      </span>

      {/* Pulse effect — respects prefers-reduced-motion via CSS in globals.css */}
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-20 -z-10" />
    </Link>
  );
}
