import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Hunian Terpercaya di Kota Solok`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.project} di Nan Balimo, Kota Solok. Hunian asri, aman, dan bebas banjir dengan legalitas SHM. Pengembang: ${siteConfig.developer}.`,
  metadataBase: new URL("https://bydarajaya.com"),
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.project}`,
    description: `Hunian idaman di jantung Kota Solok. Legalitas SHM, lokasi strategis, harga mulai ${siteConfig.priceStart}.`,
    url: "/",
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.project}`,
    description: `Hunian idaman di jantung Kota Solok.`,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon.ico" },
    ],
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${playfair.variable} font-sans bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
