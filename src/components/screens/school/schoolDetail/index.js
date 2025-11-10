import { useSelector } from "react-redux";
import { Mail, Phone, XCircleIcon } from "lucide-react";

import { Button } from "@MEShadcnComponents/button";

import _ from "lodash";

import SchoolFeesComponent from "@MEScreenComponents/school/schoolDetail/schoolFees/schoolFeesComponent";
import SchoolDetailTabComponent from "@MEScreenComponents/school/schoolDetailTab/schoolDetailTabComponent";
import SchoolAddressComponent from "@MEScreenComponents/school/schoolDetail/schoolAddress";
import SchoolOverviewComponent from "@MEScreenComponents/school/schoolDetail/schoolOverview";
import SchoolAdmissionComponent from "@MEScreenComponents/school/schoolDetail/schoolAdmission/schoolAdmissionComponent";
import SchoolFacilitiesComponent from "@MEScreenComponents/school/schoolDetail/schoolFacilities/schoolFacilitiesComponent";
import SchoolAcademicClassesComponent from "@MEScreenComponents/school/schoolDetail/schoolAcademicClasses/schoolAcademicClassesComponent";

const SchoolDetailComponent = ({ handleCardClick, showCloseIcon }) => {
  const { school } = useSelector((state) => state.school);

  return (
    <>
      <div className="mx-5 space-y-4">
        <div className="flex items-center justify-between mr-2">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
            {_.startCase(school.name)}
          </h1>
          {showCloseIcon && (
            <Button variant="ghost" onClick={() => handleCardClick()}>
              {" "}
              <XCircleIcon />{" "}
            </Button>
          )}
        </div>
        <div className="bg-muted border border-primary rounded-lg p-3 sm:p-4 space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="font-medium text-primary/75">
                Affiliate Number:
              </span>
              <span>{school.affiliateNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-primary/75">Established:</span>
              <span>{school.establishedYear}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-primary/75">School Type:</span>
              <span>{school.schoolType}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-primary/75">
                Education Board:
              </span>
              <span>{school.educationBoards}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary/75" />
              <span className="text-xs sm:text-sm">{school.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary/75" />
              <span>{`+91 ${school.phoneNumber}`}</span>
            </div>
          </div>
        </div>
      </div>

      <SchoolDetailTabComponent
        tabData={[
          {
            value: "tab-1",
            label: "Overview",
            content: <SchoolOverviewComponent school={school} />,
          },
          {
            value: "tab-2",
            label: "Address",
            content: <SchoolAddressComponent school={school} />,
          },
          {
            value: "tab-3",
            label: "Academics Classes",
            content: <SchoolAcademicClassesComponent />,
          },
          {
            value: "tab-4",
            label: "Facilities",
            content: <SchoolFacilitiesComponent />,
          },
          {
            value: "tab-5",
            label: "Fees",
            content: <SchoolFeesComponent />,
          },
          {
            value: "tab-6",
            label: "Admission",
            content: <SchoolAdmissionComponent />,
          },
        ]}
      />
    </>
  );
};

export default SchoolDetailComponent;
