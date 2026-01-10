import {
  dateOfBirthMaxAge,
  dateOfBirthMinAge,
  medicalIssueDetailsMaxChar,
  medicalIssueDetailsMinChar,
} from "@MEHelpers/formValidationConst";

const dateOfBirthIsRequired = "Date of birth is required";
const dateOfBirthInvalid = "Date of birth must be a valid date";
const dateOfBirthMaxAgeLimit = `You must be at most ${dateOfBirthMaxAge} years old`;
const dateOfBirthMinAgeLimit = `You must be at least ${dateOfBirthMinAge} years old`;
const hearingIssueDetailsRequired = "Hearing issue details are required";
const hearingIssueDetailsMaxLength = `Hearing issue details must be at most ${medicalIssueDetailsMaxChar} characters`;
const hearingIssueDetailsMinLength = `Hearing issue details must be at least ${medicalIssueDetailsMinChar} characters`;
const visionIssueDetailsRequired = "Vision issue details are required";
const visionIssueDetailsMaxLength = `Vision issue details must be at most ${medicalIssueDetailsMaxChar} characters`;
const visionIssueDetailsMinLength = `Vision issue details must be at least ${medicalIssueDetailsMinChar} characters`;
const physicalIssueDetailsRequired = "Physical issue details are required";
const physicalIssueDetailsMaxLength = `Physical issue details must be at most ${medicalIssueDetailsMaxChar} characters`;
const physicalIssueDetailsMinLength = `Physical issue details must be at least ${medicalIssueDetailsMinChar} characters`;
const mentalIssueDetailsRequired = "Mental issue details are required";
const mentalIssueDetailsMaxLength = `Mental issue details must be at most ${medicalIssueDetailsMaxChar} characters`;
const mentalIssueDetailsMinLength = `Mental issue details must be at least ${medicalIssueDetailsMinChar} characters`;
const allergiesDetailsMinLength = `Please select at least one allergy`;

export {
  dateOfBirthInvalid,
  dateOfBirthIsRequired,
  dateOfBirthMinAgeLimit,
  dateOfBirthMaxAgeLimit,
  hearingIssueDetailsMaxLength,
  hearingIssueDetailsMinLength,
  visionIssueDetailsMaxLength,
  visionIssueDetailsMinLength,
  physicalIssueDetailsMaxLength,
  physicalIssueDetailsMinLength,
  mentalIssueDetailsMaxLength,
  mentalIssueDetailsMinLength,
  allergiesDetailsMinLength,
  hearingIssueDetailsRequired,
  visionIssueDetailsRequired,
  physicalIssueDetailsRequired,
  mentalIssueDetailsRequired,
};
