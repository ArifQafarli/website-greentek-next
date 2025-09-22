"use client";

import { useId, useState, memo } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/lib/useTranslation";

export default function FaqSection({
  defaultOpenIndex = -1,
  heightPx = 480,
  showLeft = true,
}) {
  const uid = useId();
  const [open, setOpen] = useState(defaultOpenIndex);
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  // faq_items array kimi qaytarsın deyə returnObjects: true istifadə edirik
  const raw = t("faq_items", { returnObjects: true });
  const items = Array.isArray(raw)
    ? raw
    : raw && typeof raw === "object"
    ? Object.values(raw)
    : [];

  return (
    <div className="px-6 md:px-10 lg:px-12">
      <div className="grid grid-cols-1 gap-8 lg:gap-10 items-start lg:grid-cols-12">
        {showLeft && (
          <div
            className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl px-6 py-6"
            style={{ height: heightPx }}
          >
            <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl font-medium">
              {t("faq_title")}{" "}
              <span className="text-emerald-700 font-semibold">
                {t("faq_highlighted")}
              </span>
            </h2>

            <div className="flex items-center justify-between sm:max-w-[520px] mt-8">
              <div>
                <p className="text-lg font-medium text-zinc-900">
                  {t("faq_still")}
                </p>
                <p className="mt-1 text-base text-zinc-500">
                  {t("faq_contact")}
                </p>
              </div>

              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full border border-emerald-300 px-5 py-3 text-emerald-900 shadow-sm transition hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <span className="text-base font-semibold">{t("faq_cta")}</span>
                <span className="rounded-full border border-emerald-300 p-1 transition group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        )}

        {/* Sağ  (accordion) */}
        <div className={showLeft ? "lg:col-span-7" : "lg:col-span-12"}>
          <div
            className="flex flex-col gap-4 overflow-y-auto no-scrollbar"
            style={{ maxHeight: heightPx }}
          >
            {items.map((it, i) => (
              <AccordionItem
                key={i}
                id={`${uid}-${i}`}
                title={it.q}
                content={it.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const AccordionItem = memo(function AccordionItem({
  id,
  title,
  content,
  open,
  onToggle,
}) {
  return (
    <div
      className={`w-full rounded-3xl border transition-shadow border-zinc-200 ${
        open ? "bg-zinc-100" : "bg-white"
      }`}
    >
      <button
        aria-expanded={open}
        aria-controls={`panel-${id}`}
        id={`button-${id}`}
        onClick={onToggle}
        className={`flex w-full items-center justify-between gap-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 ${
          open ? "p-5 md:p-6" : "p-3 md:p-4"
        }`}
      >
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-semibold text-zinc-900">
            {title}
          </h3>
          <div
            id={`panel-${id}`}
            role="region"
            aria-labelledby={`button-${id}`}
            className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
              open
                ? "mt-2 grid-rows-[1fr] opacity-100"
                : "mt-0 grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0">
              <p className="pr-4 md:pr-12 text-sm md:text-base leading-7 text-zinc-600">
                {content}
              </p>
            </div>
          </div>
        </div>

        <span
          className="shrink-0 rounded-2xl p-2.5 md:p-3 transition-colors"
          style={{ backgroundColor: open ? "#8BF0BB" : "#E5E7EF73" }}
        >
          {open ? (
            <Minus className="h-5 w-5 md:h-6 md:w-6 text-emerald-900" />
          ) : (
            <Plus className="h-5 w-5 md:h-6 md:w-6 text-emerald-900" />
          )}
        </span>
      </button>
    </div>
  );
});
