import { type Metadata } from "next";
import {
  Church,
  ShieldCheck,
  TreePine,
  Route,
  Droplets,
  Zap,
} from "lucide-react";
import { siteConfig, facilities } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Fasilitas",
  description: `Fasilitas ${siteConfig.project} — Mushalla Taman Belibis, keamanan 24 jam, taman bermain, dan lainnya.`,
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Church,
  ShieldCheck,
  TreePine,
  Route,
  Droplets,
  Zap,
};

export default function FasilitasPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-background-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-primary-muted text-primary border-none px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Fasilitas
            </Badge>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Fasilitas{" "}
              <span className="text-primary italic font-light">
                {siteConfig.project}
              </span>
            </h1>
            <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-xl mx-auto">
              Lingkungan perumahan yang dilengkapi fasilitas pendukung untuk
              kenyamanan dan keamanan penghuni.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((item, idx) => {
              const Icon = iconMap[item.icon] || Church;
              return (
                <div
                  key={idx}
                  className="bg-background-alt p-8 rounded-lg border border-border hover:shadow-md transition-all duration-300 group"
                >
                  <div className="bg-primary-muted p-4 rounded-xl w-fit mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mushalla Highlight */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Mushalla Taman Belibis
            </h2>
            <div className="w-16 h-1 bg-primary/20 mx-auto rounded-full" />
            <p className="text-foreground-muted leading-relaxed">
              Mushalla Taman Belibis merupakan fasilitas ibadah unggulan yang
              sudah aktif digunakan oleh warga sekitar. Didesain dengan nuansa
              yang asri dan nyaman, mushalla ini menjadi pusat kegiatan keagamaan
              dan silaturahmi warga perumahan.
            </p>
            <p className="text-sm text-foreground-subtle">
              * Foto Mushalla akan ditambahkan segera.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
