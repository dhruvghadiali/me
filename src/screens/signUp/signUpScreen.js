import { useSelector } from "react-redux";
import { CircleXIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

// import { routeName } from "@MEUtils/apiRoutes";
import { SIGN_UP_FORM_STATUS } from "@MEHelpers/enums";
import { Card, CardContent, CardHeader } from "@MEShadcnComponents/card";
import { signUpFormTranslation } from "@MELocalization/signUp/signUpTranslationEn";

import _ from "lodash";

import SignUpForm from "@MEScreenComponents/signUpForm";
import MEButton from "@MECommonComponents/button/meButton";
import VerificationForm from "@MEScreenComponents/signUpForm/verificationForm";
import SignUpFormNotification from "@MEScreenComponents/signUpForm/notification";

const SignUpScreen = () => {
  const { t, i18n } = useTranslation();
  const { loader, currentSignUpFormStatus } = useSelector(
    (state) => state.signUp
  );

  const navigate = useNavigate();

  const onCloseSignUpForm = () => navigate("/", { replace: true });

  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-4 py-8 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-2 pb-4">
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold  bg-clip-text ">
                  {i18n.exists("signUpFormHeader")
                    ? _.upperCase(t("signUpFormHeader"))
                    : _.upperCase(signUpFormTranslation.signUpFormHeader)}
                </p>
                <p className="text-sm text-muted-foreground">
                  Create your account to join ME community
                </p>
              </div>
              <MEButton
                disabled={loader}
                size="icon"
                variant="ghost"
                className="hover:bg-dark/10 hover:text-dark transition-colors shrink-0 [&_svg]:!size-6"
                onClick={() => onCloseSignUpForm()}
              >
                <CircleXIcon />
              </MEButton>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            {currentSignUpFormStatus === SIGN_UP_FORM_STATUS.RE && (
              <SignUpForm />
            )}
            {currentSignUpFormStatus === SIGN_UP_FORM_STATUS.VE && (
              <VerificationForm />
            )}
            {(currentSignUpFormStatus === SIGN_UP_FORM_STATUS.ER ||
              currentSignUpFormStatus === SIGN_UP_FORM_STATUS.SU) && (
              <SignUpFormNotification />
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

SignUpScreen.prototype = {};

export default SignUpScreen;
