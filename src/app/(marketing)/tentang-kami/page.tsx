import { type Metadata } from "next";
import { siteConfig, companyProfile } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/breadcrumb";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Kenali ${siteConfig.name} — pengembang properti terpercaya di Kota Solok yang dipimpin oleh ${siteConfig.developer}.`,
  openGraph: {
    title: `Tentang Kami — ${siteConfig.name}`,
    description: `Kenali ${siteConfig.name} — pengembang properti terpercaya di Kota Solok.`,
  },
};

export default function TentangKamiPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-background-alt">
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Tentang Kami" }]} />
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-primary-muted text-primary border-none px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Tentang Kami
            </Badge>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Membangun Hunian, Membangun Kepercayaan
            </h1>
            <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-xl mx-auto">
              {siteConfig.name} adalah pengembang properti yang berkomitmen
              menghadirkan hunian berkualitas untuk keluarga Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  {siteConfig.developer}
                </h2>
                <p className="text-foreground-muted leading-relaxed">
                  Sebagai penanggung jawab {siteConfig.name}, {siteConfig.developer} memiliki
                  visi untuk mengembangkan properti yang tidak hanya menjadi bangunan fisik,
                  namun juga menjadi tempat pulang yang nyaman bagi setiap keluarga.
                </p>
                <p className="text-foreground-muted leading-relaxed">
                  Dengan pendekatan yang grounded dan jujur, setiap proyek yang dikembangkan
                  mengutamakan legalitas, kualitas konstruksi, dan kepuasan penghuni.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground">
                  Visi
                </h3>
                <p className="text-foreground-muted leading-relaxed italic border-l-4 border-primary pl-6">
                  {companyProfile.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-10 md:py-16 bg-accent/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Misi Kami
              </h2>
              <div className="w-16 h-1 bg-primary/20 mx-auto rounded-full" />
            </div>
            <div className="space-y-6">
              {companyProfile.mission.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="mt-1 shrink-0">
                    <CheckCircle className="h-5 w-5 text-success" />
                  </div>
                  <p className="text-foreground-muted leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyProfile.stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2">
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm font-medium text-foreground-muted uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-10 md:py-16 bg-accent/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Legalitas Perusahaan
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              {siteConfig.name} terdaftar resmi sebagai badan hukum di Indonesia.
              Seluruh proyek yang dikembangkan memiliki perizinan lengkap sesuai
              peraturan perundang-undangan yang berlaku, termasuk IMB, sertifikat
              laik fungsi, dan sertifikat hak milik (SHM) untuk setiap unit.
            </p>
            <p className="text-sm text-foreground-subtle">
              Untuk informasi legalitas lebih lanjut, silakan hubungi tim kami.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
