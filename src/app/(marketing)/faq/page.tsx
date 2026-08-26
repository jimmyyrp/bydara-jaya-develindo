"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { siteConfig, faqData } from "@/lib/data";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [...new Set(faqData.map((item) => item.category))];

function FAQAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left bg-background-alt hover:bg-accent/50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-base font-medium text-foreground pr-4">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-foreground-muted shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 bg-background-alt">
          <p className="text-sm text-foreground-muted leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-background-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-primary-muted text-primary border-none px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
              FAQ
            </Badge>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Pertanyaan <span className="text-primary italic font-light">Umum</span>
            </h1>
            <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-xl mx-auto">
              Jawaban atas pertanyaan yang paling sering ditanyakan seputar{" "}
              {siteConfig.project}.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            {categories.map((category) => (
              <div key={category} className="space-y-4">
                <h2 className="text-xl font-serif font-bold text-foreground">
                  {category}
                </h2>
                <div className="space-y-3">
                  {faqData
                    .filter((item) => item.category === category)
                    .map((item) => {
                      const key = `${category}-${item.question}`;
                      return (
                        <FAQAccordionItem
                          key={key}
                          question={item.question}
                          answer={item.answer}
                          isOpen={!!openItems[key]}
                          onToggle={() => toggleItem(key)}
                        />
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
