import { createSlice } from "@reduxjs/toolkit";
import { getSchools, getSchool } from "@MERedux/school/schoolAction";

export const schoolSlice = createSlice({
  name: "school",
  initialState: {
    schoolSummaryLoader: false,
    schoolDetailLoader: false,
    schools: [],
    school: {},
    schoolSummaryError: "",
    schoolDetailError: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSchools.pending, (state, _) => {
        state.schoolSummaryLoader = true;
        state.schoolDetailLoader = false;
        state.schoolSummaryError = "";
        state.schoolDetailError = "";
        state.schools = [];
        state.school = {};
      })
      .addCase(getSchools.fulfilled, (state, action) => {
        state.schoolSummaryError = action.payload.error;
        state.schoolSummaryLoader = false;
        state.schools = action.payload.schools;
      })
      .addCase(getSchools.rejected, (state, action) => {
        state.schoolSummaryError = action.payload.error;
        state.schoolSummaryLoader = false;
        state.schools = [];
      })
      .addCase(getSchool.pending, (state, _) => {
        state.schoolDetailLoader = true;
        state.schoolDetailError = "";
        state.school = {};
      })
      .addCase(getSchool.fulfilled, (state, action) => {
        state.schoolDetailError = action.payload.error;
        state.schoolDetailLoader = false;
        state.school = action.payload.school;
      })
      .addCase(getSchool.rejected, (state, action) => {
        state.schoolDetailError = action.payload.error;
        state.schoolDetailLoader = false;
        state.school = {};
      });
  },
});

export const {} = schoolSlice.actions;

export default schoolSlice.reducer;
