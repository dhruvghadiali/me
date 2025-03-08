import { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { CircleAlertIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import { variants } from "@MEUtils/enums";
import { routeName } from "@MEUtils/routeName";
import { validateUser } from "@MERedux/signIn/signInAction";
import { validationMessage } from "@MEUtils/validationMessage";
import { signInFormTranslation } from "@MELocalizationEn/signIn/signInTranslationEn";

import _ from "lodash";
import * as Yup from "yup";

import MEInput from "@MECommonComponents/input/meInput";
import MEButton from "@MECommonComponents/button/meButton";
import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";

const SignInForm = () => {
  const { loader, error, isValidUser } = useSelector((state) => state.signIn);
  const { t, i18n } = useTranslation();
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isValidUser) {
      navigate(routeName.dashboard, { replace: true });
    }
  }, [isValidUser]);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: SignInSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(validateUser(values));
    },
  });

  const onForgottenPasswordClick = () => {
    navigate(routeName.forgottenPassword, { replace: true });
  };

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
          id="username"
          type={"text"}
          label={
            i18n.exists("usernameInputLabel")
              ? _.upperFirst(t("usernameInputLabel"))
              : _.upperFirst(signInFormTranslation.usernameInputLabel)
          }
          message={formik.errors.username}
          value={formik.values.username}
          labelVariant={variants.DARK}
          inputVariant={variants.DARK}
          messageVariant={variants.DANGER}
          meClassName="flex"
          onChange={formik.handleChange}
        />
        {formik.errors.username && <div className="py-1" />}
        <MEInput
          id="password"
          type={"password"}
          label={
            i18n.exists("passwordInputLabel")
              ? _.upperFirst(t("passwordInputLabel"))
              : _.upperFirst(signInFormTranslation.passwordInputLabel)
          }
          message={formik.errors.password}
          value={formik.values.password}
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
            {i18n.exists("signinButtonLabel")
              ? _.upperCase(t("signinButtonLabel"))
              : _.upperCase(signInFormTranslation.signinButtonLabel)}
            {loader && <MELoaderIcon />}
          </MEButton>
        </div>
      </form>

      <MEButton
        variant="link"
        size="sm"
        className="p-0 text-dark flex"
        onClick={() => onForgottenPasswordClick()}
      >
        {i18n.exists("forgottenPasswordLink")
          ? _.upperFirst(t("forgottenPasswordLink"))
          : _.upperFirst(signInFormTranslation.forgottenPasswordLink)}
      </MEButton>
    </>
  );
};

const SignInSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, validationMessage.usernameMin)
    .max(10, validationMessage.usernameMax)
    .required(validationMessage.usernameRequired),
  password: Yup.string()
    .min(5, validationMessage.passwordMin)
    .max(10, validationMessage.passwordMax)
    .required(validationMessage.passwordRequired),
});

SignInForm.propTypes = {};

export default SignInForm;
