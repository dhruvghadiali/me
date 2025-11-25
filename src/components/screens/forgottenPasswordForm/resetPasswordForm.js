import { useFormik } from "formik";
import { CircleAlertIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import { variants } from "@MEUtils/enums";
import { validationMessage } from "@MEUtils/validationMessage";
import { forgottenPasswordResetPasswordAPIPayload } from "@MEUtils/apiPayload";
import { resetPassword } from "@MERedux/forgottenPassword/forgottenPasswordAction";
import { forgottenPasswordFormTranslation } from "@MELocalization/forgottenPassword/forgottenPasswordTranslationEn";

import _ from "lodash";
import * as Yup from "yup";

import MEInput from "@MECommonComponents/input/meInput";
import MEButton from "@MECommonComponents/button/meButton";
import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";

const ResetPasswordForm = () => {
  const { loader, error, resetPasswordToken, selectedUserForSendOtp } =
    useSelector((state) => state.forgottenPassword);
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: ResetPasswordFormSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) =>
      dispatch(
        resetPassword(
          forgottenPasswordResetPasswordAPIPayload({
            resetPasswordToken,
            password: values && values.password ? values.password : "",
            userId:
              selectedUserForSendOtp && selectedUserForSendOtp.id
                ? selectedUserForSendOtp.id
                : "",
          })
        )
      ),
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
          id="password"
          type={"password"}
          label={
            i18n.exists("passwordInputLabel")
              ? _.upperFirst(t("passwordInputLabel"))
              : _.upperFirst(
                  forgottenPasswordFormTranslation.passwordInputLabel
                )
          }
          message={formik.errors.password}
          value={formik.values.password}
          labelvariant={variants.DARK}
          inputvariant={variants.DARK}
          messagevariant={variants.DANGER}
          meclassname="flex"
          onChange={formik.handleChange}
        />

        <MEInput
          id="confirmPassword"
          type={"password"}
          label={
            i18n.exists("confirmPasswordInputLabel")
              ? _.upperFirst(t("confirmPasswordInputLabel"))
              : _.upperFirst(
                  forgottenPasswordFormTranslation.confirmPasswordInputLabel
                )
          }
          message={formik.errors.confirmPassword}
          value={formik.values.confirmPassword}
          labelvariant={variants.DARK}
          inputvariant={variants.DARK}
          messagevariant={variants.DANGER}
          meclassname="flex"
          onChange={formik.handleChange}
        />

        <div className="pt-2">
          <MEButton
            type="submit"
            meclassname="flex w-full"
            buttonVariant={variants.SUCCESS}
            disabled={loader}>
            {i18n.exists("resetPasswordButtonLabel")
              ? _.upperCase(t("resetPasswordButtonLabel"))
              : _.upperCase(
                  forgottenPasswordFormTranslation.resetPasswordButtonLabel || "RESET PASSWORD"
                )}
            {loader && <MELoaderIcon />}
          </MEButton>
        </div>
      </form>
    </>
  );
};

const ResetPasswordFormSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, validationMessage.passwordMin)
    .max(50, validationMessage.passwordMax)
    .required(validationMessage.passwordRequired),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], validationMessage.confirmPasswordMatch)
    .required(validationMessage.confirmPasswordRequired),
});

ResetPasswordForm.propTypes = {};

export default ResetPasswordForm;
