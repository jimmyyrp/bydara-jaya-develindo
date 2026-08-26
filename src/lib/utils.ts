import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format angka ke Rupiah menggunakan Intl.NumberFormat Indonesia
 * Contoh: formatRupiah(150500000) → "Rp 150.500.000"
 */
export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Validasi nomor telepon Indonesia
 * Format: 08xx, +62 8xx, 62 8xx
 */
export function isValidIndonesianPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-()]/g, "");
  return /^(08|\+?628)\d{8,13}$/.test(cleaned);
}

/**
 * Validasi format email sederhana
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Format nomor telepon untuk link wa.me
 */
export function formatWhatsAppNumber(phone: string): string {
  const cleaned = phone.replace(/[\s\-()]/g, "");
  if (cleaned.startsWith("0")) {
    return "62" + cleaned.slice(1);
  }
  if (cleaned.startsWith("+")) {
    return cleaned.slice(1);
  }
  return cleaned;
}

/**
 * Simulasi KPR — menghitung estimasi cicilan per bulan
 * Menggunakan formula anuitas (fixed monthly payment)
 */
export function calculateKPR(
  price: number,
  downPaymentPercent: number,
  tenorYears: number,
  annualInterestRate: number
): {
  loanAmount: number;
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
} {
  const loanAmount = price * (1 - downPaymentPercent / 100);
  const tenorMonths = tenorYears * 12;
  const monthlyRate = annualInterestRate / 100 / 12;

  let monthlyPayment: number;
  if (monthlyRate === 0) {
    monthlyPayment = loanAmount / tenorMonths;
  } else {
    // Formula anuitas
    monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenorMonths)) /
      (Math.pow(1 + monthlyRate, tenorMonths) - 1);
  }

  const totalPayment = monthlyPayment * tenorMonths;
  const totalInterest = totalPayment - loanAmount;

  return {
    loanAmount,
    monthlyPayment,
    totalPayment,
    totalInterest,
  };
}
