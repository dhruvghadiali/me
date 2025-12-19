import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";

import { ME_BUTTON_COMPONENT_VARIANTS } from "@MEHelpers/enums";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@MEShadcnComponents/select";

import * as Yup from "yup";
import _ from "lodash";

import MEButton from "@MECommonComponents/button/meButton";

const AdmissionFormComponent = () => {
  const dispatch = useDispatch();
  const { schools } = useSelector((state) => state.admissionForm);

  const formik = useFormik({
    initialValues: {
      school: "",
      educationBoard: "",
      academicClass: "",
    },
    validationSchema: admissionFormValidationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      // Handle form submission here
    },
  });

  const handleSchoolChange = (value) => {
    formik.setFieldValue("school", value);
    formik.setFieldValue("educationBoard", "");
    formik.setFieldValue("academicClass", "");
  };

  const handleEducationBoardChange = (value) => {
    formik.setFieldValue("educationBoard", value);
    formik.setFieldValue("academicClass", "");
  };

  const handleAcademicClassChange = (value) => {
    formik.setFieldValue("academicClass", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  console.log(
    "Selected Values:",
    _.filter(schools, { value: formik.values.school })
  ); // For debugging

  return (
    <form onSubmit={handleSubmit} className="pt-10">
      {/* School Selection */}
      <div className="mb-5">
        <Select value={formik.values.school} onValueChange={handleSchoolChange}>
          <SelectTrigger
            className={`w-full ${
              formik.errors.school && formik.touched.school
                ? "border-danger"
                : ""
            }`}
          >
            <SelectValue placeholder="Select School" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Schools</SelectLabel>
              {_.map(schools, (school) => (
                <SelectItem key={school.value} value={school.value}>
                  {_.startCase(school.label)}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {formik.errors.school && formik.touched.school && (
          <p className="text-xs text-danger mt-1 text-left">
            {formik.errors.school}
          </p>
        )}
      </div>

      {/* Education Board Selection */}
      <div className="mb-5">
        <Select
          value={formik.values.educationBoard}
          onValueChange={handleEducationBoardChange}
        >
          <SelectTrigger
            className={`w-full ${
              formik.errors.educationBoard && formik.touched.educationBoard
                ? "border-danger"
                : ""
            }`}
          >
            <SelectValue placeholder="Select Education Board" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Education Boards</SelectLabel>
              {_.map(
                _.find(schools, { value: formik.values.school })
                  ?.educationBoards || [],
                (board) => (
                  <SelectItem key={board.value} value={board.value}>
                    {_.startCase(board.label)}
                  </SelectItem>
                )
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
        {formik.errors.educationBoard && formik.touched.educationBoard && (
          <p className="text-xs text-danger mt-1 text-left">
            {formik.errors.educationBoard}
          </p>
        )}
      </div>

      {/* Academic Class Selection */}
      <div className="mb-5">
        <Select
          value={formik.values.academicClass}
          onValueChange={handleAcademicClassChange}
        >
          <SelectTrigger
            className={`w-full ${
              formik.errors.academicClass && formik.touched.academicClass
                ? "border-danger"
                : ""
            }`}
          >
            <SelectValue placeholder="Select Academic Class" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Academic Classes</SelectLabel>
              {_.map(
                _.find(
                  _.find(schools, { value: formik.values.school })
                    ?.educationBoards || [],
                  { value: formik.values.educationBoard }
                )?.academicClasses || [],
                (academicClass) => (
                  <SelectItem
                    key={academicClass.value}
                    value={academicClass.value}
                  >
                    {_.startCase(academicClass.label)}
                  </SelectItem>
                )
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
        {formik.errors.academicClass && formik.touched.academicClass && (
          <p className="text-xs text-danger mt-1 text-left">
            {formik.errors.academicClass}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex gap-3">
        <MEButton
          type="submit"
          meclassname="flex-1"
          buttonVariant={ME_BUTTON_COMPONENT_VARIANTS.PRIMARY}
          disabled={!formik.isValid}
        >
          {"Draft"}
        </MEButton>
        <MEButton
          type="submit"
          meclassname="flex-1"
          buttonVariant={ME_BUTTON_COMPONENT_VARIANTS.SUCCESS}
          disabled={!formik.isValid}
        >
          {"Submit"}
        </MEButton>
      </div>
    </form>
  );
};

const admissionFormValidationSchema = Yup.object().shape({
  school: Yup.string().required("School is required"),
  educationBoard: Yup.string().required("Education Board is required"),
  academicClass: Yup.string().required("Academic Class is required"),
});

export default AdmissionFormComponent;
