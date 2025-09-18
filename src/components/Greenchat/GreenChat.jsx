"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../../components/layout/Container";

export default function HeroGreenChat({
  title = "GreenChat — sürətli mesajlaşma, hər şey bir tətbiqdə!",
  description = "GreenChat ilə yazışmalar asan, fayl göndərişi təhlükəsiz, bildirişlər isə əlçatandır. Sadə interfeys sayəsində vaxt itirmədən bütün söhbət və fayllarınızı bir məkanda idarə edin.",
  ctaLabel = "Start to chat",
  ctaHref = "#qrdownload",
  illustrationSrc = "/assets/Greenchat/chat.png",
}) {
  const handleCtaClick = (e) => {
    // Smooth scroll if href is a hash target
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
          <div className="flex-1 flex flex-col">
            <div className="w-full rounded-2xl border border-black/5 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
              <h1 className="text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-black">
                {title}
              </h1>

              <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl">
                {description}
              </p>
            </div>

            <div className="mt-10 lg:mt-12">
              <Link
                href={ctaHref}
                onClick={handleCtaClick}
                aria-label={ctaLabel}
                className="group relative inline-flex w-full items-center rounded-full bg-[#0D4B4B] text-white text-xl font-medium pl-8 pr-24 py-5 sm:py-6 shadow-sm transition-colors duration-300 hover:bg-[#0a3838] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0D4B4B]/30"
              >
                {ctaLabel}
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

          <div className="flex-1">
            <div className="relative h-full w-full overflow-hidden rounded-3xl">
              <Image
                src={illustrationSrc}
                alt="GreenChat illüstrasiyası"
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
