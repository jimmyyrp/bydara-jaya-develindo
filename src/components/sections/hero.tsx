"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import images from "@/app/lib/placeholder-images.json";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-background py-16 md:py-24">
      <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/4 -translate-y-1/4" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left z-10"
          >
            <Badge
              variant="outline"
              className="border-primary/20 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] bg-primary-muted backdrop-blur-sm inline-block"
            >
              Property Development Solok
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] text-foreground tracking-tight text-balance">
              Hunian{" "}
              <span className="text-primary italic font-light">Eksklusif</span>{" "}
              di Nan Balimo
            </h1>

            <p className="text-sm md:text-base text-foreground-muted leading-relaxed max-w-md mx-auto lg:mx-0">
              Wujudkan impian keluarga Anda bersama{" "}
              <span className="text-foreground font-bold">{siteConfig.developer}</span>{" "}
              di kawasan perumahan yang asri dan bebas banjir.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-2">
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary-hover px-8 py-6 text-[10px] font-bold shadow-lg transition-all duration-300 group"
                asChild
              >
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KONSULTASI GRATIS
                  <MessageCircle className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-border px-8 py-6 text-[10px] font-bold hover:bg-accent group transition-all duration-300"
                asChild
              >
                <Link href="#tipe-unit">
                  LIHAT KATALOG
                  <ArrowRight className="ml-2 h-4 w-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[480px] flex items-center justify-center"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-square lg:h-full lg:w-auto rounded-2xl overflow-hidden shadow-lg border-4 border-background-alt z-10 bg-accent">
              <Image
                src={images.hero.url}
                fill
                alt={images.hero.alt}
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 z-20 bg-background-alt p-4 md:p-5 rounded-lg shadow-md border border-border"
            >
              <span className="block text-[9px] uppercase tracking-[0.2em] text-primary font-bold mb-1">
                Harga Mulai
              </span>
              <span className="block text-lg md:text-2xl font-serif font-bold text-foreground">
                {siteConfig.priceStart}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
