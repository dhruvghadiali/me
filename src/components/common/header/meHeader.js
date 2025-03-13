import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import { variants } from "@MEUtils/enums";
import { routeName } from "@MEUtils/routeName";
import { resetSignInFormState } from "@MERedux/signIn/signInSlice";
import { resetSignUpFormState } from "@MERedux/signUp/signUpSlice";
import { headerTranslation } from "@MELocalizationEn/header/headerTranslationEn";

import _ from "lodash";

import logoGreen from "@MEAssets/img/logo-green.png";
import MEButton from "@MECommonComponents/button/meButton";

const MEHeader = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignInClick = () => {
    dispatch(resetSignInFormState());
    navigate(routeName.signIn);
  };

  const onSignUpClick = () => {
    dispatch(resetSignUpFormState());
    navigate(routeName.signUp);
  };

  return (
    <div className="flex justify-between items-center ">
      <img src={logoGreen} alt="Logo" className="w-20 h-20" />
      <div className="columns-2">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <MEButton
            variant={"ghost"}
            className={`justify-start text-dark`}
            onClick={() => onSignUpClick()}
          >
            {i18n.exists("signUpButtonLabel")
              ? _.upperCase(t("signUpButtonLabel"))
              : _.upperCase(headerTranslation.signUpButtonLabel)}
          </MEButton>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <MEButton
            buttonVariant={variants.DARK}
            onClick={() => onSignInClick()}
          >
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
