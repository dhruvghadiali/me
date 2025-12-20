import _, { update } from "lodash";

/**
 * Transform API response to format with label and value fields using lodash
 * @param {Array} schools - Array of school objects from API
 * @returns {Array} Formatted schools array
 */
const formatSchoolAcademicClassesData = (schools) => {
  return _.map(schools, (school) => {
    // Group academic classes by education board using lodash
    const academicClassesByBoard = _.groupBy(
      school.school_academic_class,
      "education_board"
    );

    // Transform grouped data into education_boards format
    const educationBoards = _.map(
      academicClassesByBoard,
      (classes, boardId) => {
        const boardDetails = _.find(school.education_boards, { _id: boardId });

        return {
          _id: boardDetails._id,
          educationBoard: boardDetails.education_board,
          id: boardDetails.id,
          label: boardDetails.education_board,
          value: boardDetails._id,
          academicClasses: _.map(classes, (item) => ({
            _id: item.academic_class._id,
            academicClass: item.academic_class.academic_class,
            id: item.academic_class.id,
            label: item.academic_class.academic_class,
            value: item._id, // Using school_academic_class _id as value
          })),
        };
      }
    );

    return {
      _id: school._id,
      id: school.id,
      name: school.name,
      label: school.name,
      value: school._id,
      educationBoards,
    };
  });
};

/**
 * Format school admissions data by converting snake_case to camelCase
 * @param {Array} admissions - Array of admission objects from API
 * @returns {Array} Formatted admissions array
 */
const formatSchoolAdmissionsData = (admissions) => {
  console.log("admissions data", admissions);
  return _.map(admissions, (admission) => {
    return {
      id: admission?.id || "",
      applicationUser: admission?.applicant_user || "",
      academicSession: admission?.academic_session || "",
      applicationNumber: admission?.application_number || "",
      createdBy: admission?.created_by || "",
      createdAt: admission?.created_at || "",
      updatedAt: admission?.updated_at || "",
      updatedBy: admission?.updated_by || "",
      status: admission?.status || "",
      statusHistory: admission?.status_history ? _.map(admission.status_history, (history) => ({
        id: history?.id || "",
        status: history?.status || "",
        remarks: history?.remarks || "",
        changedAt: history?.changed_at || "",
        changedBy: history?.changed_by || "",
      })) : [],
      schoolAcademicClass: admission?.school_academic_class ? {
        id: admission.school_academic_class?.id || "",
        school: admission.school_academic_class?.school ? {
          id: admission.school_academic_class.school?.id || "",
          name: admission.school_academic_class.school?.name || "",
        }: null,
        academicClass: admission.school_academic_class?.academic_class ? {
          id: admission.school_academic_class.academic_class?.id || "",
          academicClass: admission.school_academic_class.academic_class?.academic_class || "",
        } : null,
        educationBoard: admission.school_academic_class?.education_board ? {
          id: admission.school_academic_class.education_board?.id || "",
          educationBoard: admission.school_academic_class.education_board?.education_board || "",
        } : null,
      } : null,
    };
  });
};

export { formatSchoolAcademicClassesData, formatSchoolAdmissionsData };
