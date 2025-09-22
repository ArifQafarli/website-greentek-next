"use client";
import az from "../lang/az.json";
import en from "../lang/en.json";
import ru from "../lang/ru.json";

const translations = { AZ: az, EN: en, RU: ru };

export function useTranslation(language) {
  const t = (key) => translations[language]?.[key] || key;
  return { t };
}
