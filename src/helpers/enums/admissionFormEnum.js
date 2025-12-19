
/**
 * Enumeration for admission profile completion summary.
 */
const PROFILE_COMPLETION_SUMMARY = Object.freeze({
    STUDENT_PROFILE: "studentProfile",
    FATHER_PROFILE: "fatherProfile",
    MOTHER_PROFILE: "motherProfile",
    SIBLINGS_PROFILE: "siblingsProfile",
    ADDRESS: "address",
    EMERGENCY_CONTACT: "emergencyContact",
});

/**
 * Admission Application Status enumeration
 * Central enum for admission application lifecycle statuses
 */
const ADMISSION_APPLICATION_STATUS = Object.freeze({
  DRAFT: "draft",
  DELETED: "deleted",
  SUBMITTED: "submitted",
  CANCELLED: "cancelled",
  WITHDRAWN: "withdrawn",
});

export { PROFILE_COMPLETION_SUMMARY, ADMISSION_APPLICATION_STATUS };