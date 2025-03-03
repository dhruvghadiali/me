import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { homeScreenTranslation } from "@MELocalizationEn/home/homeScreenTranslationEn";

import _ from "lodash";

const HomeScreenMeProfileDetail = () => {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      className="w-full lg:w-1/2 md:ml-10 "
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4 text-center md:text-left">
        {i18n.exists("profileDetailHeader")
          ? _.upperFirst(t("profileDetailHeader"))
          : _.upperFirst(homeScreenTranslation.profileDetailHeader)}
      </h1>

      <p className=" text-dark mb-4 text-justify">
        {i18n.exists("profileDetailParagraph1")
          ? _.upperFirst(t("profileDetailParagraph1"))
          : _.upperFirst(homeScreenTranslation.profileDetailParagraph1)}
      </p>

      <p className=" text-dark mb-4 text-justify">
        {i18n.exists("profileDetailParagraph2")
          ? _.upperFirst(t("profileDetailParagraph2"))
          : _.upperFirst(homeScreenTranslation.profileDetailParagraph2)}
      </p>

      <p className=" text-dark mb-4 text-justify">
        {i18n.exists("profileDetailParagraph3")
          ? _.upperFirst(t("profileDetailParagraph3"))
          : _.upperFirst(homeScreenTranslation.profileDetailParagraph3)}
      </p>
      <motion.button
        className="px-3 py-2 mb-10 text-sm font-medium bg-dark text-secondary rounded-lg shadow-md shadow-dark transition-transform transform hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {i18n.exists("viewSchoolsButtonLabel")
          ? _.upperCase(t("viewSchoolsButtonLabel"))
          : _.upperCase(homeScreenTranslation.viewSchoolsButtonLabel)}
      </motion.button>
    </motion.div>
  );
};

export default HomeScreenMeProfileDetail;
