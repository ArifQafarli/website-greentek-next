"use client";

import Container from "@/components/layout/Container";
import PageBanner from "@/components/Pagebanner/PageBanner";
import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "umumi", title: "ÜMUMİ MÜDDƏALAR" },
  { id: "esas1", title: "ƏSAS ANLAYIŞLAR" },
  { id: "xidmetler", title: "SAYT ÜZRƏ GÖSTƏRİLƏN XİDMƏTLƏR" },
  { id: "esas2", title: "ƏSAS ANLAYIŞLAR" },
];

export default function PrivacyPage() {
  const [active, setActive] = useState(sections[0].id);
  const refs = useRef({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    Object.values(refs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const jump = (id) =>
    refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Container>
      {/* Üst banner */}
      <div className="relative w-full mb-16 overflow-hidden rounded-tl-[20px] rounded-tr-[20px] mt-5">
        <PageBanner
          bgImage="/assets/Pagebanner/page-banner.png"
          title="Privacy Policy"
          description="GreenPay platformunun məxfilik və istifadə qaydaları"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-stretch mt-5">
        {/* Sol menü */}
        <aside className="w-full md:w-1/3 bg-white rounded-2xl ml-3 p-5 flex flex-col justify-between">
          <div className="relative flex-1">
            {/* Timeline çizgisi: en üstten en alta uzatıldı */}
            <div className="pointer-events-none absolute left-8 top-2 bottom-2 w-[2px] bg-neutral-200 rounded" />
            <ul className="relative space-y-20">
              {sections.map((s) => {
                const isActive = active === s.id;
                return (
                  <li key={s.id} className="relative">
                    <span
                      className={[
                        "absolute left-8 -translate-x-1/2 mt-1 h-3 w-3 rounded-full border",
                        isActive
                          ? "bg-emerald-500 border-emerald-500"
                          : "bg-white border-neutral-300",
                      ].join(" ")}
                    />
                    <button
                      onClick={() => jump(s.id)}
                      className={[
                        "pl-12 text-sm uppercase tracking-wide text-left",
                        isActive
                          ? "text-neutral-900"
                          : "text-neutral-500 hover:text-neutral-700",
                      ].join(" ")}
                    >
                      {s.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Sağ içerik */}
        <main className="w-full md:flex-1 bg-white rounded-2xl p-8 flex flex-col justify-between">
          <div className="space-y-6 flex-1">
            <section
              id="umumi"
              ref={(el) => (refs.current.umumi = el)}
              className="scroll-mt-24"
            >
              <p className="text-[15px] leading-7">
                https://greentekpay.com/ rəsmi internet səhifəsi və
                “Greentekpay” adlı mobil tətbiq (bundan sonra birlikdə və ya
                ayrı-ayrılıqda – “Sayt” adlandırılır) Azərbaycan Respublikası
                ərazisində təsis edilmiş «GREENTEK GROUP» Məhdud Məsuliyyətli
                Cəmiyyətinə (bundan sonra – «GREENTEK GROUP» MMC) məxsusdur və
                onun tərəfindən idarə olunur.
              </p>
            </section>

            <section
              id="esas1"
              ref={(el) => (refs.current.esas1 = el)}
              className="scroll-mt-24"
            >
              <p className="text-[15px] leading-7">
                On səkkiz yaşına çatmamış şəxslər Saytda qeydiyyatdan keçə
                bilməzlər, habelə onlar tərəfindən Saytdan hər hansı
                sui-istifadə edilməsi nəticələrinə görə Azərbaycan Respublikası
                qanunvericiliyinə uyğun olaraq özləri və qanuni nümayəndələri
                tam məsuliyyət daşıyır.
              </p>
            </section>

            <section
              id="xidmetler"
              ref={(el) => (refs.current.xidmetler = el)}
              className="scroll-mt-24 space-y-4"
            >
              <p>
                Saytda qeydiyyatdan keçməklə və bu “Şərtlər və Qaydalar” adlı
                sənədi təsdiq etməklə sənəddə nəzərdə tutulan bütün şərtlər və
                qaydalarla razı olduğunuzu bəyan edirsiniz. Təsdiq etməzdən öncə
                “Şərtlər və Qaydalar” diqqətlə oxunmalıdır.
              </p>
              <p>
                Sayt vasitəsilə «GREENTEK GROUP» MMC tərəfindən ödənış
                xidmətləri göstərildiyi halda “Şərtlər və Qaydalar” eyni zamanda
                «GREENTEK GROUP» MMC və istifadəçi arasında bağlanmış müqavilə
                hesab edilir.
              </p>
              <p>
                Sayt vasitəsilə hər hansı üçüncü tərəfin təqdim etdiyi məhsullar
                və ya xidmətlərlə bağlı «GREENTEK GROUP» MMC heç bir zəmanət və
                ya təsdiqləmə etmir və heç bir məsuliyyət daşımır.
              </p>
            </section>

            <section
              id="esas2"
              ref={(el) => (refs.current.esas2 = el)}
              className="scroll-mt-24"
            >
              <p className="text-[15px] leading-7">
                On səkkiz yaşına çatmamış şəxslər Saytda qeydiyyatdan keçə
                bilməzlər, habelə onlar tərəfindən Saytdan hər hansı
                sui-istifadə edilməsi nəticələrinə görə Azərbaycan Respublikası
                qanunvericiliyinə uyğun olaraq özləri və qanuni nümayəndələri
                tam məsuliyyət daşıyır.
              </p>
            </section>
          </div>
        </main>
      </div>
    </Container>
  );
}
