import { useFormik } from "formik";
import { CircleAlertIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import { variants } from "@MEUtils/enums";
import { validationMessage } from "@MEUtils/validationMessage";
import { resetPassword } from "@MERedux/forgottenPassword/forgottenPasswordAction";
import { forgottenPasswordFormTranslation } from "@MELocalizationEn/forgottenPassword/forgottenPasswordTranslationEn";

import _ from "lodash";
import * as Yup from "yup";

import MEInput from "@MECommonComponents/input/meInput";
import MEButton from "@MECommonComponents/button/meButton";
import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";

const ResetPasswordForm = () => {
  const { loader, error } = useSelector((state) => state.forgottenPassword);
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
    onSubmit: (values) => dispatch(resetPassword(values)),
  });

  return (
    <>
      <div className="py-3" />
      {error && (
        <div className="bg-danger mb-2 flex items-center  rounded-md">
          <CircleAlertIcon className="text-accent ml-2" />
          <p className="text-accent p-2 text-center">{error}</p>
        </div>
      )}

      <form onSubmit={formik.handleSubmit}>
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

        {formik.errors.password && <div className="py-1" />}

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

        <div className="py-2">
          <MEButton
            type="submit"
            meclassname="flex"
            buttonVariant={variants.SUCCESS}
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
