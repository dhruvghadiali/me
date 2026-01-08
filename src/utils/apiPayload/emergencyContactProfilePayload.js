import _ from "lodash";

/**
 * Transform emergency contact data to API payload format
 * @param {object} emergencyContactData - Emergency contact form data
 * @returns {object} Formatted emergency contact payload for API
 */
const createEmergencyContactProfilePayload = (emergencyContactData) => {
  const payload = {
    name: _.get(emergencyContactData, "name", ""),
    relation: _.get(emergencyContactData, "relation", ""),
    phone_number: _.get(emergencyContactData, "phoneNumber", ""),
  };

  const alternatePhone = _.get(emergencyContactData, "alternatePhoneNumber", "");
  if (!_.isEmpty(alternatePhone)) {
    payload.alternate_phone = alternatePhone;
  }

  const email = _.get(emergencyContactData, "email", "");
  if (!_.isEmpty(email)) {
    payload.email = email;
  }

  const address = _.get(emergencyContactData, "address", "");
  if (!_.isEmpty(address)) {
    payload.address = address;
  }

  return payload;
};

export {
  createEmergencyContactProfilePayload,
};