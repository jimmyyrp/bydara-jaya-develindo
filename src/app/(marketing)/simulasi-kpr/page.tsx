"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig, unitTypes } from "@/lib/data";
import { calculateKPR, formatRupiah } from "@/lib/utils";
import { Calculator, Info } from "lucide-react";

export default function SimulasiKPRPage() {
  const [price, setPrice] = useState<number>(150500000);
  const [downPayment, setDownPayment] = useState<number>(10);
  const [tenor, setTenor] = useState<number>(15);
  const [interestRate, setInterestRate] = useState<number>(8);
  const [selectedUnit, setSelectedUnit] = useState<string>("");

  const result = calculateKPR(price, downPayment, tenor, interestRate);

  const handleUnitSelect = (unitId: string) => {
    setSelectedUnit(unitId);
    const unit = unitTypes.find((u) => u.id === unitId);
    if (unit && unit.price) {
      setPrice(unit.price);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-background-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-primary-muted text-primary border-none px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Simulasi KPR
            </Badge>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Simulasi <span className="text-primary italic font-light">KPR</span>
            </h1>
            <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-xl mx-auto">
              Hitung estimasi cicilan bulanan Anda sebelum memutuskan untuk
              booking unit.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="border border-border rounded-lg bg-background-alt">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calculator className="h-5 w-5 text-primary" />
                      <h2 className="text-lg font-serif font-bold text-foreground">
                        Parameter KPR
                      </h2>
                    </div>

                    {/* Unit Selection */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Pilih Tipe Unit (opsional)
                      </label>
                      <select
                        value={selectedUnit}
                        onChange={(e) => handleUnitSelect(e.target.value)}
                        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">— Pilih unit —</option>
                        {unitTypes.map((unit) => (
                          <option key={unit.id} value={unit.id}>
                            {unit.title} — {unit.priceDisplay}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Price */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Harga Rumah (Rp)
                      </label>
                      <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        min={0}
                        step={1000000}
                        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    {/* Down Payment */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Uang Muka ({downPayment}%)
                      </label>
                      <input
                        type="range"
                        min={5}
                        max={50}
                        value={downPayment}
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                        className="w-full accent-primary"
                      />
                      <div className="flex justify-between text-xs text-foreground-subtle">
                        <span>5%</span>
                        <span>{formatRupiah(result.loanAmount)}</span>
                        <span>50%</span>
                      </div>
                    </div>

                    {/* Tenor */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Tenor ({tenor} tahun)
                      </label>
                      <input
                        type="range"
                        min={5}
                        max={25}
                        value={tenor}
                        onChange={(e) => setTenor(Number(e.target.value))}
                        className="w-full accent-primary"
                      />
                      <div className="flex justify-between text-xs text-foreground-subtle">
                        <span>5 tahun</span>
                        <span>25 tahun</span>
                      </div>
                    </div>

                    {/* Interest Rate */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Suku Bunga Tahunan ({interestRate}%)
                      </label>
                      <input
                        type="range"
                        min={3}
                        max={15}
                        step={0.5}
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full accent-primary"
                      />
                      <div className="flex justify-between text-xs text-foreground-subtle">
                        <span>3%</span>
                        <span>15%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Results */}
              <div className="lg:col-span-3">
                <Card className="border border-border rounded-lg bg-background-alt">
                  <CardContent className="p-8 space-y-8">
                    <h2 className="text-lg font-serif font-bold text-foreground">
                      Hasil Simulasi
                    </h2>

                    {/* Monthly Payment — Featured */}
                    <div className="bg-primary-muted p-8 rounded-lg text-center space-y-2">
                      <p className="text-xs text-foreground-muted uppercase tracking-wider font-bold">
                        Estimasi Cicilan per Bulan
                      </p>
                      <p className="text-3xl md:text-4xl font-serif font-bold text-primary">
                        {formatRupiah(Math.round(result.monthlyPayment))}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-sm text-foreground-muted">
                          Harga Rumah
                        </span>
                        <span className="text-sm font-bold text-foreground">
                          {formatRupiah(price)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-sm text-foreground-muted">
                          Uang Muka ({downPayment}%)
                        </span>
                        <span className="text-sm font-bold text-foreground">
                          {formatRupiah(
                            Math.round(price * (downPayment / 100))
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-sm text-foreground-muted">
                          Pinjaman
                        </span>
                        <span className="text-sm font-bold text-foreground">
                          {formatRupiah(Math.round(result.loanAmount))}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-sm text-foreground-muted">
                          Tenor
                        </span>
                        <span className="text-sm font-bold text-foreground">
                          {tenor} tahun ({tenor * 12} bulan)
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-sm text-foreground-muted">
                          Suku Bunga
                        </span>
                        <span className="text-sm font-bold text-foreground">
                          {interestRate}% / tahun
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="text-sm text-foreground-muted">
                          Total Pembayaran
                        </span>
                        <span className="text-sm font-bold text-foreground">
                          {formatRupiah(Math.round(result.totalPayment))}
                        </span>
                      </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-info/5 border border-info/20 p-4 rounded-lg flex gap-3">
                      <Info className="h-5 w-5 text-info shrink-0 mt-0.5" />
                      <p className="text-xs text-foreground-muted leading-relaxed">
                        <strong className="text-foreground">Disclaimer:</strong>{" "}
                        Simulasi ini bersifat perkiraan dan bukan penawaran resmi
                        dari bank. Angka final tergantung kebijakan bank mitra.
                        Untuk informasi akurat, silakan hubungi tim sales kami.
                      </p>
                    </div>

                    <Button
                      className="w-full rounded-full bg-primary hover:bg-primary-hover py-7 text-[10px] font-bold transition-all duration-300"
                      asChild
                    >
                      <a
                        href={`https://wa.me/${siteConfig.whatsapp}`}
                        target="_blank"
                      >
                        KONSULTASI KPR DENGAN SALES
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
