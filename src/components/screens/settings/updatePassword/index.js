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

const UpdatedPasswordComponent = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
      confirmPassword: "",
      updatedAt: new Date().toISOString(),
    },
    validationSchema: updatedPasswordValidationSchema,
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
                Update Password
              </h2>
              <LastUpdatedAtInfoComponent updatedAt={values.updatedAt} />
            </div>
          </div>

          {/* Basic Information Section */}
          <div className="mt-3">
            <h3 className="text-base font-semibold mb-4 text-primary">
              Change your account password
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
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
                  errors.password && touched.password ? errors.password : ""
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <MEInput
                id="newPassword"
                meclassname="flex"
                type={"password"}
                label={"New Password"}
                required={true}
                value={values.newPassword}
                labelvariant={
                  errors.newPassword && touched.newPassword
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                inputvariant={
                  errors.newPassword && touched.newPassword
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                messagevariant={
                  errors.newPassword && touched.newPassword
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.newPassword && touched.newPassword
                    ? errors.newPassword
                    : ""
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <MEInput
                id="confirmPassword"
                meclassname="flex"
                type={"password"}
                label={"Confirm Password"}
                required={true}
                value={values.confirmPassword}
                labelvariant={
                  errors.confirmPassword && touched.confirmPassword
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                inputvariant={
                  errors.confirmPassword && touched.confirmPassword
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                messagevariant={
                  errors.confirmPassword && touched.confirmPassword
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.confirmPassword && touched.confirmPassword
                    ? errors.confirmPassword
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
const updatedPasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "password must be at least 2 characters")
    .max(25, "Password must be at most 25 characters")
    .required("Password is required"),
  newPassword: Yup.string()
    .min(2, "new password must be at least 2 characters")
    .max(25, "New password must be at most 25 characters")
    .required("New password is required"),
  confirmPassword: Yup.string()
    .min(2, "confirm password must be at least 2 characters")
    .max(25, "Confirm password must be at most 25 characters")
    .required("Confirm password is required"),
});

export default UpdatedPasswordComponent;
