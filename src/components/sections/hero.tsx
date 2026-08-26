"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image — full overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          fill
          alt="Griya Taman Belibis — Hunian Eksklusif di Nan Balimo"
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/20" />
        {/* Bottom gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-2xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block border border-white/30 text-white/90 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] bg-white/10 backdrop-blur-sm">
              Property Development Solok
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] text-white tracking-tight text-balance">
              Hunian{" "}
              <span className="text-white/80 italic font-light">Eksklusif</span>{" "}
              di Nan Balimo
            </h1>

            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-md">
              Wujudkan impian keluarga Anda bersama{" "}
              <span className="text-white font-bold">{siteConfig.developer}</span>{" "}
              di kawasan perumahan yang asri dan bebas banjir.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white text-foreground hover:bg-white/90 px-8 py-6 text-[10px] font-bold shadow-lg transition-all duration-300 group"
              >
                KONSULTASI GRATIS
                <MessageCircle className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              </a>
              <Link
                href="#tipe-unit"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-8 py-6 text-[10px] font-bold transition-all duration-300 group"
              >
                LIHAT KATALOG
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Price badge */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-5 rounded-lg inline-block"
          >
            <span className="block text-[9px] uppercase tracking-[0.2em] text-white/70 font-bold mb-1">
              Harga Mulai
            </span>
            <span className="block text-lg md:text-2xl font-serif font-bold text-white">
              {siteConfig.priceStart}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
