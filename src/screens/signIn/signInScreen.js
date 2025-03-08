import { useSelector } from "react-redux";
import { CircleXIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import { routeName } from "@MEUtils/routeName";
import { Card, CardContent, CardHeader } from "@MEShadcnComponents/card";
import { signInFormTranslation } from "@MELocalizationEn/signIn/signInTranslationEn";

import _ from "lodash";

import MEHoc from "@MECommonComponents/hoc/meHoc";
import SignInForm from "@MEScreenComponents/signInForm";
import MEButton from "@MECommonComponents/button/meButton";

const SignInScreen = () => {
  const { t, i18n } = useTranslation();
  const { loader } = useSelector((state) => state.signIn);

  const navigate = useNavigate();

  const onCloseSignInForm = () => navigate(routeName.root, { replace: true });

  return (
    <MEHoc>
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
            <SignInForm />
          </CardContent>
        </Card>
      </div>
    </MEHoc>
  );
};

SignInScreen.prototype = {};

export default SignInScreen;
