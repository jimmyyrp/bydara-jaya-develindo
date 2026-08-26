import { type Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Features } from "@/components/sections/features";
import { UnitCatalog } from "@/components/sections/unit-catalog";
import { CTASection } from "@/components/sections/cta-section";
import { Location } from "@/components/sections/location";
import { WebDevCTA } from "@/components/sections/web-dev-cta";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `Beranda | ${siteConfig.name}`,
  description: `${siteConfig.project} — hunian asri di Nan Balimo, Kota Solok. Pengembang properti terpercaya oleh ${siteConfig.developer}.`,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.project}`,
    description: `Hunian idaman di jantung Kota Solok. Legalitas SHM, lokasi strategis, harga mulai ${siteConfig.priceStart}.`,
    url: "/",
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Features />
      <UnitCatalog />
      <CTASection />
      <WebDevCTA />
      <Location />
    </>
  );
}
