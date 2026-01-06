import _ from "lodash";
import { parseToISODate } from "@MEUtils/utilityFunctions";
/**
 * Helper function to extract isAlive status
 * @param {array} isAliveArray - Array with isAlive status
 * @returns {boolean} Status value or false
 */
const extractIsAliveStatus = (isAliveArray) => {
  return isAliveArray && _.size(isAliveArray) > 0
    ? isAliveArray[0].isSelected
    : false;
};

/**
 * Helper function to build alive object
 * @param {boolean} isAlive - Whether person is alive
 * @param {object} fatherData - Father data object
 * @returns {object} Alive object with conditional fields
 */
const buildAliveObject = (isAlive, fatherData) => {
  const alive = { status: isAlive };

  if (!isAlive) {
    alive.date_of_death = parseToISODate(_.get(fatherData, "dateOfDeath"));
    alive.caring_child_by = _.get(fatherData, "caringChildBy", "");
  }

  return alive;
};

/**
 * Transform mother profile form data to API payload format
 * @param {object} motherData - Mother profile form data
 * @returns {object} Formatted payload for API
 */
const createMotherProfilePayload = (motherData) => {
  const isAlive = extractIsAliveStatus(motherData?.isAlive);

  return {
    first_name: _.get(motherData, "firstName", ""),
    last_name: _.get(motherData, "lastName", ""),
    phone_number: _.get(motherData, "phoneNumber", ""),
    email: _.get(motherData, "email", ""),
    aadhaar_number: _.get(motherData, "aadhaarNumber", ""),
    occupation: _.get(motherData, "occupation", ""),
    education: _.get(motherData, "education", ""),
    annual_income: _.get(motherData, "annualIncome", ""),
    alive: buildAliveObject(isAlive, motherData),
    same_address_as_student: _.get(
      motherData,
      "sameAddressAsStudent[0].isSelected",
      false
    ),
    parent_type: "mother",
  };
};

/**
 * Transform address data to API payload format
 * @param {object} addressData - Address form data
 * @returns {object} Formatted address payload for API
 */
const createMotherProfileOverrideAddressPayload = (addressData) => {
  return {
    state: _.get(addressData, "state", ""),
    district: _.get(addressData, "district", ""),
    city: _.get(addressData, "city", ""),
    area_name: _.get(addressData, "areaName", ""),
    zipcode: _.get(addressData, "zipcode", ""),
    address: _.get(addressData, "homeAddress", ""),
    user_type: "MOTHER",
  };
};

export {
  createMotherProfilePayload,
  createMotherProfileOverrideAddressPayload,
};
