import { createSlice } from "@reduxjs/toolkit";

import { PROFILE_COMPLETION_SUMMARY } from "@MEHelpers/enums";
import {
  getSchoolAdmissions,
  getSchoolAcademicClasses,
  addAdmissionApplication,
} from "@MERedux/admissionForm/admissionFormAction";

import _ from "lodash";

export const admissionFormSlice = createSlice({
  name: "admissionForm",
  initialState: {
    admissionFormLoader: false,
    admissionFormsLoader: false,
    isAdmissionFormCardVisible: false,
    hideAdmissionFormCard: true,
    admissionFormError: "",
    admissionFormActiveIndex: 0,
    schools: [],
    admissionForms: [],
    admissionForm: {},
    profileComplicationSummary: {
      [PROFILE_COMPLETION_SUMMARY.STUDENT_PROFILE]: false,
      [PROFILE_COMPLETION_SUMMARY.FATHER_PROFILE]: false,
      [PROFILE_COMPLETION_SUMMARY.MOTHER_PROFILE]: false,
      [PROFILE_COMPLETION_SUMMARY.SIBLINGS_PROFILE]: false,
      [PROFILE_COMPLETION_SUMMARY.ADDRESS]: false,
      [PROFILE_COMPLETION_SUMMARY.EMERGENCY_CONTACT]: false,
    },
  },
  reducers: {
    handleSheetOpenChange: (state, action) => {
      state.isAdmissionFormSheetOpen = action.payload;
    },
    toggleAdmissionFormCardVisibility: (state, action) => {
      state.isAdmissionFormCardVisible = action.payload.status;
      state.admissionForm = action.payload.admissionForm || {};
    },
    setAdmissionFormActiveIndex: (state, action) => {
      state.admissionFormActiveIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSchoolAcademicClasses.pending, (state, _) => {
        state.schools = [];
        state.admissionFormError = "";
      })
      .addCase(getSchoolAcademicClasses.fulfilled, (state, action) => {
        state.schools = action.payload.schools;
        state.admissionFormError = action.payload.error;
      })
      .addCase(getSchoolAcademicClasses.rejected, (state, action) => {
        state.schools = [];
        state.admissionFormError = action.payload.error;
      })
      .addCase(addAdmissionApplication.pending, (state, _) => {
        state.admissionFormLoader = true;
        state.admissionFormError = "";
      })
      .addCase(addAdmissionApplication.fulfilled, (state, action) => {
        state.admissionFormLoader = false;
        state.isAdmissionFormSheetOpen = false;
        state.admissionFormError = action.payload.error;
      })
      .addCase(addAdmissionApplication.rejected, (state, action) => {
        state.admissionFormLoader = false;
        state.admissionFormError = action.payload.error;
      })
      .addCase(getSchoolAdmissions.pending, (state, _) => {
        state.admissionFormsLoader = true;
        state.admissionForms = [];
        state.admissionFormError = "";
      })
      .addCase(getSchoolAdmissions.fulfilled, (state, action) => {
        state.admissionFormsLoader = false;
        state.admissionForms = action.payload.admissionForms;
        state.admissionFormError = action.payload.error;
      })
      .addCase(getSchoolAdmissions.rejected, (state, action) => {
        state.admissionFormsLoader = false;
        state.admissionForms = [];
        state.admissionFormError = action.payload.error;
      });
  },
});

export const {
  handleSheetOpenChange,
  setAdmissionFormActiveIndex,
  toggleAdmissionFormCardVisibility,
} = admissionFormSlice.actions;

export default admissionFormSlice.reducer;
