import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { signInFormTranslation } from "@MELocalization/signIn/signInTranslationEn";
import { signUpFormTranslation } from "@MELocalization/signUp/signUpTranslationEn";
import { homeScreenTranslation } from "@MELocalization/home/homeScreenTranslationEn";
import { forgottenPasswordFormTranslation } from "@MELocalization/forgottenPassword/forgottenPasswordTranslationEn";

import {
  sidebarMenuLabel,
  sidebar,
} from "@MELocalization//sidebar/sidebarTranslationEn";


import * as localizationEn  from "@MELocalization/languages/en";

const resources = {
  en: {
    translation: {
      ...localizationEn,
      ...sidebar,
      ...sidebarMenuLabel,
      ...signInFormTranslation,
      ...signUpFormTranslation,
      ...homeScreenTranslation,
      ...forgottenPasswordFormTranslation,
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
