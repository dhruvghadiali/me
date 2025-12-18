import React, { useState } from "react";

import AdmissionFormHeaderComponent from "@MEScreenComponents/admissionForm/header";
import NewAdmissionFormComponent from "@MEScreenComponents/admissionForm/newAdmissionForm";
import AdmissionFormHistoryComponent from "@MEScreenComponents/admissionForm/admissionFormHistory";

const AdmissionFormPage = () => {
  return (
    <div className="min-h-screen bg-background mr-4">
      <AdmissionFormHeaderComponent />
      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:grid-cols-3 lg:gap-8 xl:gap-10 auto-rows-fr mb-5">
        <NewAdmissionFormComponent />
        <AdmissionFormHistoryComponent />
      </div>
    </div>
  );
};

export default AdmissionFormPage;
