import { useFormik } from "formik";
import { Check } from "lucide-react";

import _ from "lodash";
import * as Yup from "yup";

import { ME_INPUT_COMPONENT_VARIANTS } from "@MEHelpers/enums";

import MEInput from "@MECommonComponents/input/meInput";
import MEButton from "@MECommonComponents/button/meButton";
import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";
// import ProfileErrorMessageComponent from "@MEScreenComponents/profile/errorMessage";
import LastUpdatedAtInfoComponent from "@MEScreenComponents/settings/lastUpdatedAtInfo";

const UpdatedUsernameComponent = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      updatedAt: new Date().toISOString(),
    },
    validationSchema: updatedUsernameValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: (values) => {
      // Handle form submission
      console.log("Form submitted");
      console.log("Submitted Values:", values);
    },
  });

  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    setTouched,
    handleSubmit,
  } = formik;

  const handleCloseEditMode = () => {
    console.log("Submitted Values:", values);
    setTouched({});
    setIsEditMode(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* {studentProfileFormError && (
        <ProfileErrorMessageComponent message={studentProfileFormError} />
      )} */}
      <form onSubmit={handleSubmit}>
        <div>
          {/* Header with Edit Button */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold text-primary">
                Update Username
              </h2>
              <LastUpdatedAtInfoComponent updatedAt={values.updatedAt} />
            </div>
          </div>

          {/* Basic Information Section */}
          <div className="mt-3">
            <h3 className="text-base font-semibold mb-4 text-primary">
              Change your account username
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <MEInput
                id="username"
                meclassname="flex"
                type={"text"}
                label={"Username"}
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
                label={"Password"}
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
                  errors.password && touched.password
                    ? errors.newPassword
                    : ""
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
              {/* {studentProfileFormLoader ? (
                  <MELoaderIcon />
                ) : ( */}
              <Check className="w-4 h-4" />
              {/* )} */}
              Save Changes
            </MEButton>
            <MEButton
              type="button"
              onClick={handleCloseEditMode}
              variant="outline"
            >
              Cancel
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
    .min(2, "username must be at least 2 characters")
    .max(25, "Username must be at most 25 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(2, "password must be at least 2 characters")
    .max(25, "Password must be at most 25 characters")
    .required("Password is required"),
});

export default UpdatedUsernameComponent;
