import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import {
  aboutUsHeader,
  aboutUsParagraph1,
  aboutUsParagraph2,
  aboutUsParagraph3,
  viewSchoolsButtonLabel,
} from "@MELocalization/languages/en";
import { school } from "@MEPageRoutes";
import { Button } from "@MEShadcnComponents/button";

import _ from "lodash";

const AboutUsComponent = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <>
      <motion.div
        className="w-full lg:w-1/2 md:ml-10 "
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">
          {_.upperFirst(t("aboutUsHeader", aboutUsHeader))}
        </h1>

        <p className="mb-4 text-justify">
          {_.upperFirst(t("aboutUsParagraph1", aboutUsParagraph1))}
        </p>

        <p className="mb-4 text-justify">
          {_.upperFirst(t("aboutUsParagraph2", aboutUsParagraph2))}
        </p>

        <p className="mb-4 text-justify">
          {_.upperFirst(t("aboutUsParagraph3", aboutUsParagraph3))}
        </p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            display: "inline-block",
            transformOrigin: "center",
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <Button onClick={() => navigate(school)}>
            {_.upperCase(t("viewSchoolsButtonLabel", viewSchoolsButtonLabel))}
          </Button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutUsComponent;
