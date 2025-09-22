"use client";

import Container from "@/components/layout/Container";
import PageBanner from "@/components/PageBanner/PageBanner";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/lib/useTranslation";

export default function AboutPage() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <Container>
      <div className="relative w-full mb-16 overflow-hidden rounded-tl-[20px] rounded-tr-[20px] mt-5">
        <PageBanner bgImage="/assets/Pagebanner/page-banner.png" />
      </div>

      <section className="py-16">
        <h2
          className="max-w-5xl text-2xl font-medium font-poppins text-black leading-snug"
          dangerouslySetInnerHTML={{ __html: t("about_subtitle") }}
        />

        <div className="mt-12 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Kart 1 */}
          <div className="bg-white rounded-tl-2xl rounded-bl-2xl shadow p-6 hover:shadow-lg hover:-translate-y-1 transition transform">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              {t("about_card1_title")}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t("about_card1_text")}
            </p>
          </div>

          {/* Kart 2 */}
          <div className="bg-white shadow p-6 hover:shadow-lg hover:-translate-y-1 transition transform">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              {t("about_card2_title")}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t("about_card2_text")}
            </p>
          </div>

          {/* Kart 3 */}
          <div className="bg-white rounded-tr-2xl rounded-br-2xl shadow p-6 hover:shadow-lg hover:-translate-y-1 transition transform">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              {t("about_card3_title")}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t("about_card3_text")}
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
