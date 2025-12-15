import {
  schoolInformationFeesTab,
  schoolInformationAddressTab,
  schoolInformationOverviewTab,
  schoolInformationAdmissionTab,
  schoolInformationFacilitiesTab,
  schoolInformationAcademicClassesTab,
} from "@MELocalization/languages/en";

import SchoolAddressComponent from "@MEScreenComponents/school/schoolDetail/schoolAddress";
import SchoolOverviewComponent from "@MEScreenComponents/school/schoolDetail/schoolOverview";
import SchoolFeesComponent from "@MEScreenComponents/school/schoolDetail/schoolFees/schoolFeesComponent";
import SchoolAdmissionComponent from "@MEScreenComponents/school/schoolDetail/schoolAdmission/schoolAdmissionComponent";
import SchoolFacilitiesComponent from "@MEScreenComponents/school/schoolDetail/schoolFacilities/schoolFacilitiesComponent";
import SchoolAcademicClassesComponent from "@MEScreenComponents/school/schoolDetail/schoolAcademicClasses/schoolAcademicClassesComponent";

import _ from "lodash";

export const getSchoolDetailTabs = (school, t) => [
  {
    value: "tab-1",
    label: _.upperFirst(
      t("schoolInformationOverviewTab", {
        defaultValue: schoolInformationOverviewTab,
      })
    ),
    content: <SchoolOverviewComponent school={school} />,
  },
  {
    value: "tab-2",
    label: _.upperFirst(
      t("schoolInformationAddressTab", {
        defaultValue: schoolInformationAddressTab,
      })
    ),
    content: <SchoolAddressComponent school={school} />,
  },
  {
    value: "tab-3",
    label: _.upperFirst(
      t("schoolInformationAcademicClassesTab", {
        defaultValue: schoolInformationAcademicClassesTab,
      })
    ),
    content: <SchoolAcademicClassesComponent />,
  },
  {
    value: "tab-4",
    label: _.upperFirst(
      t("schoolInformationFacilitiesTab", {
        defaultValue: schoolInformationFacilitiesTab,
      })
    ),
    content: <SchoolFacilitiesComponent />,
  },
  {
    value: "tab-5",
    label: _.upperFirst(
      t("schoolInformationFeesTab", {
        defaultValue: schoolInformationFeesTab,
      })
    ),
    content: <SchoolFeesComponent />,
  },
  {
    value: "tab-6",
    label: _.upperFirst(
      t("schoolInformationAdmissionTab", {
        defaultValue: schoolInformationAdmissionTab,
      })
    ),
    content: <SchoolAdmissionComponent />,
  },
];
