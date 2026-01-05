import _ from "lodash";
import moment from "moment";

/**
 * Transform father profile form data to API payload format
 * @param {object} fatherData - Father profile form data
 * @returns {object} Formatted payload for API
 */
const createFatherProfilePayload = (fatherData) => {
  const isAlive =
    fatherData && fatherData.isAlive && _.size(fatherData.isAlive) > 0
      ? fatherData.isAlive[0].isSelected
      : false;

  // Build alive object with conditional fields
  let alive = {
    status: isAlive,
  };

  // Add date_of_death only if alive status is false
  if (isAlive === false) {
    // Handle date of death conversion if alive status is false
    const dateOfDeath = _.get(fatherData, "dateOfDeath");
    let formattedDateOfDeath = "";

    if (dateOfDeath) {
      if (dateOfDeath instanceof Date) {
        formattedDateOfDeath = moment(dateOfDeath).toISOString();
      } else if (typeof dateOfDeath === "string") {
        const momentDate = dateOfDeath.includes("T")
          ? moment(dateOfDeath) // ISO format
          : moment(dateOfDeath, "DD/MM/YYYY"); // DD/MM/YYYY format
        formattedDateOfDeath = momentDate.isValid()
          ? momentDate.toISOString()
          : "";
      }
    }

    alive = {
      ...alive,
      date_of_death: formattedDateOfDeath,
      caring_child_by: _.get(fatherData, "caringChildBy", ""),
    };
  }

  return {
    first_name: _.get(fatherData, "firstName", ""),
    last_name: _.get(fatherData, "lastName", ""),
    phone_number: _.get(fatherData, "phoneNumber", ""),
    email: _.get(fatherData, "email", ""),
    aadhaar_number: _.get(fatherData, "aadhaarNumber", ""),
    occupation: _.get(fatherData, "occupation", ""),
    education: _.get(fatherData, "education", ""),
    annual_income: _.get(fatherData, "annualIncome", ""),
    alive: alive,
    same_address_as_student: _.get(
      fatherData,
      "sameAddressAsStudent[0].isSelected",
      false
    ),
    parent_type: "father",
  };
};

const createFatherProfileOverrideAddressPayload = (addressData) => {
  return {
    state: _.get(addressData, "state", ""),
    district: _.get(addressData, "district", ""),
    city: _.get(addressData, "city", ""),
    area_name: _.get(addressData, "areaName", ""),
    zipcode: _.get(addressData, "zipcode", ""),
    address: _.get(addressData, "homeAddress", ""),
    user_type: "FATHER",
  };
};

export {
  createFatherProfilePayload,
  createFatherProfileOverrideAddressPayload,
};
