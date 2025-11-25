import { useSelector } from "react-redux";
import { CircleXIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import { root } from "@MEUtils/pageRoutes";
import { FORGOTTEN_PASSWORD_FORM_STATUS } from "@MEHelpers/enums";
import { Card, CardContent, CardHeader } from "@MEShadcnComponents/card";
import { forgottenPasswordFormTranslation } from "@MELocalization/forgottenPassword/forgottenPasswordTranslationEn";

import _ from "lodash";

import MEButton from "@MECommonComponents/button/meButton";
import ForgottenPasswordForm from "@MEScreenComponents/forgottenPasswordForm";
import VerifyUser from "@MEScreenComponents/forgottenPasswordForm/verifyUser";
import ResetPasswordForm from "@MEScreenComponents/forgottenPasswordForm/resetPasswordForm";
import OtpVerificationForm from "@MEScreenComponents/forgottenPasswordForm/otpVerificationForm";
import ForgottenPasswordFormNotification from "@MEScreenComponents/forgottenPasswordForm/notification";

const ForgottenPasswordScreen = () => {
  const { t, i18n } = useTranslation();
  const { loader, currentForgottenPasswordFormState } = useSelector(
    (state) => state.forgottenPassword
  );

  const navigate = useNavigate();

  const onCloseForgottenPasswordForm = () =>
    navigate(root, { replace: true });

  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-4 py-8 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-2 pb-4">
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold  bg-clip-text ">
                  {i18n.exists("forgottenPasswordFormHeader")
                    ? _.upperFirst(t("forgottenPasswordFormHeader"))
                    : _.upperFirst(
                        forgottenPasswordFormTranslation.forgottenPasswordFormHeader
                      )}
                </p>
                <p className="text-sm text-muted-foreground">
                  Enter your account details to recover access
                </p>
              </div>
              <MEButton
                disabled={loader}
                size="icon"
                variant="ghost"
                className="hover:bg-dark/10 hover:text-dark transition-colors shrink-0 [&_svg]:!size-6"
                onClick={() => onCloseForgottenPasswordForm()}
              >
                <CircleXIcon />
              </MEButton>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            {currentForgottenPasswordFormState ===
              FORGOTTEN_PASSWORD_FORM_STATUS.FA && <ForgottenPasswordForm />}
            {currentForgottenPasswordFormState ===
              FORGOTTEN_PASSWORD_FORM_STATUS.UV && <VerifyUser />}
            {currentForgottenPasswordFormState ===
              FORGOTTEN_PASSWORD_FORM_STATUS.SO && <OtpVerificationForm />}
            {currentForgottenPasswordFormState ===
              FORGOTTEN_PASSWORD_FORM_STATUS.RP && <ResetPasswordForm />}
            {(currentForgottenPasswordFormState ===
              FORGOTTEN_PASSWORD_FORM_STATUS.SU ||
              currentForgottenPasswordFormState ===
                FORGOTTEN_PASSWORD_FORM_STATUS.ER) && (
              <ForgottenPasswordFormNotification />
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

ForgottenPasswordScreen.prototype = {};

export default ForgottenPasswordScreen;
