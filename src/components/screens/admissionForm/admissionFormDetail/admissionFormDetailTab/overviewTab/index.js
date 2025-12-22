import { UserIcon } from "lucide-react";
import { useSelector } from "react-redux";

import _ from "lodash";
import moment from "moment";

import OverviewInformationCardComponent from "@MEScreenComponents/admissionForm/admissionFormDetail/admissionFormDetailTab/overviewTab/overviewInformationCard";

const OverviewTabComponent = () => {
  const { admissionForm } = useSelector((state) => state.admissionForm);

  return (
    <div className="space-y-4 sm:space-y-5 md:space-y-6">
      <div>
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
          <div className="w-1 h-6 sm:h-7 bg-primary rounded-full" />
          <UserIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          Application Metadata
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          <OverviewInformationCardComponent
            title={"Application Number"}
            message={admissionForm?.applicationNumber || "N/A"}
          />
          <OverviewInformationCardComponent
            title={"Created By"}
            message={admissionForm?.createdBy || "N/A"}
          />
          <OverviewInformationCardComponent
            title={"Created At"}
            message={
              moment(admissionForm?.createdAt).isValid()
                ? moment(admissionForm?.createdAt).format("DD MMM YYYY HH:mm A")
                : "N/A"
            }
          />
          <OverviewInformationCardComponent
            title={"Payment Mode"}
            message={admissionForm?.paymentMethod || "N/A"}
          />
          <OverviewInformationCardComponent
            title={"Updated By"}
            message={admissionForm?.updatedBy || "N/A"}
          />
          <OverviewInformationCardComponent
            title={"Updated At"}
            message={
              moment(admissionForm?.updatedAt).isValid()
                ? moment(admissionForm?.updatedAt).format("DD MMM YYYY HH:mm A")
                : "N/A"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default OverviewTabComponent;
