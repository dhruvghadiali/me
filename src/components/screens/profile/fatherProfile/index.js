import React, { useState } from "react";

import { useFormik } from "formik";
import { Edit2, Check, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import _ from "lodash";
import * as Yup from "yup";
import moment from "moment";

import MESelect from "@/components/common/form/select";
import MEInput from "@MECommonComponents/input/meInput";
import MEButton from "@MECommonComponents/button/meButton";
import MECheckbox from "@MECommonComponents/form/checkbox";
import MECombobox from "@MECommonComponents/form/combobox";
import MEDatePicker from "@MECommonComponents/form/datePicker";
import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";
import ProfileErrorMessageComponent from "@MEScreenComponents/profile/errorMessage";
import LastUpdatedAtInfoComponent from "@MEScreenComponents/profile/lastUpdatedAtInfo";

import { phoneRegExp, aadhaarNumberRegExp } from "@MEUtils/regexp";
import {
  createFatherProfilePayload,
  createFatherProfileOverrideAddressPayload,
} from "@MEUtils/apiPayload";
import {
  addFatherProfile,
  getStudentProfile,
  updatedFatherProfile,
  addFatherProfileOverrideAddress,
  updatedFatherProfileOverrideAddress,
} from "@MERedux/profile/profileAction";
import {
  ME_INPUT_COMPONENT_VARIANTS,
  ME_SELECT_COMPONENT_VARIANTS,
  ME_COMBOBOX_COMPONENT_VARIANTS,
  ME_CHECKBOX_COMPONENT_VARIANTS,
  ME_DATEPICKER_COMPONENT_VARIANTS,
  PARENT_OCCUPATIONS_IN,
  EDUCATION_LEVELS_IN,
} from "@MEHelpers/enums";
import {
  fatherProfileFormTitle,
  fatherProfileFormEmailLabel,
  fatherProfileFormLastNameLabel,
  fatherProfileFormEducationLabel,
  fatherProfileFormFirstNameLabel,
  fatherProfileFormOccupationLabel,
  fatherProfileFormPhoneNumberLabel,
  fatherProfileFormAnnualIncomeLabel,
  fatherProfileFormAadhaarNumberLabel,
  fatherProfileFormCaringChildByLabel,
  fatherProfileFormFatherDeathDateLabel,
  fatherProfileFormBasicInfoSectionTitle,
  fatherProfileFormEducationSelectPlaceholder,
  fatherProfileFormOccupationSelectPlaceholder,
  profileScreenCityLabel,
  profileScreenStateLabel,
  profileScreenAddressLabel,
  profileScreenZipcodeLabel,
  profileScreenDistrictLabel,
  profileScreenAreaNameLabel,
  profileScreenHomeAddressLabel,
  profileScreenCitySelectPlaceholder,
  profileScreenStateSelectPlaceholder,
  profileScreenZipcodeSelectPlaceholder,
  profileScreenDistrictSelectPlaceholder,
  profileScreenAreaNameSelectPlaceholder,
  profileScreenFormSubmitButtonLabel,
  profileScreenFormCancelButtonLabel,
} from "@MELocalization/languages/en";
import {
  firstNameMaxChar,
  firstNameMinChar,
  lastNameMaxChar,
  lastNameMinChar,
  emailMaxChar,
  emailMinChar,
  phoneNumberChar,
  aadhaarNumberChar,
  addressMaxChar,
  addressMinChar,
  fatherFormAnnualIncomeMaxNum,
  fatherFormAnnualIncomeMinNum,
  fatherFormCaringChildByMaxChar,
  fatherFormCaringChildByMinChar,
} from "@MEHelpers/formValidationConst";
import {
  firstNameRequired,
  firstNameMinLength,
  firstNameMaxLength,
  lastNameRequired,
  lastNameMinLength,
  lastNameMaxLength,
  aadhaarNumberLength,
  aadhaarNumberInvalid,
  aadhaarNumberRequired,
  emailMaxLength,
  emailMinLength,
  emailInvalid,
  emailRequired,
  phoneNumberLength,
  phoneNumberInvalid,
  phoneNumberRequired,
  citySelectionRequired,
  stateSelectionRequired,
  zipcodeSelectionRequired,
  districtSelectionRequired,
  areaNameSelectionRequired,
  addressRequired,
  addressMaxLength,
  addressMinLength,
  fatherFormFatherEducationRequired,
  fatherFormFatherOccupationRequired,
  fatherFormAnnualIncomeRequired,
  fatherFormAnnualIncomeMaxNumber,
  fatherFormAnnualIncomeMinNumber,
  fatherFormAnnualIncomeMustBePositive,
  fatherFormFatherDeathOfDateInvalid,
  fatherFormFatherDeathOfDateRequired,
  fatherFormCaringChildByRequired,
  fatherFormCaringChildByMaxLength,
  fatherFormCaringChildByMinLength,
} from "@MEHelpers/formValidationMessage";

const FatherProfileComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [isEditMode, setIsEditMode] = useState(false);
  const {
    profile,
    fatherProfileFormLoader,
    fatherProfileFormError,
    states,
    districts,
    cities,
    areaNames,
    zipcodes,
  } = useSelector((state) => state.profile);

  const formik = useFormik({
    initialValues: {
      ...profile.fatherProfile,
    },
    validationSchema: fatherValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: async (values) => {
      try {
        // First action - wait for it to complete
        let firstActionResult;
        if (values.id) {
          firstActionResult = await dispatch(
            updatedFatherProfile({
              id: values.id,
              data: createFatherProfilePayload(values),
            })
          );
        } else {
          firstActionResult = await dispatch(
            addFatherProfile(createFatherProfilePayload(values))
          );
        }

        // Second action - only execute if first action succeeded (not rejected or errored)
        if (
          firstActionResult &&
          !firstActionResult.error &&
          values.sameAddressAsStudent &&
          _.size(values.sameAddressAsStudent) > 0 &&
          !values.sameAddressAsStudent[0].isSelected
        ) {
          if (values.addressOverride && values.addressOverride.id) {
            await dispatch(
              updatedFatherProfileOverrideAddress({
                id: values.addressOverride.id,
                data: createFatherProfileOverrideAddressPayload(
                  values.addressOverride
                ),
              })
            );
          } else {
            await dispatch(
              addFatherProfileOverrideAddress(
                createFatherProfileOverrideAddressPayload(
                  values.addressOverride
                )
              )
            );
          }
        } else {
          dispatch(getStudentProfile());
        }
      } catch (error) {
        console.error("Error submitting father profile:", error);
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
        await fatherValidationSchema.validate(values, { abortEarly: false });
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
      {fatherProfileFormError && (
        <ProfileErrorMessageComponent message={fatherProfileFormError} />
      )}

      <form onSubmit={handleSubmit}>
        <div>
          {/* Header with Edit Button */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold text-primary">
                {_.startCase(
                  t("fatherProfileFormTitle", {
                    defaultValue: fatherProfileFormTitle,
                  })
                )}
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

          {/* Basic Information Section */}
          <div className="mt-3">
            <h3 className="text-base font-semibold mb-4 text-primary">
              {_.upperFirst(
                t("fatherProfileFormBasicInfoSectionTitle", {
                  defaultValue: fatherProfileFormBasicInfoSectionTitle,
                })
              )}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MEInput
                id="firstName"
                meclassname="flex"
                type={"text"}
                label={_.upperFirst(
                  t("fatherProfileFormFirstNameLabel", {
                    defaultValue: fatherProfileFormFirstNameLabel,
                  })
                )}
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
                label={_.upperFirst(
                  t("fatherProfileFormLastNameLabel", {
                    defaultValue: fatherProfileFormLastNameLabel,
                  })
                )}
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
                label={_.upperFirst(
                  t("fatherProfileFormPhoneNumberLabel", {
                    defaultValue: fatherProfileFormPhoneNumberLabel,
                  })
                )}
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
                label={_.upperFirst(
                  t("fatherProfileFormEmailLabel", {
                    defaultValue: fatherProfileFormEmailLabel,
                  })
                )}
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
                label={_.upperFirst(
                  t("fatherProfileFormAadhaarNumberLabel", {
                    defaultValue: fatherProfileFormAadhaarNumberLabel,
                  })
                )}
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
                label={_.upperFirst(
                  t("fatherProfileFormOccupationLabel", {
                    defaultValue: fatherProfileFormOccupationLabel,
                  })
                )}
                selectLabel={_.upperFirst(
                  t("fatherProfileFormOccupationSelectPlaceholder", {
                    defaultValue: fatherProfileFormOccupationSelectPlaceholder,
                  })
                )}
                required={true}
                disabled={!isEditMode}
                value={values.occupation}
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
                options={_.map(PARENT_OCCUPATIONS_IN, (label) => ({
                  label: label,
                  value: label,
                }))}
                onBlur={() => setFieldTouched("occupation", true)}
                onChange={(value) => setFieldValue("occupation", value)}
              />

              <MESelect
                label={_.upperFirst(
                  t("fatherProfileFormEducationLabel", {
                    defaultValue: fatherProfileFormEducationLabel,
                  })
                )}
                selectLabel={_.upperFirst(
                  t("fatherProfileFormEducationSelectPlaceholder", {
                    defaultValue: fatherProfileFormEducationSelectPlaceholder,
                  })
                )}
                required={true}
                disabled={!isEditMode}
                value={values.education}
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
                options={_.map(EDUCATION_LEVELS_IN, (label) => ({
                  label: label,
                  value: label,
                }))}
                onBlur={() => setFieldTouched("education", true)}
                onChange={(value) => setFieldValue("education", value)}
              />

              <MEInput
                id="annualIncome"
                meclassname="flex"
                type={"number"}
                label={_.upperFirst(
                  t("fatherProfileFormAnnualIncomeLabel", {
                    defaultValue: fatherProfileFormAnnualIncomeLabel,
                  })
                )}
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

            {values.isAlive &&
              _.size(values.isAlive) > 0 &&
              !values.isAlive[0].isSelected && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                  <MEDatePicker
                    label={_.upperFirst(
                      t("fatherProfileFormFatherDeathDateLabel", {
                        defaultValue: fatherProfileFormFatherDeathDateLabel,
                      })
                    )}
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
                    label={_.upperFirst(
                      t("fatherProfileFormCaringChildByLabel", {
                        defaultValue: fatherProfileFormCaringChildByLabel,
                      })
                    )}
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
              label={_.upperFirst(
                t("profileScreenAddressLabel", {
                  defaultValue: profileScreenAddressLabel,
                })
              )}
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

            {values.sameAddressAsStudent &&
              _.size(values.sameAddressAsStudent) > 0 &&
              !values.sameAddressAsStudent[0].isSelected && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                  <MEInput
                    id="homeAddress"
                    meclassname="flex"
                    type={"text"}
                    label={_.upperFirst(
                      t("profileScreenHomeAddressLabel", {
                        defaultValue: profileScreenHomeAddressLabel,
                      })
                    )}
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
                      setFieldValue(
                        "addressOverride.homeAddress",
                        e.target.value
                      )
                    }
                    onBlur={() =>
                      setFieldTouched("addressOverride.homeAddress", true)
                    }
                  />

                  <MECombobox
                    label={_.upperFirst(
                      t("profileScreenStateLabel", {
                        defaultValue: profileScreenStateLabel,
                      })
                    )}
                    required={true}
                    disabled={!isEditMode}
                    value={values.addressOverride.state}
                    selectedValueLabel={
                      _.find(states, { value: values.addressOverride.state })
                        ?.label || ""
                    }
                    searchPlaceholder={_.upperFirst(
                      t("profileScreenStateSelectPlaceholder", {
                        defaultValue: profileScreenStateSelectPlaceholder,
                      })
                    )}
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
                    options={_.sortBy(
                      _.map(states, (state) => ({
                        label: state.label,
                        value: state.value,
                      })),
                      "label",
                      "asc"
                    )}
                    onBlur={() =>
                      setFieldTouched("addressOverride.state", true)
                    }
                    onChange={(value) => {
                      setFieldValue("addressOverride.state", value);
                      setFieldValue("addressOverride.district", "");
                      setFieldValue("addressOverride.city", "");
                      setFieldValue("addressOverride.areaName", "");
                      setFieldValue("addressOverride.zipcode", "");
                    }}
                  />

                  <MECombobox
                    label={_.upperFirst(
                      t("profileScreenDistrictLabel", {
                        defaultValue: profileScreenDistrictLabel,
                      })
                    )}
                    required={true}
                    disabled={!isEditMode}
                    value={values.addressOverride.district}
                    selectedValueLabel={
                      _.find(districts, {
                        value: values.addressOverride.district,
                      })?.label || ""
                    }
                    searchPlaceholder={_.upperFirst(
                      t("profileScreenDistrictSelectPlaceholder", {
                        defaultValue: profileScreenDistrictSelectPlaceholder,
                      })
                    )}
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
                    options={_.sortBy(
                      _.map(
                        _.filter(districts, {
                          state: values.addressOverride.state,
                        }),
                        (district) => ({
                          label: district.label,
                          value: district.value,
                        })
                      ),
                      "label",
                      "asc"
                    )}
                    onBlur={() =>
                      setFieldTouched("addressOverride.district", true)
                    }
                    onChange={(value) => {
                      setFieldValue("addressOverride.district", value);
                      setFieldValue("addressOverride.city", "");
                      setFieldValue("addressOverride.areaName", "");
                      setFieldValue("addressOverride.zipcode", "");
                    }}
                  />

                  <MECombobox
                    label={_.upperFirst(
                      t("profileScreenCityLabel", {
                        defaultValue: profileScreenCityLabel,
                      })
                    )}
                    required={true}
                    disabled={!isEditMode}
                    value={values.addressOverride.city}
                    selectedValueLabel={
                      _.find(cities, {
                        value: values.addressOverride.city,
                      })?.label || ""
                    }
                    searchPlaceholder={_.upperFirst(
                      t("profileScreenCitySelectPlaceholder", {
                        defaultValue: profileScreenCitySelectPlaceholder,
                      })
                    )}
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
                    options={_.sortBy(
                      _.map(
                        _.filter(cities, {
                          state: values.addressOverride.state,
                          district: values.addressOverride.district,
                        }),
                        (city) => ({
                          label: city.label,
                          value: city.value,
                        })
                      ),
                      "label",
                      "asc"
                    )}
                    onBlur={() => setFieldTouched("addressOverride.city", true)}
                    onChange={(value) => {
                      setFieldValue("addressOverride.city", value);
                      setFieldValue("addressOverride.areaName", "");
                      setFieldValue("addressOverride.zipcode", "");
                    }}
                  />

                  <MECombobox
                    label={_.upperFirst(
                      t("profileScreenAreaNameLabel", {
                        defaultValue: profileScreenAreaNameLabel,
                      })
                    )}
                    required={true}
                    disabled={!isEditMode}
                    value={values.addressOverride.areaName}
                    selectedValueLabel={
                      _.find(areaNames, {
                        value: values.addressOverride.areaName,
                      })?.label || ""
                    }
                    searchPlaceholder={_.upperFirst(
                      t("profileScreenAreaNameSelectPlaceholder", {
                        defaultValue: profileScreenAreaNameSelectPlaceholder,
                      })
                    )}
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
                    options={_.sortBy(
                      _.map(
                        _.filter(areaNames, {
                          state: values.addressOverride.state,
                          district: values.addressOverride.district,
                          city: values.addressOverride.city,
                        }),
                        (areaName) => ({
                          label: areaName.label,
                          value: areaName.value,
                        })
                      ),
                      "label",
                      "asc"
                    )}
                    onBlur={() =>
                      setFieldTouched("addressOverride.areaName", true)
                    }
                    onChange={(value) => {
                      setFieldValue("addressOverride.areaName", value);
                      setFieldValue("addressOverride.zipcode", "");
                    }}
                  />

                  <MECombobox
                    label={_.upperFirst(
                      t("profileScreenZipcodeLabel", {
                        defaultValue: profileScreenZipcodeLabel,
                      })
                    )}
                    required={true}
                    disabled={!isEditMode}
                    value={values.addressOverride.zipcode}
                    selectedValueLabel={
                      _.find(zipcodes, {
                        value: values.addressOverride.zipcode,
                      })?.label || ""
                    }
                    searchPlaceholder={_.upperFirst(
                      t("profileScreenZipcodeSelectPlaceholder", {
                        defaultValue: profileScreenZipcodeSelectPlaceholder,
                      })
                    )}
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
                    options={_.sortBy(
                      _.map(
                        _.filter(zipcodes, {
                          state: values.addressOverride.state,
                          district: values.addressOverride.district,
                          city: values.addressOverride.city,
                          areaName: values.addressOverride.areaName,
                        }),
                        (zipcode) => ({
                          label: zipcode.label,
                          value: zipcode.value,
                        })
                      ),
                      "label",
                      "asc"
                    )}
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
                disabled={!isValid || fatherProfileFormLoader}
                className="flex items-center gap-2"
              >
                {fatherProfileFormLoader ? (
                  <MELoaderIcon />
                ) : (
                  <Check className="w-4 h-4" />
                )}
                {_.upperFirst(
                  t("profileScreenFormSubmitButtonLabel", {
                    defaultValue: profileScreenFormSubmitButtonLabel,
                  })
                )}
              </MEButton>
              <MEButton
                type="button"
                onClick={handleCloseEditMode}
                variant="outline"
              >
                {_.upperFirst(
                  t("profileScreenFormCancelButtonLabel", {
                    defaultValue: profileScreenFormCancelButtonLabel,
                  })
                )}
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
    .min(firstNameMinChar, firstNameMinLength)
    .max(firstNameMaxChar, firstNameMaxLength)
    .required(firstNameRequired),
  lastName: Yup.string()
    .min(lastNameMinChar, lastNameMinLength)
    .max(lastNameMaxChar, lastNameMaxLength)
    .required(lastNameRequired),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, phoneNumberInvalid)
    .length(phoneNumberChar, phoneNumberLength)
    .required(phoneNumberRequired),
  email: Yup.string()
    .max(emailMaxChar, emailMaxLength)
    .min(emailMinChar, emailMinLength)
    .email(emailInvalid)
    .required(emailRequired),
  aadhaarNumber: Yup.string()
    .matches(aadhaarNumberRegExp, aadhaarNumberInvalid)
    .length(aadhaarNumberChar, aadhaarNumberLength)
    .required(aadhaarNumberRequired),
  occupation: Yup.string().required(fatherFormFatherOccupationRequired),
  education: Yup.string().required(fatherFormFatherEducationRequired),
  annualIncome: Yup.number()
    .positive(fatherFormAnnualIncomeMustBePositive)
    .required(fatherFormAnnualIncomeRequired)
    .max(fatherFormAnnualIncomeMaxNum, fatherFormAnnualIncomeMaxNumber)
    .min(fatherFormAnnualIncomeMinNum, fatherFormAnnualIncomeMinNumber),
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
        .required(fatherFormFatherDeathOfDateRequired)
        .max(moment().endOf("day"), fatherFormFatherDeathOfDateInvalid),
  }),
  caringChildBy: Yup.string().when("isAlive", {
    is: (isAlive) => Array.isArray(isAlive) && !isAlive[0]?.isSelected,
    then: (schema) =>
      schema
        .min(fatherFormCaringChildByMinChar, fatherFormCaringChildByMinLength)
        .max(fatherFormCaringChildByMaxChar, fatherFormCaringChildByMaxLength)
        .required(fatherFormCaringChildByRequired),
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
        state: Yup.string().required(stateSelectionRequired),
        district: Yup.string().required(districtSelectionRequired),
        city: Yup.string().required(citySelectionRequired),
        areaName: Yup.string().required(areaNameSelectionRequired),
        zipcode: Yup.string().required(zipcodeSelectionRequired),
        homeAddress: Yup.string()
          .min(addressMinChar, addressMinLength)
          .max(addressMaxChar, addressMaxLength)
          .required(addressRequired),
      }),
  }),
});

export default FatherProfileComponent;
