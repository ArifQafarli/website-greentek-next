export const initI18next = async (lng, ns) => {
  const i18nInstance = createInstance(); // yeni i18next obyekti yaradılır
  await i18nInstance
    .use(initReactI18next) // react ilə işləmək üçün plugin qoşulur
    .use(resourcesToBackend((lng, ns) => import(`../public/locales/${lng}/${ns}.json`))) 
    .init({
      lng,                  // aktiv dil (məsələn "az" və ya "en")
      fallbackLng: 'AZ',    // tərcümə tapılmasa default olaraq az istifadə ediləcək
      supportedLngs: languages, // icazə verilən dillər (config-dən gəlir)
      ns,                   // namespace (məsələn "common")
      defaultNS: 'common',  // default namespace
    });
  return i18nInstance;
};
