import { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import { variants } from "@MEUtils/enums";
import { routeName } from "@MEUtils/routeName";
import { phoneRegExp } from "@MEUtils/regexp";
import { CircleAlertIcon } from "lucide-react";
import { validationMessage } from "@MEUtils/validationMessage";
import { signUpFormTranslation } from "@MELocalizationEn/signUp/signUpTranslationEn";

import _ from "lodash";
import * as Yup from "yup";

import MEInput from "@MECommonComponents/input/meInput";
import MEButton from "@MECommonComponents/button/meButton";
import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";

const SignUpForm = () => {
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
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignUpSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log("values", values);
      // dispatch(validateUser(values));
    },
  });

  const onForgottenPasswordClick = () => {
    navigate(routeName.dashboard, { replace: true });
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
          id="firstName"
          type={"text"}
          label={
            i18n.exists("firstNameInputLabel")
              ? _.upperFirst(t("firstNameInputLabel"))
              : _.upperFirst(signUpFormTranslation.firstNameInputLabel)
          }
          message={formik.errors.firstName}
          value={formik.values.firstName}
          labelVariant={variants.DARK}
          inputVariant={variants.DARK}
          messageVariant={variants.DANGER}
          meClassName="flex"
          onChange={formik.handleChange}
        />
        {formik.errors.firstName && <div className="py-1" />}
        <MEInput
          id="lastName"
          type={"text"}
          label={
            i18n.exists("lastNameInputLabel")
              ? _.upperFirst(t("lastNameInputLabel"))
              : _.upperFirst(signUpFormTranslation.lastNameInputLabel)
          }
          message={formik.errors.lastName}
          value={formik.values.lastName}
          labelVariant={variants.DARK}
          inputVariant={variants.DARK}
          messageVariant={variants.DANGER}
          meClassName="flex"
          onChange={formik.handleChange}
        />
        {formik.errors.lastName && <div className="py-1" />}
        <MEInput
          id="email"
          type={"text"}
          label={
            i18n.exists("emailInputLabel")
              ? _.upperFirst(t("emailInputLabel"))
              : _.upperFirst(signUpFormTranslation.emailInputLabel)
          }
          message={formik.errors.email}
          value={formik.values.email}
          labelVariant={variants.DARK}
          inputVariant={variants.DARK}
          messageVariant={variants.DANGER}
          meClassName="flex"
          onChange={formik.handleChange}
        />
        {formik.errors.email && <div className="py-1" />}
        <MEInput
          id="phoneNumber"
          type={"text"}
          label={
            i18n.exists("phoneNumberInputLabel")
              ? _.upperFirst(t("phoneNumberInputLabel"))
              : _.upperFirst(signUpFormTranslation.phoneNumberInputLabel)
          }
          message={formik.errors.phoneNumber}
          value={formik.values.phoneNumber}
          labelVariant={variants.DARK}
          inputVariant={variants.DARK}
          messageVariant={variants.DANGER}
          meClassName="flex"
          onChange={formik.handleChange}
        />
        {formik.errors.phoneNumber && <div className="py-1" />}
        <MEInput
          id="username"
          type={"text"}
          label={
            i18n.exists("usernameInputLabel")
              ? _.upperFirst(t("usernameInputLabel"))
              : _.upperFirst(signUpFormTranslation.usernameInputLabel)
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
              : _.upperFirst(signUpFormTranslation.passwordInputLabel)
          }
          message={formik.errors.password}
          value={formik.values.password}
          labelVariant={variants.DARK}
          inputVariant={variants.DARK}
          messageVariant={variants.DANGER}
          meClassName="flex"
          onChange={formik.handleChange}
        />
        {formik.errors.password && <div className="py-1" />}
        <MEInput
          id="confirmPassword"
          type={"password"}
          label={
            i18n.exists("confirmPasswordInputLabel")
              ? _.upperFirst(t("confirmPasswordInputLabel"))
              : _.upperFirst(signUpFormTranslation.confirmPasswordInputLabel)
          }
          message={formik.errors.confirmPassword}
          value={formik.values.confirmPassword}
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
            {i18n.exists("signupButtonLabel")
              ? _.upperCase(t("signupButtonLabel"))
              : _.upperCase(signUpFormTranslation.signupButtonLabel)}
            {loader && <MELoaderIcon />}
          </MEButton>
        </div>
      </form>
    </>
  );
};

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(5, validationMessage.firstNameMin)
    .max(25, validationMessage.firstNameMax)
    .required(validationMessage.firstNameRequired),
  lastName: Yup.string()
    .min(5, validationMessage.lastNameMin)
    .max(25, validationMessage.lastNameMax)
    .required(validationMessage.lastNameRequired),
  username: Yup.string()
    .min(5, validationMessage.usernameMin)
    .max(25, validationMessage.usernameMax)
    .required(validationMessage.usernameRequired),
  password: Yup.string()
    .min(5, validationMessage.passwordMin)
    .max(50, validationMessage.passwordMax)
    .required(validationMessage.passwordRequired),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], validationMessage.confirmPasswordMatch)
    .required(validationMessage.confirmPasswordRequired),
  email: Yup.string()
    .email(validationMessage.emailInvalid)
    .required(validationMessage.emailRequired),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, validationMessage.phoneNumberInvalid)
    .length(10, validationMessage.phoneNumberLength)
    .required(validationMessage.phoneNumberRequired),
});

SignUpForm.propTypes = {};

export default SignUpForm;
