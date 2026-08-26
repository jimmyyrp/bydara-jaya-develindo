import { type Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { SimulasiKPRClient } from "@/components/simulasi-kpr-client";

export const metadata: Metadata = {
  title: "Simulasi KPR",
  description: `Hitung estimasi cicilan KPR ${siteConfig.project}. Simulasi suku bunga, tenor, dan uang muka untuk perencanaan pembelian rumah.`,
  openGraph: {
    title: `Simulasi KPR — ${siteConfig.name}`,
    description: `Hitung estimasi cicilan KPR ${siteConfig.project}. Simulasi suku bunga, tenor, dan uang muka.`,
  },
};

export default function SimulasiKPRPage() {
  return <SimulasiKPRClient />;
}
