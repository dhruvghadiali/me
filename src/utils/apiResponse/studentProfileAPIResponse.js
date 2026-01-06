import _ from "lodash";

import { parseToISODate } from "@MEUtils/utilityFunctions";
import { GENDERS, ALLERGIES, BLOOD_GROUPS } from "@MEHelpers/enums";

/**
 * Helper function to format enum values
 * @param {string} value - Value to find in enum
 * @param {object} enumObj - Enum object to search
 * @returns {string} Matched enum value or original value
 */
const findEnumValue = (value, enumObj) => {
  return _.find(_.values(enumObj), (val) => val === value) || value;
};

/**
 * Helper function to format allergies with custom allergies included
 * @param {array} profileAllergies - Allergies from profile
 * @returns {array} Formatted allergies with labels and selection status
 */
const formatAllergies = (profileAllergies) => {
  const allergiesArray = _.isArray(profileAllergies) ? profileAllergies : [];
  const allergiesFromEnum = _.map(ALLERGIES, (val) => ({
    label: val,
    isSelected: _.includes(allergiesArray, val),
  }));
  const extraAllergies = _.map(
    _.difference(allergiesArray, _.values(ALLERGIES)),
    (val) => ({ label: val, isSelected: true })
  );
  return [...allergiesFromEnum, ...extraAllergies];
};

/**
 * Helper function to format medical info
 * @param {object} studentData - Student data object
 * @returns {object} Formatted medical info
 */
const formatMedicalInfo = (studentData) => ({
  hasHearingIssue: _.get(studentData, "medical_info.has_hearing_issue", false),
  hearingIssueDetails: _.get(studentData, "medical_info.hearing_issue_details", ""),
  hasVisionIssue: _.get(studentData, "medical_info.has_vision_issue", false),
  visionIssueDetails: _.get(studentData, "medical_info.vision_issue_details", ""),
  hasPhysicalIssue: _.get(studentData, "medical_info.has_physical_issue", false),
  physicalIssueDetails: _.get(studentData, "medical_info.physical_issue_details", ""),
  hasMentalIssue: _.get(studentData, "medical_info.has_mental_issue", false),
  mentalIssueDetails: _.get(studentData, "medical_info.mental_issue_details", ""),
  hasAllergies: _.get(studentData, "medical_info.has_allergies", false),
  allergies: formatAllergies(_.get(studentData, "medical_info.allergies")),
});

/**
 * Helper function to format student profile
 * @param {object} studentData - Student data object
 * @returns {object} Formatted student profile
 */
const formatStudentProfile = (studentData) => ({
  id: _.get(studentData, "id", ""),
  firstName: _.get(studentData, "first_name", ""),
  lastName: _.get(studentData, "last_name", ""),
  dateOfBirth: parseToISODate(_.get(studentData, "date_of_birth", "")),
  gender: findEnumValue(_.get(studentData, "gender", ""), GENDERS),
  bloodGroup: findEnumValue(_.get(studentData, "blood_group", ""), BLOOD_GROUPS).toLowerCase(),
  aadhaarNumber: _.get(studentData, "aadhaar_number", ""),
  nationality: _.get(studentData, "nationality", ""),
  phoneNumber: _.get(studentData, "phone_number", ""),
  email: _.get(studentData, "email", ""),
  medicalInfo: formatMedicalInfo(studentData),
  updatedAt: parseToISODate(_.get(studentData, "updated_at", "")),
});

/**
 * Helper function to format address override
 * @param {object} addressData - Address data object
 * @returns {object} Formatted address
 */
const formatAddress = (addressData = {}) => ({
  state: _.get(addressData, "state.id", ""),
  district: _.get(addressData, "district.id", ""),
  city: _.get(addressData, "city.id", ""),
  areaName: _.get(addressData, "area_name.id", ""),
  zipcode: _.get(addressData, "zipcode.id", ""),
  homeAddress: _.get(addressData, "address", ""),
  id: _.get(addressData, "id", ""),
});

/**
 * Helper function to format guardian profile (father/mother)
 * @param {object} guardianData - Guardian data object
 * @returns {object} Formatted guardian profile
 */
const formatParentProfile = (parentData) => ({
  id: _.get(parentData, "id", ""),
  firstName: _.get(parentData, "first_name", ""),
  lastName: _.get(parentData, "last_name", ""),
  phoneNumber: _.get(parentData, "phone_number", ""),
  email: _.get(parentData, "email", ""),
  aadhaarNumber: _.get(parentData, "aadhaar_number", ""),
  occupation: _.get(parentData, "occupation", "").toLowerCase(),
  education: _.get(parentData, "education", "").toLowerCase(),
  annualIncome: _.get(parentData, "annual_income", ""),
  isAlive: [{ label: "Is Alive", isSelected: _.get(parentData, "alive.status", true) }],
  dateOfDeath: parseToISODate(_.get(parentData, "alive.date_of_death", "")),
  caringChildBy: _.get(parentData, "alive.caring_child_by", ""),
  sameAddressAsStudent: [
    { label: "Same address as student", isSelected: _.get(parentData, "same_address_as_student", true) },
  ],
  addressOverride: formatAddress(_.get(parentData, "address")),
  updatedAt: parseToISODate(_.get(parentData, "updated_at", "")),
});

/**
 * Transform API response to format with label and value fields using lodash
 * @param {object} profile - Object of student profile from API
 * @returns {object} Formatted student profile object
 */
const formatStudentProfileData = (profile) => {
  const studentData = profile?.student || {};
  const fatherData = profile?.father || {};
  const motherData = profile?.mother || {};

  return {
    studentProfile: formatStudentProfile(studentData),
    fatherProfile: formatParentProfile(fatherData),
    motherProfile: formatParentProfile(motherData),
  };
};

export { formatStudentProfileData };
