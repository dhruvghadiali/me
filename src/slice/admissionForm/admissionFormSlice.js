import { createSlice } from "@reduxjs/toolkit";

import { PROFILE_COMPLETION_SUMMARY } from "@MEHelpers/enums";
import { getSchoolAcademicClasses } from "@MERedux/admissionForm/admissionFormAction";

import _ from "lodash";

export const admissionFormSlice = createSlice({
  name: "admissionForm",
  initialState: {
    admissionFormLoader: false,
    admissionFormError: "",
    schools: [],
    admissionForms: [],
    profileComplicationSummary: {
      [PROFILE_COMPLETION_SUMMARY.STUDENT_PROFILE]: false,
      [PROFILE_COMPLETION_SUMMARY.FATHER_PROFILE]: false,
      [PROFILE_COMPLETION_SUMMARY.MOTHER_PROFILE]: false,
      [PROFILE_COMPLETION_SUMMARY.SIBLINGS_PROFILE]: false,
      [PROFILE_COMPLETION_SUMMARY.ADDRESS]: false,
      [PROFILE_COMPLETION_SUMMARY.EMERGENCY_CONTACT]: false,
    },
  },
  reducers: {},
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
      });
  },
});

export const {} = admissionFormSlice.actions;

export default admissionFormSlice.reducer;

//  {
//         id: 1,
//         schoolName: "Springfield High School",
//         appliedDate: "2024-09-15",
//         status: "accepted",
//         grade: "Grade 10",
//       },
//        {
//         id: 1,
//         schoolName: "Springfield High School",
//         appliedDate: "2024-09-15",
//         status: "accepted",
//         grade: "Grade 10",
//       },
//        {
//         id: 1,
//         schoolName: "Springfield High School",
//         appliedDate: "2024-09-15",
//         status: "accepted",
//         grade: "Grade 10",
//       },
//        {
//         id: 1,
//         schoolName: "Springfield High School",
//         appliedDate: "2024-09-15",
//         status: "accepted",
//         grade: "Grade 10",
//       },
//        {
//         id: 1,
//         schoolName: "Springfield High School",
//         appliedDate: "2024-09-15",
//         status: "accepted",
//         grade: "Grade 10",
//       }, {
//         id: 1,
//         schoolName: "Springfield High School",
//         appliedDate: "2024-09-15",
//         status: "accepted",
//         grade: "Grade 10",
//       }, {
//         id: 1,
//         schoolName: "Springfield High School",
//         appliedDate: "2024-09-15",
//         status: "accepted",
//         grade: "Grade 10",
//       }, {
//         id: 1,
//         schoolName: "Springfield High School",
//         appliedDate: "2024-09-15",
//         status: "accepted",
//         grade: "Grade 10",
//       }, {
//         id: 1,
//         schoolName: "Springfield High School",
//         appliedDate: "2024-09-15",
//         status: "accepted",
//         grade: "Grade 10",
//       }, {
//         id: 1,
//         schoolName: "Springfield High School",
//         appliedDate: "2024-09-15",
//         status: "accepted",
//         grade: "Grade 10",
//       }, {
//         id: 1,
//         schoolName: "Springfield High School",
//         appliedDate: "2024-09-15",
//         status: "accepted",
//         grade: "Grade 10",
//       },
