import { useSelector } from "react-redux";
import { CircleXIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import { routeName } from "@MEUtils/routeName";
import { signUpFormState } from "@MEUtils/enums";
import { Card, CardContent, CardHeader } from "@MEShadcnComponents/card";
import { signUpFormTranslation } from "@MELocalizationEn/signUp/signUpTranslationEn";

import _ from "lodash";

import MEHoc from "@MECommonComponents/hoc/meHoc";
import SignUpForm from "@MEScreenComponents/signUpForm";
import MEButton from "@MECommonComponents/button/meButton";
import VerificationForm from "@MEScreenComponents/signUpForm/verificationForm";
import SignUpFormNotification from "@MEScreenComponents/signUpForm/notification";

const SignUpScreen = () => {
  const { t, i18n } = useTranslation();
  const { loader, currentSignUpFormStatus,  } = useSelector((state) => state.signUp);

  const navigate = useNavigate();

  const onCloseSignUpForm = () => navigate(routeName.root, { replace: true });

  return (
    <MEHoc>
      <div className="lg:w-1/3 md:w-1/2 w-full justify-self-center mt-10 mb-10">
        <Card className="">
          <CardHeader>
            <div className="flex justify-between items-center text-2xl">
              {i18n.exists("signUpFormHeader")
                ? _.upperCase(t("signUpFormHeader"))
                : _.upperCase(signUpFormTranslation.signUpFormHeader)}
              <MEButton
                disabled={loader}
                size="icon"
                variant="link"
                className="text-dark"
                onClick={() => onCloseSignUpForm()}
              >
                <CircleXIcon />
              </MEButton>
            </div>
          </CardHeader>
          <CardContent>
            {currentSignUpFormStatus === signUpFormState.RE && <SignUpForm />}
            {currentSignUpFormStatus === signUpFormState.VE && (
              <VerificationForm />
            )}
            {(currentSignUpFormStatus === signUpFormState.ER ||
              currentSignUpFormStatus === signUpFormState.SU) && (
              <SignUpFormNotification />
            )}
          </CardContent>
        </Card>
      </div>
    </MEHoc>
  );
};

SignUpScreen.prototype = {};

export default SignUpScreen;
