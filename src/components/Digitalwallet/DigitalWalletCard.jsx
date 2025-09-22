"use client";

import Image from "next/image";
import Container from "../layout/Container";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/lib/useTranslation";

export default function DigitalWalletCard() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center mx-6 justify-between bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-md">
        {/* Left Image */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <Image
            src="/assets/Digitalcard/digitalcard.png"
            alt="Digital Wallet"
            width={600}
            height={650}
            className="rounded-2xl object-contain w-[80%] sm:w-[75%] lg:w-full"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-3/5 mt-8 sm:mt-10 lg:mt-0 lg:pl-16 xl:pl-24 lg:ml-8 xl:ml-12 lg:pr-10 text-center lg:text-left -translate-y-4 md:-translate-y-6">
          <h2
            className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-snug md:leading-[130%] lg:leading-[138%] text-gray-900"
            dangerouslySetInnerHTML={{ __html: t("wallet_title") }}
          />

          <p
            className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg leading-relaxed text-[#212121]"
            dangerouslySetInnerHTML={{ __html: t("wallet_desc") }}
          />
        </div>
      </div>
    </Container>
  );
}
