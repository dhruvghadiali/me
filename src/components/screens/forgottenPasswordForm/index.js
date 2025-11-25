import { useFormik } from "formik";
import { CircleAlertIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import { variants } from "@MEUtils/enums";
import { validationMessage } from "@MEUtils/validationMessage";
import { forgottenPasswordAPIPayload } from "@MEUtils/apiPayload";
import { checkUserInformation } from "@MERedux/forgottenPassword/forgottenPasswordAction";
import { forgottenPasswordFormTranslation } from "@MELocalization/forgottenPassword/forgottenPasswordTranslationEn";

import _ from "lodash";
import * as Yup from "yup";

import MEInput from "@MECommonComponents/input/meInput";
import MEButton from "@MECommonComponents/button/meButton";
import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";

const ForgottenPasswordForm = () => {
  const { loader, error } = useSelector((state) => state.forgottenPassword);
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      accountName: "",
    },
    validationSchema: ForgottenPasswordFormSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) =>
      dispatch(checkUserInformation(forgottenPasswordAPIPayload(values))),
  });

  return (
    <>
      {error && (
        <div className="bg-destructive/10 border border-destructive/20 mb-4 flex items-center gap-2 rounded-lg p-3">
          <CircleAlertIcon className="text-destructive h-5 w-5 shrink-0" />
          <p className="text-destructive text-sm font-medium">{error}</p>
        </div>
      )}

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <MEInput
          id="accountName"
          type={"text"}
          label={
            i18n.exists("findAccountTextFieldLabel")
              ? _.upperFirst(t("findAccountTextFieldLabel"))
              : _.upperFirst(
                  forgottenPasswordFormTranslation.findAccountTextFieldLabel
                )
          }
          message={formik.errors.accountName}
          value={formik.values.accountName}
          labelvariant={variants.DARK}
          inputvariant={variants.DARK}
          messagevariant={variants.DANGER}
          meclassname="flex"
          onChange={formik.handleChange}
        />

        <div className="pt-2">
          <MEButton
            type="submit"
            meclassname="flex"
            buttonVariant={variants.SUCCESS}
            className="w-full"
            disabled={loader}
          >
            {i18n.exists("findAccountButtonLabel")
              ? _.upperCase(t("findAccountButtonLabel"))
              : _.upperCase(
                  forgottenPasswordFormTranslation.findAccountButtonLabel
                )}
            {loader && <MELoaderIcon />}
          </MEButton>
        </div>
      </form>
    </>
  );
};

const ForgottenPasswordFormSchema = Yup.object().shape({
  accountName: Yup.string()
    .min(5, validationMessage.findAccountMin)
    .max(50, validationMessage.findAccountMax)
    .required(validationMessage.findAccountRequired),
});

ForgottenPasswordForm.propTypes = {};

export default ForgottenPasswordForm;
