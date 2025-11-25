import { useSelector } from "react-redux";
import { CircleXIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import { root } from "@MEUtils/pageRoutes";
import { forgottenPasswordFormState } from "@MEUtils/enums";
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
      <div className="lg:w-1/3 md:w-1/2 w-full justify-self-center mt-10 mb-10">
        <Card className="">
          <CardHeader>
            <div className="flex justify-between items-center text-2xl">
              {i18n.exists("forgottenPasswordFormHeader")
                ? _.upperFirst(t("forgottenPasswordFormHeader"))
                : _.upperFirst(
                    forgottenPasswordFormTranslation.forgottenPasswordFormHeader
                  )}
              <MEButton
                disabled={loader}
                size="icon"
                variant="link"
                className="text-dark"
                onClick={() => onCloseForgottenPasswordForm()}
              >
                <CircleXIcon />
              </MEButton>
            </div>
          </CardHeader>
          <CardContent>
            {currentForgottenPasswordFormState ===
              forgottenPasswordFormState.FA && <ForgottenPasswordForm />}
            {currentForgottenPasswordFormState ===
              forgottenPasswordFormState.UV && <VerifyUser />}
            {currentForgottenPasswordFormState ===
              forgottenPasswordFormState.SO && <OtpVerificationForm />}
            {currentForgottenPasswordFormState ===
              forgottenPasswordFormState.RP && <ResetPasswordForm />}
            {(currentForgottenPasswordFormState ===
              forgottenPasswordFormState.SU ||
              currentForgottenPasswordFormState ===
                forgottenPasswordFormState.ER) && (
              <ForgottenPasswordFormNotification />
            )}
          </CardContent>
        </Card>
      </div>
  );
};

ForgottenPasswordScreen.prototype = {};

export default ForgottenPasswordScreen;
