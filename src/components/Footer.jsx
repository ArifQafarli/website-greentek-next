import Link from "next/link";
import Container from "../components/layout/Container";

const company = {
  tin: "1300550231",
  addressLines: [
    "AZ1010, Baku city Nasimi district,",
    "Nizami, house 104, m. 30",
  ],
  licenses: [
    { label: "Şəxsi məlumatların saxlanması lisenziyası: 391", date: "22.12.2023" },
    { label: "AR MB Elektron pul təşkilatı lisenziyası : EPT - 013", date: "18.09.2024" },
  ],
};

const menu = {
  about: [
    { href: "#about", label: "Haqqımızda" },
    { href: "#services", label: "Xidmətlər" },
    { href: "#vacancies", label: "Vakansiyalar" },
    { href: "#ecosystem", label: "Ekosistem" },
  ],
  policies: [
    { href: "/privacy-police", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of use" },
    { href: "/refund", label: "Refund Policy" },
    { href: "/prohibited", label: "Prohibited goods and services" },
    { href: "/complaints", label: "Customer complaints and dispute resolution policy" },
  ],
  staticNotes: [
    "Policy of combatting the legitimization of criminally obtained property and terrorism financing",
  ],
};

const linkBase =
  "transition hover:underline underline-offset-4 decoration-1";

const Section = ({ title, children }) => (
  <section aria-labelledby={title.replace(/\s+/g, "-").toLowerCase()}>
    <h3 id={title.replace(/\s+/g, "-").toLowerCase()} className="sr-only">
      {title}
    </h3>
    {children}
  </section>
);

const Footer = () => {
  return (
    <footer role="contentinfo" className="w-full font-poppins text-white py-10">
      <Container className="bg-[#00292b] rounded-3xl px-6 sm:px-10 lg:px-20 py-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          {/* Column 1: Company / Address */}
          <Section title="Company Information">
            <div className="flex flex-col gap-y-2">
              <p className="uppercase text-sm text-gray-400">TIN</p>
              <p>{company.tin}</p>

              <p className="mt-2 uppercase text-sm text-gray-400">Address</p>
              <address className="not-italic leading-relaxed">
                {company.addressLines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>
            </div>
          </Section>

          {/* Column 2: About Menu */}
          <Section title="About Menu">
            <nav aria-label="Site sections">
              <ul className="flex flex-col gap-y-2">
                {menu.about.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkBase}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Section>

          {/* Column 3: Policies */}
          <Section title="Policies">
            <nav aria-label="Policies">
              <ul className="flex flex-col gap-y-2 leading-relaxed">
                {menu.policies.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkBase}>
                      {item.label}
                    </Link>
                  </li>
                ))}
                {menu.staticNotes.map((text) => (
                  <li key={text}>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            </nav>
          </Section>

          {/* Column 4: Licenses */}
          <Section title="Licenses">
            <ul className="flex flex-col gap-y-2">
              {company.licenses.map(({ label, date }) => (
                <li key={label} className="flex flex-col">
                  <p>{label}</p>
                  <p className="text-gray-300">Tarix: {date}</p>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
