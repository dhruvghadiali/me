import { createSlice } from "@reduxjs/toolkit";

import { PROFILE_COMPLETION_SUMMARY } from "@MEHelpers/enums";

export const admissionFormSlice = createSlice({
  name: "admissionForm",
  initialState: {
    admissionFormLoader: false,
    admissionFormError: "",
    admissionForms: [
     
    ],
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
  extraReducers: (builder) => {},
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