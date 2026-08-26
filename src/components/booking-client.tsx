"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig, unitTypes } from "@/lib/data";
import {
  isValidIndonesianPhone,
  isValidEmail,
} from "@/lib/utils";
import {
  CheckCircle,
  Send,
  AlertCircle,
  Calendar,
} from "lucide-react";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  unitType: string;
  surveyDate: string;
  notes: string;
  privacyConsent: boolean;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  unitType?: string;
  privacyConsent?: string;
}

export function BookingClient() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    unitType: "",
    surveyDate: "",
    notes: "",
    privacyConsent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const [isSuccess, setIsSuccess] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (data: FormData, isSubmit = false): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = "Nama lengkap wajib diisi";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Nomor HP wajib diisi";
    } else if (!isValidIndonesianPhone(data.phone)) {
      newErrors.phone = "Format nomor HP tidak valid (contoh: 08123456789)";
    }

    if (data.email && !isValidEmail(data.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!data.unitType) {
      newErrors.unitType = "Pilih tipe unit yang diminati";
    }

    if (isSubmit && !data.privacyConsent) {
      newErrors.privacyConsent =
        "Anda harus menyetujui kebijakan privasi untuk melanjutkan";
    }

    return newErrors;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const newErrors = validate(formData);
    setErrors(newErrors);
  };

  const handleChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const newErrors = validate({ ...formData, [field]: value });
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      phone: true,
      email: true,
      unitType: true,
      privacyConsent: true,
    });
    const newErrors = validate(formData, true);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // Build WhatsApp message and redirect
    const selectedUnit = unitTypes.find((u) => u.id === formData.unitType);
    const unitLabel = selectedUnit ? selectedUnit.title : formData.unitType;
    const msg = [
      "Halo, saya ingin booking unit di Griya Taman Belibis.",
      "",
      `Nama: ${formData.fullName}`,
      `HP: ${formData.phone}`,
      formData.email ? `Email: ${formData.email}` : "",
      `Tipe Unit: ${unitLabel}`,
      formData.surveyDate ? `Jadwal Survei: ${formData.surveyDate}` : "",
      formData.notes ? `Catatan: ${formData.notes}` : "",
    ]
      .filter(Boolean)
      .join("%0A");

    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${msg}`, "_blank");
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <section className="py-20 md:py-28 bg-background-alt min-h-[60vh] flex items-center">
        <div className="container-custom">
          <Card className="max-w-lg mx-auto border border-border rounded-lg bg-background-alt">
            <CardContent className="p-12 text-center space-y-6">
              <div className="bg-success-bg p-4 rounded-full w-fit mx-auto">
                <CheckCircle className="h-10 w-10 text-success" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                Booking Berhasil!
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Terima kasih telah mengirimkan minat Anda. Tim sales kami akan
                menghubungi Anda dalam <strong>1×24 jam</strong> untuk proses
                selanjutnya.
              </p>
              <div className="bg-accent/50 p-4 rounded-lg">
                <p className="text-sm text-foreground-muted">
                  Jika ada pertanyaan mendesak, silakan hubungi langsung:
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  className="text-sm font-bold text-primary hover:underline mt-2 inline-block"
                >
                  WhatsApp Sales
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-background-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-primary-muted text-primary border-none px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Booking
            </Badge>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Form <span className="text-primary italic font-light">Pemesanan</span>
            </h1>
            <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-xl mx-auto">
              Isi form berikut untuk menyatakan minat Anda terhadap unit di{" "}
              {siteConfig.project}. Tim kami akan segera menghubungi.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <Card className="border border-border rounded-lg bg-background-alt">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="text-sm font-medium text-foreground"
                    >
                      Nama Lengkap <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      onBlur={() => handleBlur("fullName")}
                      placeholder="Masukkan nama lengkap"
                      className={`w-full px-4 py-3 rounded-md border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.fullName && touched.fullName
                          ? "border-destructive"
                          : "border-border"
                      }`}
                    />
                    {errors.fullName && touched.fullName && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-foreground"
                    >
                      No. HP / WhatsApp{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onBlur={() => handleBlur("phone")}
                      placeholder="08123456789"
                      className={`w-full px-4 py-3 rounded-md border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.phone && touched.phone
                          ? "border-destructive"
                          : "border-border"
                      }`}
                    />
                    {errors.phone && touched.phone && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      placeholder="nama@email.com"
                      className={`w-full px-4 py-3 rounded-md border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.email && touched.email
                          ? "border-destructive"
                          : "border-border"
                      }`}
                    />
                    {errors.email && touched.email && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Unit Type */}
                  <div className="space-y-2">
                    <label
                      htmlFor="unitType"
                      className="text-sm font-medium text-foreground"
                    >
                      Tipe Rumah Diminati{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="unitType"
                      value={formData.unitType}
                      onChange={(e) => handleChange("unitType", e.target.value)}
                      onBlur={() => handleBlur("unitType")}
                      className={`w-full px-4 py-3 rounded-md border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.unitType && touched.unitType
                          ? "border-destructive"
                          : "border-border"
                      }`}
                    >
                      <option value="">— Pilih tipe unit —</option>
                      {unitTypes.map((unit) => (
                        <option key={unit.id} value={unit.id}>
                          {unit.title}
                        </option>
                      ))}
                    </select>
                    {errors.unitType && touched.unitType && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.unitType}
                      </p>
                    )}
                  </div>

                  {/* Survey Date */}
                  <div className="space-y-2">
                    <label
                      htmlFor="surveyDate"
                      className="text-sm font-medium text-foreground"
                    >
                      Preferensi Jadwal Survei
                    </label>
                    <div className="relative">
                      <input
                        id="surveyDate"
                        type="date"
                        value={formData.surveyDate}
                        onChange={(e) =>
                          handleChange("surveyDate", e.target.value)
                        }
                        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground-subtle pointer-events-none" />
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <label
                      htmlFor="notes"
                      className="text-sm font-medium text-foreground"
                    >
                      Catatan Tambahan
                    </label>
                    <textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleChange("notes", e.target.value)}
                      placeholder="Pertanyaan, preferensi khusus, dll."
                      rows={3}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Privacy Consent */}
                  <div className="space-y-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.privacyConsent}
                        onChange={(e) =>
                          handleChange("privacyConsent", e.target.checked)
                        }
                        className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary accent-primary"
                      />
                      <span className="text-sm text-foreground-muted leading-relaxed">
                        Saya menyetujui{" "}
                        <a
                          href="/legal"
                          target="_blank"
                          className="text-primary hover:underline font-medium"
                        >
                          kebijakan privasi
                        </a>{" "}
                        dan memahami bahwa data pribadi saya akan digunakan oleh
                        tim sales untuk follow-up.
                      </span>
                    </label>
                    {errors.privacyConsent && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.privacyConsent}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full rounded-full bg-primary hover:bg-primary-hover py-7 text-[10px] font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    KIRIM PESANAN
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
