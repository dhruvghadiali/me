import { createAsyncThunk } from "@reduxjs/toolkit";

import { formatStudentProfileData } from "@MEUtils/apiResponse";
import {
  axiosInstance,
  apiResponseHaveData,
  isAPIServedSuccessfully,
} from "@MEUtils/axiosInstance";
import { studentProfileAPIRoute } from "@MEUtils/apiRoutes";

const getStudentProfile = createAsyncThunk(
  "profile/getStudentProfile",
  async (payload, { getState, rejectWithValue }) => {
    try {
      let profile = {};
      let response = await axiosInstance.get(studentProfileAPIRoute, {
        state: getState(),
      });

      if (apiResponseHaveData(response)) {
        profile = formatStudentProfileData(response.data[0]);

        console.log("Formatted Student Profile:", profile);
        return {
          error: "",
          profile,
        };
      } else {
        return {
          error: response?.message || "Profile information is not available.",
          profile,
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Profile information could not be retrieved. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

const addStudentProfile = createAsyncThunk(
  "profile/addStudentProfile",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      let response = await axiosInstance.post(studentProfileAPIRoute, payload, {
        state: getState(),
      });
      
      if(isAPIServedSuccessfully(response)){
        // Refresh profile after successful addition
        await dispatch(getStudentProfile());
        return {};
      }else{
        return {
          error: response?.message || "Student profile information could not be added. Please try again.",
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Profile information could not be added. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

export { getStudentProfile, addStudentProfile };
