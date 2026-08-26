import { type Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Galeri",
  description: `Foto progres pembangunan, showroom, dan lingkungan ${siteConfig.project}.`,
};

const galleryItems = [
  { title: "Tampak Depan Perumahan", category: "Eksterior" },
  { title: "Lingkungan Perumahan", category: "Lingkungan" },
  { title: "Showroom Tipe 36/90", category: "Showroom" },
  { title: "Mushalla Taman Belibis", category: "Fasilitas" },
  { title: "Progres Pembangunan", category: "Progres" },
  { title: "Jalan Utama Perumahan", category: "Infrastruktur" },
];

export default function GaleriPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-background-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-primary-muted text-primary border-none px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Galeri
            </Badge>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Galeri <span className="text-primary italic font-light">{siteConfig.project}</span>
            </h1>
            <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-xl mx-auto">
              Lihat foto progres pembangunan, showroom, dan lingkungan sekitar
              perumahan.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="group aspect-[4/3] bg-accent rounded-lg overflow-hidden relative cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 flex items-center justify-center text-foreground-subtle">
                  <div className="text-center space-y-2">
                    <ImageIcon className="h-10 w-10 mx-auto opacity-30" />
                    <p className="text-xs font-medium">{item.title}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs font-bold uppercase tracking-wider opacity-80">
                    {item.category}
                  </p>
                  <p className="text-sm font-bold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-foreground-muted">
              Foto akan ditambahkan seiring progres pembangunan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
