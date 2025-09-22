// "use client";

// import Image from "next/image";
// import Container from "../layout/Container";

// const options = [
//   {
//     icon: "/assets/TransactionOptionsImage/globe-01.svg",
//     title: "Qlobal köçürmə",
//     description: "Sürətli və təhlükəsiz beynəlxalq köçürmələr.",
//     special: true,
//   },
//   {
//     icon: "/assets/TransactionOptionsImage/primary.svg",
//     title: "QR kod ilə köçürmə",
//     description: "QR kodu skan edərək ani ödəniş.",
//   },
//   {
//     icon: "/assets/TransactionOptionsImage/credit-card.svg",
//     title: "Karta köçürmə",
//     description: "Istənilən karta dərhal köçürmə",
//   },
//   {
//     icon: "/assets/TransactionOptionsImage/logo.svg",
//     title: "Istifadəçilərinə köçürmə",
//     description: "Komissiyasız və rahat pul göndərin",
//   },
// ];

// export default function TransferOptions() {
//   return (
//     <section className="bg-[#F8F8F8] py-8 sm:py-12 lg:py-20">
//       <Container>
//         <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12">
//           <p className="font-poppins font-normal text-2xl sm:text-3xl md:text-[32px] text-[#0C0D10] mb-4 sm:mb-6">
//             Greenpay ilə pul köçürməyin
//           </p>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-poppins text-[#0C0D10]">
//             4 fərqli və <span className="italic font-semibold">rahat</span> yolu
//             var!
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 sm:mt-10">
//             {options.map((item, idx) => (
//               <div
//                 key={idx}
//                 className={`rounded-2xl transition duration-300 cursor-pointer overflow-hidden h-[450px] flex flex-col justify-between
//                   ${
//                     item.special
//                 ? "bg-[#f8f8f8] hover:bg-[#37D392] text-[#0F5156] px-6"
//                       : "bg-[#F8F8F8] hover:shadow-lg hover:-translate-y-1 px-6 pt-6 pb-8"
//                   }`}
//               >
//                 {item.special ? (
//                   <>
//                     <div className="pt-6">
//                       <Image
//                         src={item.icon}
//                         alt={item.title}
//                         width={40}
//                         height={40}
//                         className="mb-4"
//                       />
//                       <h3 className="text-xl font-semibold mb-2 font-poppins">
//                         {item.title}
//                       </h3>
//                       <p className="font-poppins text-sm">{item.description}</p>
//                     </div>
//                     <Image
//                       src="/assets/TransactionOptionsImage/Global_Kocurme.png"
//                       alt="Mobil görünüş"
//                       width={400}
//                       height={280}
//                       className="w-full h-auto object-contain max-h-[280px] mt-4"
//                     />
//                   </>
//                 ) : (
//                   <>
//                     <div>
//                       <Image
//                         src={item.icon}
//                         alt={item.title}
//                         width={40}
//                         height={40}
//                       />
//                     </div>
//                     <div>
//                       <h3 className="font-poppins font-medium text-lg sm:text-xl mb-2 text-[#0C0D10]">
//                         {item.title}
//                       </h3>
//                       <p className="text-sm sm:text-base font-normal font-poppins text-[#0C0D10]">
//                         {item.description}
//                       </p>
//                     </div>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Container from "../layout/Container";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/lib/useTranslation";

export default function TransferOptions() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const options = [
    {
      icon: "/assets/TransactionOptionsImage/globe-01.svg",
      title: t("option_global_title"),
      description: t("option_global_desc"),
      special: true,
    },
    {
      icon: "/assets/TransactionOptionsImage/primary.svg",
      title: t("option_qr_title"),
      description: t("option_qr_desc"),
    },
    {
      icon: "/assets/TransactionOptionsImage/credit-card.svg",
      title: t("option_card_title"),
      description: t("option_card_desc"),
    },
    {
      icon: "/assets/TransactionOptionsImage/logo.svg",
      title: t("option_user_title"),
      description: t("option_user_desc"),
    },
  ];

  return (
    <section className="bg-[#F8F8F8] py-8 sm:py-12 lg:py-20">
      <Container>
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12">
          <p className="font-poppins font-normal text-2xl sm:text-3xl md:text-[32px] text-[#0C0D10] mb-4 sm:mb-6">
            {t("transfer_title")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-poppins text-[#0C0D10]">
            {t("transfer_subtitle")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 sm:mt-10">
            {options.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl transition duration-300 cursor-pointer overflow-hidden h-[450px] flex flex-col justify-between
                  ${
                    item.special
                      ? "bg-[#f8f8f8] hover:bg-[#37D392] text-[#0F5156] px-6"
                      : "bg-[#F8F8F8] hover:shadow-lg hover:-translate-y-1 px-6 pt-6 pb-8"
                  }`}
              >
                {item.special ? (
                  <>
                    <div className="pt-6">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="mb-4"
                      />
                      <h3 className="text-xl font-semibold mb-2 font-poppins">
                        {item.title}
                      </h3>
                      <p className="font-poppins text-sm">{item.description}</p>
                    </div>
                    <Image
                      src="/assets/TransactionOptionsImage/Global_Kocurme.png"
                      alt="Mobil görünüş"
                      width={400}
                      height={280}
                      className="w-full h-auto object-contain max-h-[280px] mt-4"
                    />
                  </>
                ) : (
                  <>
                    <div>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <h3 className="font-poppins font-medium text-lg sm:text-xl mb-2 text-[#0C0D10]">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base font-normal font-poppins text-[#0C0D10]">
                        {item.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
