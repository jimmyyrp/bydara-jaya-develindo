"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bed,
  Bath,
  Square,
  Navigation,
  ChevronRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";
import images from "@/app/lib/placeholder-images.json";
import { unitTypes, siteConfig, type UnitType } from "@/lib/data";
import { formatRupiah } from "@/lib/utils";

function UnitModal({
  unit,
  isOpen,
  onClose,
}: {
  unit: UnitType;
  isOpen: boolean;
  onClose: () => void;
}) {
  const img = images[unit.imageKey as keyof typeof images];

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-xl">
      <div className="aspect-[16/10] relative overflow-hidden rounded-t-lg">
        <Image
          src={img.url}
          fill
          alt={img.alt}
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-background-alt/95 backdrop-blur-sm text-primary px-4 py-1.5 rounded-full text-[10px] font-bold shadow border-none">
            {unit.badge}
          </Badge>
        </div>
      </div>
      <div className="p-6 space-y-5">
        <div>
          <h3 className="text-xl font-serif font-bold text-foreground mb-1">
            {unit.title}
          </h3>
          <p className="text-sm text-foreground-muted">{unit.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Bed, label: `${unit.specs.bed} Kamar Tidur` },
            { icon: Bath, label: `${unit.specs.bath} Kamar Mandi` },
            { icon: Square, label: `${unit.specs.land}m² Tanah` },
            { icon: Navigation, label: `${unit.specs.building}m² Bangunan` },
          ].map((spec, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 bg-accent/50 px-3 py-2.5 rounded-md"
            >
              <spec.icon className="h-4 w-4 text-primary shrink-0" />
              <span className="text-xs font-medium text-foreground-muted">
                {spec.label}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <p className="text-xs font-bold text-foreground-subtle uppercase tracking-wider">
            Fasilitas Unit
          </p>
          <ul className="grid grid-cols-1 gap-1.5">
            {unit.features.map((feat, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-foreground-muted"
              >
                <Check className="h-3.5 w-3.5 text-success shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div>
            <p className="text-[10px] text-foreground-subtle uppercase tracking-wider">
              Harga Mulai
            </p>
            <p className="text-lg font-serif font-bold text-primary">
              {unit.price ? formatRupiah(unit.price) : unit.priceDisplay}
            </p>
          </div>
          <Button
            size="sm"
            className="rounded-full bg-primary hover:bg-primary-hover px-6 py-5 text-[10px] font-bold"
            asChild
          >
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Halo, saya tertarik dengan ${unit.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Booking
            </a>
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export function UnitCatalog() {
  const [selectedUnit, setSelectedUnit] = useState<UnitType | null>(null);

  return (
    <section
      id="tipe-unit"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-accent text-foreground-muted border-none px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
              KATALOG HUNIAN
            </Badge>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground leading-tight">
              Pilihan Unit{" "}
              <span className="text-primary italic font-light">Masa Depan</span>
            </h2>
            <div className="w-12 h-1 bg-primary/20 mx-auto rounded-full mt-4" />
          </motion.div>
        </div>

        {/* Unit Cards — Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {unitTypes.map((unit, idx) => {
            const img = images[unit.imageKey as keyof typeof images];
            return (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group bg-background-alt rounded-lg overflow-hidden border border-border hover:shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedUnit(unit)}
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={img.url}
                    fill
                    alt={img.alt}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-background-alt/95 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-[9px] font-bold shadow border-none">
                      {unit.badge}
                    </Badge>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-serif font-bold text-foreground">
                      {unit.title}
                    </h3>
                    <p className="text-primary font-serif font-bold text-base whitespace-nowrap">
                      {unit.priceDisplay}
                    </p>
                  </div>

                  <div className="grid grid-cols-4 gap-2 py-3 border-y border-border">
                    {[
                      { icon: Bed, label: `${unit.specs.bed} KT` },
                      { icon: Bath, label: `${unit.specs.bath} KM` },
                      { icon: Square, label: `${unit.specs.land}m²` },
                      { icon: Navigation, label: `Tipe ${unit.specs.building}` },
                    ].map((spec, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <spec.icon className="h-3.5 w-3.5 text-foreground-subtle" />
                        <span className="text-[10px] font-medium text-foreground-muted">
                          {spec.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                      Lihat Detail{" "}
                      <ChevronRight className="h-3 w-3" />
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full border-primary text-primary hover:bg-primary-muted px-4 py-4 text-[9px] font-bold"
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a
                        href={`https://wa.me/${siteConfig.whatsapp}?text=Halo, saya tertarik dengan ${unit.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Cek Ketersediaan
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs text-foreground-subtle max-w-lg mx-auto">
          * Harga bersifat estimasi. Hubungi sales untuk harga terkini.
        </p>
      </div>

      {/* Detail Modal */}
      {selectedUnit && (
        <UnitModal
          unit={selectedUnit}
          isOpen={!!selectedUnit}
          onClose={() => setSelectedUnit(null)}
        />
      )}
    </section>
  );
}
