"use client";

import Link from "next/link";
import { siteConfig, footerNavigation } from "@/lib/data";
import { Logo } from "@/components/logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground pt-14 pb-8 overflow-hidden relative">
      <div className="container mx-auto px-5 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Company Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="lg" theme="dark" />
            <p className="text-foreground-muted text-sm max-w-sm leading-relaxed">
              Pengembang properti terpercaya di Kota Solok. Menghadirkan hunian
              yang asri, nyaman, dan bernilai investasi tinggi untuk masa depan
              keluarga Anda.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm text-white">
              Navigasi
            </h4>
            <ul className="space-y-2">
              {footerNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-foreground-muted hover:text-background text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-sm text-white">
              Kontak Resmi
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="block text-[10px] text-foreground-subtle font-bold uppercase tracking-wider mb-0.5">
                  Pengembang
                </span>
                <span className="text-foreground-muted">{siteConfig.developer}</span>
              </li>
              <li>
                <span className="block text-[10px] text-foreground-subtle font-bold uppercase tracking-wider mb-0.5">
                  WhatsApp
                </span>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-background transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <span className="block text-[10px] text-foreground-subtle font-bold uppercase tracking-wider mb-0.5">
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-foreground-muted hover:text-background transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="block text-[10px] text-foreground-subtle font-bold uppercase tracking-wider mb-0.5">
                  Jam Operasional
                </span>
                <span className="text-foreground-muted">{siteConfig.openingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground-subtle text-xs">
            &copy; {year} {siteConfig.name}. Hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/legal"
              className="text-foreground-subtle hover:text-background transition-colors"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/legal"
              className="text-foreground-subtle hover:text-background transition-colors"
            >
              Syarat & Ketentuan
            </Link>
          </div>
          <span className="text-[10px] text-foreground-subtle">
            Developed by{" "}
            <span className="text-primary font-bold">{siteConfig.creator}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
