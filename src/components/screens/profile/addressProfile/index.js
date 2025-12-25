import React, { useState } from "react";
import { useFormik } from "formik";
import { Edit2, Check, X } from "lucide-react";

import _ from "lodash";
import * as Yup from "yup";

import MESelect from "@/components/common/form/select";
import MEInput from "@MECommonComponents/input/meInput";
import MEButton from "@MECommonComponents/button/meButton";

import {
  ME_INPUT_COMPONENT_VARIANTS,
  ME_SELECT_COMPONENT_VARIANTS,
} from "@MEHelpers/enums";

// Enumerations for address dropdowns
const STATES = {
  MAHARASHTRA: "Maharashtra",
  KARNATAKA: "Karnataka",
  TAMIL_NADU: "Tamil Nadu",
  GUJARAT: "Gujarat",
  WEST_BENGAL: "West Bengal",
  DELHI: "Delhi",
  PUNJAB: "Punjab",
};

const DISTRICTS = {
  MUMBAI: "Mumbai",
  PUNE: "Pune",
  NASHIK: "Nashik",
  NAGPUR: "Nagpur",
};

const CITIES = {
  MUMBAI_CITY: "Mumbai City",
  SUBURBAN: "Suburban",
  WESTERN: "Western",
  EASTERN: "Eastern",
};

const AREAS = {
  AREA_1: "Area 1",
  AREA_2: "Area 2",
  AREA_3: "Area 3",
  AREA_4: "Area 4",
};

const ZIPCODES = {
  ZIP_400001: "400001",
  ZIP_400002: "400002",
  ZIP_400003: "400003",
  ZIP_400004: "400004",
};

const AddressProfileComponent = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const formik = useFormik({
    initialValues: {
      address: "",
      state: "",
      district: "",
      city: "",
      areaName: "",
      zipcode: "",
    },
    validationSchema: addressValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: (values) => {
      console.log("Address Profile Form submitted");
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
            <h2 className="text-2xl font-bold text-primary">Address Profile</h2>
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

          {/* Address Information Section */}
          <div className="mt-3">
            <h3 className="text-base font-semibold mb-4 text-primary">
              Address Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MEInput
                id="address"
                meclassname="flex"
                type={"text"}
                label={"Address"}
                required={true}
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

              <MESelect
                label="State"
                required={true}
                disabled={!isEditMode}
                value={values.state}
                selectLabel="Select State"
                selectVariant={
                  errors.state && touched.state
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                labelVariant={
                  errors.state && touched.state
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.state && touched.state
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.state && touched.state ? errors.state : ""
                }
                options={_.map(STATES, (label, value) => ({
                  label,
                  value,
                }))}
                onBlur={() => setFieldTouched("state", true)}
                onChange={(value) => setFieldValue("state", value)}
              />

              <MESelect
                label="District"
                required={true}
                disabled={!isEditMode}
                value={values.district}
                selectLabel="Select District"
                selectVariant={
                  errors.district && touched.district
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                labelVariant={
                  errors.district && touched.district
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.district && touched.district
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.district && touched.district
                    ? errors.district
                    : ""
                }
                options={_.map(DISTRICTS, (label, value) => ({
                  label,
                  value,
                }))}
                onBlur={() => setFieldTouched("district", true)}
                onChange={(value) => setFieldValue("district", value)}
              />

              <MESelect
                label="City"
                required={true}
                disabled={!isEditMode}
                value={values.city}
                selectLabel="Select City"
                selectVariant={
                  errors.city && touched.city
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                labelVariant={
                  errors.city && touched.city
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.city && touched.city
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.city && touched.city ? errors.city : ""
                }
                options={_.map(CITIES, (label, value) => ({
                  label,
                  value,
                }))}
                onBlur={() => setFieldTouched("city", true)}
                onChange={(value) => setFieldValue("city", value)}
              />

              <MESelect
                label="Area Name"
                required={true}
                disabled={!isEditMode}
                value={values.areaName}
                selectLabel="Select Area"
                selectVariant={
                  errors.areaName && touched.areaName
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                labelVariant={
                  errors.areaName && touched.areaName
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.areaName && touched.areaName
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.areaName && touched.areaName
                    ? errors.areaName
                    : ""
                }
                options={_.map(AREAS, (label, value) => ({
                  label,
                  value,
                }))}
                onBlur={() => setFieldTouched("areaName", true)}
                onChange={(value) => setFieldValue("areaName", value)}
              />

              <MESelect
                label="Zipcode"
                required={true}
                disabled={!isEditMode}
                value={values.zipcode}
                selectLabel="Select Zipcode"
                selectVariant={
                  errors.zipcode && touched.zipcode
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                labelVariant={
                  errors.zipcode && touched.zipcode
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                messageVariant={
                  errors.zipcode && touched.zipcode
                    ? ME_SELECT_COMPONENT_VARIANTS.DANGER
                    : ME_SELECT_COMPONENT_VARIANTS.PRIMARY
                }
                message={
                  errors.zipcode && touched.zipcode
                    ? errors.zipcode
                    : ""
                }
                options={_.map(ZIPCODES, (label, value) => ({
                  label,
                  value,
                }))}
                onBlur={() => setFieldTouched("zipcode", true)}
                onChange={(value) => setFieldValue("zipcode", value)}
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
const addressValidationSchema = Yup.object().shape({
  address: Yup.string()
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
