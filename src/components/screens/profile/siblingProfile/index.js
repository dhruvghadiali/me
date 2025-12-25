import React, { useState } from "react";
import { useFormik } from "formik";
import { Edit2, Check, X, Plus, Trash2 } from "lucide-react";

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

  const initialSiblingObject = {
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    studyingInClass: "",
    sameSchool: [{ isSelected: false, label: "Same school as student" }],
    schoolName: "",
    admissionNumber: "",
  };

  const formik = useFormik({
    initialValues: {
      siblings: [initialSiblingObject],
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

  const handleAddSibling = () => {
    setFieldValue("siblings", [
      ...values.siblings,
      initialSiblingObject,
    ]);
  };

  const handleRemoveSibling = (index) => {
    const updatedSiblings = values.siblings.filter((_, i) => i !== index);
    setFieldValue("siblings", updatedSiblings);
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
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-primary">
                Sibling Information
              </h3>
              {isEditMode && (
                <button
                  type="button"
                  onClick={handleAddSibling}
                  className="flex items-center gap-2 px-3 py-1 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Sibling
                </button>
              )}
            </div>

            {_.map(values.siblings, (sibling, siblingIndex) => (
              <div key={siblingIndex} className="mb-6 p-4 border border-primary/20 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-primary">
                    Sibling {siblingIndex + 1}
                  </h4>
                  {isEditMode && values.siblings.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveSibling(siblingIndex)}
                      className="p-1 text-danger hover:bg-danger/10 rounded transition-colors"
                      title="Remove sibling"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <MEInput
                    id={`firstName-${siblingIndex}`}
                    meclassname="flex"
                    type={"text"}
                    label={"First Name"}
                    required={true}
                    disabled={!isEditMode}
                    value={sibling.firstName}
                    labelvariant={
                      errors.siblings?.[siblingIndex]?.firstName && touched.siblings?.[siblingIndex]?.firstName
                        ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                        : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                    }
                    inputvariant={
                      errors.siblings?.[siblingIndex]?.firstName && touched.siblings?.[siblingIndex]?.firstName
                        ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                        : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                    }
                    messagevariant={
                      errors.siblings?.[siblingIndex]?.firstName && touched.siblings?.[siblingIndex]?.firstName
                        ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                        : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                    }
                    message={
                      errors.siblings?.[siblingIndex]?.firstName && touched.siblings?.[siblingIndex]?.firstName 
                        ? errors.siblings[siblingIndex].firstName 
                        : ""
                    }
                    onChange={(e) => setFieldValue(`siblings.${siblingIndex}.firstName`, e.target.value)}
                    onBlur={() => setFieldTouched(`siblings.${siblingIndex}.firstName`, true)}
                  />

                  <MEInput
                    id={`lastName-${siblingIndex}`}
                    meclassname="flex"
                    type={"text"}
                    label={"Last Name"}
                    required={true}
                    disabled={!isEditMode}
                    value={sibling.lastName}
                    labelvariant={
                      errors.siblings?.[siblingIndex]?.lastName && touched.siblings?.[siblingIndex]?.lastName
                        ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                        : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                    }
                    inputvariant={
                      errors.siblings?.[siblingIndex]?.lastName && touched.siblings?.[siblingIndex]?.lastName
                        ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                        : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                    }
                    messagevariant={
                      errors.siblings?.[siblingIndex]?.lastName && touched.siblings?.[siblingIndex]?.lastName
                        ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                        : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                    }
                    message={
                      errors.siblings?.[siblingIndex]?.lastName && touched.siblings?.[siblingIndex]?.lastName 
                        ? errors.siblings[siblingIndex].lastName 
                        : ""
                    }
                    onChange={(e) => setFieldValue(`siblings.${siblingIndex}.lastName`, e.target.value)}
                    onBlur={() => setFieldTouched(`siblings.${siblingIndex}.lastName`, true)}
                  />

                  <MEDatePicker
                    label={"Date of Birth"}
                    placeholder={""}
                    required={true}
                    disabled={!isEditMode}
                    selectedDate={sibling.dateOfBirth}
                    labelVariant={
                      errors.siblings?.[siblingIndex]?.dateOfBirth && touched.siblings?.[siblingIndex]?.dateOfBirth
                        ? ME_DATEPICKER_COMPONENT_VARIANTS.DANGER
                        : ME_DATEPICKER_COMPONENT_VARIANTS.PRIMARY
                    }
                    buttonVariant={
                      errors.siblings?.[siblingIndex]?.dateOfBirth && touched.siblings?.[siblingIndex]?.dateOfBirth
                        ? ME_DATEPICKER_COMPONENT_VARIANTS.DANGER
                        : ME_DATEPICKER_COMPONENT_VARIANTS.PRIMARY
                    }
                    messageVariant={
                      errors.siblings?.[siblingIndex]?.dateOfBirth && touched.siblings?.[siblingIndex]?.dateOfBirth
                        ? ME_DATEPICKER_COMPONENT_VARIANTS.DANGER
                        : ME_DATEPICKER_COMPONENT_VARIANTS.PRIMARY
                    }
                    message={
                      errors.siblings?.[siblingIndex]?.dateOfBirth && touched.siblings?.[siblingIndex]?.dateOfBirth
                        ? errors.siblings[siblingIndex].dateOfBirth
                        : ""
                    }
                    onSelect={(date) => setFieldValue(`siblings.${siblingIndex}.dateOfBirth`, date)}
                    onBlur={() => setFieldTouched(`siblings.${siblingIndex}.dateOfBirth`, true)}
                  />

                  <MESelect
                    label="Studying in Class"
                    required={true}
                    disabled={!isEditMode}
                    value={sibling.studyingInClass}
                    selectLabel="Select Class"
                    selectVariant={
                      errors.siblings?.[siblingIndex]?.studyingInClass && touched.siblings?.[siblingIndex]?.studyingInClass
                        ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                        : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                    }
                    labelVariant={
                      errors.siblings?.[siblingIndex]?.studyingInClass && touched.siblings?.[siblingIndex]?.studyingInClass
                        ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                        : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                    }
                    messageVariant={
                      errors.siblings?.[siblingIndex]?.studyingInClass && touched.siblings?.[siblingIndex]?.studyingInClass
                        ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                        : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                    }
                    message={
                      errors.siblings?.[siblingIndex]?.studyingInClass && touched.siblings?.[siblingIndex]?.studyingInClass
                        ? errors.siblings[siblingIndex].studyingInClass
                        : ""
                    }
                    options={_.map(CLASSES, (label, value) => ({
                      label,
                      value,
                    }))}
                    onBlur={() => setFieldTouched(`siblings.${siblingIndex}.studyingInClass`, true)}
                    onChange={(value) => setFieldValue(`siblings.${siblingIndex}.studyingInClass`, value)}
                  />

                  <MERadioButton
                    label="Gender"
                    value={sibling.gender}
                    disabled={!isEditMode}
                    labelVariant={
                      errors.siblings?.[siblingIndex]?.gender && touched.siblings?.[siblingIndex]?.gender
                        ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                        : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                    }
                    radioButtonItemVariant={
                      errors.siblings?.[siblingIndex]?.gender && touched.siblings?.[siblingIndex]?.gender
                        ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                        : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                    }
                    messageVariant={
                      errors.siblings?.[siblingIndex]?.gender && touched.siblings?.[siblingIndex]?.gender
                        ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                        : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                    }
                    message={errors.siblings?.[siblingIndex]?.gender && touched.siblings?.[siblingIndex]?.gender ? errors.siblings[siblingIndex].gender : ""}
                    radioGroupItems={_.map(GENDERS, (label, value) => ({
                      label,
                      value,
                    }))}
                    onBlur={() => setFieldTouched(`siblings.${siblingIndex}.gender`, true)}
                    onChange={(value) => setFieldValue(`siblings.${siblingIndex}.gender`, value)}
                  />
                </div>

                {/* School Information Section */}
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <h5 className="text-sm font-semibold mb-3 text-primary">
                    School Information
                  </h5>
                  <div className="grid grid-cols-1 gap-4">
                    <MECheckbox
                      label=""
                      disabled={!isEditMode}
                      labelVariant={
                        errors.siblings?.[siblingIndex]?.sameSchool && touched.siblings?.[siblingIndex]?.sameSchool
                          ? ME_CHECKBOX_COMPONENT_VARIANTS.DANGER
                          : ME_CHECKBOX_COMPONENT_VARIANTS.PRIMARY
                      }
                      checkboxVariant={
                        errors.siblings?.[siblingIndex]?.sameSchool && touched.siblings?.[siblingIndex]?.sameSchool
                          ? ME_CHECKBOX_COMPONENT_VARIANTS.DANGER
                          : ME_CHECKBOX_COMPONENT_VARIANTS.PRIMARY
                      }
                      messageVariant={
                        errors.siblings?.[siblingIndex]?.sameSchool && touched.siblings?.[siblingIndex]?.sameSchool
                          ? ME_CHECKBOX_COMPONENT_VARIANTS.DANGER
                          : ME_CHECKBOX_COMPONENT_VARIANTS.PRIMARY
                      }
                      message={
                        errors.siblings?.[siblingIndex]?.sameSchool && touched.siblings?.[siblingIndex]?.sameSchool
                          ? errors.siblings[siblingIndex].sameSchool
                          : ""
                      }
                      checkboxList={sibling.sameSchool}
                      onChange={(values) => setFieldValue(`siblings.${siblingIndex}.sameSchool`, values)}
                    />

                    {!sibling.sameSchool[0].isSelected && (
                      <MEInput
                        id={`schoolName-${siblingIndex}`}
                        meclassname="flex"
                        type={"text"}
                        label={"School Name"}
                        disabled={!isEditMode}
                        value={sibling.schoolName}
                        labelvariant={
                          errors.siblings?.[siblingIndex]?.schoolName && touched.siblings?.[siblingIndex]?.schoolName
                            ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                            : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                        }
                        inputvariant={
                          errors.siblings?.[siblingIndex]?.schoolName && touched.siblings?.[siblingIndex]?.schoolName
                            ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                            : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                        }
                        messagevariant={
                          errors.siblings?.[siblingIndex]?.schoolName && touched.siblings?.[siblingIndex]?.schoolName
                            ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                            : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                        }
                        message={
                          errors.siblings?.[siblingIndex]?.schoolName && touched.siblings?.[siblingIndex]?.schoolName
                            ? errors.siblings[siblingIndex].schoolName
                            : ""
                        }
                        onChange={(e) => setFieldValue(`siblings.${siblingIndex}.schoolName`, e.target.value)}
                        onBlur={() => setFieldTouched(`siblings.${siblingIndex}.schoolName`, true)}
                      />
                    )}

                    {sibling.sameSchool[0].isSelected && (
                      <MEInput
                        id={`admissionNumber-${siblingIndex}`}
                        meclassname="flex"
                        type={"text"}
                        label={"Admission Number"}
                        disabled={!isEditMode}
                        value={sibling.admissionNumber}
                        labelvariant={
                          errors.siblings?.[siblingIndex]?.admissionNumber && touched.siblings?.[siblingIndex]?.admissionNumber
                            ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                            : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                        }
                        inputvariant={
                          errors.siblings?.[siblingIndex]?.admissionNumber && touched.siblings?.[siblingIndex]?.admissionNumber
                            ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                            : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                        }
                        messagevariant={
                          errors.siblings?.[siblingIndex]?.admissionNumber && touched.siblings?.[siblingIndex]?.admissionNumber
                            ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                            : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                        }
                        message={
                          errors.siblings?.[siblingIndex]?.admissionNumber && touched.siblings?.[siblingIndex]?.admissionNumber
                            ? errors.siblings[siblingIndex].admissionNumber
                            : ""
                        }
                        onChange={(e) => setFieldValue(`siblings.${siblingIndex}.admissionNumber`, e.target.value)}
                        onBlur={() => setFieldTouched(`siblings.${siblingIndex}.admissionNumber`, true)}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
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
  siblings: Yup.array().of(
    Yup.object().shape({
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
    })
  ),
});

export default SiblingProfileComponent;
