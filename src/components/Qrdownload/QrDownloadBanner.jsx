"use client";

import Image from "next/image";
import Container from "../../components/layout/Container";

const BUTTON_SIZE =
  "w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] lg:w-[120px] lg:h-[120px]";
const IMAGE_SIZE = 40;

const storeButtons = [
  { src: "/assets/HeroImage/Playstore.png", alt: "Google Play" },
  { src: "/assets/HeroImage/Apple.png", alt: "Apple Store" },
  { src: "/assets/HeroImage/Huawei.png", alt: "Huawei AppGallery" },
  {
    src: "/assets/HeroImage/Galaxy.png",
    alt: "Galaxy Store",
    className: "bg-[#022c22]",
  },
  { src: "/assets/HeroImage/Rustore.png", alt: "RuStore" },
];

export default function QrDownloadBanner() {
  const handleScroll = () => {
    const section = document.getElementById("qrdownload");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Container className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1400px] flex flex-col items-center p-4 sm:p-6 lg:p-8 rounded-2xl">
        <div
          id="qrdownload"
          className="flex flex-col lg:flex-row w-full bg-white rounded-t-2xl shadow p-6 sm:p-10 lg:p-16 gap-6"
        >
          <div className="flex flex-col flex-1 lg:ml-8">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-normal text-black leading-snug lg:leading-tight">
              QR kodu <span className="font-semibold">skan edin</span> və <br />
              tətbiqi platformalardan <br /> yükləyin!
            </p>
          </div>

          <div className="flex justify-center lg:justify-end items-center flex-1 lg:mr-8">
            <Image
              src="/assets/Qrdownload/qr-download.png"
              alt="QR Code"
              width={160}
              height={160}
              className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
          {storeButtons.map(({ src, alt, className = "" }, i) => (
            <button
              key={i}
              type="button"
              onClick={handleScroll}
              className={`
                ${BUTTON_SIZE} flex items-center justify-center 
                rounded-2xl shadow bg-white 
                transition-transform duration-700 ease-in-out 
                hover:bg-[#033136] hover:-rotate-6 hover:scale-105 
                ${className}
              `}
              aria-label={`${alt} ile indirme seçeneklerine git`}
            >
              <Image
                src={src}
                alt={alt}
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
                className="w-1/3 h-1/3 object-contain"
              />
            </button>
          ))}
        </div>
      </div>
    </Container>
  );
}
