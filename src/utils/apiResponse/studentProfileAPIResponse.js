import _ from "lodash";
import moment from "moment";

import { GENDERS, ALLERGIES, BLOOD_GROUPS } from "@MEHelpers/enums";
/**
 * Transform API response to format with label and value fields using lodash
 * @param {object} profile - Object of student profile from API
 * @returns {Array} Formatted student profile object
 */
const formatStudentProfileData = (profile) => {
  return {
    studentProfile: {
      id: _.get(profile, "id", "1111"),
      firstName: _.get(profile, "first_name", "Dhruv"),
      lastName: _.get(profile, "last_name", "Ghadiali"),
      dateOfBirth: moment(
        _.get(profile, "date_of_birth", "21/04/2022"),
        "DD/MM/YYYY"
      ).toISOString(),
      gender:
        _.find(
          _.values(GENDERS),
          (val) => val === _.get(profile, "gender", "male")
        ) || _.get(profile, "gender", "male"),
      bloodGroup: _.upperFirst(
        _.find(
          _.values(BLOOD_GROUPS),
          (val) => val === _.get(profile, "blood_group", "O+")
        ) || _.get(profile, "blood_group", "O+")
      ),
      aadhaarNumber: _.get(profile, "aadhaar_number", "123456789012"),
      nationality: _.get(profile, "nationality", "indian"),
      phoneNumber: _.get(profile, "phone_number", "7405111564"),
      email: _.get(profile, "email", "dhruvghadiali21@gmail.com"),
      medicalInfo: {
        hasHearingIssue: _.get(profile, "medical_info.has_hearing_issue", true),
        hearingIssueDetails: _.get(
          profile,
          "medical_info.hearing_issue_details",
          "test hearing issue details"
        ),
        hasVisionIssue: _.get(profile, "medical_info.has_vision_issue", false),
        visionIssueDetails: _.get(
          profile,
          "medical_info.vision_issue_details",
          "test vision issue details"
        ),
        hasPhysicalIssue: _.get(
          profile,
          "medical_info.has_physical_issue",
          false
        ),
        physicalIssueDetails: _.get(
          profile,
          "medical_info.physical_issue_details",
          "test physical issue details"
        ),
        hasMentalIssue: _.get(profile, "medical_info.has_mental_issue", false),
        mentalIssueDetails: _.get(
          profile,
          "medical_info.mental_issue_details",
          "test mental issue details"
        ),
        hasAllergies: _.get(profile, "medical_info.has_allergies", false),
        allergies: (() => {
          const profileAllergies = _.isArray(
            _.get(profile, "medical_info.allergies")
          )
            ? _.get(profile, "medical_info.allergies")
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
    },
    fatherProfile: {},
    motherProfile: {},
    siblingProfiles: [],
    addressProfile: {},
    emergencyContactProfile: {},
  };
};

export { formatStudentProfileData };
