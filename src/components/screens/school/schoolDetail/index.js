import { Mail, Phone, XCircleIcon } from "lucide-react";

import { Button } from "@MEShadcnComponents/button";

import SchoolFeesComponent from "@MEScreenComponents/school/schoolDetail/schoolFees/schoolFeesComponent";
import SchoolDetailTabComponent from "@MEScreenComponents/school/schoolDetailTab/schoolDetailTabComponent";
import SchoolAddressComponent from "@MEScreenComponents/school/schoolDetail/schoolAddress";
import SchoolOverviewComponent from "@MEScreenComponents/school/schoolDetail/schoolOverview";
import SchoolAdmissionComponent from "@MEScreenComponents/school/schoolDetail/schoolAdmission/schoolAdmissionComponent";
import SchoolFacilitiesComponent from "@MEScreenComponents/school/schoolDetail/schoolFacilities/schoolFacilitiesComponent";
import SchoolAcademicClassesComponent from "@MEScreenComponents/school/schoolDetail/schoolAcademicClasses/schoolAcademicClassesComponent";

const SchoolDetailComponent = ({ handleCardClick, showCloseIcon }) => {
  return (
    <>
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center justify-between mr-2">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-dark">
            Springfield High School
          </h1>
          {showCloseIcon && (
            <Button variant="ghost" onClick={() => handleCardClick()}> <XCircleIcon/> </Button>
          )}
        </div>
        <div className="bg-gray-50 rounded-lg p-3 sm:p-4 space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-600">
                Affiliate Number:
              </span>
              <span className="text-dark">SPH-2024-001</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-600">Established:</span>
              <span className="text-dark">1985</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-600">School Type:</span>
              <span className="text-dark">Public High School</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-600">
                Education Board:
              </span>
              <span className="text-dark">State Board</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
              <span className="text-dark text-xs sm:text-sm">
                info@springfieldhigh.edu
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
              <span className="text-dark">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>

      <SchoolDetailTabComponent
        tabData={[
          {
            value: "tab-1",
            label: "Overview",
            content: <SchoolOverviewComponent />,
          },
          {
            value: "tab-2",
            label: "Address",
            content: <SchoolAddressComponent />,
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
