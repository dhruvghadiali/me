import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { variants } from "@MEUtils/enums";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { resetSignInFormState } from "@MERedux/signIn/signInSlice";
import { resetSignUpFormState } from "@MERedux/signUp/signUpSlice";
import { headerTranslation } from "@MELocalizationEn/header/headerTranslationEn";

import _ from "lodash";

import logoGreen from "@MEAssets/img/logo-green.png";
import MEButton from "@MECommonComponents/button/meButton";
import MESignInAlert from "@MECommonComponents/header/meSignInAlert";
import MESignUpAlert from "@MECommonComponents/header/meSignUpAlert";

const MEHeader = () => {
  const { t, i18n } = useTranslation();
  const { isValidUser } = useSelector((state) => state.signIn);

  const dispatch = useDispatch();

  const [isOpenSignInForm, setIsOpenSignInForm] = useState(false);
  const [isOpenSignUpForm, setIsOpenSignUpForm] = useState(false);

  useEffect(() => {
    if (isValidUser) {
      setIsOpenSignInForm(false);
    }
  }, [isValidUser]);

  const onSignInClick = () => {
    setIsOpenSignInForm(true);
    dispatch(resetSignInFormState());
  };

  const onSignUpClick = () => {
    setIsOpenSignUpForm(true);
    dispatch(resetSignUpFormState());
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
