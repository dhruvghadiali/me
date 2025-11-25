import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { CircleAlertIcon, AlertCircle } from "lucide-react";

import { variants } from "@MEUtils/enums";
import { sendOtp } from "@MERedux/signIn/signInAction";
import { signInSendOTPAPIPayload } from "@MEUtils/apiPayload";
import { signInFormTranslation } from "@MELocalization/signIn/signInTranslationEn";

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
        <div className="bg-destructive/10 border border-destructive/20 mb-4 flex items-center gap-2 rounded-lg p-3">
          <CircleAlertIcon className="text-destructive h-5 w-5 shrink-0" />
          <p className="text-destructive text-sm font-medium">{error}</p>
        </div>
      )}

      <div className="flex items-center justify-center py-6">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="flex justify-center">
            <div className="flex items-center justify-center bg-destructive/10 rounded-full w-20 h-20 ring-8 ring-destructive/5">
              <AlertCircle className="w-10 h-10 text-destructive" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">
              {i18n.exists("accountNotVerifiedTitle")
                ? _.upperFirst(t("accountNotVerifiedTitle"))
                : _.upperFirst(signInFormTranslation.accountNotVerifiedTitle)}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {i18n.exists("accountNotVerifiedSubtitle")
                ? _.upperFirst(t("accountNotVerifiedSubtitle"))
                : _.upperFirst(signInFormTranslation.accountNotVerifiedSubtitle)}
            </p>
          </div>

          <div className="pt-2">
            <MEButton
              type="submit"
              buttonVariant={variants.SUCCESS}
              meclassname="w-full"
              disabled={loader}
              onClick={() => dispatch(sendOtp(signInSendOTPAPIPayload(user)))}
            >
              {i18n.exists("sendOTPButtonLabel")
                ? _.upperCase(t("sendOTPButtonLabel"))
                : _.upperCase(signInFormTranslation.sendOTPButtonLabel)}
              {loader && <MELoaderIcon />}
            </MEButton>
          </div>

          <div className="pt-2">
            <p className="text-xs text-muted-foreground bg-muted/50 rounded-md p-3 border border-border/50">
              {i18n.exists("accountNotVerifiedMessage")
                ? _.upperFirst(t("accountNotVerifiedMessage"))
                : _.upperFirst(signInFormTranslation.accountNotVerifiedMessage)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

SignInAccountNotVerified.propTypes = {};

export default SignInAccountNotVerified;
