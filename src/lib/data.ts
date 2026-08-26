export const siteConfig = {
  name: "PT. Bydara Jaya Develindo",
  shortName: "BYDARA",
  developer: "H. Benny Yasril",
  creator: "Ran Dev",
  location: "Griya Taman Belibis, Kota Solok",
  project: "Griya Taman Belibis",
  whatsapp: "6282231934068",
  phone: "0822-3193-4068",
  address:
    "Jl. H. Jamal, RT.001/RW.002, Kel. Nan Balimo, Kec. Tj. Harapan, Kota Solok, Sumatera Barat 27326",
  email: "bydarajaya@gmail.com",
  openingHours: "Senin - Minggu: 08.00 - 17.00 WIB",
  googleMapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7123!2d100.6402!3d-0.7938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2b349000000001%3A0x6b4f7e0e0e0e0e0e!2sNan%20Balimo%2C%20Tj.%20Harapan%2C%20Kota%20Solok%2C%20Sumatera%20Barat!5e0!3m2!1sid!2sid!4v1716543210987!5m2!1sid!2sid",
  googleMapsLink:
    "https://maps.app.goo.gl/9QZJ4c5c5c5c5c5c5",
  disclaimer:
    "Situs simulasi proyek oleh Ran Dev. Hubungi kontak resmi untuk pemasaran.",
  priceStart: "Rp 150.500.000",
  ogImage: "/images/og-default.jpg",
  webDev: {
    name: "Jimmy",
    phone: "081276484493",
    whatsapp: "6281276484493",
    tagline: "Mau punya website untuk usaha atau bisnis Anda?",
    description: "Kami bantu buatkan website profesional untuk usaha Anda — mulai dari company profile, landing page, hingga toko online.",
  },
};

/* ─── Navigation ─── */
export const mainNavigation = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "/tentang-kami" },
  {
    name: "Griya Taman Belibis",
    href: "/proyek/griya-taman-belibis",
    children: [
      {
        name: "Tipe Rumah",
        href: "/proyek/griya-taman-belibis/tipe-rumah",
      },
      {
        name: "Fasilitas",
        href: "/proyek/griya-taman-belibis/fasilitas",
      },
      {
        name: "Lokasi",
        href: "/proyek/griya-taman-belibis/lokasi",
      },
    ],
  },
  { name: "Simulasi KPR", href: "/simulasi-kpr" },
  { name: "Kontak", href: "/kontak" },
];

export const footerNavigation = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "/tentang-kami" },
  { name: "Tipe Rumah", href: "/proyek/griya-taman-belibis/tipe-rumah" },
  { name: "Simulasi KPR", href: "/simulasi-kpr" },
  { name: "FAQ", href: "/faq" },
  { name: "Kontak", href: "/kontak" },
];

/* ─── Unit Types ─── */
export interface UnitType {
  id: string;
  title: string;
  price: number | null;
  priceDisplay: string;
  badge: string;
  status: "tersedia" | "terbatas" | "habis";
  specs: {
    bed: number;
    bath: number;
    land: number;
    building: number;
  };
  features: string[];
  imageKey: string;
  description: string;
}

export const unitTypes: UnitType[] = [
  {
    id: "36-90",
    title: "Tipe 36/90 (Subsidi)",
    price: 150500000,
    priceDisplay: "Rp 150.500.000",
    badge: "Subsidi Pemerintah",
    status: "tersedia",
    specs: { bed: 2, bath: 1, land: 90, building: 36 },
    features: [
      "Ruang tamu",
      "2 Kamar tidur",
      "1 Kamar mandi",
      "Dapur",
      "Carport",
    ],
    imageKey: "unit_36",
    description:
      "Hunian subsidi pemerintah dengan spesifikasi layak huni untuk keluarga muda.",
  },
  {
    id: "komersil",
    title: "Tipe Komersil",
    price: null,
    priceDisplay: "Hubungi Sales",
    badge: "Unit Pengembangan",
    status: "terbatas",
    specs: { bed: 3, bath: 2, land: 120, building: 50 },
    features: [
      "Ruang tamu luas",
      "3 Kamar tidur",
      "2 Kamar mandi",
      "Dapur + Ruang makan",
      "Carport 2 mobil",
      "Taman belakang",
    ],
    imageKey: "unit_komersil",
    description:
      "Unit komersil dengan layout lebih luas dan fitur premium untuk investasi.",
  },
];

/* ─── Features / Keunggulan ─── */
export const features = [
  {
    title: "Legalitas Aman",
    description:
      "Sertifikat dan perizinan lengkap untuk ketenangan investasi keluarga.",
    icon: "ShieldCheck",
  },
  {
    title: "Mushalla Warga",
    description:
      "Fasilitas ibadah Mushalla Taman Belibis yang sudah aktif digunakan.",
    icon: "Church",
  },
  {
    title: "Lokasi Strategis",
    description:
      "Akses cepat ke pusat pemerintahan Kota Solok di Nan Balimo.",
    icon: "MapPin",
  },
  {
    title: "Bebas Banjir",
    description:
      "Sistem drainase modern memastikan lingkungan kering dan nyaman.",
    icon: "Award",
  },
];

/* ─── Trust Stats ─── */
export const trustStats = [
  { value: "100+", label: "Unit Terjual" },
  { value: "2020", label: "Tahun Berdiri" },
  { value: "SHM", label: "Legalitas" },
  { value: "98%", label: "Puas" },
];

/* ─── Facilities ─── */
export const facilities = [
  {
    title: "Mushalla Taman Belibis",
    description:
      "Fasilitas ibadah yang sudah aktif digunakan warga, dengan desain yang asri dan nyaman.",
    icon: "Church",
  },
  {
    title: "Keamanan 24 Jam",
    description:
      "Sistem keamanan terpadu dengan penjagaan sepanjang hari untuk kenyamanan penghuni.",
    icon: "ShieldCheck",
  },
  {
    title: "Taman Bermain",
    description:
      "Area bermain anak yang aman dan menyenangkan di dalam kawasan perumahan.",
    icon: "TreePine",
  },
  {
    title: "Akses Jalan Lebar",
    description:
      "Jalan utama selebar 6 meter dengan paving block untuk akses yang lancar.",
    icon: "Route",
  },
  {
    title: "Sistem Drainase",
    description:
      "Saluran air terencana baik sehingga lingkungan bebas dari genangan air.",
    icon: "Droplets",
  },
  {
    title: "Listrik & Air Bersih",
    description:
      "Sambungan listrik PLN dan air bersih PDAM siap pakai untuk setiap unit.",
    icon: "Zap",
  },
];

/* ─── Nearby Points ─── */
export const nearbyPlaces = [
  { name: "Kantor Walikota Solok", distance: "± 2 km", icon: "Building2" },
  { name: "RSUD Kota Solok", distance: "± 3 km", icon: "Hospital" },
  { name: "Pasar Raya Solok", distance: "± 2.5 km", icon: "Store" },
  { name: "SMPN 1 Solok", distance: "± 1.5 km", icon: "GraduationCap" },
  { name: "Masjid Raya", distance: "± 1 km", icon: "Church" },
];

/* ─── FAQ ─── */
export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  {
    category: "KPR & Pembayaran",
    question: "Bagaimana cara melakukan booking unit?",
    answer:
      "Anda dapat melakukan booking dengan mengisi form pemesanan di halaman Booking atau menghubungi tim sales kami via WhatsApp. Tim kami akan menghubungi Anda dalam 1×24 jam untuk proses selanjutnya.",
  },
  {
    category: "KPR & Pembayaran",
    question: "Apakah bisa KPR melalui bank?",
    answer:
      "Ya, kami bekerja sama dengan beberapa bank mitra untuk kemudahan pembiayaan KPR. Simulasi cicilan dapat Anda lihat di halaman Simulasi KPR untuk perkiraan awal.",
  },
  {
    category: "KPR & Pembayaran",
    question: "Berapa uang muka yang diperlukan?",
    answer:
      "Uang muka bervariasi tergantung tipe unit dan skema pembiayaan yang dipilih. Hubungi tim sales kami untuk informasi spesifik mengenai uang muka unit yang Anda minati.",
  },
  {
    category: "Legalitas",
    question: "Apakah sertifikat rumah sudah SHM?",
    answer:
      "Ya, seluruh unit di Griya Taman Belibis memiliki legalitas sertifikat Hak Milik (SHM) yang sah sesuai hukum yang berlaku di Indonesia.",
  },
  {
    category: "Legalitas",
    question: "Bagaimana legalitas PT. Bydara Jaya Develindo?",
    answer:
      "PT. Bydara Jaya Develindo adalah perusahaan pengembang resmi yang berbadan hukum, dengan pengalaman dalam pengembangan properti di Kota Solok.",
  },
  {
    category: "Unit & Fasilitas",
    question: "Apa saja tipe rumah yang tersedia?",
    answer:
      "Saat ini tersedia Tipe 36/90 (Subsidi) dan Tipe Komersil. Untuk detail spesifikasi masing-masing tipe, silakan kunjungi halaman Tipe Rumah.",
  },
  {
    category: "Unit & Fasilitas",
    question: "Apakah rumah sudah termasuk furnitur?",
    answer:
      "Unit yang diserahkan dalam kondisi bangunan siap huni (termasuk sanitary ware dan keramik). Furnitur tambahan dapat diatur secara terpisah dengan penyedia jasa yang kami rekomendasikan.",
  },
  {
    category: "Unit & Fasilitas",
    question: "Fasilitas apa saja yang ada di perumahan?",
    answer:
      "Fasilitas utama meliputi Mushalla Taman Belibis, keamanan 24 jam, taman bermain, akses jalan lebar, sistem drainase, serta sambungan listrik dan air bersih.",
  },
  {
    category: "Lokasi",
    question: "Di mana lokasi Griya Taman Belibis?",
    answer:
      "Griya Taman Belibis berlokasi di Nan Balimo, Kota Solok, Sumatera Barat. Lokasi strategis dekat dengan pusat pemerintahan dan fasilitas umum lainnya.",
  },
  {
    category: "Lokasi",
    question: "Bagaimana akses ke lokasi proyek?",
    answer:
      "Lokasi kami dapat diakses dari pusat Kota Solok dalam hitungan menit. Untuk petunjuk arah detail, Anda dapat menggunakan Google Maps yang tersedia di halaman Lokasi.",
  },
];

/* ─── Company Profile ─── */
export const companyProfile = {
  vision:
    "Menjadi pengembang properti terpercaya yang menghadirkan hunian berkualitas tinggi dengan sentuhan Islami untuk keluarga Indonesia.",
  mission: [
    "Menyediakan hunian layak huni dengan harga terjangkau tanpa mengorbankan kualitas.",
    "Membangun lingkungan perumahan yang asri, aman, dan mendukung kehidupan beragama.",
    "Menjamin legalitas dan kepastian hukum bagi setiap unit yang dijual.",
    "Melayani setiap calon penghuni dengan profesionalisme dan kejujuran.",
  ],
  stats: [
    { label: "Proyek Aktif", value: "1" },
    { label: "Total Unit", value: "100+" },
    { label: "Tahun Berdiri", value: "2020" },
    { label: "Huni Puas", value: "98%" },
  ],
};
