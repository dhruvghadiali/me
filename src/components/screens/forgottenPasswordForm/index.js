import { useFormik } from "formik";
import { CircleAlertIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import { variants } from "@MEUtils/enums";
import { validationMessage } from "@MEUtils/validationMessage";
import { checkUserInformation } from "@MERedux/forgottenPassword/forgottenPasswordAction";
import { forgottenPasswordFormTranslation } from "@MELocalizationEn/forgottenPassword/forgottenPasswordTranslationEn";

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
      findAccount: "",
    },
    validationSchema: ForgottenPasswordFormSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(checkUserInformation(values));
    },
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
          id="findAccount"
          type={"text"}
          label={
            i18n.exists("findAccountTextFieldLabel")
              ? _.upperFirst(t("findAccountTextFieldLabel"))
              : _.upperFirst(
                  forgottenPasswordFormTranslation.findAccountTextFieldLabel
                )
          }
          message={formik.errors.findAccount}
          value={formik.values.findAccount}
          labelVariant={variants.DARK}
          inputVariant={variants.DARK}
          messageVariant={variants.DANGER}
          meClassName="flex"
          onChange={formik.handleChange}
        />

        <div className="py-2">
          <MEButton
            type="submit"
            meClassName="flex"
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

const ForgottenPasswordFormSchema = Yup.object().shape({
  findAccount: Yup.string()
    .min(5, validationMessage.findAccountMin)
    .max(50, validationMessage.findAccountMax)
    .required(validationMessage.findAccountRequired),
});

ForgottenPasswordForm.propTypes = {};

export default ForgottenPasswordForm;
