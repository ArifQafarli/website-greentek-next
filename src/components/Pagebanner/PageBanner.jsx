"use client";

import Image from "next/image";

export default function PageBanner({ title, description, bgImage }) {
  return (
    <section className="relative w-full h-[320px] md:h-[420px]">
      <Image
        src={bgImage}
        alt={description || title || "Page banner"}
        fill
        priority
        className="object-cover"
      />

      <div className="relative z-10 flex items-end justify-start h-full text-left  px-6 pb-8">
        <div className="max-w-2xl">
          {title && <h1 className="text-4xl font-bold">{title}</h1>}
          {description && <p className="mt-2 text-sm">{description}</p>}
        </div>
      </div>
    </section>
  );
}
