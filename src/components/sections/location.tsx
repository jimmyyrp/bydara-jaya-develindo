"use client";

import Link from "next/link";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/data";
import { motion } from "framer-motion";

export function Location() {
  return (
    <section id="lokasi" className="section-padding bg-accent/30 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-3 text-center lg:text-left">
              <Badge className="bg-primary-muted text-primary border-none px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mx-auto lg:mx-0">
                Hubungi Kami
              </Badge>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground leading-tight">
                Alamat Proyek & Pemasaran
              </h2>
              <p className="text-sm md:text-base text-foreground-muted leading-relaxed max-w-md mx-auto lg:mx-0">
                Kunjungi kami untuk melihat langsung progres pembangunan.
              </p>
            </div>

            <div className="space-y-6 max-w-md mx-auto lg:mx-0">
              <div className="flex gap-4 group items-start">
                <div className="bg-background-alt shadow-sm p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-foreground text-base">
                    Lokasi Fisik
                  </h4>
                  <p className="text-foreground-muted leading-relaxed text-sm">
                    {siteConfig.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group items-start">
                <div className="bg-background-alt shadow-sm p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-foreground text-base">
                    Layanan Sales
                  </h4>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-foreground font-bold text-base hover:text-primary transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                  <div className="flex items-center gap-2 text-foreground-subtle text-[10px] font-bold mt-2 uppercase tracking-[0.2em]">
                    <Clock className="h-3.5 w-3.5" />
                    {siteConfig.openingHours}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary-hover px-8 py-6 text-[10px] font-bold shadow-md group transition-all duration-300"
                asChild
              >
                <Link
                  href={siteConfig.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Petunjuk Arah Maps
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-md border-4 border-background-alt"
          >
            <iframe
              src={siteConfig.googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Peta Lokasi Griya Taman Belibis"
              className="grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
