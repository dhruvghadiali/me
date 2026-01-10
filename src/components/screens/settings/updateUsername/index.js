import React from "react";
import { useFormik } from "formik";
import { Check } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import _ from "lodash";
import * as Yup from "yup";

import { ME_INPUT_COMPONENT_VARIANTS } from "@MEHelpers/enums";
import { createUpdateUsernamePayload } from "@MEUtils/apiPayload";
import { updatedUsername } from "@MERedux/settings/settingsAction";
import { toggleAlertDialog } from "@MERedux/settings/settingsSlice";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter 
} from "@/components/ui/alert-dialog";
import {
  usernameMaxChar,
  usernameMinChar,
  passwordMinChar,
  passwordMaxChar,
} from "@MEHelpers/formValidationConst";
import {
  usernameRequired,
  usernameMaxLength,
  usernameMinLength,
  passwordRequired,
  passwordMaxLength,
  passwordMinLength,
} from "@MEHelpers/formValidationMessage";
import {
  updateUsernameFormTitle,
  updateUsernameFormSubtitle,
  updateUsernameFormUsernameLabel,
  updateUsernameFormPasswordLabel,
  updateUsernameAlertDialogTitle,
  updateUsernameAlertDialogMessage,
  updateUsernameAlertDialogConfirmButtonLabel,
  updateUsernameAlertDialogCancelButtonLabel,
} from "@MELocalization/languages/en";

import MEInput from "@MECommonComponents/input/meInput";
import MEButton from "@MECommonComponents/button/meButton";
import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";
import SettingsErrorMessageComponent from "@MEScreenComponents/settings/errorMessage";
// import LastUpdatedAtInfoComponent from "@MEScreenComponents/settings/lastUpdatedAtInfo";

const UpdatedUsernameComponent = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const { updateUsernameLoader, updateUsernameError, displayAlertDialog } =
    useSelector((state) => state.settings);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: updatedUsernameValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: (values) => {
      dispatch(toggleAlertDialog(true));
    },
  });

  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;

  const handleConfirmLogout = () => {
    dispatch(updatedUsername(createUpdateUsernamePayload(values)));
  };

  const handleCancelLogout = () => {
    dispatch(toggleAlertDialog(false));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {updateUsernameError && (
        <SettingsErrorMessageComponent message={updateUsernameError} />
      )}

      <AlertDialog
        open={displayAlertDialog}
        onOpenChange={(open) => dispatch(toggleAlertDialog(open))}
      >
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-base sm:text-lg font-bold">
              {_.startCase(
                t("updateUsernameAlertDialogTitle", {
                  defaultValue: updateUsernameAlertDialogTitle,
                })
              )}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm text-muted-foreground mt-2">
              {_.upperFirst(
                t("updateUsernameAlertDialogMessage", {
                  defaultValue: updateUsernameAlertDialogMessage,
                })
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-2 sm:gap-3">
            <AlertDialogCancel
              onClick={handleCancelLogout}
              className="w-full sm:w-auto"
            >
              {_.upperCase(
                t("updateUsernameAlertDialogCancelButtonLabel", {
                  defaultValue: updateUsernameAlertDialogCancelButtonLabel,
                })
              )}
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmLogout}
              className="w-full sm:w-auto"
            >
              {_.upperCase(
                t("updateUsernameAlertDialogConfirmButtonLabel", {
                  defaultValue: updateUsernameAlertDialogConfirmButtonLabel,
                })
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <form onSubmit={handleSubmit}>
        <div>
          {/* Header with Edit Button */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold text-primary">
                {_.startCase(
                  t("updateUsernameFormTitle", {
                    defaultValue: updateUsernameFormTitle,
                  })
                )}
              </h2>
              {/* <LastUpdatedAtInfoComponent updatedAt={values.updatedAt} /> */}
            </div>
          </div>

          {/* Basic Information Section */}
          <div className="mt-3">
            <h3 className="text-base font-semibold mb-4 text-primary">
              {_.upperFirst(
                t("updateUsernameFormSubtitle", {
                  defaultValue: updateUsernameFormSubtitle,
                })
              )}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <MEInput
                id="username"
                meclassname="flex"
                type={"text"}
                label={_.upperFirst(
                  t("updateUsernameFormUsernameLabel", {
                    defaultValue: updateUsernameFormUsernameLabel,
                  })
                )}
                required={true}
                value={values.username}
                labelvariant={
                  errors.username && touched.username
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                inputvariant={
                  errors.username && touched.username
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                messagevariant={
                  errors.username && touched.username
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.username && touched.username ? errors.username : ""
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <MEInput
                id="password"
                meclassname="flex"
                type={"password"}
                label={_.upperFirst(
                  t("updateUsernameFormPasswordLabel", {
                    defaultValue: updateUsernameFormPasswordLabel,
                  })
                )}
                required={true}
                value={values.password}
                labelvariant={
                  errors.password && touched.password
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                inputvariant={
                  errors.password && touched.password
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                messagevariant={
                  errors.password && touched.password
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.password && touched.password ? errors.password : ""
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <MEButton
              type="submit"
              disabled={!isValid}
              className="flex items-center gap-2"
            >
              {updateUsernameLoader ? (
                <MELoaderIcon />
              ) : (
                <Check className="w-4 h-4" />
              )}
              Save Changes
            </MEButton>
          </div>
        </div>
      </form>
    </div>
  );
};

// Validation Schema
const updatedUsernameValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(usernameMinChar, usernameMinLength)
    .max(usernameMaxChar, usernameMaxLength)
    .required(usernameRequired),
  password: Yup.string()
    .min(passwordMinChar, passwordMinLength)
    .max(passwordMaxChar, passwordMaxLength)
    .required(passwordRequired),
});

export default UpdatedUsernameComponent;
