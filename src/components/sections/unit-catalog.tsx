"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bed,
  Bath,
  Square,
  Navigation,
  ChevronRight,
  Check,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";
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
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-xl">
      <div className="bg-primary p-6 text-center">
        <Badge className="bg-white/20 text-white px-4 py-1.5 rounded-full text-[10px] font-bold border-none mb-3">
          {unit.badge}
        </Badge>
        <h3 className="text-xl font-serif font-bold text-white">
          {unit.title}
        </h3>
      </div>
      <div className="p-6 space-y-5">
        <p className="text-sm text-foreground-muted">{unit.description}</p>

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
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Halo, saya tertarik dengan ${unit.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-hover px-6 py-3 text-[10px] font-bold text-primary-foreground transition-all duration-300"
          >
            Booking Sekarang
          </a>
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

        {/* Unit Cards — No images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {unitTypes.map((unit, idx) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group bg-background-alt rounded-lg border border-border hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => setSelectedUnit(unit)}
            >
              {/* Card Header — colored top bar instead of image */}
              <div className="bg-primary p-5 text-center space-y-2">
                <Badge className="bg-white/20 text-white px-3 py-1 rounded-full text-[9px] font-bold border-none">
                  {unit.badge}
                </Badge>
                <h3 className="text-lg font-serif font-bold text-white">
                  {unit.title}
                </h3>
                <p className="text-sm font-serif font-bold text-white/90">
                  {unit.priceDisplay}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="p-5 space-y-4">
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

                {/* Features preview */}
                <ul className="space-y-1.5">
                  {unit.features.slice(0, 3).map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-foreground-muted"
                    >
                      <Check className="h-3 w-3 text-success shrink-0" />
                      {feat}
                    </li>
                  ))}
                  {unit.features.length > 3 && (
                    <li className="text-[10px] text-foreground-subtle pl-5">
                      +{unit.features.length - 3} lainnya
                    </li>
                  )}
                </ul>

                {/* CTA */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lihat Detail{" "}
                    <ChevronRight className="h-3 w-3" />
                  </span>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=Halo, saya tertarik dengan ${unit.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary-muted px-4 py-2 text-[9px] font-bold transition-all duration-300"
                  >
                    Cek Ketersediaan
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
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
