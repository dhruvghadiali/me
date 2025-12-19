import _ from "lodash";
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
    const educationBoards = _.map(academicClassesByBoard, (classes, boardId) => {
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
    });

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

export { formatSchoolAcademicClassesData };