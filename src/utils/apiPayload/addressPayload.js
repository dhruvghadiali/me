import _ from "lodash";

/**
 * Transform address data to API payload format
 * @param {object} addressData - Address form data
 * @returns {object} Formatted address payload for API
 */
const createAddressProfilePayload = (addressData) => {
  return {
    state: _.get(addressData, "state", ""),
    district: _.get(addressData, "district", ""),
    city: _.get(addressData, "city", ""),
    area_name: _.get(addressData, "areaName", ""),
    zipcode: _.get(addressData, "zipcode", ""),
    address: _.get(addressData, "homeAddress", ""),
    user_type: "STUDENT",
  };
};

export {
  createAddressProfilePayload,
};