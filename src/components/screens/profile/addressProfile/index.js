import React, { useState } from "react";

import { useFormik } from "formik";
import { Edit2, Check, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import _ from "lodash";
import * as Yup from "yup";

import MEInput from "@MECommonComponents/input/meInput";
import MEButton from "@MECommonComponents/button/meButton";
import MECombobox from "@MECommonComponents/form/combobox";
import MELoaderIcon from "@MECommonComponents/loader/meLoaderIcon";
import ProfileErrorMessageComponent from "@MEScreenComponents/profile/errorMessage";
import LastUpdatedAtInfoComponent from "@MEScreenComponents/profile/lastUpdatedAtInfo";

import {
  addAddressProfile,
  updatedAddressProfile,
} from "@MERedux/profile/profileAction";
import { createAddressProfilePayload } from "@MEUtils/apiPayload";
import {
  ME_INPUT_COMPONENT_VARIANTS,
  ME_COMBOBOX_COMPONENT_VARIANTS,
} from "@MEHelpers/enums";

const AddressProfileComponent = () => {
  const dispatch = useDispatch();

  const [isEditMode, setIsEditMode] = useState(false);
  const {
    profile,
    addressProfileFormLoader,
    addressProfileFormError,
    states,
    districts,
    cities,
    areaNames,
    zipcodes,
  } = useSelector((state) => state.profile);

  const formik = useFormik({
    initialValues: {
      ...profile.addressProfile,
    },
    validationSchema: addressValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: (values) => {
      console.log("Address Profile Form submitted");
      console.log("Submitted Values:", values);

      if (values.id) {
        // Update existing address profile
        const payload = createAddressProfilePayload(values);
        dispatch(updatedAddressProfile({ id: values.id, data: payload }));
      } else {
        // Add new address profile
        const payload = createAddressProfilePayload(values);
        dispatch(addAddressProfile(payload));
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
        await addressValidationSchema.validate(values, { abortEarly: false });
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
      {addressProfileFormError && (
        <ProfileErrorMessageComponent message={addressProfileFormError} />
      )}

      <form onSubmit={handleSubmit}>
        <div>
          {/* Header with Edit Button */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold text-primary">
                Address Profile
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

          {/* Address Information Section */}
          <div className="mt-3">
            <h3 className="text-base font-semibold mb-4 text-primary">
              Address Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MEInput
                id="homeAddress"
                meclassname="flex"
                type={"text"}
                label={"Home Address"}
                required={true}
                disabled={!isEditMode}
                value={values.homeAddress}
                labelvariant={
                  errors.homeAddress && touched.homeAddress
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                inputvariant={
                  errors.homeAddress && touched.homeAddress
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                messagevariant={
                  errors.homeAddress && touched.homeAddress
                    ? ME_INPUT_COMPONENT_VARIANTS.DANGER
                    : ME_INPUT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.homeAddress && touched.homeAddress
                    ? errors.homeAddress
                    : ""
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <MECombobox
                label="State"
                required={true}
                disabled={!isEditMode}
                value={values.state}
                selectedValueLabel={
                  _.find(states, { value: values.state })?.label || ""
                }
                searchPlaceholder={"Search State..."}
                labelVariant={
                  errors.state && touched.state
                    ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                    : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                }
                comboboxVariant={
                  errors.state && touched.state
                    ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                    : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.state && touched.state
                    ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                    : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                }
                message={errors.state && touched.state ? errors.state : ""}
                options={_.sortBy(
                  _.map(states, (state) => ({
                    label: state.label,
                    value: state.value,
                  })),
                  "label",
                  "asc"
                )}
                onBlur={() => setFieldTouched("state", true)}
                onChange={(value) => {
                  setFieldValue("state", value);
                  setFieldValue("district", "");
                  setFieldValue("city", "");
                  setFieldValue("areaName", "");
                  setFieldValue("zipcode", "");
                }}
              />

              <MECombobox
                label="District"
                required={true}
                disabled={!isEditMode}
                value={values.district}
                selectedValueLabel={
                  _.find(districts, { value: values.district })?.label || ""
                }
                searchPlaceholder={"Search District..."}
                labelVariant={
                  errors.district && touched.district
                    ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                    : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                }
                comboboxVariant={
                  errors.district && touched.district
                    ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                    : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.district && touched.district
                    ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                    : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.district && touched.district ? errors.district : ""
                }
                options={_.sortBy(
                  _.map(
                    _.filter(districts, {
                      state: values.state,
                    }),
                    (district) => ({
                      label: district.label,
                      value: district.value,
                    })
                  ),
                  "label",
                  "asc"
                )}
                onBlur={() => setFieldTouched("district", true)}
                onChange={(value) => {
                  setFieldValue("district", value);
                  setFieldValue("city", "");
                  setFieldValue("areaName", "");
                  setFieldValue("zipcode", "");
                }}
              />

              <MECombobox
                label="City"
                required={true}
                disabled={!isEditMode}
                value={values.city}
                selectedValueLabel={
                  _.find(cities, { value: values.city })?.label || ""
                }
                searchPlaceholder={"Search City..."}
                labelVariant={
                  errors.city && touched.city
                    ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                    : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                }
                comboboxVariant={
                  errors.city && touched.city
                    ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                    : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.city && touched.city
                    ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                    : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                }
                message={errors.city && touched.city ? errors.city : ""}
                options={_.sortBy(
                  _.map(
                    _.filter(cities, {
                      state: values.state,
                      district: values.district,
                    }),
                    (city) => ({
                      label: city.label,
                      value: city.value,
                    })
                  ),
                  "label",
                  "asc"
                )}
                onBlur={() => setFieldTouched("city", true)}
                onChange={(value) => {
                  setFieldValue("city", value);
                  setFieldValue("areaName", "");
                  setFieldValue("zipcode", "");
                }}
              />

              <MECombobox
                label="Area Name"
                required={true}
                disabled={!isEditMode}
                value={values.areaName}
                selectedValueLabel={
                  _.find(areaNames, { value: values.areaName })?.label || ""
                }
                searchPlaceholder={"Search Area Name..."}
                labelVariant={
                  errors.areaName && touched.areaName
                    ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                    : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                }
                comboboxVariant={
                  errors.areaName && touched.areaName
                    ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                    : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.areaName && touched.areaName
                    ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                    : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.areaName && touched.areaName ? errors.areaName : ""
                }
                options={_.sortBy(
                  _.map(
                    _.filter(areaNames, {
                      state: values.state,
                      district: values.district,
                      city: values.city,
                    }),
                    (areaName) => ({
                      label: areaName.label,
                      value: areaName.value,
                    })
                  ),
                  "label",
                  "asc"
                )}
                onBlur={() => setFieldTouched("areaName", true)}
                onChange={(value) => {
                  setFieldValue("areaName", value);
                  setFieldValue("zipcode", "");
                }}
              />

              <MECombobox
                label="Zipcode"
                required={true}
                disabled={!isEditMode}
                value={values.zipcode}
                selectedValueLabel={
                  _.find(zipcodes, { value: values.zipcode })?.label || ""
                }
                searchPlaceholder={"Search Zipcode..."}
                labelVariant={
                  errors.zipcode && touched.zipcode
                    ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                    : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                }
                comboboxVariant={
                  errors.zipcode && touched.zipcode
                    ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                    : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.zipcode && touched.zipcode
                    ? ME_COMBOBOX_COMPONENT_VARIANTS.DANGER
                    : ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.zipcode && touched.zipcode ? errors.zipcode : ""
                }
                options={_.sortBy(
                  _.map(
                    _.filter(zipcodes, {
                      state: values.state,
                      district: values.district,
                      city: values.city,
                      areaName: values.areaName,
                    }),
                    (zipcode) => ({
                      label: zipcode.label,
                      value: zipcode.value,
                    })
                  ),
                  "label",
                  "asc"
                )}
                onBlur={() => setFieldTouched("zipcode", true)}
                onChange={(value) => setFieldValue("zipcode", value)}
              />
            </div>
          </div>

          {isEditMode && (
            <div className="flex gap-4 mt-8">
              <MEButton
                type="submit"
                disabled={!isValid || addressProfileFormLoader}
                className="flex items-center gap-2"
              >
                {addressProfileFormLoader ? (
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
const addressValidationSchema = Yup.object().shape({
  homeAddress: Yup.string()
    .min(5, "Address must be at least 5 characters")
    .max(200, "Address must be at most 200 characters")
    .required("Address is required"),
  state: Yup.string().required("State is required"),
  district: Yup.string().required("District is required"),
  city: Yup.string().required("City is required"),
  areaName: Yup.string().required("Area name is required"),
  zipcode: Yup.string().required("Zipcode is required"),
});

export default AddressProfileComponent;
