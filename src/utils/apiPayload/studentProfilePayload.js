import _ from "lodash";
import { parseToISODate } from "@MEUtils/utilityFunctions";

/**
 * Transform student profile form data to API payload format
 * @param {object} studentData - Student profile form data
 * @returns {object} Formatted payload for API
 */
const createStudentProfilePayload = (studentData) => {

  // Build medical_info object conditionally
  const medicalInfo = {
    has_hearing_issue: _.get(studentData, "medicalInfo.hasHearingIssue", false),
    has_vision_issue: _.get(studentData, "medicalInfo.hasVisionIssue", false),
    has_physical_issue: _.get(studentData, "medicalInfo.hasPhysicalIssue", false),
    has_mental_issue: _.get(studentData, "medicalInfo.hasMentalIssue", false),
    has_allergies: _.get(studentData, "medicalInfo.hasAllergies", false),
  };

  // Add detail fields only if their corresponding boolean is true
  if (_.get(studentData, "medicalInfo.hasHearingIssue", false)) {
    medicalInfo.hearing_issue_details = _.get(
      studentData,
      "medicalInfo.hearingIssueDetails",
      ""
    );
  }

  if (_.get(studentData, "medicalInfo.hasVisionIssue", false)) {
    medicalInfo.vision_issue_details = _.get(
      studentData,
      "medicalInfo.visionIssueDetails",
      ""
    );
  }

  if (_.get(studentData, "medicalInfo.hasPhysicalIssue", false)) {
    medicalInfo.physical_issue_details = _.get(
      studentData,
      "medicalInfo.physicalIssueDetails",
      ""
    );
  }

  if (_.get(studentData, "medicalInfo.hasMentalIssue", false)) {
    medicalInfo.mental_issue_details = _.get(
      studentData,
      "medicalInfo.mentalIssueDetails",
      ""
    );
  }

  if (_.get(studentData, "medicalInfo.hasAllergies", false)) {
    medicalInfo.allergies = _.map(
      _.filter(
        _.get(studentData, "medicalInfo.allergies", []),
        (allergy) => allergy.isSelected
      ),
      (allergy) => allergy.label
    );
  }

  return {
    first_name: _.get(studentData, "firstName", ""),
    last_name: _.get(studentData, "lastName", ""),
    date_of_birth: parseToISODate(_.get(studentData, "dateOfBirth")),
    gender: _.get(studentData, "gender", ""),
    blood_group: _.get(studentData, "bloodGroup", ""),
    aadhaar_number: _.get(studentData, "aadhaarNumber", ""),
    nationality: _.get(studentData, "nationality", ""),
    phone_number: _.get(studentData, "phoneNumber", ""),
    email: _.get(studentData, "email", ""),
    medical_info: medicalInfo,
  };
};

export { createStudentProfilePayload };
