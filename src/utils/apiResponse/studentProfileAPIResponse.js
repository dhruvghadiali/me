import _ from "lodash";
import moment from "moment";

import { GENDERS, ALLERGIES, BLOOD_GROUPS } from "@MEHelpers/enums";
/**
 * Transform API response to format with label and value fields using lodash
 * @param {object} profile - Object of student profile from API
 * @returns {Array} Formatted student profile object
 */
const formatStudentProfileData = (profile) => {
  let studentData = profile?.student || {};
  let fatherData = profile?.father || {};
  let motherData = profile?.mother || {};

  return {
    studentProfile: {
      id: _.get(studentData, "id", ""),
      firstName: _.get(studentData, "first_name", ""),
      lastName: _.get(studentData, "last_name", ""),
      dateOfBirth: (() => {
        const dateStr = _.get(studentData, "date_of_birth", "");
        if (!dateStr) return "";

        // Check if it's an ISO string or DD/MM/YYYY format
        const momentDate = dateStr.includes("T")
          ? moment(dateStr) // ISO format
          : moment(dateStr, "DD MMMM YYYY"); // DD/MM/YYYY format

        return momentDate.isValid() ? momentDate.toISOString() : "";
      })(),
      gender:
        _.find(
          _.values(GENDERS),
          (val) => val === _.get(studentData, "gender", "")
        ) || _.get(studentData, "gender", ""),
      bloodGroup: (
        _.find(
          _.values(BLOOD_GROUPS),
          (val) => val === _.get(studentData, "blood_group", "")
        ) || _.get(studentData, "blood_group", "")
      ).toLowerCase(),
      aadhaarNumber: _.get(studentData, "aadhaar_number", ""),
      nationality: _.get(studentData, "nationality", ""),
      phoneNumber: _.get(studentData, "phone_number", ""),
      email: _.get(studentData, "email", ""),
      medicalInfo: {
        hasHearingIssue: _.get(
          studentData,
          "medical_info.has_hearing_issue",
          false
        ),
        hearingIssueDetails: _.get(
          studentData,
          "medical_info.hearing_issue_details",
          ""
        ),
        hasVisionIssue: _.get(
          studentData,
          "medical_info.has_vision_issue",
          false
        ),
        visionIssueDetails: _.get(
          studentData,
          "medical_info.vision_issue_details",
          ""
        ),
        hasPhysicalIssue: _.get(
          studentData,
          "medical_info.has_physical_issue",
          false
        ),
        physicalIssueDetails: _.get(
          studentData,
          "medical_info.physical_issue_details",
          ""
        ),
        hasMentalIssue: _.get(
          studentData,
          "medical_info.has_mental_issue",
          false
        ),
        mentalIssueDetails: _.get(
          studentData,
          "medical_info.mental_issue_details",
          ""
        ),
        hasAllergies: _.get(studentData, "medical_info.has_allergies", false),
        allergies: (() => {
          const profileAllergies = _.isArray(
            _.get(studentData, "medical_info.allergies")
          )
            ? _.get(studentData, "medical_info.allergies")
            : [];
          const allergiesFromEnum = _.map(ALLERGIES, (val) => ({
            label: val,
            isSelected: _.includes(profileAllergies, val),
          }));
          const extraAllergies = _.map(
            _.difference(profileAllergies, _.values(ALLERGIES)),
            (val) => ({
              label: val,
              isSelected: true,
            })
          );
          return [...allergiesFromEnum, ...extraAllergies];
        })(),
      },
      updatedAt: (() => {
        const dateStr = _.get(studentData, "updated_at", "");
        if (!dateStr) return "";

        // Check if it's an ISO string or DD/MM/YYYY format
        const momentDate = dateStr.includes("T")
          ? moment(dateStr) // ISO format
          : moment(dateStr, "DD MMMM YYYY hh:mm A"); // DD MMMM YYYY format

        return momentDate.isValid() ? momentDate.toISOString() : "";
      })(),
    },
    fatherProfile: {
      id: _.get(fatherData, "id", ""),
      firstName: _.get(fatherData, "first_name", ""),
      lastName: _.get(fatherData, "last_name", ""),
      phoneNumber: _.get(fatherData, "phone_number", ""),
      email: _.get(fatherData, "email", ""),
      aadhaarNumber: _.get(fatherData, "aadhaar_number", ""),
      occupation: _.get(fatherData, "occupation", "").toLowerCase(),
      education: _.get(fatherData, "education", "").toLowerCase(),
      annualIncome: _.get(fatherData, "annual_income", ""),
      isAlive: [
        {
          label: "Is Alive",
          isSelected: _.get(fatherData, "alive.status", true),
        },
      ],
      dateOfDeath: (() => {
        const dateStr = _.get(fatherData, "alive.date_of_death", "");
        if (!dateStr) return "";

        // Check if it's an ISO string or DD/MM/YYYY format
        const momentDate = dateStr.includes("T")
          ? moment(dateStr) // ISO format
          : moment(dateStr, "DD MMMM YYYY"); // DD/MM/YYYY format

        return momentDate.isValid() ? momentDate.toISOString() : "";
      })(),
      caringChildBy: _.get(fatherData, "alive.caring_child_by", ""),
      sameAddressAsStudent: [
        {
          label: "Same address as student",
          isSelected: _.get(fatherData, "same_address_as_student", true),
        },
      ],
      addressOverride: {
        state: _.get(fatherData, "address.state.id", ""),
        district: _.get(fatherData, "address.district.id", ""),
        city: _.get(fatherData, "address.city.id", ""),
        areaName: _.get(fatherData, "address.area_name.id", ""),
        zipcode: _.get(fatherData, "address.zipcode.id", ""),
        homeAddress: _.get(fatherData, "address.address", ""),
        id: _.get(fatherData, "address.id", ""),
      },
      updatedAt: (() => {
        const dateStr = _.get(fatherData, "updated_at", "");
        if (!dateStr) return "";

        // Check if it's an ISO string or DD/MM/YYYY format
        const momentDate = dateStr.includes("T")
          ? moment(dateStr) // ISO format
          : moment(dateStr, "DD MMMM YYYY hh:mm A"); // DD MMMM YYYY format
        return momentDate.isValid() ? momentDate.toISOString() : "";
      })(),
    },
    motherProfile: {
      id: _.get(motherData, "id", ""),
      firstName: _.get(motherData, "first_name", ""),
      lastName: _.get(motherData, "last_name", ""),
      phoneNumber: _.get(motherData, "phone_number", ""),
      email: _.get(motherData, "email", ""),
      aadhaarNumber: _.get(motherData, "aadhaar_number", ""),
      occupation: _.get(motherData, "occupation", ""),
      education: _.get(motherData, "education", ""),
      annual_income: _.get(motherData, "annual_income", ""),
      isAlive: _.get(motherData, "alive.status", true),
      date_of_death: (() => {
        const dateStr = _.get(motherData, "alive.date_of_death", "");
        if (!dateStr) return "";

        // Check if it's an ISO string or DD MMMM YYYY format
        const momentDate = moment(dateStr, "DD MMMM YYYY");
        return momentDate.isValid() ? momentDate.toISOString() : "";
      })(),
      caring_child_by: _.get(motherData, "alive.caring_child_by", ""),
    },
    siblingProfiles: [],
    addressProfile: {},
    emergencyContactProfile: {},
  };
};

export { formatStudentProfileData };
