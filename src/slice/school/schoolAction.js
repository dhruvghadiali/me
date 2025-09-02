import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  defaultAPIErrorResponse,
  setUpAxiosInstanceConfig,
} from "@MEUtils/utilityFunctions";
import { schoolSummaryAPIResponse } from "@MEUtils/apiResponse";
import axiosInstance from "@MEUtils/axiosInstance";

const getSchools = createAsyncThunk(
  "school/getSchools",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      const state = getState();

      const axiosInstanceConfig = setUpAxiosInstanceConfig(state, dispatch);

      console.log("Authentication State in getSchools: 1");
      const response = await axiosInstance.get(`/schools`, axiosInstanceConfig);
      console.log("Authentication State in getSchools: 2", response);

      return {
        error: "",
        schools: schoolSummaryAPIResponse(response),
      };
    } catch (error) {
      console.log("Authentication State in getSchools: 2", error);
      return rejectWithValue({
        error: defaultAPIErrorResponse.message,
        schools: [],
      });
    }
  }
);

export { getSchools };
