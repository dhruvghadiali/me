import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getSchoolAcademicClasses,
  getSchoolAdmissions,
} from "@MERedux/admissionForm/admissionFormAction";

import AdmissionFormHeaderComponent from "@MEScreenComponents/admissionForm/header";
import NewAdmissionFormComponent from "@MEScreenComponents/admissionForm/newAdmissionForm";
import AdmissionFormHistoryComponent from "@MEScreenComponents/admissionForm/admissionFormHistory";
import AdmissionFormDetailComponent from "@MEScreenComponents/admissionForm/admissionFormDetail";

const AdmissionFormPage = () => {
  const dispatch = useDispatch();
  const { isAdmissionFormCardVisible } = useSelector(
    (state) => state.admissionForm
  );

  useEffect(() => {
    dispatch(getSchoolAdmissions());
    dispatch(getSchoolAcademicClasses());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-background mr-4">
      <AdmissionFormHeaderComponent />
      {isAdmissionFormCardVisible ? (
        <AdmissionFormDetailComponent />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 px-4 sm:px-6 md:px-8 mb-5">
          <NewAdmissionFormComponent />
          <AdmissionFormHistoryComponent />
        </div>
      )}
    </div>
  );
};

export default AdmissionFormPage;
