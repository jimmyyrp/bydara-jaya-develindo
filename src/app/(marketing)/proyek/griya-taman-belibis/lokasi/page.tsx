import { type Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  ExternalLink,
  Building2,
  Hospital,
  Store,
  GraduationCap,
  Church,
} from "lucide-react";
import { siteConfig, nearbyPlaces } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Lokasi",
  description: `Peta lokasi, akses, dan denah siteplan ${siteConfig.project} di Nan Balimo, Kota Solok.`,
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Hospital,
  Store,
  GraduationCap,
  Church,
};

export default function LokasiPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-background-alt">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Griya Taman Belibis", href: "/proyek/griya-taman-belibis" }, { label: "Lokasi" }]} />
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-primary-muted text-primary border-none px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Lokasi
            </Badge>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Lokasi <span className="text-primary italic font-light">{siteConfig.project}</span>
            </h1>
            <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-xl mx-auto">
              Berlokasi strategis di Nan Balimo, Kota Solok — dekat dengan
              pusat pemerintahan dan fasilitas umum.
            </p>
          </div>
        </div>
      </section>

      {/* Map & Info */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Map */}
            <div className="aspect-[4/3] lg:aspect-auto lg:h-[500px] rounded-lg overflow-hidden shadow-md border border-border">
              <iframe
                src={siteConfig.googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={`Peta Lokasi ${siteConfig.project}`}
                className="grayscale-[0.3] hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Alamat Proyek
                </h2>
                <div className="flex gap-4 items-start">
                  <div className="bg-primary-muted p-3 rounded-xl shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-foreground-muted leading-relaxed">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-start">
                <Button
                  className="rounded-full bg-primary hover:bg-primary-hover px-8 py-6 text-[10px] font-bold transition-all duration-300 group"
                  asChild
                >
                  <Link href={siteConfig.googleMapsLink} target="_blank">
                    Petunjuk Arah Maps
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Places */}
      <section className="py-10 md:py-16 bg-accent/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Fasilitas Sekitar
              </h2>
              <div className="w-16 h-1 bg-primary/20 mx-auto rounded-full" />
            </div>

            <div className="space-y-4">
              {nearbyPlaces.map((place, idx) => {
                const Icon = iconMap[place.icon] || MapPin;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 bg-background-alt p-4 rounded-lg border border-border"
                  >
                    <div className="bg-primary-muted p-3 rounded-xl shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{place.name}</p>
                    </div>
                    <span className="text-sm font-bold text-primary whitespace-nowrap">
                      {place.distance}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
