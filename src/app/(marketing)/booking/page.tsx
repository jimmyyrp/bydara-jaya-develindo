import { type Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { BookingClient } from "@/components/booking-client";

export const metadata: Metadata = {
  title: "Booking",
  description: `Booking unit hunian di ${siteConfig.project}. Isi form pemesanan untuk menyatakan minat Anda.`,
  openGraph: {
    title: `Booking — ${siteConfig.name}`,
    description: `Booking unit hunian di ${siteConfig.project}. Isi form pemesanan sekarang.`,
  },
};

export default function BookingPage() {
  return <BookingClient />;
}
