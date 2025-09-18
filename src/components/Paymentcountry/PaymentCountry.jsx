

import Image from "next/image";

const countryGroups = [
  {
    position: "absolute top-[38%] left-2 w-[500px]",
    countries: [
      { flag: "🇧🇸", name: "Bahamas" },
      { flag: "🇦🇷", name: "Argentina" },
      { flag: "🇧🇷", name: "Brazil" },
      { flag: "🏳️", name: "Country" },
    ],
  },
  {
    position: "absolute top-[46%] left-[20%] w-[600px]",
    countries: [
      { flag: "🇧🇷", name: "Brazil" },
      { flag: "🇦🇿", name: "Azerbaijan" },
      { flag: "🇦🇿", name: "Azerbaijan" },
      { flag: "🇭🇺", name: "Hungary" },
    ],
  },
];

function CountryBadge({ flag, name }) {
  return (
    <div className="flex items-center gap-3 bg-[#B9CACC33] px-4 py-2 rounded-full shadow-md text-base">
      <span className="text-xl">{flag}</span>
      <span>{name}</span>
    </div>
  );
}

export default function PaymentCountry() {
  return (
    <section className="relative flex flex-col md:flex-row items-start justify-start w-full py-20">
      {/* Solda globe */}
      <div className="relative flex-1 flex justify-start items-center">
        <Image
          src="/assets/Paymentcountry/ellipses.png"
          alt="Ellipses"
          width={800}
          height={800}
          className="absolute scale-[1.01] translate-x-2 z-20 pointer-events-none select-none"
        />

        <Image
          src="/assets/Paymentcountry/payment-bg.png"
          alt="Globe"
          width={780}
          height={780}
          className="opacity-90 relative z-10 select-none"
        />

        <Image
          src="/assets/Paymentcountry/greenline.svg"
          alt="Green line"
          width={800}
          height={800}
          className="absolute z-30 translate-x-13 translate-y-[130px] scale-[1.125] pointer-events-none select-none"
        />

        {countryGroups.map((group, idx) => (
          <div
            key={idx}
            className={`${group.position} flex justify-between gap-x-6 z-30`}
          >
            {group.countries.map((c, i) => (
              <CountryBadge key={i} {...c} />
            ))}
          </div>
        ))}
      </div>

      {/* Sağda yazı */}
      <div className="flex-1 mt-10 md:mt-0 ml-auto md:self-center md:translate-x-16 lg:translate-x-24 xl:translate-x-42">
        <h2 className="font-poppins font-normal text-[50px] leading-[1.43]  tracking-wider text-gray-900 max-w-[520px]">
          Connectivity to local payment rails and currencies across{" "}
          <span className="text-[#04EA8B] font-semibold block whitespace-nowrap tracking-wide">
            180+ countries
          </span>
        </h2>
      </div>
    </section>
  );
}
