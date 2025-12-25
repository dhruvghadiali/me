import React, { useState } from "react";
import { useFormik } from "formik";
import { Edit2, X, Check } from "lucide-react";

import * as Yup from "yup";

import MESelect from "@/components/common/form/select";
import MEInput from "@MECommonComponents/input/meInput";
import MEButton from "@MECommonComponents/button/meButton";
import { phoneRegExp } from "@MEUtils/regexp";
import {
  ME_INPUT_COMPONENT_VARIANTS,
  ME_SELECT_COMPONENT_VARIANTS,
} from "@MEHelpers/enums";

// Relation options
const RELATIONS = [
  { label: "Sibling", value: "sibling" },
  { label: "Grandparent", value: "grandparent" },
  { label: "Uncle/Aunt", value: "uncle_aunt" },
  { label: "Cousin", value: "cousin" },
  { label: "Friend", value: "friend" },
  { label: "Other", value: "other" },
];

const EmergencyContactProfileComponent = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      relation: "",
      phoneNumber: "",
      alternatePhoneNumber: "",
      email: "",
      address: "",
    },
    validationSchema: emergencyContactValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: (values) => {
      console.log("Form submitted");
      console.log("Submitted Values:", values);
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

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit}>
        <div>
          {/* Header with Edit Button */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-primary">
              Emergency Contact Profile
            </h2>
            <button
              type="button"
              onClick={() =>
                isEditMode ? handleCloseEditMode() : setIsEditMode(true)
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
                id="relation"
                label="Relation"
                required={true}
                disabled={!isEditMode}
                value={values.relation}
                selectLabel="Select Relation"
                options={RELATIONS}
                labelvariant={
                  errors.relation && touched.relation
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                selectvariant={
                  errors.relation && touched.relation
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                messagevariant={
                  errors.relation && touched.relation
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.relation && touched.relation ? errors.relation : ""
                }
                onChange={(value) => {
                  setFieldValue("relation", value);
                }}
                onBlur={() => setFieldTouched("relation", true)}
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
                disabled={!isValid}
                className="flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
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
