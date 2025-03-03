import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@MEShadcnComponents/alert-dialog";
import { CircleXIcon } from "lucide-react";

import MEButton from "@MECommonComponents/button/meButton";
import SignInForm from "@MEScreenComponents/signInForm";

const MESignInAlert = (props) => {
  const { isOpenSignInForm, onCloseAlert } = props;

  return (
    <AlertDialog open={isOpenSignInForm}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex justify-between items-center text-2xl">
              SIGN IN
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
            <SignInForm />
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MESignInAlert;
