import { type Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { Breadcrumb } from "@/components/breadcrumb";
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
  return (
    <>
      <div className="container-custom">
        <Breadcrumb items={[{ label: "Booking" }]} />
      </div>
      <BookingClient />
    </>
  );
}
