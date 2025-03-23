import { useTranslation } from "react-i18next";
import { CircleAlertIcon } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";

import { variants } from "@MEUtils/enums";
import { Label } from "@MEShadcnComponents/label";
import { verifyOtp } from "@MERedux/forgottenPassword/forgottenPasswordAction";
import { setOtpValue } from "@MERedux/forgottenPassword/forgottenPasswordSlice";
import { forgottenPasswordOTPVerificationAPIPayload } from "@MEUtils/apiPayload";
import { forgottenPasswordFormTranslation } from "@MELocalizationEn/forgottenPassword/forgottenPasswordTranslationEn";

import _ from "lodash";

import MEButton from "@MECommonComponents/button/meButton";
import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";
import MEOtpVerification from "@MECommonComponents/otpVerification/meOtpVerification";

const OtpVerificationForm = () => {
  const { loader, error, otp, selectedUserForSendOtp, verificationToken } =
    useSelector((state) => state.forgottenPassword);
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const onSetOtpValue = (value) => dispatch(setOtpValue(value));

  const onSubmitOTP = () => {
    const data = {
      otp,
      verificationToken,
      userId:
        selectedUserForSendOtp && selectedUserForSendOtp.id
          ? selectedUserForSendOtp.id
          : "",
    };
    dispatch(verifyOtp(forgottenPasswordOTPVerificationAPIPayload(data)));
  };

  return (
    <div>
      {error && (
        <div className="bg-danger mb-2 flex items-center  rounded-md">
          <CircleAlertIcon className="text-accent ml-2" />
          <p className="text-accent p-2 text-center">{error}</p>
        </div>
      )}

      <Label className="text-dark mt-3 ">
        {i18n.exists("forgottenPasswordOtpVerificationMessage")
          ? _.upperFirst(
              t("forgottenPasswordOtpVerificationMessage", {
                email: selectedUserForSendOtp
                  ? _.truncate(selectedUserForSendOtp.email)
                  : "",
                phoneNumber: selectedUserForSendOtp
                  ? selectedUserForSendOtp.phoneNumber
                  : "",
              })
            )
          : _.upperFirst(
              forgottenPasswordFormTranslation.forgottenPasswordOtpVerificationStaticMessage
            )}
      </Label>

      <Label className="text-dark flex mb-1 mt-5">
        {i18n.exists("otpTextFieldLabel")
          ? _.upperCase(t("otpTextFieldLabel"))
          : _.upperCase(forgottenPasswordFormTranslation.otpTextFieldLabel)}
      </Label>
      <MEOtpVerification
        onComplete={(value) => onSetOtpValue(value)}
        onChange={(value) => onSetOtpValue(value)}
      />

      <div className="mt-5">
        <Label className="text-xs text-danger">
          {i18n.exists("otpVerificationAlert")
            ? _.upperFirst(t("otpVerificationAlert"))
            : _.upperFirst(
                forgottenPasswordFormTranslation.otpVerificationAlert
              )}
        </Label>
      </div>

      <div className="mt-10">
        <MEButton
          meclassname="flex"
          disabled={!(_.size(otp) === 6) || loader}
          buttonVariant={variants.SUCCESS}
          onClick={() => onSubmitOTP()}
        >
          {i18n.exists("submitButtonLabel")
            ? _.upperCase(t("submitButtonLabel"))
            : _.upperCase(forgottenPasswordFormTranslation.submitButtonLabel)}
          {loader && <MELoaderIcon />}
        </MEButton>
      </div>
    </div>
  );
};

OtpVerificationForm.propTypes = {};

export default OtpVerificationForm;
