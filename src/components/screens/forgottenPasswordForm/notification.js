import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Label } from "@MEShadcnComponents/label";
import { forgottenPasswordFormState } from "@MEUtils/enums";
import { forgottenPasswordFormTranslation } from "@MELocalization/forgottenPassword/forgottenPasswordTranslationEn";

import _ from "lodash";

import Lottie from "react-lottie";

import error from "@MEAssets/lottieFiles/signUpErrorAnimation.json";
import success from "@MEAssets/lottieFiles/signUpSuccessAnimation.json";

const ForgottenPasswordFormNotification = () => {
  const { currentForgottenPasswordFormState } = useSelector((state) => state.forgottenPassword);
  const { t, i18n } = useTranslation();

  return (
    <>
      {currentForgottenPasswordFormState === forgottenPasswordFormState.ER && (
        <>
          <div className="w-full h-80 ">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: error,
              }}
              isStopped={false}
              isPaused={false}
              title={
                i18n.exists("passwordVerificationError")
                  ? _.upperFirst(t("passwordVerificationError"))
                  : _.upperFirst(forgottenPasswordFormTranslation.passwordVerificationError)
              }
            />
          </div>

          <Label className="text-dark mt-3 text-lg flex justify-center">
            {i18n.exists("passwordVerificationError")
              ? _.upperFirst(t("passwordVerificationError"))
              : _.upperFirst(forgottenPasswordFormTranslation.passwordVerificationError)}
          </Label>
        </>
      )}

      {currentForgottenPasswordFormState === forgottenPasswordFormState.SU && (
        <>
          <div className="w-full h-80 ">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: success,
              }}
              isStopped={false}
              isPaused={false}
              title={
                i18n.exists("passwordVerificationSuccess")
                  ? _.upperFirst(t("passwordVerificationSuccess"))
                  : _.upperFirst(forgottenPasswordFormTranslation.passwordVerificationSuccess)
              }
            />
          </div>
          <Label className="text-dark mt-3 text-lg flex justify-center">
            {i18n.exists("passwordVerificationSuccess")
              ? _.upperFirst(t("passwordVerificationSuccess"))
              : _.upperFirst(forgottenPasswordFormTranslation.passwordVerificationSuccess)}
          </Label>
        </>
      )}
    </>
  );
};

export default ForgottenPasswordFormNotification;
