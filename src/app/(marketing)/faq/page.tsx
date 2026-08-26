import { type Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { Breadcrumb } from "@/components/breadcrumb";
import { FAQClient } from "@/components/faq-client";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Pertanyaan umum seputar ${siteConfig.project} — KPR, legalitas, fasilitas, lokasi, dan proses booking.`,
  openGraph: {
    title: `FAQ — ${siteConfig.name}`,
    description: `Pertanyaan umum seputar ${siteConfig.project} — KPR, legalitas, fasilitas, lokasi.`,
  },
};

export default function FAQPage() {
  return (
    <>
      <div className="container-custom">
        <Breadcrumb items={[{ label: "FAQ" }]} />
      </div>
      <FAQClient />
    </>
  );
}
