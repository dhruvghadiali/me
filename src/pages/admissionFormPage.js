import React, { useState } from "react";

import AdmissionFormHeaderComponent from "@MEScreenComponents/admissionForm/header";
import NewAdmissionFormComponent from "@MEScreenComponents/admissionForm/newAdmissionForm";
import AdmissionFormSummaryComponent from "@MEScreenComponents/admissionForm/admissionFormSummary";
import AdmissionFormHistoryComponent from "@MEScreenComponents/admissionForm/admissionFormHistory";

const AdmissionFormPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile: py-6 px-3 | Tablet: py-8 px-4 | Desktop: py-10 px-6 | Large: py-12 px-8 */}
      <div className="py-6 px-3 sm:px-4 md:py-8 md:px-6 lg:py-10 lg:px-8 xl:py-12 xl:px-8">
        {/* Max width: Mobile-none | Tablet-2xl | Desktop-4xl | Large-6xl */}

        <div className="mx-auto max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          {/* Header Section */}
          <AdmissionFormHeaderComponent />

        {/* Stats Section - 1 col mobile | 2 col tablet | 3 col desktop */}
        <AdmissionFormSummaryComponent />
          {/* Main Content Grid - Stack on mobile, 2-col on tablet, 3-col on desktop */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:grid-cols-3 lg:gap-8 xl:gap-10 auto-rows-fr">
            {/* Apply New Section - Mobile: full width | Tablet+: sticky sidebar */}
            <NewAdmissionFormComponent />
            {/* Past Admissions Section */}
            <AdmissionFormHistoryComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionFormPage;
