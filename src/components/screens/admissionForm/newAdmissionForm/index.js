

import AdmissionFormSheetComponent from "@MEScreenComponents/admissionForm/newAdmissionForm/admissionFormSheet";
import NewAdmissionFormHeaderComponent from "@MEScreenComponents/admissionForm/newAdmissionForm/newAdmissionFormHeader";
import ProfileComplicationSummaryComponent from "@MEScreenComponents/admissionForm/newAdmissionForm/profileComplicationSummary";

const NewAdmissionFormComponent = () => {
  

  return (
    <div className="lg:sticky lg:top-6 xl:top-8 lg:h-fit">
      <div className="bg-card rounded-lg sm:rounded-xl md:rounded-2xl border border-border p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
        <NewAdmissionFormHeaderComponent />
        <ProfileComplicationSummaryComponent />
        <AdmissionFormSheetComponent/>
      </div>
    </div>
  );
};

export default NewAdmissionFormComponent;
