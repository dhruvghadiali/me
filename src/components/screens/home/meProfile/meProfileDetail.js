import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import { variants } from "@MEUtils/enums";
import { routeName } from "@MEUtils/routeName";
import { homeScreenTranslation } from "@MELocalization/home/homeScreenTranslationEn";

import _ from "lodash";

import MEButton from "@MECommonComponents/button/meButton";

const HomeScreenMeProfileDetail = () => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  return (
    <>
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
        <motion.div 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
          style={{ 
            display: 'inline-block',
            transformOrigin: 'center'
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17
          }}
        >
          <MEButton 
            buttonVariant={variants.DARK} 
            onClick={() => navigate(routeName.school)}
            style={{ 
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
          >
            {i18n.exists("viewSchoolsButtonLabel")
              ? _.upperCase(t("viewSchoolsButtonLabel"))
              : _.upperCase(homeScreenTranslation.viewSchoolsButtonLabel)}
          </MEButton>
        </motion.div>
      </motion.div>
    </>
  );
};

export default HomeScreenMeProfileDetail;
