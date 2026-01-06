import { createSlice } from "@reduxjs/toolkit";

import {
  getLocations,
  addFatherProfile,
  addMotherProfile,
  getStudentProfile,
  addStudentProfile,
  updatedMotherProfile,
  updatedFatherProfile,
  updatedStudentProfile,
  addFatherProfileOverrideAddress,
  addMotherProfileOverrideAddress,
  updatedFatherProfileOverrideAddress,
  updatedMotherProfileOverrideAddress,
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
    motherProfileFormLoader: false,
    motherProfileFormError: "",
    states: [],
    districts: [],
    cities: [],
    areaNames: [],
    zipcodes: [],
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
      })
      .addCase(getLocations.pending, (state, _) => {
        state.states = [];
        state.districts = [];
        state.cities = [];
        state.areaNames = [];
        state.zipcodes = [];
      })
      .addCase(getLocations.fulfilled, (state, action) => {
        state.states = action.payload.states;
        state.districts = action.payload.districts;
        state.cities = action.payload.cities;
        state.areaNames = action.payload.areaNames;
        state.zipcodes = action.payload.zipcodes;
      })
      .addCase(getLocations.rejected, (state, action) => {
        state.states = [];
        state.districts = [];
        state.cities = [];
        state.areaNames = [];
        state.zipcodes = [];
      })
      .addCase(addFatherProfileOverrideAddress.pending, (state, _) => {
        state.fatherProfileFormLoader = true;
        state.fatherProfileFormError = "";
      })
      .addCase(addFatherProfileOverrideAddress.fulfilled, (state, action) => {
        state.fatherProfileFormLoader = false;
        state.fatherProfileFormError = action.payload.error || "";
      })
      .addCase(addFatherProfileOverrideAddress.rejected, (state, action) => {
        state.fatherProfileFormLoader = false;
        state.fatherProfileFormError = action.payload.error;
      })
      .addCase(updatedFatherProfileOverrideAddress.pending, (state, _) => {
        state.fatherProfileFormLoader = true;
        state.fatherProfileFormError = "";
      })
      .addCase(
        updatedFatherProfileOverrideAddress.fulfilled,
        (state, action) => {
          state.fatherProfileFormLoader = false;
          state.fatherProfileFormError = action.payload.error || "";
        }
      )
      .addCase(
        updatedFatherProfileOverrideAddress.rejected,
        (state, action) => {
          state.fatherProfileFormLoader = false;
          state.fatherProfileFormError = action.payload.error;
        }
      )
      .addCase(addMotherProfile.pending, (state, _) => {
        state.motherProfileFormLoader = true;
        state.motherProfileFormError = "";
      })
      .addCase(addMotherProfile.fulfilled, (state, action) => {
        state.motherProfileFormLoader = false;
        state.motherProfileFormError = action.payload.error || "";
      })
      .addCase(addMotherProfile.rejected, (state, action) => {
        state.motherProfileFormLoader = false;
        state.motherProfileFormError = action.payload.error;
      })
      .addCase(updatedMotherProfile.pending, (state, _) => {
        state.motherProfileFormLoader = true;
        state.motherProfileFormError = "";
      })
      .addCase(updatedMotherProfile.fulfilled, (state, action) => {
        state.motherProfileFormLoader = false;
        state.motherProfileFormError = action.payload.error || "";
      })
      .addCase(updatedMotherProfile.rejected, (state, action) => {
        state.motherProfileFormLoader = false;
        state.motherProfileFormError = action.payload.error;
      })
      .addCase(addMotherProfileOverrideAddress.pending, (state, _) => {
        state.motherProfileFormLoader = true;
        state.motherProfileFormError = "";
      })
      .addCase(addMotherProfileOverrideAddress.fulfilled, (state, action) => {
        state.motherProfileFormLoader = false;
        state.motherProfileFormError = action.payload.error || "";
      })
      .addCase(addMotherProfileOverrideAddress.rejected, (state, action) => {
        state.motherProfileFormLoader = false;
        state.motherProfileFormError = action.payload.error;
      })
      .addCase(updatedMotherProfileOverrideAddress.pending, (state, _) => {
        state.motherProfileFormLoader = true;
        state.motherProfileFormError = "";
      })
      .addCase(
        updatedMotherProfileOverrideAddress.fulfilled,
        (state, action) => {
          state.motherProfileFormLoader = false;
          state.motherProfileFormError = action.payload.error || "";
        }
      )
      .addCase(
        updatedMotherProfileOverrideAddress.rejected,
        (state, action) => {
          state.motherProfileFormLoader = false;
          state.motherProfileFormError = action.payload.error;
        }
      );
  },
});

export const {} = profileSlice.actions;

export default profileSlice.reducer;
