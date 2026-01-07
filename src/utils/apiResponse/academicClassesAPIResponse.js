import _ from "lodash";

const formateAcademicClassesAPIResponse = (academicClasses) => {
  return _.map(academicClasses, (academicClass) => {
    return {
      id: _.get(academicClass, "id", ""),
      academicClass: _.get(academicClass, "academic_class", ""),
      label: _.get(academicClass, "academic_class", ""),
      value: _.get(academicClass, "id", ""),
    };
  });
};

export { formateAcademicClassesAPIResponse };
