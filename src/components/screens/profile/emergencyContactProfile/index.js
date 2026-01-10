import React, { useState } from "react";

import { useFormik } from "formik";
import { Edit2, X, Check } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import _ from "lodash";
import * as Yup from "yup";

import MESelect from "@/components/common/form/select";
import MEInput from "@MECommonComponents/input/meInput";
import MEButton from "@MECommonComponents/button/meButton";
import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";
import ProfileErrorMessageComponent from "@MEScreenComponents/profile/errorMessage";
import LastUpdatedAtInfoComponent from "@MEScreenComponents/profile/lastUpdatedAtInfo";

import { phoneRegExp } from "@MEUtils/regexp";
import { createEmergencyContactProfilePayload } from "@MEUtils/apiPayload";
import {
  addEmergencyContactProfile,
  updatedEmergencyContactProfile,
} from "@MERedux/profile/profileAction";
import {
  EMERGENCY_CONTACT_RELATIONS,
  ME_INPUT_COMPONENT_VARIANTS,
  ME_SELECT_COMPONENT_VARIANTS,
} from "@MEHelpers/enums";

const EmergencyContactProfileComponent = () => {
  const dispatch = useDispatch();

  const [isEditMode, setIsEditMode] = useState(false);
  const {
    profile,
    emergencyContactProfileFormLoader,
    emergencyContactProfileFormError,
  } = useSelector((state) => state.profile);

  const formik = useFormik({
    initialValues: { ...profile.emergencyContactProfile },
    validationSchema: emergencyContactValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: (values) => {
      if (values.id) {
        const payload = createEmergencyContactProfilePayload(values);
        dispatch(
          updatedEmergencyContactProfile({ id: values.id, data: payload })
        );
      } else {
        const payload = createEmergencyContactProfilePayload(values);
        dispatch(addEmergencyContactProfile(payload));
      }
    },
  });

  const {
    values,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
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

  const handleEditMode = async () => {
    setIsEditMode(true);

    if (values.id) {
      // Validate form first before entering edit mode
      try {
        await emergencyContactValidationSchema.validate(values, {
          abortEarly: false,
        });
      } catch (validationError) {
        // Form has errors, display them
        const formErrors = {};
        const formTouched = {};

        if (validationError.inner && Array.isArray(validationError.inner)) {
          validationError.inner.forEach((error) => {
            formErrors[error.path] = error.message;
            formTouched[error.path] = true;
          });
        }

        formik.setErrors(formErrors);
        formik.setTouched(formTouched);
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {emergencyContactProfileFormError && (
        <ProfileErrorMessageComponent
          message={emergencyContactProfileFormError}
        />
      )}

      <form onSubmit={handleSubmit}>
        <div>
          {/* Header with Edit Button */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold text-primary">
                Emergency Contact Profile
              </h2>
              <LastUpdatedAtInfoComponent updatedAt={values.updatedAt} />
            </div>
            <button
              type="button"
              onClick={() =>
                isEditMode ? handleCloseEditMode() : handleEditMode()
              }
              className="p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors"
              title={isEditMode ? "Cancel" : "Edit"}
            >
              {isEditMode ? (
                <X className="w-5 h-5" />
              ) : (
                <Edit2 className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Emergency Contact Information Section */}
          <div className="mt-6">
            <h3 className="text-base font-semibold mb-4 text-primary">
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <MEInput
                id="name"
                meclassname="flex"
                type="text"
                label="Name"
                required={true}
                disabled={!isEditMode}
                value={values.name}
                labelvariant={
                  errors.name && touched.name
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                inputvariant={
                  errors.name && touched.name
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                messagevariant={
                  errors.name && touched.name
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                message={errors.name && touched.name ? errors.name : ""}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {/* Relation */}
              <MESelect
                label="Relation"
                required={true}
                disabled={!isEditMode}
                value={values.relation}
                selectLabel="Select Relation"
                selectVariant={
                  errors.relation && touched.relation
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                labelVariant={
                  errors.relation && touched.relation
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.relation && touched.relation
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.relation && touched.relation ? errors.relation : ""
                }
                options={_.map(EMERGENCY_CONTACT_RELATIONS, (label) => ({
                  label: label,
                  value: label,
                }))}
                onBlur={() => setFieldTouched("relation", true)}
                onChange={(value) => setFieldValue("relation", value)}
              />

              {/* Phone Number */}
              <MEInput
                id="phoneNumber"
                meclassname="flex"
                type="text"
                label="Phone Number"
                required={true}
                disabled={!isEditMode}
                value={values.phoneNumber}
                labelvariant={
                  errors.phoneNumber && touched.phoneNumber
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                inputvariant={
                  errors.phoneNumber && touched.phoneNumber
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                messagevariant={
                  errors.phoneNumber && touched.phoneNumber
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.phoneNumber && touched.phoneNumber
                    ? errors.phoneNumber
                    : ""
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {/* Alternate Phone Number */}
              <MEInput
                id="alternatePhoneNumber"
                meclassname="flex"
                type="text"
                label="Alternate Phone Number"
                required={false}
                disabled={!isEditMode}
                value={values.alternatePhoneNumber}
                labelvariant={
                  errors.alternatePhoneNumber && touched.alternatePhoneNumber
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                inputvariant={
                  errors.alternatePhoneNumber && touched.alternatePhoneNumber
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                messagevariant={
                  errors.alternatePhoneNumber && touched.alternatePhoneNumber
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.alternatePhoneNumber && touched.alternatePhoneNumber
                    ? errors.alternatePhoneNumber
                    : ""
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {/* Email */}
              <MEInput
                id="email"
                meclassname="flex"
                type="email"
                label="Email"
                required={false}
                disabled={!isEditMode}
                value={values.email}
                labelvariant={
                  errors.email && touched.email
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                inputvariant={
                  errors.email && touched.email
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                messagevariant={
                  errors.email && touched.email
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                message={errors.email && touched.email ? errors.email : ""}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {/* Address */}
              <MEInput
                id="address"
                meclassname="flex"
                type="text"
                label="Address"
                required={false}
                disabled={!isEditMode}
                value={values.address}
                labelvariant={
                  errors.address && touched.address
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                inputvariant={
                  errors.address && touched.address
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                messagevariant={
                  errors.address && touched.address
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.address && touched.address ? errors.address : ""
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          {isEditMode && (
            <div className="flex gap-4 mt-8">
              <MEButton
                type="submit"
                disabled={!isValid || emergencyContactProfileFormLoader}
                className="flex items-center gap-2"
              >
                {emergencyContactProfileFormLoader ? (
                  <MELoaderIcon className="w-5 h-5 text-white" />
                ) : (
                  <Check className="w-5 h-5" />
                )}
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
          )}
        </div>
      </form>
    </div>
  );
};

// Validation Schema
const emergencyContactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),
  relation: Yup.string().required("Relation is required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .length(10, "Phone number must be 10 digits")
    .required("Phone number is required"),
  alternatePhoneNumber: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .length(10, "Alternate phone number must be 10 digits")
    .nullable(),
  email: Yup.string()
    .email("Invalid email format")
    .max(100, "Email must be at most 100 characters")
    .nullable(),
  address: Yup.string()
    .min(5, "Address must be at least 5 characters")
    .max(200, "Address must be at most 200 characters")
    .nullable(),
});

export default EmergencyContactProfileComponent;
