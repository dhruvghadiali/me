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
    <div className="space-y-6">
      {error && (
        <div className="bg-destructive/10 border border-destructive/20 flex items-center gap-2 rounded-lg p-3">
          <CircleAlertIcon className="text-destructive h-5 w-5 shrink-0" />
          <p className="text-destructive text-sm font-medium">{error}</p>
        </div>
      )}

      <div className="bg-muted/30 border border-border rounded-lg p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {i18n.exists("otpVerificationMessage")
            ? t("otpVerificationMessage")
            : signInFormTranslation.otpVerificationMessage}
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
              : signInFormTranslation.emailOtpVerificationLabel}
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
              : signInFormTranslation.phoneNumberOtpVerificationLabel}
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
            : signInFormTranslation.otpVerificationAlert}
        </p>
      </div>

      <div className="pt-2">
        <MEButton
          meclassname="flex w-full"
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
