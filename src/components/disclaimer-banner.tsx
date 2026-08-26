import { siteConfig } from "@/lib/data";

export function DisclaimerBanner() {
  return (
    <div className="w-full bg-slate-950 text-white text-center py-2 px-4 text-[10px] sm:text-xs font-medium tracking-wide">
      <p>
        <span className="font-bold uppercase tracking-wider">Media Informasi:</span>{" "}
        {siteConfig.disclaimer}
      </p>
    </div>
  );
}
