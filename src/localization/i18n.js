import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { headerTranslation } from "@MELocalizationEn/header/headerTranslationEn";
import { signinFormTranslation } from "@MELocalizationEn/signin/signinTranslationEn";
import { homeScreenTranslation } from "@MELocalizationEn/home/homeScreenTranslationEn";

const resources = {
  en: {
    translation: {
      ...headerTranslation,
      ...signinFormTranslation,
      ...homeScreenTranslation,
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
