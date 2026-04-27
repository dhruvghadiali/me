import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import {
  signInButtonLabel,
  signUpButtonLabel,
} from "@MELocalization/languages/en";
import { signIn, signUp } from "@MEPageRoutes";
import { Button } from "@MEShadcnComponents/button";
import { resetSignInFormState } from "@MERedux/signIn/signInSlice";
import { resetSignUpFormState } from "@MERedux/signUp/signUpSlice";

import _ from "lodash";

import logo from "@MEAssets/img/logo.png";

const MEHeader = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignInClick = () => {
    dispatch(resetSignInFormState());
    navigate(signIn);
  };

  const onSignUpClick = () => {
    dispatch(resetSignUpFormState());
    navigate(signUp);
  };

  return (
    <div className="flex justify-between items-center px-4">
      <img src={logo} alt="Logo" className="w-10 h-10 mx-2 my-2" />
      <div className="columns-2">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button variant="ghost" onClick={() => onSignUpClick()}>
            {_.upperCase(t("signUpButtonLabel", signUpButtonLabel))}
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button onClick={() => onSignInClick()}>
            {_.upperCase(t("signInButtonLabel", signInButtonLabel))}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
export default MEHeader;
