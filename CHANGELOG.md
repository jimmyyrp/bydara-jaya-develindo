# 📋 Changelog

Semua perubahan signifikan pada project Griya Taman Belibis akan dicatat di file ini.

Format berdasarkan [Keep a Changelog](https://keepachangelog.com/id/1.1.0/),
dan project ini mengikuti [Semantic Versioning](https://semver.org/id/lang/id/2.0.0.html).

---

## [1.0.0] - 2024-12-01

### ✅ Added

#### Landing Page
- Hero section dengan background image & CTA WhatsApp
- Trust bar dengan statistik (100+ Unit Terjual, 2020 Tahun Berdiri, SHM Legalitas, 98% Puas)
- Features section dengan 4 keunggulan proyek
- Unit catalog dengan modal detail (Tipe 36/90 & Tipe Komersil)
- CTA section untuk WhatsApp & Booking
- Web Dev CTA untuk promosi jasa pembuatan website
- Location section dengan Google Maps embed

#### Halaman
- `/` — Beranda (7 sections)
- `/tentang-kami` — Profil perusahaan, visi, misi
- `/proyek/griya-taman-belibis` — Overview proyek
- `/proyek/griya-taman-belibis/tipe-rumah` — Katalog unit & spesifikasi
- `/proyek/griya-taman-belibis/galeri` — Foto progres
- `/proyek/griya-taman-belibis/fasilitas` — Fasilitas perumahan
- `/proyek/griya-taman-belibis/lokasi` — Peta & akses
- `/simulasi-kpr` — Kalkulator simulasi cicilan (formula anuitas)
- `/booking` — Form pemesanan (redirect WhatsApp)
- `/kontak` — Info kontak & alamat
- `/faq` — Pertanyaan umum (10 FAQ, 4 kategori, accordion)
- `/legal` — Disclaimer, privasi, syarat & ketentuan

#### Komponen UI
- Button, Badge, Card, Modal (Shadcn/UI based)
- Navbar responsif (desktop dropdown + mobile menu)
- Footer dengan info kontak
- Logo komponen (light/dark theme)
- Disclaimer banner di setiap halaman
- Floating WhatsApp button

#### Fitur Teknis
- SEO: Sitemap XML auto-generate, robots.txt, OpenGraph metadata
- Aksesibilitas: WCAG AA, keyboard navigation, focus-visible, ARIA labels
- Responsive: Mobile-first design, breakpoint 640/768/1024/1280px
- Animasi: Framer Motion, prefers-reduced-motion support
- Form validation: Indonesian phone format, email format
- KPR Calculator: Formula anuitas dengan configurable DP, tenor, rate

#### Data & Konfigurasi
- Centralized data store (`src/lib/data.ts`)
- Utility functions (`src/lib/utils.ts`)
- Design token system (CSS variables)
- Tailwind config dengan custom colors, fonts, animations

### 🔒 Security
- Client-side only — no backend/database
- Privacy consent wajib untuk form booking
- Data tidak disimpan di server manapun

---

## [Unreleased]

### 📋 Planned
- [ ] Dark mode toggle
- [ ] Multi bahasa (ID/EN)
- [ ] Unit testing (Vitest)
- [ ] E2E testing (Playwright)
- [ ] Optimasi gambar (local assets)
- [ ] Admin dashboard
- [ ] Backend integration

---

<div align="center">

[⬆ Kembali ke Atas](#-changelog)

</div>
