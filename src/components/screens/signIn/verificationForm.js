import { useTranslation } from "react-i18next";
import { CircleAlertIcon } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";

import { variants } from "@MEUtils/enums";
import { Label } from "@MEShadcnComponents/label";
import { verifyOtp } from "@MERedux/signIn/signInAction";
import { signInOTPVerificationAPIPayload } from "@MEUtils/apiPayload";
import { setEmailOtp, setPhoneNumberOtp } from "@MERedux/signIn/signInSlice";
import { signInFormTranslation } from "@MELocalization/signIn/signInTranslationEn";

import _ from "lodash";

import MEButton from "@MECommonComponents/button/meButton";
import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";
import MEOtpVerification from "@MECommonComponents/otpVerification/meOtpVerification";

const VerificationForm = () => {
  const { emailOtp, phoneNumberOtp, loader, error, user, verificationToken } =
    useSelector((state) => state.signIn);
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const onSubmitClick = () =>
    dispatch(
      verifyOtp(
        signInOTPVerificationAPIPayload({
          emailOtp,
          phoneNumberOtp,
          verificationToken,
          userId: user && user.id ? user.id : "",
        })
      )
    );
  const setEmailOtpValue = (value) => dispatch(setEmailOtp(value));
  const setPhoneNumberOtpValue = (value) => dispatch(setPhoneNumberOtp(value));

  return (
    <div>
      {error && (
        <div className="bg-danger mb-2 flex items-center  rounded-md">
          <CircleAlertIcon className="text-accent ml-2" />
          <p className="text-accent p-2 text-center">{error}</p>
        </div>
      )}

      <Label className="text-dark mt-3">
        {i18n.exists("otpVerificationMessage")
          ? _.upperFirst(t("otpVerificationMessage"))
          : _.upperFirst(signInFormTranslation.otpVerificationMessage)}
      </Label>

      <Label className="text-dark flex mb-1 mt-5">
        {i18n.exists("emailOtpVerificationLabel")
          ? _.upperFirst(t("emailOtpVerificationLabel"))
          : _.upperFirst(signInFormTranslation.emailOtpVerificationLabel)}
      </Label>
      <MEOtpVerification
        onComplete={(value) => setEmailOtpValue(value)}
        onChange={(value) => setEmailOtpValue(value)}
      />

      <Label className="text-dark flex mb-1 mt-5">
        {i18n.exists("phoneNumberOtpVerificationLabel")
          ? _.upperFirst(t("phoneNumberOtpVerificationLabel"))
          : _.upperFirst(signInFormTranslation.phoneNumberOtpVerificationLabel)}
      </Label>
      <MEOtpVerification
        onComplete={(value) => setPhoneNumberOtpValue(value)}
        onChange={(value) => setPhoneNumberOtpValue(value)}
      />

      <div className="mt-5">
        <Label className="text-xs text-danger">
          {i18n.exists("otpVerificationAlert")
            ? _.upperFirst(t("otpVerificationAlert"))
            : _.upperFirst(signInFormTranslation.otpVerificationAlert)}
        </Label>
      </div>

      <div className="mt-10">
        <MEButton
          meclassname="flex"
          disabled={
            !(_.size(emailOtp) === 6 && _.size(phoneNumberOtp) === 6) || loader
          }
          buttonVariant={variants.SUCCESS}
          onClick={() => onSubmitClick()}
        >
          {i18n.exists("submitButtonLabel")
            ? _.upperCase(t("submitButtonLabel"))
            : _.upperCase(signInFormTranslation.submitButtonLabel)}
          {loader && <MELoaderIcon />}
        </MEButton>
      </div>
    </div>
  );
};

VerificationForm.propTypes = {};

export default VerificationForm;
