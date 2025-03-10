import { useSelector } from "react-redux";
import { CircleXIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import { routeName } from "@MEUtils/routeName";
import { forgottenPasswordFormState } from "@MEUtils/enums";
import { Card, CardContent, CardHeader } from "@MEShadcnComponents/card";
import { forgottenPasswordFormTranslation } from "@MELocalizationEn/forgottenPassword/forgottenPasswordTranslationEn";

import _ from "lodash";

import MEHoc from "@MECommonComponents/hoc/meHoc";
import SignInForm from "@MEScreenComponents/signInForm";
import MEButton from "@MECommonComponents/button/meButton";
import ForgottenPasswordFormSchema from "@MEScreenComponents/forgotternPasswordForm";

const ForgottenPasswordScreen = () => {
  const { t, i18n } = useTranslation();
  const { loader, currentForgottenPasswordFormState } = useSelector(
    (state) => state.forgottenPassword
  );

  const navigate = useNavigate();

  const onCloseForgottenPasswordForm = () =>
    navigate(routeName.root, { replace: true });

  return (
    <MEHoc>
      <div className="lg:w-1/3 md:w-1/2 w-full justify-self-center mt-10">
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
              forgottenPasswordFormState.UV && <ForgottenPasswordFormSchema />}
            {currentForgottenPasswordFormState ===
              forgottenPasswordFormState.SO && <SignInForm />}
            {currentForgottenPasswordFormState ===
              forgottenPasswordFormState.RP && <SignInForm />}
            {(currentForgottenPasswordFormState ===
              forgottenPasswordFormState.SU ||
              currentForgottenPasswordFormState ===
                forgottenPasswordFormState.ER) && <SignInForm />}
          </CardContent>
        </Card>
      </div>
    </MEHoc>
  );
};

ForgottenPasswordScreen.prototype = {};

export default ForgottenPasswordScreen;
