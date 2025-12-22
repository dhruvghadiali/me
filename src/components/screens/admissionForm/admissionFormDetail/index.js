import { useSelector } from "react-redux";
import _ from "lodash";

import AdmissionFormDetailTabComponent from "@MEScreenComponents/admissionForm/admissionFormDetail/admissionFormDetailTab";
import AdmissionFormDetailHeaderComponent from "@MEScreenComponents/admissionForm/admissionFormDetail/admissionFormDetailHeader";
import AdmissionFormDetailQuickInfoComponent from "@MEScreenComponents/admissionForm/admissionFormDetail/admissionFormDetailQuickInfo";

const AdmissionFormDetailComponent = () => {
  const { admissionForm } = useSelector(
    (state) => state.admissionForm
  );

  return (
    <div className="w-full">
      <div className="bg-card rounded-lg sm:rounded-xl md:rounded-2xl border border-border p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
        <AdmissionFormDetailHeaderComponent />
        <AdmissionFormDetailQuickInfoComponent />
        <AdmissionFormDetailTabComponent/>
      </div>
    </div>
  );
};

export default AdmissionFormDetailComponent;
