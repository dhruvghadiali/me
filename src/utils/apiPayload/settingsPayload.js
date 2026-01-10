import _ from "lodash";

/**
 * Transform update username to API payload format
 * @param {object} userData - User form data
 * @returns {object} Formatted user payload for API
 */
const createUpdateUsernamePayload = (userData) => {
  return {
    new_username: _.get(userData, "username", ""),
    password: _.get(userData, "password", ""),
  };
};

export { createUpdateUsernamePayload };
