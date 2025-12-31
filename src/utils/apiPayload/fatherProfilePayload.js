import _ from "lodash";
import moment from "moment";

/**
 * Transform father profile form data to API payload format
 * @param {object} fatherData - Father profile form data
 * @returns {object} Formatted payload for API
 */
const createFatherProfilePayload = (fatherData) => {
  // Handle date of death conversion if alive status is false
  const dateOfDeath = _.get(fatherData, "alive.dateOfDeath");
  let formattedDateOfDeath = "";

  if (dateOfDeath && _.get(fatherData, "alive.status") === false) {
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

  // Build alive object with conditional fields
  const alive = {
    status: _.get(fatherData, "alive.status", true),
  };

  // Add date_of_death only if alive status is false
  if (_.get(fatherData, "alive.status") === false) {
    alive.date_of_death = formattedDateOfDeath;
    alive.caring_child_by = _.get(fatherData, "alive.caringChildBy", "");
  }

  return {
    first_name: _.get(fatherData, "firstName", ""),
    last_name: _.get(fatherData, "lastName", ""),
    phone_number: _.get(fatherData, "phoneNumber", ""),
    email: _.get(fatherData, "email", ""),
    aadhaar_number: _.get(fatherData, "aadhaarNumber", ""),
    occupation: _.get(fatherData, "occupation", ""),
    education: _.get(fatherData, "education", ""),
    parent_type: _.get(fatherData, "parentType", ""),
    annual_income: _.get(fatherData, "annualIncome", ""),
    alive: alive,
    same_address_as_student: _.get(fatherData, "sameAddressAsStudent[0].isSelected", false),
    parent_type: "father",
  };
};

export { createFatherProfilePayload };
