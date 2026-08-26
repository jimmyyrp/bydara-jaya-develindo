<div align="center">

# 🤝 Panduan Kontribusi

**Terima kasih sudah berkontribusi di Griya Taman Belibis!**

Setiap kontribusi sangat berarti, baik itu perbaikan bug, fitur baru, atau dokumentasi.

</div>

---

## 📋 Daftar Isi

- [Cara Memulai](#-cara-memulai)
- [Development Workflow](#-development-workflow)
- [Branching Strategy](#-branching-strategy)
- [Commit Convention](#-commit-convention)
- [Pull Request Process](#-pull-request-process)
- [Code Style](#-code-style)
- [Project Structure](#-project-structure)
- [Issue Guidelines](#-issue-guidelines)
- [Code of Conduct](#-code-of-conduct)

---

## 🚀 Cara Memulai

### 1. Fork Repository

Klik tombol **Fork** di pojok kanan atas repository ini.

### 2. Clone Repository

```bash
# Clone fork kamu
git clone https://github.com/YOUR_USERNAME/bydara-jaya-develindo.git

# Masuk ke directory
cd bydara-jaya-develindo

# Tambahkan upstream remote
git remote add upstream https://github.com/bydarajaya/bydara-jaya-develindo.git
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Buat Branch Baru

```bash
# Pastikan kamu di branch main
git checkout main

# Pull latest changes
git pull upstream main

# Buat branch baru
git checkout -b fitur/nama-fitur
```

### 5. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

---

## 🔄 Development Workflow

### Selalu Sync dengan Upstream

```bash
# Fetch changes dari upstream
git fetch upstream

# Merge ke branch lokal
git merge upstream/main

# Atau rebase
git rebase upstream/main
```

### Working Tree Bersih

```bash
# Lihat status
git status

# Lihat perubahan
git diff

# Staging files
git add src/components/nama-komponen.tsx

# Commit
git commit -m "feat: deskripsi perubahan"
```

---

## 🌿 Branching Strategy

### Branch Types

| Branch | Prefix | Contoh | Keterangan |
|--------|--------|---------|------------|
| **Main** | `main` | `main` | Branch production, selalu stabil |
| **Feature** | `fitur/` | `fitur/dark-mode` | Fitur baru |
| **Bugfix** | `fix/` | `fix/form-validasi` | Perbaikan bug |
| **Hotfix** | `hotfix/` | `hotfix/security-patch` | Fix urgent di production |
| **Docs** | `docs/` | `docs/update-readme` | Update dokumentasi |
| **Style** | `style/` | `style/color-palette` | Perubahan style/tampilan |
| **Refactor** | `refactor/` | `refactor/component-structure` | Refactoring kode |
| **Test** | `test/` | `test/unit-kpr` | Menambah/memperbaiki test |

### Naming Convention

```
fitur/dark-mode-toggle
fix/whatsapp-link-format
docs/contributing-guide
style/card-border-radius
```

---

## 📝 Commit Convention

Kami menggunakan [Conventional Commits](https://www.conventionalcommits.org/).

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

| Type | Deskripsi | Contoh |
|------|-----------|--------|
| `feat` | Fitur baru | `feat(booking): tambah validasi email` |
| `fix` | Perbaikan bug | `fix(kpr): kalkulasi anuitas salah` |
| `docs` | Dokumentasi | `docs(readme): update FAQ` |
| `style` | Style (tidak ubah logic) | `style(hero): ubah warna background` |
| `refactor` | Refactoring | `refactor(data): ekstrak unit types` |
| `test` | Test | `test(utils): tambah test formatRupiah` |
| `chore` | Maintenance | `chore(deps): update framer-motion` |
| `perf` | Performa | `perf(images): lazy loading optimization` |
| `ci` | CI/CD | `ci(github): tambah workflow` |
| `build` | Build system | `build(next): upgrade ke 14.2` |

### Contoh

```bash
# Fitur baru
git commit -m "feat(simulasi-kpr): tambah dropdown bank selector"

# Perbaikan bug
git commit -m "fix(booking): phone validation menerima format +62"

# Update dokumentasi
git commit -m "docs(readme): tambah section deployment"

# Breaking change
git commit -m "feat(unit-catalog): redesign card layout

BREAKING CHANGE: prop 'variant' diganti menjadi 'size'"
```

---

## 🔀 Pull Request Process

### 1. Push Branch

```bash
git push origin fitur/nama-fitur
```

### 2. Buka Pull Request

- Pergi ke repository di GitHub
- Klik **"New Pull Request"**
- Pilih branch `main` sebagai base, branch kamu sebagai compare

### 3. Isi Template PR

**Judul PR:**
```
feat(booking): tambah captcha protection
```

**Deskripsi:**
```markdown
## Deskripsi
Menambahkan Google reCaptcha v3 untuk melindungi form booking dari spam.

## Perubahan
- [x] Install package `react-google-recaptcha-v3`
- [x] Tambah CaptchaValidator component
- [x] Integrasikan ke BookingForm
- [x] Update validasi server-side

## Screenshots
<!-- Lampirkan screenshot jika ada perubahan UI -->

## Testing
- [ ] Form booking normal tanpa spam
- [ ] Captcha tidak mengganggu UX
- [ ] Mobile responsive
```

### 4. Review Process

- ✅ Pastikan tidak ada error (run `npm run lint`)
- ✅ Pastikan responsive di mobile
- ✅ Pastikan tidak mengubah existing functionality
- ✅ Tambah deskripsi yang jelas

### 5. Merge

Setelah approval, PR akan di-merge ke `main`.

---

## 🎨 Code Style

### TypeScript

```typescript
// ✅ Gunakan interface untuk object
interface UnitType {
  id: string;
  title: string;
  price: number;
  specs: {
    bedrooms: number;
    bathrooms: number;
    landArea: number;
    buildingArea: number;
  };
  status: "tersedia" | "terbatas" | "habis";
}

// ✅ Gunakan type untuk union
type UnitStatus = "tersedia" | "terbatas" | "habis";

// ❌ Jangan gunakan any
const data: any = {}; // ❌

// ✅ Gunakan unknown atau type spesifik
const data: Record<string, unknown> = {};
```

### React Components

```typescript
// ✅ Gunakan functional components dengan TypeScript
interface HeroProps {
  title: string;
  subtitle?: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  );
}

// ✅ Gunakan named export
export { Hero };

// ❌ Jangan gunakan default export untuk komponen
export default Hero; // ❌
```

### Tailwind CSS

```typescript
// ✅ Gunakan cn() helper untuk conditional classes
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  variant === "primary" && "primary-classes"
)} />

// ✅ Gunakan design tokens dari globals.css
<div className="bg-background text-foreground" />

// ❌ Jangan hardcode warna
<div className="bg-white text-gray-900" /> // ❌
```

### File Naming

```
✅ booking-form.tsx        (kebab-case)
✅ whatsapp-button.tsx     (kebab-case)
✅ unit-catalog.tsx        (kebab-case)
❌ BookingForm.tsx         (PascalCase untuk file)
❌ bookingForm.tsx         (camelCase untuk file)
```

### Directory Naming

```
✅ simulasi-kpr/           (kebab-case)
✅ tipe-rumah/             (kebab-case)
✅ griya-taman-belibis/    (kebab-case)
❌ SimulasiKPR/            (PascalCase)
❌ simulasi_kpr/           (snake_case)
```

---

## 📂 Project Structure

### Menambah Komponen Baru

```
src/components/
├── ui/                     # Komponen dasar (Shadcn/UI)
│   ├── button.tsx
│   └── ...
├── sections/               # Section halaman
│   ├── hero.tsx
│   └── ...
├── navbar.tsx              # Komponen global
├── footer.tsx
└── nama-komponen.tsx       # ← Tambah di sini
```

### Menambah Halaman Baru

```
src/app/(marketing)/
├── nama-halaman/
│   └── page.tsx            # ← Tambah di sini
```

### Menambah Data

```typescript
// src/lib/data.ts
export const newDataType = [
  {
    id: "unique-id",
    title: "Judul",
    // ...
  }
];
```

---

## 🐛 Issue Guidelines

### Bug Report

```markdown
## 🐛 Bug Description
Deskripsi bug yang ditemukan.

## 📋 Steps to Reproduce
1. Buka halaman '...'
2. Klik tombol '...'
3. Scroll ke '...'
4. Error muncul

## ✅ Expected Behavior
Yang seharusnya terjadi.

## ❌ Actual Behavior
Yang sebenarnya terjadi.

## 📱 Environment
- OS: Windows 11
- Browser: Chrome 120
- Device: Desktop / Mobile
- Screen: 1920x1080 / 375x812

## 📸 Screenshots
<!-- Lampirkan screenshot jika memungkinkan -->
```

### Feature Request

```markdown
## 🚀 Feature Description
Deskripsi fitur yang diinginkan.

## 💡 Use Case
Kapan/Mengapa fitur ini dibutuhkan?

## 🎨 Proposed Solution
Solusi yang diusulkan (jika ada).

## 📋 Alternatives
Alternatif lain yang sudah dipertimbangkan.

## 📊 Priority
- [ ] Low - Nice to have
- [ ] Medium - Would improve UX
- [ ] High - Critical for functionality
```

---

## ⚠️ Hal yang Perlu Diperhatikan

### ❌ Jangan Lakukan

- ❌ Push langsung ke `main`
- ❌ Merge tanpa review
- ❌ Hardcode API keys atau secrets
- ❌ Ubah `next.config.mjs` tanpa diskusi
- ❌ Hapus komponen yang masih digunakan
- ❌ Ubah breaking tanpa discussion

### ✅ Selalu Lakukan

- ✅ Buat issue sebelum mulai kerja besar
- ✅ Sync dengan upstream sebelum mulai
- ✅ Test di mobile dan desktop
- ✅ Jalankan `npm run lint` sebelum commit
- ✅ Tulis deskripsi PR yang jelas
- ✅ Sertakan screenshot jika ada perubahan UI

---

## 🆘 Butuh Bantuan?

- 💬 Buka [GitHub Discussion](https://github.com/bydarajaya/bydara-jaya-develindo/discussions)
- 🐛 Laporkan [Bug](https://github.com/bydarajaya/bydara-jaya-develindo/issues/new?template=bug_report.md)
- 💡 Ajukan [Feature Request](https://github.com/bydarajaya/bydara-jaya-develindo/issues/new?template=feature_request.md)

---

## 🙏 Terima Kasih

Setiap kontribusi membuat project ini lebih baik. Terima kasih sudah meluangkan waktu untuk berkontribusi!

<div align="center">

[⬆ Kembali ke Atas](#-panduan-kontribusi)

</div>
