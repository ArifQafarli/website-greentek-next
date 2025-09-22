"use client";

import { BsBroadcast } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import Container from "../../components/layout/Container";
import { useTranslation } from "@/lib/useTranslation";
import { useLanguage } from "@/context/LanguageContext";

const HeroSection = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <section className="w-full font-poppins bg-[#f7f7f7]">
      <Container className="py-6 flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-start px-6 sm:px-10 py-10 gap-6 rounded-3xl">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight">
              {t("hero_title1")} <br /> <span>{t("hero_title2")}</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-black font-normal mt-2">
              {t("hero_subtitle")}
            </h2>
            <p className="mt-6 text-gray-500 max-w-md">{t("hero_desc")}</p>
          </div>

          {/* Button */}
          <button className="group relative flex items-center bg-[#033136] text-white rounded-full pl-6 pr-14 py-3 w-fit transition">
            <span className="text-base">{t("hero_button")}</span>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-200 group-hover:rotate-45">
              <MdArrowOutward />
            </span>
          </button>

          {/* QR Code Box */}
          <div className="flex items-center gap-4 border border-dashed border-gray-400 rounded-xl p-6 max-w-full sm:max-w-md w-full mt-4">
            <Image
              src="/assets/HeroImage/QrCode.png"
              alt="QR Code"
              width={64}
              height={64}
              className="object-contain"
            />
            <div className="text-sm text-gray-600">
              {t("hero_scan")}
              <div className="flex gap-3 mt-2 text-2xl text-black">
                {[
                  "Apple.png",
                  "PlayStore.png",
                  "Huawei.png",
                  "Rustore.png",
                  "Galaxy.png",
                ].map((icon, i) => (
                  <Image
                    key={i}
                    src={`/assets/HeroImage/${icon}`}
                    alt={`Store ${i}`}
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-[#00282B] flex justify-center items-center relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-[600px]">
          <Image
            src="/assets/HeroImage/globe.png"
            alt="Globe"
            width={900}
            height={900}
            className="object-contain z-0 max-w-full h-auto"
          />

          {/* 202+ Country Box */}
          <div
            className="absolute top-[30%] left-[12%] text-white text-lg px-4 py-2 rounded-lg backdrop-blur-sm z-10"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              width: "173px",
              height: "64px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {t("hero_country")}
          </div>

          {/* eSIM Balance Box */}
          <div
            className="absolute bottom-[25%] right-[10%] text-white text-sm px-4 py-3 rounded-xl backdrop-blur-sm z-10 w-[200px]"
            style={{ background: "rgba(255, 255, 255, 0.1)" }}
          >
            <div className="mb-1 font-normal">{t("hero_esim")}</div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="flex items-center gap-1">
                <BsBroadcast />
                <span>0.00 GB</span>
              </span>
            </div>
            <div className="w-full h-2 bg-[#A5BFC1] rounded-full overflow-hidden">
              <div className="w-0 h-full bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
