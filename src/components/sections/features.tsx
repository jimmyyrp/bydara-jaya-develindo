"use client";

import { MapPin, Church, ShieldCheck, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { features } from "@/lib/data";

const iconMap = {
  MapPin,
  Church,
  ShieldCheck,
  Award,
};

export function Features() {
  return (
    <section id="informasi" className="section-padding bg-accent/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 md:mb-14">
          <Badge className="bg-primary-muted text-primary border-none px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
            Informasi Proyek
          </Badge>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground">
            Detail Griya Taman Belibis
          </h2>
          <div className="w-12 h-1 bg-primary/20 mx-auto rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {features.map((item, idx) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={idx}
                className="bg-background-alt p-5 md:p-6 rounded-lg border border-border hover:shadow-sm transition-all duration-300 group"
              >
                <div className="bg-primary-muted p-3 rounded-lg w-fit mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-sm font-serif font-bold text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
