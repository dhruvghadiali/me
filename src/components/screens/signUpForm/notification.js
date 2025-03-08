import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Lottie from "react-lottie";

import { signUpFormState } from "@MEUtils/enums";
import { Label } from "@MEShadcnComponents/label";
import { signUpFormTranslation } from "@MELocalizationEn/signUp/signUpTranslationEn";

import _ from "lodash";

import error from "@MEAssets/lottieFiles/signUpErrorAnimation.json";
import success from "@MEAssets/lottieFiles/signUpSuccessAnimation.json";

const SignUpFormNotification = () => {
  const { currentSignUpFormStatus } = useSelector((state) => state.signUp);
  const { t, i18n } = useTranslation();

  return (
    <>
      {currentSignUpFormStatus === signUpFormState.ER && (
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
                i18n.exists("otpVerificationError")
                  ? _.upperFirst(t("otpVerificationError"))
                  : _.upperFirst(signUpFormTranslation.otpVerificationError)
              }
            />
          </div>

          <Label className="text-dark mt-3 text-lg flex justify-center">
            {i18n.exists("otpVerificationError")
              ? _.upperFirst(t("otpVerificationError"))
              : _.upperFirst(signUpFormTranslation.otpVerificationError)}
          </Label>
        </>
      )}

      {currentSignUpFormStatus === signUpFormState.SU && (
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
                i18n.exists("otpVerificationSuccess")
                  ? _.upperFirst(t("otpVerificationSuccess"))
                  : _.upperFirst(signUpFormTranslation.otpVerificationSuccess)
              }
            />
          </div>
          <Label className="text-dark mt-3 text-lg flex justify-center">
            {i18n.exists("otpVerificationSuccess")
              ? _.upperFirst(t("otpVerificationSuccess"))
              : _.upperFirst(signUpFormTranslation.otpVerificationSuccess)}
          </Label>
        </>
      )}
    </>
  );
};

export default SignUpFormNotification;
