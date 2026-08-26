import { type Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi ${siteConfig.name} — alamat, nomor telepon, email, dan jam operasional.`,
};

const contactItems = [
  {
    icon: MapPin,
    title: "Alamat Kantor",
    value: siteConfig.address,
    link: siteConfig.googleMapsLink,
    linkLabel: "Lihat di Maps",
  },
  {
    icon: Phone,
    title: "Telepon / WhatsApp",
    value: siteConfig.phone,
    link: `https://wa.me/${siteConfig.whatsapp}`,
    linkLabel: "Chat WhatsApp",
  },
  {
    icon: Mail,
    title: "Email",
    value: siteConfig.email,
    link: `mailto:${siteConfig.email}`,
    linkLabel: "Kirim Email",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    value: siteConfig.openingHours,
    link: null,
    linkLabel: null,
  },
];

export default function KontakPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-background-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-primary-muted text-primary border-none px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Kontak
            </Badge>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Hubungi <span className="text-primary italic font-light">Kami</span>
            </h1>
            <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-xl mx-auto">
              Kami siap membantu Anda menemukan hunian impian. Jangan ragu untuk
              menghubungi kami.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactItems.map((item, idx) => {
                const Icon = item.icon;
                const Content = (
                  <div className="bg-background-alt p-8 rounded-lg border border-border hover:shadow-md transition-all duration-300 group h-full">
                    <div className="flex gap-5 items-start">
                      <div className="bg-primary-muted p-4 rounded-xl shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-serif font-bold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-foreground-muted leading-relaxed">
                          {item.value}
                        </p>
                        {item.link && (
                          <Link
                            href={item.link}
                            target={
                              item.link.startsWith("http") ? "_blank" : undefined
                            }
                            className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline uppercase tracking-wider"
                          >
                            {item.linkLabel}
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );

                return <div key={idx}>{Content}</div>;
              })}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <div className="bg-accent/30 p-8 md:p-12 rounded-lg space-y-6">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Butuh Bantuan Lebih Lanjut?
                </h2>
                <p className="text-foreground-muted leading-relaxed max-w-lg mx-auto">
                  Tim sales kami siap menjawab pertanyaan Anda seputar unit,
                  harga, dan proses booking.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    className="rounded-full bg-primary hover:bg-primary-hover px-10 py-7 text-[10px] font-bold transition-all duration-300 group"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      CHAT WHATSAPP
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-primary px-10 py-7 text-[10px] font-bold hover:bg-primary-muted transition-all duration-300"
                    asChild
                  >
                    <a href="/booking">BOOKING SEKARANG</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
