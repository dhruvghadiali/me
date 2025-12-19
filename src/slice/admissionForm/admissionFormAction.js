import { createAsyncThunk } from "@reduxjs/toolkit";

import { schoolAcademicClasses } from "@MEUtils/apiRoutes";
import { formatSchoolAcademicClassesData } from "@MEUtils/apiResponse";
import { axiosInstance, apiResponseHaveData } from "@MEUtils/axiosInstance";

const getSchoolAcademicClasses = createAsyncThunk(
  "admissionForm/getSchoolAcademicClasses",
  async (payload, { getState, rejectWithValue }) => {
    try {
      let schools = [];
      let response = await axiosInstance.get(schoolAcademicClasses, {
        state: getState(),
      });

      if (apiResponseHaveData(response)) {
        schools = formatSchoolAcademicClassesData(response.data);

        return {
          error: "",
          schools,
        };
      } else {
        return {
          error: response?.message || "Schools information is not available.",
          schools,
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Schools information could not be retrieved. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

export { getSchoolAcademicClasses };
