import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { CircleAlertIcon, AlertCircle } from "lucide-react";

import { variants } from "@MEUtils/enums";
import { sendOtp } from "@MERedux/signIn/signInAction";
import { signInSendOTPAPIPayload } from "@MEUtils/apiPayload";
import { signInFormTranslation } from "@MELocalizationEn/signIn/signInTranslationEn";

import MEButton from "@MECommonComponents/button/meButton";
import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";

import _ from "lodash";

const SignInAccountNotVerified = () => {
  const { user, loader, error } = useSelector((state) => state.signIn);
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  return (
    <>
      {error && (
        <div className="bg-danger mb-2 flex items-center  rounded-md">
          <CircleAlertIcon className="text-accent ml-2" />
          <p className="text-accent p-2 text-center">{error}</p>
        </div>
      )}

      <div className="flex items-center justify-center ">
        <div className="p-6 max-w-md text-center">
          <div className="flex justify-center items-center bg-danger rounded-full w-16 h-16 mx-auto">
            <AlertCircle className="w-8 h-8 text-dark" />
          </div>
          <h2 className="text-xl font-bold text-dark mt-4">
            {i18n.exists("accountNotVerifiedTitle")
              ? _.upperFirst(t("accountNotVerifiedTitle"))
              : _.upperFirst(signInFormTranslation.accountNotVerifiedTitle)}
          </h2>
          <p className="text-dark mt-2 mb-3">
            {i18n.exists("accountNotVerifiedSubtitle")
              ? _.upperFirst(t("accountNotVerifiedSubtitle"))
              : _.upperFirst(signInFormTranslation.accountNotVerifiedSubtitle)}
          </p>
          <MEButton
            type="submit"
            buttonVariant={variants.DARK}
            onClick={() => dispatch(sendOtp(signInSendOTPAPIPayload(user)))}
          >
            {i18n.exists("sendOTPButtonLabel")
              ? _.upperCase(t("sendOTPButtonLabel"))
              : _.upperCase(signInFormTranslation.sendOTPButtonLabel)}
            {loader && <MELoaderIcon />}
          </MEButton>
          <p className="text-xs text-danger mt-3">
            {i18n.exists("accountNotVerifiedMessage")
              ? _.upperFirst(t("accountNotVerifiedMessage"))
              : _.upperFirst(signInFormTranslation.accountNotVerifiedMessage)}
          </p>
        </div>
      </div>
    </>
  );
};

SignInAccountNotVerified.propTypes = {};

export default SignInAccountNotVerified;
