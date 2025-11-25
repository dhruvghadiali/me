import { useTranslation } from "react-i18next";
import { CircleAlertIcon } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";

import { variants } from "@MEUtils/enums";
import { Label } from "@MEShadcnComponents/label";
import { verifyOtp } from "@MERedux/forgottenPassword/forgottenPasswordAction";
import {
  setEmailOtp,
  setPhoneNumberOtp,
} from "@MERedux/forgottenPassword/forgottenPasswordSlice";
import { forgottenPasswordOTPVerificationAPIPayload } from "@MEUtils/apiPayload";
import { forgottenPasswordFormTranslation } from "@MELocalization/forgottenPassword/forgottenPasswordTranslationEn";

import _ from "lodash";

import MEButton from "@MECommonComponents/button/meButton";
import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";
import MEOtpVerification from "@MECommonComponents/otpVerification/meOtpVerification";

const OtpVerificationForm = () => {
  const { loader, error, emailOtp, phoneNumberOtp, selectedUserForSendOtp, verificationToken } =
    useSelector((state) => state.forgottenPassword);
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const setEmailOtpValue = (value) => dispatch(setEmailOtp(value));
  const setPhoneNumberOtpValue = (value) => dispatch(setPhoneNumberOtp(value));

  const onSubmitOTP = () => {
    const data = {
      emailOtp,
      phoneNumberOtp,
      verificationToken,
      userId:
        selectedUserForSendOtp && selectedUserForSendOtp.id
          ? selectedUserForSendOtp.id
          : "",
    };
    dispatch(verifyOtp(forgottenPasswordOTPVerificationAPIPayload(data)));
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-destructive/10 border border-destructive/20 flex items-center gap-2 rounded-lg p-3">
          <CircleAlertIcon className="text-destructive h-5 w-5 shrink-0" />
          <p className="text-destructive text-sm font-medium">{error}</p>
        </div>
      )}

      <div className="bg-muted/30 border border-border rounded-lg p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {i18n.exists("forgottenPasswordOtpVerificationMessage")
            ? t("forgottenPasswordOtpVerificationMessage", {
                email: selectedUserForSendOtp
                  ? _.truncate(selectedUserForSendOtp.email, { length: 30 })
                  : "",
                phoneNumber: selectedUserForSendOtp
                  ? selectedUserForSendOtp.phoneNumber
                  : "",
              })
            : forgottenPasswordFormTranslation.forgottenPasswordOtpVerificationStaticMessage}
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
              1
            </span>
            {i18n.exists("emailOtpVerificationLabel")
              ? t("emailOtpVerificationLabel")
              : forgottenPasswordFormTranslation.emailOtpVerificationLabel}
          </Label>
          <div className="flex justify-center py-2">
            <MEOtpVerification
              value={emailOtp}
              onComplete={(value) => setEmailOtpValue(value)}
              onChange={(value) => setEmailOtpValue(value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
              2
            </span>
            {i18n.exists("phoneNumberOtpVerificationLabel")
              ? t("phoneNumberOtpVerificationLabel")
              : forgottenPasswordFormTranslation.phoneNumberOtpVerificationLabel}
          </Label>
          <div className="flex justify-center py-2">
            <MEOtpVerification
              value={phoneNumberOtp}
              onComplete={(value) => setPhoneNumberOtpValue(value)}
              onChange={(value) => setPhoneNumberOtpValue(value)}
            />
          </div>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30 rounded-lg p-3">
        <p className="text-xs text-amber-800 dark:text-amber-200">
          {i18n.exists("otpVerificationAlert")
            ? t("otpVerificationAlert")
            : forgottenPasswordFormTranslation.otpVerificationAlert}
        </p>
      </div>

      <div className="pt-2">
        <MEButton
          meclassname="flex w-full"
          disabled={
            !(_.size(emailOtp) === 6 && _.size(phoneNumberOtp) === 6) || loader
          }
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
