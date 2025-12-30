import React, { useState } from "react";

import { useFormik } from "formik";
import { Edit2, Check, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import _ from "lodash";
import * as Yup from "yup";
import moment from "moment";

import { phoneRegExp } from "@MEUtils/regexp";
import { createStudentProfilePayload } from "@MEUtils/apiPayload";
import { addStudentProfile } from "@MERedux/profile/profileAction";
import {
  GENDERS,
  BOOLEANS,
  BLOOD_GROUPS,
  ME_INPUT_COMPONENT_VARIANTS,
  ME_SELECT_COMPONENT_VARIANTS,
  ME_CHECKBOX_COMPONENT_VARIANTS,
  ME_DATEPICKER_COMPONENT_VARIANTS,
  ME_RADIO_BUTTON_COMPONENT_VARIANTS,
} from "@MEHelpers/enums";

import MESelect from "@/components/common/form/select";
import MEInput from "@MECommonComponents/input/meInput";
import MEButton from "@MECommonComponents/button/meButton";
import MECheckbox from "@MECommonComponents/form/checkbox";
import MEDatePicker from "@MECommonComponents/form/datePicker";
import MERadioButton from "@MECommonComponents/form/radioButton";
import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";
import ProfileErrorMessageComponent from "@MEScreenComponents/profile/errorMessage";
import StudentProfileMedicalInformFormCardComponent from "@MEScreenComponents/profile/studentProfile/studentProfileMedicalInformFormCard";

const StudentProfileComponent = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { profile, studentProfileFormLoader, studentProfileFormError } =
    useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: profile.studentProfile,
    validationSchema: studentValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: (values) => {
      // Handle form submission
      console.log("Form submitted");
      console.log("Submitted Values:", values);
      if (values.id) {
      } else {
        dispatch(addStudentProfile(createStudentProfilePayload(values)));
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
    console.log("Submitted Values:", values);
    setTouched({});
    setIsEditMode(false);
  };

  const handleEditMode = async () => {
    setIsEditMode(true);

    if (values.id) {
      // Validate form first before entering edit mode
      try {
        await studentValidationSchema.validate(values, { abortEarly: false });
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
        console.log("Form validation errors:", formErrors);
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {studentProfileFormError && (
        <ProfileErrorMessageComponent message={studentProfileFormError} />
      )}
      <form onSubmit={handleSubmit}>
        <div>
          {/* Header with Edit Button */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-primary">Student Profile</h2>
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

              <MEInput
                id="aadhaarNumber"
                meclassname="flex"
                type={"text"}
                label={"Aadhaar Number"}
                required={true}
                disabled={!isEditMode}
                value={values.aadhaarNumber}
                labelvariant={
                  errors.aadhaarNumber && touched.aadhaarNumber
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                inputvariant={
                  errors.aadhaarNumber && touched.aadhaarNumber
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                messagevariant={
                  errors.aadhaarNumber && touched.aadhaarNumber
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.aadhaarNumber && touched.aadhaarNumber
                    ? errors.aadhaarNumber
                    : ""
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <MEInput
                id="phoneNumber"
                meclassname="flex"
                type={"text"}
                label={"Register Phone Number"}
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

              <MEInput
                id="email"
                meclassname="flex"
                type={"text"}
                label={"Register Email"}
                required={true}
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

              <MESelect
                label="Blood Group"
                required={true}
                disabled={!isEditMode}
                value={values.bloodGroup}
                selectLabel="Blood Groups"
                selectVariant={
                  errors.bloodGroup && touched.bloodGroup
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                labelVariant={
                  errors.bloodGroup && touched.bloodGroup
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.bloodGroup && touched.bloodGroup
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.bloodGroup && touched.bloodGroup
                    ? errors.bloodGroup
                    : ""
                }
                options={_.map(BLOOD_GROUPS, (label) => ({
                  label: label,
                  value: label,
                }))}
                onBlur={() => setFieldTouched("bloodGroup", true)}
                onChange={(value) => setFieldValue("bloodGroup", value)}
              />

              <MEInput
                id="nationality"
                meclassname="flex"
                type={"text"}
                label={"Nationality"}
                required={true}
                disabled={!isEditMode}
                value={values.nationality}
                labelvariant={
                  errors.nationality && touched.nationality
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                inputvariant={
                  errors.nationality && touched.nationality
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                messagevariant={
                  errors.nationality && touched.nationality
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.nationality && touched.nationality
                    ? errors.nationality
                    : ""
                }
                onChange={handleChange}
                onBlur={handleBlur}
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
                radioGroupItems={_.map(GENDERS, (label) => ({
                  label: label,
                  value: label,
                }))}
                onBlur={() => setFieldTouched("gender", true)}
                onChange={(value) => setFieldValue("gender", value)}
              />
            </div>
          </div>

          <div className="mt-3">
            <h3 className="text-base font-semibold mb-4 text-primary">
              Medical Information
            </h3>

            <StudentProfileMedicalInformFormCardComponent>
              <MERadioButton
                label="Hearing Issue"
                value={values.medicalInfo.hasHearingIssue}
                disabled={!isEditMode}
                labelVariant={
                  errors.medicalInfo?.hasHearingIssue &&
                  touched.medicalInfo?.hasHearingIssue
                    ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                    : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                }
                radioButtonItemVariant={
                  errors.medicalInfo?.hasHearingIssue &&
                  touched.medicalInfo?.hasHearingIssue
                    ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                    : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.medicalInfo?.hasHearingIssue &&
                  touched.medicalInfo?.hasHearingIssue
                    ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                    : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.medicalInfo?.hasHearingIssue &&
                  touched.medicalInfo?.hasHearingIssue
                    ? errors.medicalInfo?.hasHearingIssue
                    : ""
                }
                radioGroupItems={_.map(BOOLEANS, (label, value) => ({
                  label: value,
                  value: label,
                }))}
                onBlur={() =>
                  setFieldTouched("medicalInfo.hasHearingIssue", true)
                }
                onChange={(value) =>
                  setFieldValue("medicalInfo.hasHearingIssue", value)
                }
              />

              {values.medicalInfo.hasHearingIssue && (
                <MEInput
                  id="hearingIssueDetails"
                  meclassname="flex"
                  type={"text"}
                  label={"Hearing Issue Details"}
                  placeholder="Describe hearing issue"
                  disabled={!isEditMode}
                  value={values.medicalInfo.hearingIssueDetails}
                  labelvariant={
                    errors.medicalInfo?.hearingIssueDetails &&
                    touched.medicalInfo?.hearingIssueDetails
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  inputvariant={
                    errors.medicalInfo?.hearingIssueDetails &&
                    touched.medicalInfo?.hearingIssueDetails
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  messagevariant={
                    errors.medicalInfo?.hearingIssueDetails &&
                    touched.medicalInfo?.hearingIssueDetails
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  message={
                    errors.medicalInfo?.hearingIssueDetails &&
                    touched.medicalInfo?.hearingIssueDetails
                      ? errors.medicalInfo?.hearingIssueDetails
                      : ""
                  }
                  onChange={(e) =>
                    setFieldValue(
                      "medicalInfo.hearingIssueDetails",
                      e.target.value
                    )
                  }
                  onBlur={() =>
                    setFieldTouched("medicalInfo.hearingIssueDetails", true)
                  }
                />
              )}
            </StudentProfileMedicalInformFormCardComponent>

            <StudentProfileMedicalInformFormCardComponent>
              <MERadioButton
                label="Vision Issue"
                value={values.medicalInfo.hasVisionIssue}
                disabled={!isEditMode}
                labelVariant={
                  errors.medicalInfo?.hasVisionIssue &&
                  touched.medicalInfo?.hasVisionIssue
                    ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                    : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                }
                radioButtonItemVariant={
                  errors.medicalInfo?.hasVisionIssue &&
                  touched.medicalInfo?.hasVisionIssue
                    ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                    : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.medicalInfo?.hasVisionIssue &&
                  touched.medicalInfo?.hasVisionIssue
                    ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                    : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.medicalInfo?.hasVisionIssue &&
                  touched.medicalInfo?.hasVisionIssue
                    ? errors.medicalInfo?.hasVisionIssue
                    : ""
                }
                radioGroupItems={_.map(BOOLEANS, (label, value) => ({
                  label: value,
                  value: label,
                }))}
                onBlur={() =>
                  setFieldTouched("medicalInfo.hasVisionIssue", true)
                }
                onChange={(value) =>
                  setFieldValue("medicalInfo.hasVisionIssue", value)
                }
              />

              {values.medicalInfo.hasVisionIssue && (
                <MEInput
                  id="visionIssueDetails"
                  meclassname="flex"
                  type={"text"}
                  label={"Vision Issue Details"}
                  placeholder="Describe vision issue"
                  disabled={!isEditMode}
                  value={values.medicalInfo.visionIssueDetails}
                  labelvariant={
                    errors.medicalInfo?.visionIssueDetails &&
                    touched.medicalInfo?.visionIssueDetails
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  inputvariant={
                    errors.medicalInfo?.visionIssueDetails &&
                    touched.medicalInfo?.visionIssueDetails
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  messagevariant={
                    errors.medicalInfo?.visionIssueDetails &&
                    touched.medicalInfo?.visionIssueDetails
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  message={
                    errors.medicalInfo?.visionIssueDetails &&
                    touched.medicalInfo?.visionIssueDetails
                      ? errors.medicalInfo?.visionIssueDetails
                      : ""
                  }
                  onChange={(e) =>
                    setFieldValue(
                      "medicalInfo.visionIssueDetails",
                      e.target.value
                    )
                  }
                  onBlur={() =>
                    setFieldTouched("medicalInfo.visionIssueDetails", true)
                  }
                />
              )}
            </StudentProfileMedicalInformFormCardComponent>

            <StudentProfileMedicalInformFormCardComponent>
              <MERadioButton
                label="Physical Issue"
                value={values.medicalInfo.hasPhysicalIssue}
                disabled={!isEditMode}
                labelVariant={
                  errors.medicalInfo?.hasPhysicalIssue &&
                  touched.medicalInfo?.hasPhysicalIssue
                    ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                    : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                }
                radioButtonItemVariant={
                  errors.medicalInfo?.hasPhysicalIssue &&
                  touched.medicalInfo?.hasPhysicalIssue
                    ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                    : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.medicalInfo?.hasPhysicalIssue &&
                  touched.medicalInfo?.hasPhysicalIssue
                    ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                    : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.medicalInfo?.hasPhysicalIssue &&
                  touched.medicalInfo?.hasPhysicalIssue
                    ? errors.medicalInfo?.hasPhysicalIssue
                    : ""
                }
                radioGroupItems={_.map(BOOLEANS, (label, value) => ({
                  label: value,
                  value: label,
                }))}
                onBlur={() =>
                  setFieldTouched("medicalInfo.hasPhysicalIssue", true)
                }
                onChange={(value) =>
                  setFieldValue("medicalInfo.hasPhysicalIssue", value)
                }
              />

              {values.medicalInfo.hasPhysicalIssue && (
                <MEInput
                  id="physicalIssueDetails"
                  meclassname="flex"
                  type={"text"}
                  label={"Physical Issue Details"}
                  placeholder="Describe physical issue"
                  disabled={!isEditMode}
                  value={values.medicalInfo.physicalIssueDetails}
                  labelvariant={
                    errors.medicalInfo?.physicalIssueDetails &&
                    touched.medicalInfo?.physicalIssueDetails
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  inputvariant={
                    errors.medicalInfo?.physicalIssueDetails &&
                    touched.medicalInfo?.physicalIssueDetails
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  messagevariant={
                    errors.medicalInfo?.physicalIssueDetails &&
                    touched.medicalInfo?.physicalIssueDetails
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  message={
                    errors.medicalInfo?.physicalIssueDetails &&
                    touched.medicalInfo?.physicalIssueDetails
                      ? errors.medicalInfo?.physicalIssueDetails
                      : ""
                  }
                  onChange={(e) =>
                    setFieldValue(
                      "medicalInfo.physicalIssueDetails",
                      e.target.value
                    )
                  }
                  onBlur={() =>
                    setFieldTouched("medicalInfo.physicalIssueDetails", true)
                  }
                />
              )}
            </StudentProfileMedicalInformFormCardComponent>

            <StudentProfileMedicalInformFormCardComponent>
              <MERadioButton
                label="Mental Issue"
                value={values.medicalInfo.hasMentalIssue}
                disabled={!isEditMode}
                labelVariant={
                  errors.medicalInfo?.hasMentalIssue &&
                  touched.medicalInfo?.hasMentalIssue
                    ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                    : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                }
                radioButtonItemVariant={
                  errors.medicalInfo?.hasMentalIssue &&
                  touched.medicalInfo?.hasMentalIssue
                    ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                    : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.medicalInfo?.hasMentalIssue &&
                  touched.medicalInfo?.hasMentalIssue
                    ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                    : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.medicalInfo?.hasMentalIssue &&
                  touched.medicalInfo?.hasMentalIssue
                    ? errors.medicalInfo?.hasMentalIssue
                    : ""
                }
                radioGroupItems={_.map(BOOLEANS, (value, label) => ({
                  label,
                  value,
                }))}
                onBlur={() =>
                  setFieldTouched("medicalInfo.hasMentalIssue", true)
                }
                onChange={(value) =>
                  setFieldValue("medicalInfo.hasMentalIssue", value)
                }
              />

              {values.medicalInfo.hasMentalIssue && (
                <MEInput
                  id="mentalIssueDetails"
                  meclassname="flex"
                  type={"text"}
                  label={"Mental Issue Details"}
                  placeholder="Describe mental issue"
                  disabled={!isEditMode}
                  value={values.medicalInfo.mentalIssueDetails}
                  labelvariant={
                    errors.medicalInfo?.mentalIssueDetails &&
                    touched.medicalInfo?.mentalIssueDetails
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  inputvariant={
                    errors.medicalInfo?.mentalIssueDetails &&
                    touched.medicalInfo?.mentalIssueDetails
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  messagevariant={
                    errors.medicalInfo?.mentalIssueDetails &&
                    touched.medicalInfo?.mentalIssueDetails
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  message={
                    errors.medicalInfo?.mentalIssueDetails &&
                    touched.medicalInfo?.mentalIssueDetails
                      ? errors.medicalInfo?.mentalIssueDetails
                      : ""
                  }
                  onChange={(e) =>
                    setFieldValue(
                      "medicalInfo.mentalIssueDetails",
                      e.target.value
                    )
                  }
                  onBlur={() =>
                    setFieldTouched("medicalInfo.mentalIssueDetails", true)
                  }
                />
              )}
            </StudentProfileMedicalInformFormCardComponent>

            <StudentProfileMedicalInformFormCardComponent>
              <MERadioButton
                label="Do you have any allergies?"
                value={values.medicalInfo.hasAllergies}
                disabled={!isEditMode}
                labelVariant={
                  errors.medicalInfo?.hasAllergies &&
                  touched.medicalInfo?.hasAllergies
                    ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                    : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                }
                radioButtonItemVariant={
                  errors.medicalInfo?.hasAllergies &&
                  touched.medicalInfo?.hasAllergies
                    ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                    : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.medicalInfo?.hasAllergies &&
                  touched.medicalInfo?.hasAllergies
                    ? ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER
                    : ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.medicalInfo?.hasAllergies &&
                  touched.medicalInfo?.hasAllergies
                    ? errors.medicalInfo?.hasAllergies
                    : ""
                }
                radioGroupItems={_.map(BOOLEANS, (value, label) => ({
                  label,
                  value,
                }))}
                onBlur={() => setFieldTouched("medicalInfo.hasAllergies", true)}
                onChange={(value) =>
                  setFieldValue("medicalInfo.hasAllergies", value)
                }
              />

              {values.medicalInfo.hasAllergies && (
                <MECheckbox
                  label="Select Allergies"
                  disabled={!isEditMode}
                  labelVariant={
                    errors.medicalInfo?.allergies &&
                    touched.medicalInfo?.allergies
                      ? ME_CHECKBOX_COMPONENT_VARIANTS.DANGER
                      : ME_CHECKBOX_COMPONENT_VARIANTS.PRIMARY
                  }
                  checkboxVariant={
                    errors.medicalInfo?.allergies &&
                    touched.medicalInfo?.allergies
                      ? ME_CHECKBOX_COMPONENT_VARIANTS.DANGER
                      : ME_CHECKBOX_COMPONENT_VARIANTS.PRIMARY
                  }
                  messageVariant={
                    errors.medicalInfo?.allergies &&
                    touched.medicalInfo?.allergies
                      ? ME_CHECKBOX_COMPONENT_VARIANTS.DANGER
                      : ME_CHECKBOX_COMPONENT_VARIANTS.PRIMARY
                  }
                  message={
                    errors.medicalInfo?.allergies &&
                    touched.medicalInfo?.allergies
                      ? errors.medicalInfo?.allergies
                      : ""
                  }
                  checkboxList={values.medicalInfo.allergies}
                  onChange={(allergies) =>
                    setFieldValue("medicalInfo.allergies", allergies)
                  }
                />
              )}
            </StudentProfileMedicalInformFormCardComponent>
          </div>

          {isEditMode && (
            <div className="flex gap-4 mt-8">
              <MEButton
                type="submit"
                disabled={!isValid || studentProfileFormLoader}
                className="flex items-center gap-2"
              >
                {studentProfileFormLoader ? (
                  <MELoaderIcon />
                ) : (
                  <Check className="w-4 h-4" />
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
const studentValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(25, "First name must be at most 25 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .max(25, "Last name must be at most 25 characters")
    .required("Last name is required"),
  dateOfBirth: Yup.date()
    .required("Date of birth is required")
    .typeError("Date of birth must be a valid date")
    .max(
      moment().startOf("day"),
      "Date of birth cannot be today or in the future"
    )
    .min(
      moment().subtract(25, "years").endOf("day"),
      "You must be at least 3 years old"
    )
    .max(
      moment().subtract(3, "years").startOf("day"),
      "You must be at most 25 years old"
    ),
  aadhaarNumber: Yup.string()
    .matches(/^\d{12}$/, "Aadhaar must be 12 digits")
    .required("Aadhaar number is required"),
  email: Yup.string()
    .max(100, "Email must be at most 100 characters")
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .length(10, "Phone number must be 10 digits")
    .required("Phone number is required"),
  gender: Yup.string().required("Gender is required"),
  bloodGroup: Yup.string().required("Blood group is required"),
  nationality: Yup.string().required("Nationality is required"),
  medicalInfo: Yup.object().shape({
    hasHearingIssue: Yup.boolean(),
    hearingIssueDetails: Yup.string().when("hasHearingIssue", {
      is: true,
      then: (schema) =>
        schema
          .min(10, "Hearing issue details must be at least 10 characters")
          .max(200, "Hearing issue details must be at most 200 characters")
          .required("Please provide hearing issue details"),
    }),
    hasVisionIssue: Yup.boolean(),
    visionIssueDetails: Yup.string().when("hasVisionIssue", {
      is: true,
      then: (schema) =>
        schema
          .min(10, "Vision issue details must be at least 10 characters")
          .max(200, "Vision issue details must be at most 200 characters")
          .required("Please provide vision issue details"),
    }),
    hasPhysicalIssue: Yup.boolean(),
    physicalIssueDetails: Yup.string().when("hasPhysicalIssue", {
      is: true,
      then: (schema) =>
        schema
          .min(10, "Physical issue details must be at least 10 characters")
          .max(200, "Physical issue details must be at most 200 characters")
          .required("Please provide physical issue details"),
    }),
    hasMentalIssue: Yup.boolean(),
    mentalIssueDetails: Yup.string().when("hasMentalIssue", {
      is: true,
      then: (schema) =>
        schema
          .min(10, "Mental issue details must be at least 10 characters")
          .max(200, "Mental issue details must be at most 200 characters")
          .required("Please provide mental issue details"),
    }),
    hasAllergies: Yup.boolean(),
    allergies: Yup.array().when("hasAllergies", {
      is: true,
      then: (schema) =>
        schema.test(
          "at-least-one-selected",
          "Please select at least one allergy",
          (allergies) => {
            return (
              Array.isArray(allergies) && allergies.some((a) => a.isSelected)
            );
          }
        ),
    }),
  }),
});

export default StudentProfileComponent;
