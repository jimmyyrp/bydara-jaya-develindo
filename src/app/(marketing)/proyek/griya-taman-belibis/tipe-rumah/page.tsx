import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Bed,
  Bath,
  Square,
  Navigation,
  Check,
  AlertCircle,
  X,
} from "lucide-react";
import { siteConfig, unitTypes, type UnitType } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import { formatRupiah } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tipe Rumah",
  description: `Daftar tipe unit dan spesifikasi teknis ${siteConfig.project}. Lihat harga, fasilitas, dan ketersediaan unit.`,
};

const statusConfig = {
  tersedia: {
    label: "Tersedia",
    variant: "success" as const,
    icon: Check,
  },
  terbatas: {
    label: "Terbatas",
    variant: "warning" as const,
    icon: AlertCircle,
  },
  habis: {
    label: "Habis",
    variant: "destructive" as const,
    icon: X,
  },
};

function UnitCard({ unit }: { unit: UnitType }) {
  const status = statusConfig[unit.status];
  const StatusIcon = status.icon;

  return (
    <div className="bg-background-alt rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border">
      {/* Image placeholder */}
      <div className="aspect-[4/3] bg-accent relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-foreground-subtle">
          <div className="text-center space-y-2">
            <Square className="h-12 w-12 mx-auto opacity-30" />
            <p className="text-xs font-medium">Foto Tipe {unit.title}</p>
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <Badge
            className="bg-background-alt/95 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-[10px] font-bold shadow-md border-none"
          >
            {unit.badge}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge
            variant={status.variant}
            className="px-3 py-1.5 rounded-full text-[10px] font-bold shadow-md"
          >
            <StatusIcon className="h-3 w-3 mr-1" />
            {status.label}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-2">
            {unit.title}
          </h3>
          <p className="text-sm text-foreground-muted leading-relaxed">
            {unit.description}
          </p>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-border">
          {[
            { icon: Bed, label: `${unit.specs.bed} Kamar Tidur` },
            { icon: Bath, label: `${unit.specs.bath} Kamar Mandi` },
            { icon: Square, label: `${unit.specs.land}m² Tanah` },
            { icon: Navigation, label: `${unit.specs.building}m² Bangunan` },
          ].map((spec, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="bg-primary-muted p-2 rounded-lg">
                <spec.icon className="h-4 w-4 text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground-muted">
                {spec.label}
              </span>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
            Fasilitas Unit
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {unit.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-foreground-muted">
                <Check className="h-3.5 w-3.5 text-success shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Price & CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
          <div>
            <p className="text-xs text-foreground-subtle uppercase tracking-wider mb-1">
              Harga Mulai
            </p>
            <p className="text-xl md:text-2xl font-serif font-bold text-primary">
              {unit.price ? formatRupiah(unit.price) : unit.priceDisplay}
            </p>
          </div>
          <Button
            className="rounded-full bg-primary hover:bg-primary-hover px-8 py-6 text-[10px] font-bold transition-all duration-300 group"
            asChild
          >
            <Link href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank">
              Detail & Booking
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function TipeRumahPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-background-alt">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Griya Taman Belibis", href: "/proyek/griya-taman-belibis" }, { label: "Tipe Rumah" }]} />
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-primary-muted text-primary border-none px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Katalog Hunian
            </Badge>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Tipe Rumah <span className="text-primary italic font-light">Griya Taman Belibis</span>
            </h1>
            <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-xl mx-auto">
              Pilihan unit hunian dengan spesifikasi yang dirancang untuk
              kenyamanan dan efisiensi.
            </p>
          </div>
        </div>
      </section>

      {/* Unit Grid */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {unitTypes.map((unit) => (
              <UnitCard key={unit.id} unit={unit} />
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 text-center">
            <p className="text-xs text-foreground-subtle max-w-2xl mx-auto">
              * Harga yang tercantum bersifat estimasi dan dapat berubah sewaktu-waktu.
              Untuk informasi harga terkini dan promo yang berlaku, silakan hubungi
              tim sales kami.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
