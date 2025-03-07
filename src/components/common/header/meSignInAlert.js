import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@MEShadcnComponents/alert-dialog";
import { CircleXIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { signInFormTranslation } from "@MELocalizationEn/signIn/signInTranslationEn";

import _ from "lodash";

import SignInForm from "@MEScreenComponents/signInForm";
import MEButton from "@MECommonComponents/button/meButton";


const MESignInAlert = (props) => {
  const { isOpenSignInForm, onCloseAlert } = props;

  const { t, i18n } = useTranslation();
  const { loader } = useSelector((state) => state.signIn);

  return (
    <AlertDialog open={isOpenSignInForm}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex justify-between items-center text-2xl">
              {i18n.exists("signinFormHeader")
                ? _.upperCase(t("signinFormHeader"))
                : _.upperCase(signInFormTranslation.signinFormHeader)}
              <MEButton
                disabled={loader}
                size="icon"
                variant="link"
                className="text-dark"
                onClick={() => onCloseAlert()}
              >
                <CircleXIcon />
              </MEButton>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <SignInForm />
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MESignInAlert;
