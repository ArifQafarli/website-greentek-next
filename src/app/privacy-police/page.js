"use client";

import Container from "@/components/layout/Container";
import PageBanner from "@/components/PageBanner/PageBanner";
import { useRef, useState } from "react";

const sections = [
  { id: "umumi", title: "ÜMUMİ MÜDDƏALAR" },
  { id: "esas1", title: "ƏSAS ANLAYIŞLAR" },
  { id: "xidmetler", title: "SAYT ÜZRƏ GÖSTƏRİLƏN XİDMƏTLƏR" },
  { id: "esas2", title: "ƏSAS ANLAYIŞLAR" },
];

export default function PrivacyPage() {
  const [active, setActive] = useState(sections[0].id);
  const refs = useRef({});


  const jump = (id) => {
    setActive(id);
    refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Container>
      <div className="relative w-full mb-8 md:mb-16 overflow-hidden rounded-tl-[20px] rounded-tr-[20px] mt-5">
        <PageBanner
          bgImage="/assets/Pagebanner/page-banner.png"
          title="Privacy Policy"
          description="GreenPay platformunun məxfilik və istifadə qaydaları"
        />
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:gap-8 lg:gap-12 items-stretch mt-5">
        {/* Sol  */}
        <aside className="w-full md:w-2/5 lg:w-1/3 bg-white rounded-2xl p-5 md:p-6 lg:p-8">
          <div className="relative flex-1 ">

            <div className="pointer-events-none absolute left-6 lg:left-8 top-2 bottom-2 w-[1px] bg-neutral-200 rounded hidden lg:block" />
            <ul className="relative space-y-8 md:space-y-10 lg:space-y-20 ">
              {sections.map((s) => {
                const isActive = active === s.id;
                return (
                  <li key={s.id} className="relative ">
                    <span
                      className={[
                        "hidden lg:block absolute left-8 -translate-x-1/2 mt-1 h-3 w-3 rounded-full border transition-colors",
                        isActive
                          ? "bg-emerald-500 border-emerald-500"
                          : "bg-white border-neutral-300",
                      ].join(" ")}
                    />
                    <button
                      onClick={() => jump(s.id)}
                      className={[
                        "block w-full text-left pl-0 lg:pl-12 text-sm md:text-[15px] lg:text-base uppercase tracking-wide py-2 md:py-0 transition-colors",
                        isActive
                          ? "text-neutral-900 font-medium"
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

        {/* Sağ */}
        <main className="w-full md:flex-1 bg-white rounded-2xl p-5 md:p-6 lg:p-8">
          <div className="space-y-6">
            <section
              id="umumi"
              ref={(el) => (refs.current.umumi = el)}
              className="scroll-mt-24"
            >
              <p className="text-[15px] md:text-[15px] lg:text-base leading-7">
                https://greentekpay.com/ rəsmi internet səhifəsi və “Greentekpay”
                adlı mobil tətbiq (bundan sonra birlikdə və ya ayrı-ayrılıqda –
                “Sayt” adlandırılır) Azərbaycan Respublikası ərazisində təsis
                edilmiş «GREENTEK GROUP» Məhdud Məsuliyyətli Cəmiyyətinə (bundan
                sonra – «GREENTEK GROUP» MMC) məxsusdur və onun tərəfindən idarə
                olunur.
              </p>
            </section>

            <section
              id="esas1"
              ref={(el) => (refs.current.esas1 = el)}
              className="scroll-mt-24"
            >
              <p className="text-[15px] md:text-[15px] lg:text-base leading-7">
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
              <p className="text-[15px] md:text-[15px] lg:text-base leading-7">
                Saytda qeydiyyatdan keçməklə və bu “Şərtlər və Qaydalar” adlı
                sənədi təsdiq etməklə sənəddə nəzərdə tutulan bütün şərtlər və
                qaydalarla razı olduğunuzu bəyan edirsiniz.
              </p>
              <p className="text-[15px] md:text-[15px] lg:text-base leading-7">
                Sayt vasitəsilə «GREENTEK GROUP» MMC tərəfindən ödənış xidmətləri
                göstərildiyi halda “Şərtlər və Qaydalar” eyni zamanda
                «GREENTEK GROUP» MMC və istifadəçi arasında bağlanmış müqavilə
                hesab edilir.
              </p>
              <p className="text-[15px] md:text-[15px] lg:text-base leading-7">
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
              <p className="text-[15px] md:text-[15px] lg:text-base leading-7">
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
