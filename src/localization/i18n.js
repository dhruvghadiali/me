import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { homeScreenTranslation } from "@MELocalizationEn/home/homeScreenTranslationEn";
import { headerTranslation } from "@MELocalizationEn/header/headerTranslationEn";

const resources = {
  en: {
    translation: {
      ...homeScreenTranslation,
      ...headerTranslation,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
