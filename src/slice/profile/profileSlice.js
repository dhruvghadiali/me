import { createSlice } from "@reduxjs/toolkit";

import {
  getLocations,
  addFatherProfile,
  addMotherProfile,
  getStudentProfile,
  addStudentProfile,
  addSiblingProfile,
  addAddressProfile,
  getAcademicClasses,
  updatedMotherProfile,
  updatedFatherProfile,
  updatedStudentProfile,
  updatedSiblingProfile,
  updatedAddressProfile,
  addEmergencyContactProfile,
  updatedEmergencyContactProfile,
  addFatherProfileOverrideAddress,
  addMotherProfileOverrideAddress,
  updatedFatherProfileOverrideAddress,
  updatedMotherProfileOverrideAddress,
} from "@MERedux/profile/profileAction";

import _, { add } from "lodash";

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
    siblingProfileFormLoader: false,
    siblingProfileFormError: "",
    addressProfileFormLoader: false,
    addressProfileFormError: "",
    emergencyContactProfileFormLoader: false,
    emergencyContactProfileFormError: "",
    states: [],
    districts: [],
    cities: [],
    areaNames: [],
    zipcodes: [],
    academicClasses: [],
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
      )
      .addCase(addSiblingProfile.pending, (state, _) => {
        state.siblingProfileFormLoader = true;
        state.siblingProfileFormError = "";
      })
      .addCase(addSiblingProfile.fulfilled, (state, action) => {
        state.siblingProfileFormLoader = false;
        state.siblingProfileFormError = action.payload.error || "";
      })
      .addCase(addSiblingProfile.rejected, (state, action) => {
        state.siblingProfileFormLoader = false;
        state.siblingProfileFormError = action.payload.error;
      })
      .addCase(updatedSiblingProfile.pending, (state, _) => {
        state.siblingProfileFormLoader = true;
        state.siblingProfileFormError = "";
      })
      .addCase(updatedSiblingProfile.fulfilled, (state, action) => {
        state.siblingProfileFormLoader = false;
        state.siblingProfileFormError = action.payload.error || "";
      })
      .addCase(updatedSiblingProfile.rejected, (state, action) => {
        state.siblingProfileFormLoader = false;
        state.siblingProfileFormError = action.payload.error;
      })
      .addCase(getAcademicClasses.pending, (state, _) => {
        state.academicClasses = [];
      })
      .addCase(getAcademicClasses.fulfilled, (state, action) => {
        state.academicClasses = action.payload.academicClasses;
      })
      .addCase(getAcademicClasses.rejected, (state, action) => {
        state.academicClasses = [];
      })
      .addCase(addAddressProfile.pending, (state, _) => {
        state.addressProfileFormLoader = true;
        state.addressProfileFormError = "";
      })
      .addCase(addAddressProfile.fulfilled, (state, action) => {
        state.addressProfileFormLoader = false;
        state.addressProfileFormError = action.payload.error || "";
      })
      .addCase(addAddressProfile.rejected, (state, action) => {
        state.addressProfileFormLoader = false;
        state.addressProfileFormError = action.payload.error;
      })
      .addCase(updatedAddressProfile.pending, (state, _) => {
        state.addressProfileFormLoader = true;
        state.addressProfileFormError = "";
      })
      .addCase(updatedAddressProfile.fulfilled, (state, action) => {
        state.addressProfileFormLoader = false;
        state.addressProfileFormError = action.payload.error || "";
      })
      .addCase(updatedAddressProfile.rejected, (state, action) => {
        state.addressProfileFormLoader = false;
        state.addressProfileFormError = action.payload.error;
      })
      .addCase(addEmergencyContactProfile.pending, (state, _) => {
        state.emergencyContactProfileFormLoader = true;
        state.emergencyContactProfileFormError = "";
      })
      .addCase(addEmergencyContactProfile.fulfilled, (state, action) => {
        state.emergencyContactProfileFormLoader = false;
        state.emergencyContactProfileFormError = action.payload.error || "";
      })
      .addCase(addEmergencyContactProfile.rejected, (state, action) => {
        state.emergencyContactProfileFormLoader = false;
        state.emergencyContactProfileFormError = action.payload.error;
      })
      .addCase(updatedEmergencyContactProfile.pending, (state, _) => {
        state.emergencyContactProfileFormLoader = true;
        state.emergencyContactProfileFormError = "";
      })
      .addCase(updatedEmergencyContactProfile.fulfilled, (state, action) => {
        state.emergencyContactProfileFormLoader = false;
        state.emergencyContactProfileFormError = action.payload.error || "";
      })
      .addCase(updatedEmergencyContactProfile.rejected, (state, action) => {
        state.emergencyContactProfileFormLoader = false;
        state.emergencyContactProfileFormError = action.payload.error;
      });
  },
});

export const {} = profileSlice.actions;

export default profileSlice.reducer;
