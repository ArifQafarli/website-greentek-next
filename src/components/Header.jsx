"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "../components/layout/Container";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const languages = ["AZ", "RU"];

  const desktopLangRef = useRef(null);
  const mobileLangRef = useRef(null);

  const pathname = usePathname();

  const pageTexts = {
    "/about": {
      title: "Güvənli və rahat ödəniş həlləriniz!",
      description:
        "Pul köçürmələri üçün sadə, sürətli və əlçatan həllər təqdim edirik. Təcrübəli komandamız qabaqcıl texnologiyalarla əməliyyatlarınızın təhlükəsizliyini təmin edir.",
    },
    "/services": {
      title: "Xidmətlər",
      description:
        "Müştərilərimiz üçün təqdim etdiyimiz ödəniş həllərini kəşf edin.",
    },
    "/vacancies": {
      title: "Vakansiyalar",
      description: "Komandamıza qoşulmaq üçün açıq iş elanlarımızı gör.",
    },
    "/ecosystem": {
      title: "Ekosistem",
      description:
        "GreenPay ekosistemində iştirak edən tərəfdaş və platformaları tanıyın.",
    },
  };

  const bannerPages = Object.keys(pageTexts);
  const isBannerPage = bannerPages.some((p) => pathname.startsWith(p));

  const currentText = bannerPages.find((p) => pathname.startsWith(p));
  const pageData = currentText ? pageTexts[currentText] : null;

  const handleLangChange = (lang) => {
    setLanguage(lang);
    setLangOpen(false);
  };

  useEffect(() => {
    const onClickOutside = (e) => {
      const inDesktop = desktopLangRef.current?.contains(e.target);
      const inMobile = mobileLangRef.current?.contains(e.target);
      if (!inDesktop && !inMobile) setLangOpen(false);
    };
    document.addEventListener("pointerdown", onClickOutside);
    return () => document.removeEventListener("pointerdown", onClickOutside);
  }, []);

  return (
    <>
      <header
        className={`w-full py-4 z-20 transition-colors
          ${
            isBannerPage
              ? "absolute top-0 left-0 bg-transparent"
              : "relative bg-[#f7f7f7]"
          }
        `}
      >
        <Container>
          <div
            className={`py-4 px-6 flex justify-between items-center relative
              ${
                isBannerPage
                  ? "bg-transparent shadow-none rounded-none"
                  : "bg-white rounded-[20px] shadow"
              }
            `}
          >
            <div className="flex items-center space-x-12">
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/logogreenpay.svg"
                  alt="GreenPay Logo"
                  width={32}
                  height={32}
                  priority
                />
              </Link>

              <nav
                className={`hidden lg:flex items-center space-x-8 font-medium
                  ${isBannerPage ? "" : "text-[#0f5156]"}
                `}
              >
                <Link href="/about">Haqqında</Link>
                <Link href="/services">Xidmətlər</Link>
                <Link href="/vacancies">Vakansiyalar</Link>
                <Link href="/ecosystem">Ekosistem</Link>
              </nav>
            </div>

            <div className="hidden lg:flex items-center space-x-4 relative">
              <div className="relative" ref={desktopLangRef}>
                <button
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={langOpen}
                  onClick={() => setLangOpen((v) => !v)}
                  className={`flex items-center space-x-1 cursor-pointer select-none
                    ${isBannerPage ? "" : "text-gray-800"}
                  `}
                >
                  <span>{language}</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      langOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {langOpen && (
                  <ul
                    role="listbox"
                    className="absolute right-0 mt-2 w-16 bg-white border border-gray-200 rounded-lg shadow-md z-50 text-center"
                  >
                    {languages.map((lang) => (
                      <li
                        role="option"
                        aria-selected={lang === language}
                        key={lang}
                        className={`px-4 py-2 cursor-pointer text-sm text-gray-800 ${
                          lang === language
                            ? "font-semibold bg-gray-50"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => handleLangChange(lang)}
                      >
                        {lang}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Mobil Hamburger */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className={`${
                  isBannerPage ? "" : "text-[#0f5156]"
                } focus:outline-none`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobil Menü */}
            <div
              id="mobile-menu"
              className={`absolute top-full mt-6 left-0 w-full bg-white rounded-xl shadow-lg px-6 py-4 z-50 transition-all duration-300 ease-in-out transform origin-top ${
                menuOpen
                  ? "scale-y-100 opacity-100"
                  : "scale-y-0 opacity-0 pointer-events-none"
              }`}
            >
              <div className="flex flex-col space-y-4 font-medium">
                <Link href="/about" onClick={() => setMenuOpen(false)}>
                  Haqqında
                </Link>
                <Link href="/services" onClick={() => setMenuOpen(false)}>
                  Xidmətlər
                </Link>
                <Link href="/vacancies" onClick={() => setMenuOpen(false)}>
                  Vakansiyalar
                </Link>
                <Link href="/ecosystem" onClick={() => setMenuOpen(false)}>
                  Ekosistem
                </Link>

                <hr className="my-2" />

                {/* Mobil Language */}
                <div className="flex justify-between items-center">
                  <div className="relative" ref={mobileLangRef}>
                    <button
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded={langOpen}
                      onClick={() => setLangOpen((v) => !v)}
                      className="flex items-center space-x-1 cursor-pointer select-none"
                    >
                      <span>{language}</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          langOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {langOpen && (
                      <ul
                        role="listbox"
                        className="absolute mt-2 w-16 bg-white border border-gray-200 rounded-lg shadow-md z-50 text-center"
                      >
                        {languages.map((lang) => (
                          <li
                            role="option"
                            aria-selected={lang === language}
                            key={lang}
                            className={`px-4 py-2 cursor-pointer text-sm text-gray-800 ${
                              lang === language
                                ? "font-semibold bg-gray-50"
                                : "hover:bg-gray-100"
                            }`}
                            onClick={() => handleLangChange(lang)}
                          >
                            {lang}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        {isBannerPage && (
          <section className="relative w-full h-[320px]">
            <Image />
            <div className="absolute inset-0" />
            <div className="relative z-10 flex items-end justify-start h-full px-12 pb-4 text-left ">
              {pageData && (
                <div className="max-w-2xl">
                  <h2 className="text-4xl font-semibold">{pageData.title}</h2>
                  <p className="mt-2 text-sm">{pageData.description}</p>
                </div>
              )}
            </div>
          </section>
        )}
      </header>
    </>
  );
};

export default Header;
