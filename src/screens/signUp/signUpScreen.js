import { useSelector } from "react-redux";
import { CircleXIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

// import { routeName } from "@MEUtils/apiRoutes";
import { signUpFormState } from "@MEUtils/enums";
import { Card, CardContent, CardHeader } from "@MEShadcnComponents/card";
import { signUpFormTranslation } from "@MELocalization/signUp/signUpTranslationEn";

import _ from "lodash";

import SignUpForm from "@MEScreenComponents/signUpForm";
import MEButton from "@MECommonComponents/button/meButton";
import VerificationForm from "@MEScreenComponents/signUpForm/verificationForm";
// import SignUpFormNotification from "@MEScreenComponents/signUpForm/notification";

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
            <div className="flex justify-between items-center gap-4">
              <p className="text-2xl sm:text-3xl font-bold  bg-clip-text ">
                {i18n.exists("signUpFormHeader")
                  ? _.upperCase(t("signUpFormHeader"))
                  : _.upperCase(signUpFormTranslation.signUpFormHeader)}
              </p>
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
            {currentSignUpFormStatus === signUpFormState.RE && <SignUpForm />}
            {/*{currentSignUpFormStatus === signUpFormState.VE && (
              <VerificationForm />
            )}
            {(currentSignUpFormStatus === signUpFormState.ER ||
              currentSignUpFormStatus === signUpFormState.SU) && (
              // <SignUpFormNotification />
            )} */}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

SignUpScreen.prototype = {};

export default SignUpScreen;
