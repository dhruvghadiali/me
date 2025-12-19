import { createAsyncThunk } from "@reduxjs/toolkit";

import { formatSchoolAcademicClassesData } from "@MEUtils/apiResponse";
import { axiosInstance, apiResponseHaveData } from "@MEUtils/axiosInstance";
import {
  schoolAcademicClassesAPIRoute,
  admissionApplicationAPIRoute,
} from "@MEUtils/apiRoutes";

const getSchoolAcademicClasses = createAsyncThunk(
  "admissionForm/getSchoolAcademicClasses",
  async (payload, { getState, rejectWithValue }) => {
    try {
      let schools = [];
      let response = await axiosInstance.get(schoolAcademicClassesAPIRoute, {
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

const addAdmissionApplication = createAsyncThunk(
  "admissionForm/addAdmissionApplication",
  async (payload, { getState, rejectWithValue }) => {
    try {
      let response = await axiosInstance.post(
        admissionApplicationAPIRoute,
        payload,
        {
          state: getState(),
        }
      );

      return {
        error: "",
      };
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Adding admission application failed. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

export { getSchoolAcademicClasses, addAdmissionApplication };
