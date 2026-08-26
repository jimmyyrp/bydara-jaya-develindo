# 🔒 Kebijakan Keamanan

## Melaporkan Vulnerability

Kami sangat menghargai pelaporan vulnerability yang bertanggung jawab. Jika Anda menemukan security issue, mohon **JANGAN** buka public issue.

### Cara Melapor

1. **Email:** Kirim ke bydarajaya@gmail.com
2. **Subject:** `[SECURITY] Deskripsi Singkat Vulnerability`
3. **Include:**
   - Deskripsi vulnerability
   - Langkah-langkah reproduksi
   - Potensi dampak
   - Saran perbaikan (jika ada)

### Informasi yang Perlu Disertakan

```
Subject: [SECURITY] Deskripsi Singkat

## Vulnerability Type
[X] XSS  [ ] CSRF  [ ] Injection  [ ] Other: ___

## Affected Component
- Halaman: /nama-halaman
- Komponen: ComponentName
- Versi: 1.0.0

## Steps to Reproduce
1. Buka ...
2. Klik ...
3. Input ...

## Expected Impact
- [ ] Data leakage
- [ ] Unauthorized access
- [ ] Service disruption
- [ ] Other: ___

## Suggested Fix
(Jika ada)

## Your Info
- Name: (optional)
- Contact: (optional)
```

---

## Proses Penanganan

| Tahap | Durasi | Deskripsi |
|-------|--------|-----------|
| Penerimaan | 1×24 jam | Konfirmasi laporan diterima |
| Validasi | 3×24 jam | Verifikasi vulnerability |
| Penilaian | 1×24 jam | Tentukan severity level |
| Perbaikan | 7×24 jam | Develop & test fix |
| Deploy | 1×24 jam | Deploy fix ke production |
| Disclosure | Setelah fix | Public disclosure (jika applicable) |

---

## Severity Levels

| Level | Keterangan | Contoh | Response Time |
|-------|-----------|--------|---------------|
| 🔴 **Critical** | Immediate threat | SQL injection, auth bypass | 24 jam |
| 🟠 **High** | Significant impact | XSS stored, data leak | 48 jam |
| 🟡 **Medium** | Limited impact | XSS reflected, CSRF | 7 hari |
| 🟢 **Low** | Minimal impact | Information disclosure | 14 hari |

---

## Scope

### Yang Termasuk

- ✅ Vulnerability di website Griya Taman Belibis
- ✅ Security issues di dependencies
- ✅ Konfigurasi yang tidak aman
- ✅ Information disclosure

### Yang Tidak Termasuk

- ❌ Social engineering attacks
- ❌ Physical attacks
- ❌ DDoS attacks
- ❌ Issues di pihak ketiga (Cloudinary, WhatsApp, etc.)

---

## Safe Harbor

Kami mendukung responsible disclosure. Selama Anda:

- ✅ Melaporkan secara private terlebih dahulu
- ✅ Tidak mengeksploitasi vulnerability
- ✅ Tidak mengakses data pengguna lain
- ✅ Memberikan waktu yang cukup untuk perbaikan

Kami **tidak akan** mengambil tindakan hukum terhadap researcher yang mematuhi kebijakan ini.

---

## Recognition

Researcher yang melaporkan vulnerability akan diakui (dengan izin):

- ✅ Nama di halaman SECURITY.md
- ✅ Thanks di release notes
- ✅ Sertifikat apresiasi (jika diminta)

---

## Contact

Untuk security reports:
- 📧 Email: bydarajaya@gmail.com
- 💬 WhatsApp: 0822-3193-4068

**Untuk issues non-security**, gunakan [GitHub Issues](https://github.com/bydarajaya/bydara-jaya-develindo/issues).

---

<div align="center">

[⬆ Kembali ke Atas](#-kebijakan-keamanan)

</div>
