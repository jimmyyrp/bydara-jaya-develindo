"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-[80px] -z-0 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full blur-[60px] -z-0 -translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto space-y-6"
        >
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-white leading-tight text-balance">
            Wujudkan Hunian Impian Anda Sekarang
          </h2>
          <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-md mx-auto">
            Hubungi tim sales kami untuk konsultasi gratis atau tanyakan
            ketersediaan unit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white text-primary hover:bg-white/90 px-8 py-6 text-[10px] font-bold shadow-lg transition-all duration-300 group"
            >
              CHAT WHATSAPP
              <MessageCircle className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </a>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-8 py-6 text-[10px] font-bold transition-all duration-300 group"
            >
              BOOKING SEKARANG
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
