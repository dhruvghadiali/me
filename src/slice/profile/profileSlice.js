import { createSlice } from "@reduxjs/toolkit";

import {
  addFatherProfile,
  getStudentProfile,
  addStudentProfile,
  updatedFatherProfile,
  updatedStudentProfile,
} from "@MERedux/profile/profileAction";

import _ from "lodash";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {},
    profileScreenError: "",
    profileScreenLoader: false,
    studentProfileFormLoader: false,
    studentProfileFormError: "",
    fatherProfileFormLoader: false,
    fatherProfileFormError: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudentProfile.pending, (state, _) => {
        state.profileScreenLoader = true;
        state.profileScreenError = "";
      })
      .addCase(getStudentProfile.fulfilled, (state, action) => {
        state.profileScreenLoader = false;
        state.profile = action.payload.profile;
        state.profileScreenError = action.payload.error;
      })
      .addCase(getStudentProfile.rejected, (state, action) => {
        state.profile = {};
        state.profileScreenLoader = false;
        state.profileScreenError = action.payload.error;
      })
      .addCase(addStudentProfile.pending, (state, _) => {
        state.studentProfileFormLoader = true;
        state.studentProfileFormError = "";
      })
      .addCase(addStudentProfile.fulfilled, (state, action) => {
        state.studentProfileFormLoader = false;
        state.studentProfileFormError = action.payload.error || "";
      })
      .addCase(addStudentProfile.rejected, (state, action) => {
        state.studentProfileFormLoader = false;
        state.studentProfileFormError = action.payload.error;
      })
      .addCase(updatedStudentProfile.pending, (state, _) => {
        state.studentProfileFormLoader = true;
        state.studentProfileFormError = "";
      })
      .addCase(updatedStudentProfile.fulfilled, (state, action) => {
        state.studentProfileFormLoader = false;
        state.studentProfileFormError = action.payload.error || "";
      })
      .addCase(updatedStudentProfile.rejected, (state, action) => {
        state.studentProfileFormLoader = false;
        state.studentProfileFormError = action.payload.error;
      })
      .addCase(addFatherProfile.pending, (state, _) => {
        state.fatherProfileFormLoader = true;
        state.fatherProfileFormError = "";
      })
      .addCase(addFatherProfile.fulfilled, (state, action) => {
        state.fatherProfileFormLoader = false;
        state.fatherProfileFormError = action.payload.error || "";
      })
      .addCase(addFatherProfile.rejected, (state, action) => {
        state.fatherProfileFormLoader = false;
        state.fatherProfileFormError = action.payload.error;
      })
      .addCase(updatedFatherProfile.pending, (state, _) => {
        state.fatherProfileFormLoader = true;
        state.fatherProfileFormError = "";
      })
      .addCase(updatedFatherProfile.fulfilled, (state, action) => {
        state.fatherProfileFormLoader = false;
        state.fatherProfileFormError = action.payload.error || "";
      })
      .addCase(updatedFatherProfile.rejected, (state, action) => {
        state.fatherProfileFormLoader = false;
        state.fatherProfileFormError = action.payload.error;
      });

  },
});

export const {} = profileSlice.actions;

export default profileSlice.reducer;
