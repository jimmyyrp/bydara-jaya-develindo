import { type Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Legal",
  description: `Disclaimer, kebijakan privasi, dan syarat & ketentuan ${siteConfig.name}.`,
};

export default function LegalPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-background-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-primary-muted text-primary border-none px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Legal
            </Badge>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Disclaimer & Kebijakan
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Disclaimer */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">
                Disclaimer
              </h2>
              <div className="prose prose-sm max-w-none text-foreground-muted space-y-4">
                <p>
                  Seluruh informasi yang terdapat di situs web ini ({siteConfig.name}) disediakan
                  hanya untuk tujuan informasi umum. Kami berusaha untuk menjaga
                  keakuratan dan kelengkapan informasi, namun tidak memberikan
                  jaminan atau pernyataan mengenai keakuratan, keandalan, atau
                  kelengkapan informasi di situs ini.
                </p>
                <p>
                  Gambar, rendering, dan ilustrasi yang ditampilkan di situs ini
                  bersifat ilustratif dan dapat berbeda dengan kondisi aktual
                  bangunan yang dibangun. Perbedaan ini dapat terjadi akibat
                  perubahan desain, material, atau faktor lainnya selama proses
                  pembangunan.
                </p>
                <p>
                  Harga yang tercantum di situs ini bersifat estimasi dan dapat
                  berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu.
                  Untuk informasi harga terkini, silakan hubungi tim sales kami.
                </p>
                <p>
                  Simulasi KPR yang tersedia di situs ini hanya bersifat
                  perkiraan dan bukan penawaran resmi dari bank manapun. Angka
                  final cicilan tergantung kebijakan bank mitra yang dipilih.
                </p>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">
                Kebijakan Privasi
              </h2>
              <div className="prose prose-sm max-w-none text-foreground-muted space-y-4">
                <p>
                  {siteConfig.name} menghargai privasi Anda. Kebijakan privasi
                  ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan
                  melindungi data pribadi Anda.
                </p>

                <h3 className="text-lg font-serif font-bold text-foreground">
                  Pengumpulan Data
                </h3>
                <p>
                  Kami mengumpulkan data pribadi yang Anda berikan secara
                  sukarela melalui form pemesanan/booking, termasuk namun tidak
                  terbatas pada: nama lengkap, nomor telepon/WhatsApp, alamat
                  email, dan informasi terkait preferensi unit hunian.
                </p>

                <h3 className="text-lg font-serif font-bold text-foreground">
                  Penggunaan Data
                </h3>
                <p>
                  Data pribadi yang Anda berikan digunakan oleh tim sales kami
                  untuk:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Follow-up terkait minat Anda terhadap unit hunian</li>
                  <li>Memberikan informasi terbaru mengenai proyek dan promo</li>
                  <li>Menghubungi Anda untuk jadwal survei lokasi</li>
                  <li>Proses booking dan transaksi</li>
                </ul>

                <h3 className="text-lg font-serif font-bold text-foreground">
                  Perlindungan Data
                </h3>
                <p>
                  Kami menerapkan langkah-langkah keamanan yang wajar untuk
                  melindungi data pribadi Anda dari akses yang tidak sah,
                  penggunaan, atau pengungkapan yang tidak sesuai.
                </p>

                <h3 className="text-lg font-serif font-bold text-foreground">
                  Pengungkapan ke Pihak Ketiga
                </h3>
                <p>
                  Kami tidak menjual, menukar, atau mentransfer data pribadi
                  Anda ke pihak ketiga tanpa persetujuan Anda, kecuali
                  diwajibkan oleh hukum atau diperlukan untuk memenuhi proses
                  transaksi dengan bank mitra.
                </p>
              </div>
            </div>

            {/* Terms */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">
                Syarat & Ketentuan
              </h2>
              <div className="prose prose-sm max-w-none text-foreground-muted space-y-4">
                <p>
                  Dengan mengakses dan menggunakan situs web ini, Anda menyetujui
                  syarat dan ketentuan yang berlaku. Jika Anda tidak setuju
                  dengan syarat dan ketentuan ini, mohon untuk tidak menggunakan
                  situs ini.
                </p>
                <p>
                  Informasi di situs ini tidak merupakan penawaran untuk menjual
                  properti. Setiap transaksi jual beli properti tunduk pada
                  perjanjian tertulis terpisah yang ditandatangani oleh para
                  pihak.
                </p>
                <p>
                  {siteConfig.name} berhak mengubah informasi di situs ini
                  sewaktu-waktu tanpa pemberitahuan terlebih dahulu.
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-border text-center">
              <p className="text-xs text-foreground-subtle">
                &copy; {new Date().getFullYear()} {siteConfig.name}. Hak cipta
                dilindungi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
