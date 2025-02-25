import { motion } from "framer-motion";
import { variants } from "@MEUtils/enums";
import { useTranslation } from "react-i18next";
import { headerTranslation } from "@MELocalizationEn/header/headerTranslationEn";

import logoGreen from "@MEAssets/img/logo-green.png";
import MEButton from "@MECommonComponents/button/meButton";
import _ from "lodash";

const MEHeader = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex justify-between items-center ">
      <img src={logoGreen} alt="Logo" className="w-20 h-20" />
      <div className="columns-2">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <MEButton
            variant={"ghost"}
            className={`justify-start text-dark`}
            onClick={() => {}}
          >
            {i18n.exists("signUpButtonLabel")
              ? _.upperCase(t("signUpButtonLabel"))
              : _.upperCase(headerTranslation.signUpButtonLabel)}
          </MEButton>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <MEButton buttonVariant={variants.DARK} onClick={() => {}}>
            {i18n.exists("signInButtonLabel")
              ? _.upperCase(t("signInButtonLabel"))
              : _.upperCase(headerTranslation.signInButtonLabel)}
          </MEButton>
        </motion.div>
      </div>
    </div>
  );
};
export default MEHeader;
