import React, { useState } from "react";
import { useFormik } from "formik";
import { Edit2, Check, X } from "lucide-react";

import _ from "lodash";
import * as Yup from "yup";
import moment from "moment";

import MESelect from "@/components/common/form/select";
import MEInput from "@MECommonComponents/input/meInput";
import MEButton from "@MECommonComponents/button/meButton";
import MECheckbox from "@MECommonComponents/form/checkbox";
import MEDatePicker from "@MECommonComponents/form/datePicker";
import MERadioButton from "@MECommonComponents/form/radioButton";

import {
  GENDERS,
  ME_INPUT_COMPONENT_VARIANTS,
  ME_SELECT_COMPONENT_VARIANTS,
  ME_CHECKBOX_COMPONENT_VARIANTS,
  ME_DATEPICKER_COMPONENT_VARIANTS,
  ME_RADIO_BUTTON_COMPONENT_VARIANTS,
} from "@MEHelpers/enums";

// Class enumeration for studying in class
const CLASSES = {
  CLASS_1: "Class 1",
  CLASS_2: "Class 2",
  CLASS_3: "Class 3",
  CLASS_4: "Class 4",
  CLASS_5: "Class 5",
  CLASS_6: "Class 6",
  CLASS_7: "Class 7",
  CLASS_8: "Class 8",
  CLASS_9: "Class 9",
  CLASS_10: "Class 10",
  CLASS_11: "Class 11",
  CLASS_12: "Class 12",
};

const SiblingProfileComponent = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      studyingInClass: "",
      sameSchool: [{ isSelected: false, label: "Same school as student" }],
      schoolName: "",
      admissionNumber: "",
    },
    validationSchema: siblingValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: (values) => {
      console.log("Sibling Profile Form submitted");
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

  console.log("Sibling Profile - Form Values:", errors);
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit}>
        <div>
          {/* Header with Edit Button */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-primary">Sibling Profile</h2>
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

          {/* Basic Information Section */}
          <div className="mt-3">
            <h3 className="text-base font-semibold mb-4 text-primary">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MEInput
                id="firstName"
                meclassname="flex"
                type={"text"}
                label={"First Name"}
                required={true}
                disabled={!isEditMode}
                value={values.firstName}
                labelvariant={
                  errors.firstName && touched.firstName
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                inputvariant={
                  errors.firstName && touched.firstName
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                messagevariant={
                  errors.firstName && touched.firstName
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.firstName && touched.firstName ? errors.firstName : ""
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <MEInput
                id="lastName"
                meclassname="flex"
                type={"text"}
                label={"Last Name"}
                required={true}
                disabled={!isEditMode}
                value={values.lastName}
                labelvariant={
                  errors.lastName && touched.lastName
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                inputvariant={
                  errors.lastName && touched.lastName
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                messagevariant={
                  errors.lastName && touched.lastName
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.lastName && touched.lastName ? errors.lastName : ""
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <MEDatePicker
                label={"Date of Birth"}
                placeholder={""}
                required={true}
                disabled={!isEditMode}
                selectedDate={values.dateOfBirth}
                labelVariant={
                  errors.dateOfBirth && touched.dateOfBirth
                    ? ME_DATEPICKER_COMPONENT_VARIANTS.DANGER
                    : ME_DATEPICKER_COMPONENT_VARIANTS.PRIMARY
                }
                buttonVariant={
                  errors.dateOfBirth && touched.dateOfBirth
                    ? ME_DATEPICKER_COMPONENT_VARIANTS.DANGER
                    : ME_DATEPICKER_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.dateOfBirth && touched.dateOfBirth
                    ? ME_DATEPICKER_COMPONENT_VARIANTS.DANGER
                    : ME_DATEPICKER_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.dateOfBirth && touched.dateOfBirth
                    ? errors.dateOfBirth
                    : ""
                }
                onSelect={(date) => setFieldValue("dateOfBirth", date)}
                onBlur={() => setFieldTouched("dateOfBirth", true)}
              />

              <MESelect
                label="Studying in Class"
                required={true}
                disabled={!isEditMode}
                value={values.studyingInClass}
                selectLabel="Select Class"
                selectVariant={
                  errors.studyingInClass && touched.studyingInClass
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                labelVariant={
                  errors.studyingInClass && touched.studyingInClass
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.studyingInClass && touched.studyingInClass
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.studyingInClass && touched.studyingInClass
                    ? errors.studyingInClass
                    : ""
                }
                options={_.map(CLASSES, (label, value) => ({
                  label,
                  value,
                }))}
                onBlur={() => setFieldTouched("studyingInClass", true)}
                onChange={(value) => setFieldValue("studyingInClass", value)}
              />

              <MERadioButton
                label="Gender"
                value={values.gender}
                disabled={!isEditMode}
                labelVariant={
                  errors.gender && touched.gender
                    ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                    : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                }
                radioButtonItemVariant={
                  errors.gender && touched.gender
                    ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                    : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.gender && touched.gender
                    ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                    : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                }
                message={errors.gender && touched.gender ? errors.gender : ""}
                radioGroupItems={_.map(GENDERS, (label, value) => ({
                  label,
                  value,
                }))}
                onBlur={() => setFieldTouched("gender", true)}
                onChange={(value) => setFieldValue("gender", value)}
              />
            </div>
          </div>

          {/* School Information Section */}
          <div className="mt-3">
            <h3 className="text-base font-semibold mb-2 text-primary">
              School Information
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <MECheckbox
                label=""
                disabled={!isEditMode}
                labelVariant={
                  errors.sameSchool && touched.sameSchool
                    ? ME_CHECKBOX_COMPONENT_VARIANTS.DANGER
                    : ME_CHECKBOX_COMPONENT_VARIANTS.PRIMARY
                }
                checkboxVariant={
                  errors.sameSchool && touched.sameSchool
                    ? ME_CHECKBOX_COMPONENT_VARIANTS.DANGER
                    : ME_CHECKBOX_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.sameSchool && touched.sameSchool
                    ? ME_CHECKBOX_COMPONENT_VARIANTS.DANGER
                    : ME_CHECKBOX_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.sameSchool && touched.sameSchool
                    ? errors.sameSchool
                    : ""
                }
                checkboxList={values.sameSchool}
                onChange={(values) => setFieldValue("sameSchool", values)}
              />

              {!values.sameSchool[0].isSelected && (
                <MEInput
                  id="schoolName"
                  meclassname="flex"
                  type={"text"}
                  label={"School Name"}
                  disabled={!isEditMode}
                  value={values.schoolName}
                  labelvariant={
                    errors.schoolName && touched.schoolName
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  inputvariant={
                    errors.schoolName && touched.schoolName
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  messagevariant={
                    errors.schoolName && touched.schoolName
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  message={
                    errors.schoolName && touched.schoolName
                      ? errors.schoolName
                      : ""
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              )}

              {values.sameSchool[0].isSelected && (
                <MEInput
                  id="admissionNumber"
                  meclassname="flex"
                  type={"text"}
                  label={"Admission Number"}
                  disabled={!isEditMode}
                  value={values.admissionNumber}
                  labelvariant={
                    errors.admissionNumber && touched.admissionNumber
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  inputvariant={
                    errors.admissionNumber && touched.admissionNumber
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  messagevariant={
                    errors.admissionNumber && touched.admissionNumber
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  message={
                    errors.admissionNumber && touched.admissionNumber
                      ? errors.admissionNumber
                      : ""
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              )}
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
const siblingValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(25, "First name must be at most 25 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .max(25, "Last name must be at most 25 characters")
    .required("Last name is required"),
  gender: Yup.string().required("Gender is required"),
  dateOfBirth: Yup.date()
    .required("Date of birth is required")
    .max(moment().endOf("day"), "Date of birth cannot be in the future"),
  studyingInClass: Yup.string().required("Class is required"),
  sameSchool: Yup.array().of(
    Yup.object().shape({
      isSelected: Yup.boolean(),
      label: Yup.string(),
    })
  ),
  schoolName: Yup.string().when("sameSchool", {
    is: (sameSchool) => Array.isArray(sameSchool) && !sameSchool[0]?.isSelected,
    then: (schema) =>
      schema
        .min(2, "School name must be at least 2 characters")
        .max(100, "School name must be at most 100 characters")
        .required("School name is required"),
  }),
  admissionNumber: Yup.string().when("sameSchool", {
    is: (sameSchool) => Array.isArray(sameSchool) && sameSchool[0]?.isSelected,
    then: (schema) =>
      schema
        .min(2, "Admission number must be at least 2 characters")
        .max(50, "Admission number must be at most 50 characters")
        .required("Admission number is required"),
  }),
});

export default SiblingProfileComponent;
