"use client";

import Image from "next/image";
import Container from "../layout/Container";

const iconColumns = [
  ["/assets/Globalservices/s-1.png", "/assets/Globalservices/s-2.png"],
  [
    "/assets/Globalservices/s-2.png",
    "/assets/Globalservices/s-1.png",
    "/assets/Globalservices/s-3.png",
  ],
  [
    "/assets/Globalservices/s-3.png",
    "/assets/Globalservices/s-2.png",
    "/assets/Globalservices/s-1.png",
  ],
];

const columnStyles = {
  first: "-mt-6 md:-mt-12 justify-around py-4",
  second:
    "justify-start space-y-16 md:space-y-24 lg:space-y-28 -translate-y-3 md:-translate-y-6",
  third:
    "justify-end space-y-16 md:space-y-24 lg:space-y-28 translate-y-3 md:translate-y-6",
};

function IconColumn({ icons, position }) {
  return (
    <div className="relative flex flex-1 justify-center">
      <span className="absolute inset-y-0 w-px bg-white/40" />

      <div
        className={`absolute top-0 left-1/2 flex h-full -translate-x-1/2 flex-col ${columnStyles[position]}`}
      >
        {icons.map((src, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-xl bg-white p-2 md:p-3 shadow-sm transition-transform hover:scale-105"
          >
            <Image
              src={src}
              alt="service icon"
              width={64}
              height={64}
              className="w-10 h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GlobalServices() {
  return (
    <section className="w-full bg-[#F7F8FC] py-8 md:py-14 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 md:gap-10 items-stretch h-auto md:h-[523px]">
          <div className="flex flex-col justify-center rounded-3xl bg-white p-6 md:p-10 lg:p-12 shadow-sm">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-snug text-gray-900">
              186+ qlobal xidmətə
            </h2>

            <p className="mt-3 text-xl md:text-3xl lg:text-[42px] font-medium leading-snug text-gray-900">
              rahatlıqla ödənişlər <br className="hidden md:block" /> edə
              bilərsiniz
            </p>

            <p className="mt-4 md:mt-5 text-sm md:text-base lg:text-lg leading-relaxed text-gray-600">
              İstənilən ödənişi bir toxunuşla həyata keçirin. Oyun
              platformalarına, sosial şəbəkələrə və digər onlayn xidmətlərə
              ödənişləri saniyələr içində tamamlayın.
            </p>
          </div>
          <div className="relative flex justify-between rounded-3xl bg-[url('/assets/Globalservices/transfer-bg.png')] bg-cover bg-center px-4 md:px-8 lg:px-12 overflow-hidden min-h-[300px] md:min-h-[400px] lg:min-h-0">
            {iconColumns.map((icons, idx) => (
              <IconColumn
                key={idx}
                icons={icons}
                position={["first", "second", "third"][idx]}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
