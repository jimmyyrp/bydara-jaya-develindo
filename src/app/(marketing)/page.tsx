import { type Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { siteConfig } from "@/lib/data";

// Lazy load below-fold sections to improve LCP and initial bundle
const Features = dynamic(
  () =>
    import("@/components/sections/features").then((mod) => ({
      default: mod.Features,
    })),
  { ssr: true }
);

const UnitCatalog = dynamic(
  () =>
    import("@/components/sections/unit-catalog").then((mod) => ({
      default: mod.UnitCatalog,
    })),
  { ssr: true }
);

const CTASection = dynamic(
  () =>
    import("@/components/sections/cta-section").then((mod) => ({
      default: mod.CTASection,
    })),
  { ssr: true }
);

const WebDevCTA = dynamic(
  () =>
    import("@/components/sections/web-dev-cta").then((mod) => ({
      default: mod.WebDevCTA,
    })),
  { ssr: true }
);

const Location = dynamic(
  () =>
    import("@/components/sections/location").then((mod) => ({
      default: mod.Location,
    })),
  { ssr: true }
);

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
