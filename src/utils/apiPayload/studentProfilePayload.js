import _ from "lodash";
import moment from "moment";

/**
 * Transform student profile form data to API payload format
 * @param {object} studentData - Student profile form data
 * @returns {object} Formatted payload for API
 */
const createStudentProfilePayload = (studentData) => {
  // Handle date conversion
  const dateOfBirth = _.get(studentData, "dateOfBirth");
  let formattedDate = "";
  
  if (dateOfBirth) {
    if (dateOfBirth instanceof Date) {
      formattedDate = moment(dateOfBirth).toISOString();
    } else if (typeof dateOfBirth === "string") {
      const momentDate = dateOfBirth.includes("T") 
        ? moment(dateOfBirth) // ISO format
        : moment(dateOfBirth, "DD/MM/YYYY"); // DD/MM/YYYY format
      formattedDate = momentDate.isValid() ? momentDate.toISOString() : "";
    }
  }

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
    date_of_birth: formattedDate,
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
