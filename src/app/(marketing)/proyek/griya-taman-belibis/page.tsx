import { type Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  ImageIcon,
  Church,
  MapPin,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Griya Taman Belibis",
  description: `Perumahan ${siteConfig.project} di Nan Balimo, Kota Solok. Hunian asri dengan legalitas SHM dan fasilitas Mushalla.`,
  openGraph: {
    title: `${siteConfig.project} — ${siteConfig.name}`,
    description: `Perumahan ${siteConfig.project} di Nan Balimo, Kota Solok.`,
  },
};

const subPages = [
  {
    title: "Tipe Rumah",
    description: "Lihat spesifikasi lengkap dan harga setiap tipe unit yang tersedia.",
    href: "/proyek/griya-taman-belibis/tipe-rumah",
    icon: Home,
  },
  {
    title: "Galeri",
    description: "Foto progres pembangunan, showroom, dan lingkungan sekitar.",
    href: "/proyek/griya-taman-belibis/galeri",
    icon: ImageIcon,
  },
  {
    title: "Fasilitas",
    description: "Mushalla Taman Belibis dan fasilitas pendukung lainnya.",
    href: "/proyek/griya-taman-belibis/fasilitas",
    icon: Church,
  },
  {
    title: "Lokasi",
    description: "Peta, akses, dan denah siteplan perumahan.",
    href: "/proyek/griya-taman-belibis/lokasi",
    icon: MapPin,
  },
];

export default function GriyaTamanBelibisPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-background-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-primary-muted text-primary border-none px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Proyek Utama
            </Badge>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              {siteConfig.project}
            </h1>
            <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-xl mx-auto">
              Perumahan modern di Nan Balimo, Kota Solok — hunian asri dengan
              legalitas SHM, fasilitas Mushalla, dan lingkungan yang aman untuk
              keluarga.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-pages Navigation */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subPages.map((page) => {
              const Icon = page.icon;
              return (
                <Link key={page.href} href={page.href}>
                  <Card className="h-full border-none shadow-sm rounded-lg hover:shadow-lg transition-all duration-300 group overflow-hidden bg-background-alt cursor-pointer">
                    <CardContent className="p-8 space-y-4">
                      <div className="bg-primary-muted p-4 rounded-xl w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-serif font-bold text-foreground">
                          {page.title}
                        </h3>
                        <p className="text-sm text-foreground-muted leading-relaxed">
                          {page.description}
                        </p>
                      </div>
                      <div className="pt-2">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                          Lihat <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Tentang Griya Taman Belibis
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              Griya Taman Belibis merupakan proyek perumahan unggulan dari {siteConfig.name} yang
              berlokasi strategis di Nan Balimo, Kota Solok, Sumatera Barat.
              Dengan konsep hunian asri dan lingkungan yang nyaman, perumahan ini
              dirancang untuk memberikan kualitas hidup terbaik bagi penghuninya.
            </p>
            <p className="text-foreground-muted leading-relaxed">
              Setiap unit dibangun dengan standar konstruksi yang baik dan legalitas
              yang jelas, sehingga Anda dapat memiliki hunian dengan tenang dan
              tanpa khawatir.
            </p>
            <div className="flex justify-center pt-4">
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary-hover px-10 py-7 text-[10px] font-bold shadow-lg transition-all duration-300 group"
                asChild
              >
                <Link href="/booking">
                  BOOKING SEKARANG
                  <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
