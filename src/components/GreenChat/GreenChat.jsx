"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/lib/useTranslation";

export default function HeroGreenChat({ ctaHref = "#qrdownload", illustrationSrc = "/assets/Greenchat/chat.png" }) {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const handleCtaClick = (e) => {
    if (ctaHref?.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(ctaHref);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="w-full py-10 sm:py-14">
      <Container>
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Left Side */}
          <div className="flex-1 flex flex-col">
            <div className="w-full rounded-2xl border border-black/5 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
              <h1 className="text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-black">
                {t("greenchat_title")}
              </h1>

              <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl">
                {t("greenchat_desc")}
              </p>
            </div>

            <div className="mt-10 lg:mt-12">
              <Link
                href={ctaHref}
                onClick={handleCtaClick}
                aria-label={t("greenchat_cta")}
                className="group relative inline-flex w-full items-center rounded-full bg-[#0D4B4B] text-white text-xl font-medium pl-8 pr-24 py-5 sm:py-6 shadow-sm transition-colors duration-300 hover:bg-[#0a3838] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0D4B4B]/30"
              >
                {t("greenchat_cta")}
                <span className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-[#0D4B4B] ring-2 ring-[#0D4B4B]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="29"
                    viewBox="0 0 17 29"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.33203 26.8332L14.6654 14.4998L2.33203 2.1665"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1">
            <div className="relative h-full w-full overflow-hidden rounded-3xl">
              <Image
                src={illustrationSrc}
                alt="GreenChat illustration"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
