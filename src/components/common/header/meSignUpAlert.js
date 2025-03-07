import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@MEShadcnComponents/alert-dialog";
import { useSelector } from "react-redux";
import { CircleXIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import { signUpAlertState } from "@MEUtils/enums";
import { signUpFormTranslation } from "@MELocalizationEn/signUp/signUpTranslationEn";

import MEButton from "@MECommonComponents/button/meButton";
import SignUpForm from "@MEScreenComponents/signUpForm";
import VerificationForm from "@MEScreenComponents/signUpForm/verificationForm";
import SignUpFormNotification from "@MEScreenComponents/signUpForm/notification";

import _ from "lodash";

const MESignUpAlert = (props) => {
  const { isOpenSignUpForm, onCloseAlert } = props;

  const { t, i18n } = useTranslation();
  const { currentSignUpAlertStatus } = useSelector((state) => state.signUp);

  return (
    <AlertDialog open={isOpenSignUpForm}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex justify-between items-center text-2xl">
              {i18n.exists("signUpFormHeader")
                ? _.upperCase(t("signUpFormHeader"))
                : _.upperCase(signUpFormTranslation.signUpFormHeader)}
              <MEButton
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
            {currentSignUpAlertStatus === signUpAlertState.RE && <SignUpForm />}
            {currentSignUpAlertStatus === signUpAlertState.VE && (
              <VerificationForm />
            )}
            {(currentSignUpAlertStatus === signUpAlertState.ER ||
              currentSignUpAlertStatus === signUpAlertState.SU) && (
              <SignUpFormNotification />
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MESignUpAlert;
