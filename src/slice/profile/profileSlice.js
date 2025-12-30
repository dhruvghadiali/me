import { createSlice } from "@reduxjs/toolkit";

import { getStudentProfile } from "@MERedux/profile/profileAction";

import _ from "lodash";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {},
    profileScreenError: "",
    profileScreenLoader: false,
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
      });
  },
});

export const {} = profileSlice.actions;

export default profileSlice.reducer;