import { useSelector } from "react-redux";
import { CircleXIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import { routeName } from "@MEUtils/routeName";
import { signInFormState } from "@MEUtils/enums";
import { Card, CardContent, CardHeader } from "@MEShadcnComponents/card";
import { signInFormTranslation } from "@MELocalizationEn/signIn/signInTranslationEn";

import _ from "lodash";

import SignInForm from "@MEScreenComponents/signInForm";
import MEButton from "@MECommonComponents/button/meButton";
import VerificationForm from "@MEScreenComponents/signInForm/verificationForm";
import SignInFormNotification from "@MEScreenComponents/signInForm/notification";
import SignInAccountNotVerified from "@MEScreenComponents/signInForm/accountNotVerified";

const SignInScreen = () => {
  const { t, i18n } = useTranslation();
  const { loader, currentSignInFormStatus } = useSelector(
    (state) => state.signIn
  );

  const navigate = useNavigate();

  const onCloseSignInForm = () => navigate(routeName.root, { replace: true });

  return (
      <div className="lg:w-1/3 md:w-1/2 w-full justify-self-center mt-10">
        <Card className="">
          <CardHeader>
            <div className="flex justify-between items-center text-2xl">
              {i18n.exists("signinFormHeader")
                ? _.upperCase(t("signinFormHeader"))
                : _.upperCase(signInFormTranslation.signinFormHeader)}
              <MEButton
                disabled={loader}
                size="icon"
                variant="link"
                className="text-dark"
                onClick={() => onCloseSignInForm()}
              >
                <CircleXIcon />
              </MEButton>
            </div>
          </CardHeader>
          <CardContent>
            {currentSignInFormStatus === signInFormState.SI && <SignInForm />}
            {currentSignInFormStatus === signInFormState.ANV && (
              <SignInAccountNotVerified />
            )}
            {currentSignInFormStatus === signInFormState.AV && (
              <VerificationForm />
            )}
            {(currentSignInFormStatus === signInFormState.ER ||
              currentSignInFormStatus === signInFormState.SU) && (
              <SignInFormNotification />
            )}
          </CardContent>
        </Card>
      </div>
  );
};

SignInScreen.prototype = {};

export default SignInScreen;
