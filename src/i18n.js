export const initI18next = async (lng, ns) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next) 
    .use(resourcesToBackend((lng, ns) => import(`../public/locales/${lng}/${ns}.json`))) 
    .init({
      lng,                 
      fallbackLng: 'AZ',    
      supportedLngs: languages, 
      ns,                  
      defaultNS: 'common',  
    });
  return i18nInstance;
};
