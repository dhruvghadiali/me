import _ from "lodash";
import { parseToISODate } from "@MEUtils/utilityFunctions";

/**
 * Helper function to extract same_school status
 * @param {boolean} sameSchool - Whether sibling studies in same school
 * @returns {boolean} Status value
 */
const extractSameSchoolStatus = (sameSchool) => {
  return typeof sameSchool === "boolean" ? sameSchool : false;
};

/**
 * Helper function to build school/admission info based on same_school status
 * @param {boolean} sameSchool - Whether sibling studies in same school
 * @param {object} siblingData - Sibling data object
 * @returns {object} School or admission info object
 */
const buildSchoolInfo = (sameSchool, siblingData) => {
  const schoolInfo = {};
  
  if (sameSchool) {
    schoolInfo.school_name = _.get(siblingData, "schoolName", "");
  } else {
    schoolInfo.admission_number = _.get(siblingData, "admissionNumber", "");
  }
  
  return schoolInfo;
};

/**
 * Transform sibling profile form data to API payload format
 * @param {object} siblingData - Sibling profile form data
 * @returns {object} Formatted payload for API
 */
const createSiblingProfilePayload = (siblingData) => {
  const sameSchool = extractSameSchoolStatus(_.get(siblingData, "sameSchool", false));

  return {
    first_name: _.get(siblingData, "firstName", ""),
    last_name: _.get(siblingData, "lastName", ""),
    gender: _.get(siblingData, "gender", ""),
    date_of_birth: parseToISODate(_.get(siblingData, "dateOfBirth", "")),
    studying_in_class: _.get(siblingData, "studyingInClass", ""),
    same_school: sameSchool,
    ...buildSchoolInfo(sameSchool, siblingData),
  };
};

/**
 * Transform multiple sibling profiles to API payload format
 * @param {array} siblings - Array of sibling profile form data
 * @returns {array} Array of formatted payloads for API
 */
const createSiblingsPayload = (siblings) => {
  return _.isArray(siblings)
    ? _.map(siblings, (sibling) => createSiblingProfilePayload(sibling))
    : [];
};

export {
  createSiblingProfilePayload,
  createSiblingsPayload,
};
