"use client";

import { motion } from "framer-motion";
import { trustStats } from "@/lib/data";

export function TrustBar() {
  return (
    <section className="py-10 md:py-14 bg-background border-y border-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {trustStats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-1">
              <p className="text-2xl md:text-3xl font-serif font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-[10px] md:text-xs font-medium text-foreground-muted uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
