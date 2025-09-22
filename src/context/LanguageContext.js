"use client";

import { createContext, useContext, useState } from "react";
import { getCookie, setCookie } from "cookies-next";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const cookieLang = getCookie("lang");
  const [language, setLanguage] = useState(cookieLang || "az");

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setCookie("lang", lang, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
