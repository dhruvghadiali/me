// import { useEffect } from "react";
import { useFormik } from "formik";
// import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
// import { useSelector, useDispatch } from "react-redux";

// import { routeName } from "@MEUtils/routeName";
// import { validateUser } from "@MERedux/login/loginAction";
import { variants } from "@MEUtils/enums";
import { validationMessage } from "@MEUtils/validationMessage";
// import { changeActiveMenu } from  "@MERedux/sidebar/sidebarSlice";
import { signinFormTranslation } from "@MELocalizationEn/signin/signinTranslationEn";

import * as Yup from "yup";
import _ from "lodash";
import MEInput from "@MECommonComponents/input/meInput";
import MEButton from "@MECommonComponents/button/meButton";
// import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";

const SignInForm = () => {
  // const { loader, error, isValidUser } = useSelector((state) => state.login);
  const { t, i18n } = useTranslation();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isValidUser) {
  //     navigate(routeName.dashboard, { replace: true });
  //     dispatch(changeActiveMenu(sidebarMenuName.DASHBOARD));
  //   }
  // }, [isValidUser]);

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
      // dispatch(validateUser(values));
    },
  });

  return (
    <>
      <div className="py-3" />
      <form onSubmit={formik.handleSubmit}>
        <MEInput
          id="username"
          type={"text"}
          label={
            i18n.exists("usernameInputLabel")
              ? t("usernameInputLabel")
              : SignInForm.usernameInputLabel
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
              ? t("passwordInputLabel")
              : SignInForm.passwordInputLabel
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
              : _.upperCase(signinFormTranslation.signinButtonLabel)}
            {/* {loader && <MELoaderIcon />} */}
          </MEButton>
        </div>
      </form>

      <MEButton variant="link" size="sm" className="p-0 text-dark flex">
        Forgotten Password?
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
    .required(validationMessage.required),
});

SignInForm.propTypes = {};

export default SignInForm;
