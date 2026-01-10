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
  async (payload, { getState, rejectWithValue }) => {
    try {
      let response = await axiosInstance.get(schoolsAPIRoute, {
        callPublicAPI: payload?.callPublicAPI || false,
        state: getState(),
      });

      return {
        error: "",
        schools: schoolSummaryAPIResponse(response),
      };
    } catch (error) {
      return rejectWithValue({
        error: defaultAPIErrorResponse.message,
        schools: [],
      });
    }
  }
);

const getSchool = createAsyncThunk(
  "school/getSchool",
  async (payload, {getState, rejectWithValue }) => {
    try {
      const { schoolId, callPublicAPI } = payload;

      let response = await axiosInstance.get(`${schoolAPIRoute}/${schoolId}`, {
        callPublicAPI: callPublicAPI || false,
        state: getState(),
      });

      return {
        error: "",
        school: schoolDetailsAPIResponse(response),
      };
    } catch (error) {
      return rejectWithValue({
        error: defaultAPIErrorResponse.message,
        school: {},
      });
    }
  }
);

export { getSchools, getSchool };
