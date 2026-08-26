"use client";

import { motion } from "framer-motion";
import { Globe, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/data";

export function WebDevCTA() {
  const { webDev } = siteConfig;

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px] -z-0 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-primary/5 rounded-full blur-[60px] -z-0 translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-background-alt border border-border rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-sm">
            <Badge className="bg-accent text-foreground-muted border-none px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
              Jasa Pembuatan Website
            </Badge>

            <div className="bg-primary-muted p-4 rounded-xl w-fit mx-auto">
              <Globe className="h-8 w-8 text-primary" />
            </div>

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-tight text-balance">
              {webDev.tagline}
            </h2>

            <p className="text-sm md:text-base text-foreground-muted leading-relaxed max-w-lg mx-auto">
              {webDev.description}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <Button
                size="lg"
                className="rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-6 text-[10px] font-bold shadow-lg transition-all duration-300 group"
                asChild
              >
                <a
                  href={`https://wa.me/${webDev.whatsapp}?text=Halo ${webDev.name}, saya tertarik dengan jasa pembuatan website.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  CHAT DENGAN {webDev.name.toUpperCase()}
                </a>
              </Button>
            </div>

            <p className="text-xs text-foreground-subtle pt-2">
              Hubungi <span className="font-bold text-foreground">{webDev.name}</span> — {webDev.phone}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
