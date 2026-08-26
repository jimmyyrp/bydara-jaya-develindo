"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
}

export function Logo({
  className,
  showText = true,
  size = "md",
  theme = "light",
}: LogoProps) {
  const sizes = {
    sm: { w: 24, h: 24, text: "text-[9px]", subtext: "text-[6px]" },
    md: { w: 32, h: 32, text: "text-[11px]", subtext: "text-[7px]" },
    lg: { w: 40, h: 40, text: "text-[13px]", subtext: "text-[8px]" },
  };

  const currentSize = sizes[size];
  const isDark = theme === "dark";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-md shrink-0 p-0.5",
          isDark
            ? "bg-white/10 border border-white/10"
            : "bg-white shadow-sm border border-slate-100"
        )}
      >
        <Image
          src="/favicon_io/apple-touch-icon.png"
          width={currentSize.w}
          height={currentSize.h}
          alt={siteConfig.name}
          className="object-contain"
        />
      </div>
      {showText && (
        <div className="flex flex-col leading-[1.15]">
          <span
            className={cn(
              "font-black tracking-tight uppercase",
              currentSize.text,
              isDark ? "text-white" : "text-foreground"
            )}
          >
            {siteConfig.shortName}{" "}
            <span className="text-primary">DEVELINDO</span>
          </span>
          <span
            className={cn(
              "font-bold uppercase tracking-[0.15em] mt-0.5",
              currentSize.subtext,
              isDark ? "text-white/50" : "text-foreground-subtle"
            )}
          >
            PROPERTI KOTA SOLOK
          </span>
        </div>
      )}
    </div>
  );
}
