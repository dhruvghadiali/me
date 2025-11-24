import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Lottie from "react-lottie";

import { SIGN_IN_SCREEN_STATUS } from "@MEHelpers/enums";
import { Label } from "@MEShadcnComponents/label";
import { signInFormTranslation } from "@MELocalization/signIn/signInTranslationEn";

import _ from "lodash";

import error from "@MEAssets/lottieFiles/signInErrorAnimation.json";
import success from "@MEAssets/lottieFiles/signInSuccessAnimation.json";

const SignInFormNotification = () => {
  const { currentSignInFormStatus } = useSelector((state) => state.signIn);
  const { t, i18n } = useTranslation();

  return (
    <>
      {currentSignInFormStatus === SIGN_IN_SCREEN_STATUS.ER && (
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
                  : _.upperFirst(signInFormTranslation.otpVerificationError)
              }
            />
          </div>

          <Label className="text-dark mt-3 text-lg flex justify-center">
            {i18n.exists("otpVerificationError")
              ? _.upperFirst(t("otpVerificationError"))
              : _.upperFirst(signInFormTranslation.otpVerificationError)}
          </Label>
        </>
      )}

      {currentSignInFormStatus === SIGN_IN_SCREEN_STATUS.SU && (
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
                  : _.upperFirst(signInFormTranslation.otpVerificationSuccess)
              }
            />
          </div>
          <Label className="text-dark mt-3 text-lg flex justify-center">
            {i18n.exists("otpVerificationSuccess")
              ? _.upperFirst(t("otpVerificationSuccess"))
              : _.upperFirst(signInFormTranslation.otpVerificationSuccess)}
          </Label>
        </>
      )}
    </>
  );
};

export default SignInFormNotification;
