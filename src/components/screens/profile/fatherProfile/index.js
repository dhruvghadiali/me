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
import MECombobox from "@MECommonComponents/form/combobox";
import MEDatePicker from "@MECommonComponents/form/datePicker";

import { phoneRegExp } from "@MEUtils/regexp";
import {
  ME_INPUT_COMPONENT_VARIANTS,
  ME_SELECT_COMPONENT_VARIANTS,
  ME_COMBOBOX_COMPONENT_VARIANTS,
  ME_CHECKBOX_COMPONENT_VARIANTS,
  ME_DATEPICKER_COMPONENT_VARIANTS,
} from "@MEHelpers/enums";

// Mock enums - replace with actual enums from your helpers
const OCCUPATIONS = {
  BUSINESS: "Business",
  SERVICE: "Service",
  AGRICULTURE: "Agriculture",
  LABOR: "Labor",
  RETIRED: "Retired",
  OTHER: "Other",
};

const EDUCATION = {
  PRIMARY: "Primary",
  SECONDARY: "Secondary",
  HIGHER_SECONDARY: "Higher Secondary",
  DIPLOMA: "Diploma",
  GRADUATION: "Graduation",
  POST_GRADUATION: "Post Graduation",
};

const STATES = {
  MAHARASHTRA: "Maharashtra",
  KARNATAKA: "Karnataka",
  TAMIL_NADU: "Tamil Nadu",
  GUJARAT: "Gujarat",
  WEST_BENGAL: "West Bengal",
};

const DISTRICTS = {
  MUMBAI: "Mumbai",
  PUNE: "Pune",
  NASHIK: "Nashik",
};

const CITIES = {
  MUMBAI_CITY: "Mumbai City",
  SUBURBAN: "Suburban",
};

const AREAS = {
  AREA_1: "Area 1",
  AREA_2: "Area 2",
};

const ZIPCODES = {
  ZIP_400001: "400001",
  ZIP_400002: "400002",
};

const BOOLEANS = {
  YES: true,
  NO: false,
};

const FatherProfileComponent = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      aadhaarNumber: "",
      occupation: "",
      education: "",
      annualIncome: "",
      isAlive: [{ label: "Is Alive", isSelected: true }],
      dateOfDeath: "",
      caringChildBy: "",
      sameAddressAsStudent: [
        { label: "Same address as student", isSelected: true },
      ],
      addressOverride: {
        state: "",
        district: "",
        city: "",
        areaName: "",
        zipcode: "",
        homeAddress: "",
      },
    },
    validationSchema: fatherValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: (values) => {
      console.log("Father Form submitted");
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
            <h2 className="text-2xl font-bold text-primary">Father Profile</h2>
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

              <MEInput
                id="phoneNumber"
                meclassname="flex"
                type={"text"}
                label={"Phone Number"}
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
                label={"Email"}
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

              <MESelect
                label="Occupation"
                required={true}
                disabled={!isEditMode}
                value={values.occupation}
                selectLabel="Select Occupation"
                selectVariant={
                  errors.occupation && touched.occupation
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                labelVariant={
                  errors.occupation && touched.occupation
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.occupation && touched.occupation
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.occupation && touched.occupation
                    ? errors.occupation
                    : ""
                }
                options={_.map(OCCUPATIONS, (label, value) => ({
                  label,
                  value,
                }))}
                onBlur={() => setFieldTouched("occupation", true)}
                onChange={(value) => setFieldValue("occupation", value)}
              />

              <MESelect
                label="Education"
                required={true}
                disabled={!isEditMode}
                value={values.education}
                selectLabel="Select Education"
                selectVariant={
                  errors.education && touched.education
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                labelVariant={
                  errors.education && touched.education
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.education && touched.education
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.education && touched.education ? errors.education : ""
                }
                options={_.map(EDUCATION, (label, value) => ({
                  label,
                  value,
                }))}
                onBlur={() => setFieldTouched("education", true)}
                onChange={(value) => setFieldValue("education", value)}
              />

              <MEInput
                id="annualIncome"
                meclassname="flex"
                type={"number"}
                label={"Annual Income"}
                required={true}
                disabled={!isEditMode}
                value={values.annualIncome}
                labelvariant={
                  errors.annualIncome && touched.annualIncome
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                inputvariant={
                  errors.annualIncome && touched.annualIncome
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                messagevariant={
                  errors.annualIncome && touched.annualIncome
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.annualIncome && touched.annualIncome
                    ? errors.annualIncome
                    : ""
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          {/* Alive Status Section */}
          <div className="mt-3">
            <MECheckbox
              label="Status"
              disabled={!isEditMode}
              labelVariant={
                errors.isAlive && touched.isAlive
                  ? ME_CHECKBOX_COMPONENT_VARIANTS.DANGER
                  : ME_CHECKBOX_COMPONENT_VARIANTS.PRIMARY
              }
              checkboxVariant={
                errors.isAlive && touched.isAlive
                  ? ME_CHECKBOX_COMPONENT_VARIANTS.DANGER
                  : ME_CHECKBOX_COMPONENT_VARIANTS.PRIMARY
              }
              messageVariant={
                errors.isAlive && touched.isAlive
                  ? ME_CHECKBOX_COMPONENT_VARIANTS.DANGER
                  : ME_CHECKBOX_COMPONENT_VARIANTS.PRIMARY
              }
              message={errors.isAlive && touched.isAlive ? errors.isAlive : ""}
              checkboxList={values.isAlive}
              onChange={(values) => setFieldValue("isAlive", values)}
            />

            {!values.isAlive[0].isSelected && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <MEDatePicker
                  label={"Date of Death"}
                  placeholder={""}
                  required={true}
                  disabled={!isEditMode}
                  selectedDate={values.dateOfDeath}
                  labelVariant={
                    errors.dateOfDeath && touched.dateOfDeath
                      ? ME_DATEPICKER_COMPONENT_VARIANTS.DANGER
                      : ME_DATEPICKER_COMPONENT_VARIANTS.PRIMARY
                  }
                  buttonVariant={
                    errors.dateOfDeath && touched.dateOfDeath
                      ? ME_DATEPICKER_COMPONENT_VARIANTS.DANGER
                      : ME_DATEPICKER_COMPONENT_VARIANTS.PRIMARY
                  }
                  messageVariant={
                    errors.dateOfDeath && touched.dateOfDeath
                      ? ME_DATEPICKER_COMPONENT_VARIANTS.DANGER
                      : ME_DATEPICKER_COMPONENT_VARIANTS.PRIMARY
                  }
                  message={
                    errors.dateOfDeath && touched.dateOfDeath
                      ? errors.dateOfDeath
                      : ""
                  }
                  onSelect={(date) => setFieldValue("dateOfDeath", date)}
                  onBlur={() => setFieldTouched("dateOfDeath", true)}
                />

                <MEInput
                  id="caringChildBy"
                  meclassname="flex"
                  type={"text"}
                  label={"Caring Child By"}
                  required={true}
                  disabled={!isEditMode}
                  value={values.caringChildBy}
                  labelvariant={
                    errors.caringChildBy && touched.caringChildBy
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  inputvariant={
                    errors.caringChildBy && touched.caringChildBy
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  messagevariant={
                    errors.caringChildBy && touched.caringChildBy
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  message={
                    errors.caringChildBy && touched.caringChildBy
                      ? errors.caringChildBy
                      : ""
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            )}
          </div>

          {/* Address Section */}
          <div className="mt-5">
            <MECheckbox
              label="Address"
              disabled={!isEditMode}
              labelVariant={
                errors.sameAddressAsStudent && touched.sameAddressAsStudent
                  ? ME_CHECKBOX_COMPONENT_VARIANTS.DANGER
                  : ME_CHECKBOX_COMPONENT_VARIANTS.PRIMARY
              }
              checkboxVariant={
                errors.sameAddressAsStudent && touched.sameAddressAsStudent
                  ? ME_CHECKBOX_COMPONENT_VARIANTS.DANGER
                  : ME_CHECKBOX_COMPONENT_VARIANTS.PRIMARY
              }
              messageVariant={
                errors.sameAddressAsStudent && touched.sameAddressAsStudent
                  ? ME_CHECKBOX_COMPONENT_VARIANTS.DANGER
                  : ME_CHECKBOX_COMPONENT_VARIANTS.PRIMARY
              }
              message={
                errors.sameAddressAsStudent && touched.sameAddressAsStudent
                  ? errors.sameAddressAsStudent
                  : ""
              }
              checkboxList={values.sameAddressAsStudent}
              onChange={(values) =>
                setFieldValue("sameAddressAsStudent", values)
              }
            />

            {!values.sameAddressAsStudent[0].isSelected && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <MEInput
                  id="homeAddress"
                  meclassname="flex"
                  type={"text"}
                  label={"Home Address"}
                  required={true}
                  disabled={!isEditMode}
                  value={values.addressOverride.homeAddress}
                  labelvariant={
                    errors.addressOverride?.homeAddress &&
                    touched.addressOverride?.homeAddress
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  inputvariant={
                    errors.addressOverride?.homeAddress &&
                    touched.addressOverride?.homeAddress
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  messagevariant={
                    errors.addressOverride?.homeAddress &&
                    touched.addressOverride?.homeAddress
                      ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                      : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                  }
                  message={
                    errors.addressOverride?.homeAddress &&
                    touched.addressOverride?.homeAddress
                      ? errors.addressOverride?.homeAddress
                      : ""
                  }
                  onChange={(e) =>
                    setFieldValue("addressOverride.homeAddress", e.target.value)
                  }
                  onBlur={() =>
                    setFieldTouched("addressOverride.homeAddress", true)
                  }
                />

                <MECombobox
                  label="State"
                  required={true}
                  disabled={!isEditMode}
                  value={values.addressOverride.state}
                  searchPlaceholder={"Search State..."}
                  labelVariant={
                    errors.addressOverride?.state &&
                    touched.addressOverride?.state
                      ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                      : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                  }
                  comboboxVariant={
                    errors.addressOverride?.state &&
                    touched.addressOverride?.state
                      ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                      : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                  }
                  messageVariant={
                    errors.addressOverride?.state &&
                    touched.addressOverride?.state
                      ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                      : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                  }
                  message={
                    errors.addressOverride?.state &&
                    touched.addressOverride?.state
                      ? errors.addressOverride?.state
                      : ""
                  }
                  options={_.map(STATES, (label, value) => ({
                    label,
                    value,
                  }))}
                  onBlur={() => setFieldTouched("addressOverride.state", true)}
                  onChange={(value) =>
                    setFieldValue("addressOverride.state", value)
                  }
                />

                <MECombobox
                  label="District"
                  required={true}
                  disabled={!isEditMode}
                  value={values.addressOverride.district}
                  searchPlaceholder={"Search District..."}
                  labelVariant={
                    errors.addressOverride?.district &&
                    touched.addressOverride?.district
                      ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                      : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                  }
                  comboboxVariant={
                    errors.addressOverride?.district &&
                    touched.addressOverride?.district
                      ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                      : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                  }
                  messageVariant={
                    errors.addressOverride?.district &&
                    touched.addressOverride?.district
                      ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                      : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                  }
                  message={
                    errors.addressOverride?.district &&
                    touched.addressOverride?.district
                      ? errors.addressOverride?.district
                      : ""
                  }
                  options={_.map(DISTRICTS, (label, value) => ({
                    label,
                    value,
                  }))}
                  onBlur={() =>
                    setFieldTouched("addressOverride.district", true)
                  }
                  onChange={(value) =>
                    setFieldValue("addressOverride.district", value)
                  }
                />

                <MECombobox
                  label="City"
                  required={true}
                  disabled={!isEditMode}
                  value={values.addressOverride.city}
                  searchPlaceholder={"Search City..."}
                  labelVariant={
                    errors.addressOverride?.city &&
                    touched.addressOverride?.city
                      ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                      : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                  }
                  comboboxVariant={
                    errors.addressOverride?.city &&
                    touched.addressOverride?.city
                      ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                      : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                  }
                  messageVariant={
                    errors.addressOverride?.city &&
                    touched.addressOverride?.city
                      ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                      : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                  }
                  message={
                    errors.addressOverride?.city &&
                    touched.addressOverride?.city
                      ? errors.addressOverride?.city
                      : ""
                  }
                  options={_.map(CITIES, (label, value) => ({
                    label,
                    value,
                  }))}
                  onBlur={() => setFieldTouched("addressOverride.city", true)}
                  onChange={(value) =>
                    setFieldValue("addressOverride.city", value)
                  }
                />

                <MECombobox
                  label="Area Name"
                  required={true}
                  disabled={!isEditMode}
                  value={values.addressOverride.areaName}
                  searchPlaceholder={"Search Area Name..."}
                  labelVariant={
                    errors.addressOverride?.areaName &&
                    touched.addressOverride?.areaName
                      ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                      : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                  }
                  comboboxVariant={
                    errors.addressOverride?.areaName &&
                    touched.addressOverride?.areaName
                      ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                      : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                  }
                  messageVariant={
                    errors.addressOverride?.areaName &&
                    touched.addressOverride?.areaName
                      ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                      : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                  }
                  message={
                    errors.addressOverride?.areaName &&
                    touched.addressOverride?.areaName
                      ? errors.addressOverride?.areaName
                      : ""
                  }
                  options={_.map(AREAS, (label, value) => ({
                    label,
                    value,
                  }))}
                  onBlur={() =>
                    setFieldTouched("addressOverride.areaName", true)
                  }
                  onChange={(value) =>
                    setFieldValue("addressOverride.areaName", value)
                  }
                />

                <MECombobox
                  label="Zipcode"
                  required={true}
                  disabled={!isEditMode}
                  value={values.addressOverride.zipcode}
                  searchPlaceholder={"Search Zipcode..."}
                  labelVariant={
                    errors.addressOverride?.zipcode &&
                    touched.addressOverride?.zipcode
                      ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                      : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                  }
                  comboboxVariant={
                    errors.addressOverride?.zipcode &&
                    touched.addressOverride?.zipcode
                      ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                      : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                  }
                  messageVariant={
                    errors.addressOverride?.zipcode &&
                    touched.addressOverride?.zipcode
                      ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                      : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                  }
                  message={
                    errors.addressOverride?.zipcode &&
                    touched.addressOverride?.zipcode
                      ? errors.addressOverride?.zipcode
                      : ""
                  }
                  options={_.map(ZIPCODES, (label, value) => ({
                    label,
                    value,
                  }))}
                  onBlur={() =>
                    setFieldTouched("addressOverride.zipcode", true)
                  }
                  onChange={(value) =>
                    setFieldValue("addressOverride.zipcode", value)
                  }
                />
              </div>
            )}
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
const fatherValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(25, "First name must be at most 25 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .max(25, "Last name must be at most 25 characters")
    .required("Last name is required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .length(10, "Phone number must be 10 digits")
    .required("Phone number is required"),
  email: Yup.string()
    .max(100, "Email must be at most 100 characters")
    .email("Invalid email format")
    .required("Email is required"),
  aadhaarNumber: Yup.string()
    .matches(/^\d{12}$/, "Aadhaar must be 12 digits")
    .required("Aadhaar number is required"),
  occupation: Yup.string().required("Occupation is required"),
  education: Yup.string().required("Education is required"),
  annualIncome: Yup.number()
    .positive("Annual income must be a positive number")
    .required("Annual income is required"),
  isAlive: Yup.array().of(
    Yup.object().shape({
      isSelected: Yup.boolean(),
      label: Yup.string(),
    })
  ),
  dateOfDeath: Yup.date().when("isAlive", {
    is: (isAlive) => Array.isArray(isAlive) && !isAlive[0]?.isSelected,
    then: (schema) =>
      schema
        .required("Date of death is required")
        .max(moment().endOf("day"), "Date of death cannot be in the future"),
  }),
  caringChildBy: Yup.string().when("isAlive", {
    is: (isAlive) => Array.isArray(isAlive) && !isAlive[0]?.isSelected,
    then: (schema) =>
      schema
        .min(2, "Caring child by must be at least 2 characters")
        .max(50, "Caring child by must be at most 50 characters")
        .required("Please provide caring child by information"),
  }),
  sameAddressAsStudent: Yup.array().of(
    Yup.object().shape({
      isSelected: Yup.boolean(),
      label: Yup.string(),
    })
  ),
  addressOverride: Yup.object().when("sameAddressAsStudent", {
    is: (sameAddressAsStudent) =>
      Array.isArray(sameAddressAsStudent) &&
      !sameAddressAsStudent[0]?.isSelected,
    then: (schema) =>
      schema.shape({
        state: Yup.string().required("State is required"),
        district: Yup.string().required("District is required"),
        city: Yup.string().required("City is required"),
        areaName: Yup.string().required("Area name is required"),
        zipcode: Yup.string().required("Zipcode is required"),
        homeAddress: Yup.string()
          .min(5, "Home address must be at least 5 characters")
          .max(200, "Home address must be at most 200 characters")
          .required("Home address is required"),
      }),
  }),
});

export default FatherProfileComponent;
