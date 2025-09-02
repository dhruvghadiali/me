import { createSlice } from "@reduxjs/toolkit";
import { getSchools } from "@MERedux/school/schoolAction";

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
      });
  },
});

export const {} = schoolSlice.actions;

export default schoolSlice.reducer;
