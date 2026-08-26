# Griya Taman Belibis — Website Landing Page

> ⚠️ **DISCLAIMER:** Situs ini adalah **landing page informasional** (bukan situs resmi). Seluruh data bersifat simulasi. Hubungi kontak resmi PT. Bydara Jaya Develindo untuk pemasaran.

Landing page pemasaran properti untuk **Griya Taman Belibis** oleh PT. Bydara Jaya Develindo.

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 🏠 **Landing Page** | Hero, katalog unit, lokasi, fasilitas, CTA |
| 📊 **Simulasi KPR** | Kalkulator cicilan dengan formula anuitas |
| 📋 **Form Booking** | Validasi real-time, privacy consent, redirect WhatsApp |
| 🔍 **SEO** | Sitemap, robots.txt, OpenGraph metadata per halaman |
| ♿ **Aksesibilitas** | WCAG AA, keyboard navigation, focus-visible, reduced-motion |
| 📱 **Responsive** | Mobile-first, breakpoint 640/768/1024/1280px |
| 🛡️ **Disclaimer Banner** | Banner "Media Informasi" di atas setiap halaman |
| 🌐 **Web Dev Promo** | CTA untuk jasa pembuatan website oleh Jimmy |

## 🚀 Tech Stack

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| **Next.js** | 14.2 (App Router) | Framework React SSR/SSG |
| **React** | 18.3 | UI Library |
| **TypeScript** | 5.x | Type Safety |
| **Tailwind CSS** | 3.4 | Utility-first Styling |
| **Framer Motion** | 11.0 | Animasi UI |
| **Shadcn/UI** | Custom | Komponen UI (Button, Card, Badge, Modal) |
| **Lucide React** | 0.475 | Ikon |

## 🛠️ Setup Lokal

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Jalankan production server
npm run start
```

Buka [http://localhost:3000](http://localhost:3000).

## 📁 Struktur Folder

```
src/
  app/
    (marketing)/              ← Semua halaman marketing (landing page)
      layout.tsx              ← Layout dengan Navbar, Footer, DisclaimerBanner
      page.tsx                ← Beranda (Hero, TrustBar, Features, UnitCatalog, CTA, WebDevCTA, Location)
      tentang-kami/           ← Profil perusahaan
      proyek/griya-taman-belibis/
        page.tsx              ← Overview proyek
        tipe-rumah/           ← Katalog unit & spesifikasi
        galeri/               ← Foto progres
        fasilitas/            ← Fasilitas perumahan
        lokasi/               ← Peta & akses
      simulasi-kpr/           ← Kalkulator simulasi cicilan
      booking/                ← Form pemesanan (redirect ke WhatsApp)
      kontak/                 ← Info kontak & alamat
      faq/                    ← Pertanyaan umum (accordion)
      legal/                  ← Disclaimer, privasi, syarat & ketentuan
    lib/
      placeholder-images.json ← Placeholder images (picsum.photos)
    sitemap.ts                ← Sitemap XML generator
    robots.ts                 ← Robots.txt generator
    globals.css               ← CSS variables & global styles
    layout.tsx                ← Root layout (fonts, metadata)
  components/
    navbar.tsx                ← Navigasi responsif (desktop dropdown + mobile menu)
    footer.tsx                ← Footer dengan info kontak
    logo.tsx                  ← Logo komponen (light/dark theme)
    disclaimer-banner.tsx     ← Banner disclaimer di atas setiap halaman
    whatsapp-button.tsx       ← Floating WhatsApp CTA
    ui/
      button.tsx              ← Button component (Shadcn/UI)
      badge.tsx               ← Badge component (Shadcn/UI)
      card.tsx                ← Card component (Shadcn/UI)
      modal.tsx               ← Modal component (custom)
    sections/
      hero.tsx                ← Hero section dengan gambar & CTA
      trust-bar.tsx           ← Statistik kepercayaan
      features.tsx            ← Keunggulan proyek
      unit-catalog.tsx        ← Katalog unit dengan modal detail
      cta-section.tsx         ← CTA WhatsApp & Booking
      location.tsx            ← Lokasi & Google Maps embed
      web-dev-cta.tsx         ← Promo jasa pembuatan website
  lib/
    utils.ts                  ← formatRupiah, validasi, KPR calculator
    data.ts                   ← Data statis situs (config, navigasi, unit, FAQ)
```

## 🔒 Keamanan & Catatan

### Disclaimer

Situs ini bersifat **informasional** dan bukan situs resmi PT. Bydara Jaya Develindo. Banner disclaimer ditampilkan di bagian atas setiap halaman untuk transparansi kepada pengunjung.

### Keamanan Data

- **Form booking** tidak menyimpan data di server — data langsung dikirim ke WhatsApp (client-side redirect).
- Tidak ada database atau backend yang menyimpan data pribadi pengunjung.
- **Privacy consent** wajib diisi sebelum form booking dapat dikirim.
- Validasi input dilakukan di client-side (phone format, email format).

### SEO & Meta

- Sitemap XML di-generate otomatis (`/sitemap.xml`)
- Robots.txt mengizinkan indexing halaman publik, melarang `/api/`
- OpenGraph & Twitter Card metadata untuk social sharing
- `metadataBase` diatur ke `https://bydarajaya.com`

### Aksesibilitas

- `prefers-reduced-motion` didukung — animasi non-essensi dinonaktifkan
- `focus-visible` ring untuk navigasi keyboard
- ARIA labels pada tombol interaktif
- Struktur heading hierarkis (h1 → h2 → h3)

## 📄 Lisensi

Properti PT. Bydara Jaya Develindo. Dikembangkan oleh Ran Dev.

---

**Kontak Sales:** [WhatsApp 0822-3193-4068](https://wa.me/6282231934068)

**Jasa Pembuatan Website:** Hubungi Jimmy — 081276484493
