import { useSelector } from "react-redux";
import { CircleXIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import { root } from "@MEUtils/pageRoutes";
import { SIGN_IN_SCREEN_STATUS } from "@MEHelpers/enums";
import { Card, CardContent, CardHeader } from "@MEShadcnComponents/card";
import { signInFormTranslation } from "@MELocalization/signIn/signInTranslationEn";

import _ from "lodash";

import MEButton from "@MECommonComponents/button/meButton";
import SignInForm from "@/components/screens/signIn/signInForm";
import VerificationForm from "@/components/screens/signIn/verificationForm";
import SignInFormNotification from "@/components/screens/signIn/notification";
import SignInAccountNotVerified from "@/components/screens/signIn/accountNotVerified";

const SignInScreen = () => {
  const { t, i18n } = useTranslation();
  const { loader, currentSignInScreenStatus } = useSelector(
    (state) => state.signIn
  );

  const navigate = useNavigate();

  const onCloseSignInForm = () => navigate(root, { replace: true });

  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-4 py-8 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-2 pb-4">
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold  bg-clip-text ">
                  {i18n.exists("signinFormHeader")
                    ? _.upperCase(t("signinFormHeader"))
                    : _.upperCase(signInFormTranslation.signinFormHeader)}
                </p>
                <p className="text-sm text-muted-foreground">
                  Welcome back! Please sign in to continue
                </p>
              </div>
              <MEButton
                disabled={loader}
                size="icon"
                variant="ghost"
                className="hover:bg-dark/10 hover:text-dark transition-colors shrink-0 [&_svg]:!size-6"
                onClick={() => onCloseSignInForm()}
              >
                <CircleXIcon />
              </MEButton>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            {currentSignInScreenStatus === SIGN_IN_SCREEN_STATUS.SI && <SignInForm />}
            {currentSignInScreenStatus === SIGN_IN_SCREEN_STATUS.ANV && (
              <SignInAccountNotVerified />
            )}
            {currentSignInScreenStatus === SIGN_IN_SCREEN_STATUS.AV && (
              <VerificationForm />
            )}
            {(currentSignInScreenStatus === SIGN_IN_SCREEN_STATUS.ER ||
              currentSignInScreenStatus === SIGN_IN_SCREEN_STATUS.SU) && (
              <SignInFormNotification />
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

SignInScreen.prototype = {};

export default SignInScreen;
