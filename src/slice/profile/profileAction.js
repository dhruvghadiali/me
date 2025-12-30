import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  formatStudentProfileData,
} from "@MEUtils/apiResponse";
import {
  axiosInstance,
  apiResponseHaveData,
  isAPIServedSuccessfully,
} from "@MEUtils/axiosInstance";
import {
  studentProfileAPIRoute,
} from "@MEUtils/apiRoutes";

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
          error:
            response?.message || "Profile information is not available.",
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


export {
  getStudentProfile,
};
