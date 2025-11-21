import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  defaultAPIErrorResponse,
  setUpAxiosInstanceConfig,
} from "@MEUtils/utilityFunctions";
import {
  schoolSummaryAPIResponse,
  schoolDetailsAPIResponse,
} from "@MEUtils/apiResponse";
import { schoolsAPIRoute, schoolAPIRoute } from "@MEUtils/apiRoutes";
import { axiosInstance } from "@MEUtils/axiosInstance";

const getSchools = createAsyncThunk(
  "school/getSchools",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      const state = getState();

      const axiosInstanceConfig = setUpAxiosInstanceConfig(state, dispatch);

      const response = await axiosInstance.get(
        schoolsAPIRoute,
        axiosInstanceConfig
      );

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

const getSchool = createAsyncThunk(
  "school/getSchool",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      const { schoolId } = payload;
      const state = getState();

      const axiosInstanceConfig = setUpAxiosInstanceConfig(state, dispatch);

      const response = await axiosInstance.get(
        `${schoolAPIRoute}/${schoolId}`,
        axiosInstanceConfig
      );

      return {
        error: "",
        school: schoolDetailsAPIResponse(response),
      };
    } catch (error) {
      console.log("Authentication State in getSchools: 2", error);
      return rejectWithValue({
        error: defaultAPIErrorResponse.message,
        school: {},
      });
    }
  }
);

export { getSchools, getSchool };
