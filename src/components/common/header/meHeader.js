import { useState } from "react";
import { motion } from "framer-motion";
import { variants } from "@MEUtils/enums";
import { useTranslation } from "react-i18next";
import { headerTranslation } from "@MELocalizationEn/header/headerTranslationEn";

import logoGreen from "@MEAssets/img/logo-green.png";
import MEButton from "@MECommonComponents/button/meButton";
import MESignInAlert from "@MECommonComponents/header/meSignInAlert";
import MESignUpAlert from "@MECommonComponents/header/meSignUpAlert";
import _ from "lodash";

const MEHeader = () => {
  const { t, i18n } = useTranslation();

  const [isOpenSignInForm, setIsOpenSignInForm] = useState(false);
  const [isOpenSignUpForm, setIsOpenSignUpForm] = useState(false);

  return (
    <div className="flex justify-between items-center ">
      <img src={logoGreen} alt="Logo" className="w-20 h-20" />
      <div className="columns-2">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <MEButton
            variant={"ghost"}
            className={`justify-start text-dark`}
            onClick={() => setIsOpenSignUpForm(true)}
          >
            {i18n.exists("signUpButtonLabel")
              ? _.upperCase(t("signUpButtonLabel"))
              : _.upperCase(headerTranslation.signUpButtonLabel)}
          </MEButton>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <MEButton
            buttonVariant={variants.DARK}
            onClick={() => setIsOpenSignInForm(true)}
          >
            {i18n.exists("signInButtonLabel")
              ? _.upperCase(t("signInButtonLabel"))
              : _.upperCase(headerTranslation.signInButtonLabel)}
          </MEButton>
        </motion.div>

        {isOpenSignInForm && (
          <MESignInAlert
            isOpenSignInForm={isOpenSignInForm}
            onCloseAlert={() => setIsOpenSignInForm(false)}
          />
        )}

        {isOpenSignUpForm && (
          <MESignUpAlert
            isOpenSignUpForm={isOpenSignUpForm}
            onCloseAlert={() => setIsOpenSignUpForm(false)}
          />
        )}
      </div>
    </div>
  );
};
export default MEHeader;
