import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  formatSchoolAcademicClassesData,
  formatSchoolAdmissionsData,
} from "@MEUtils/apiResponse";
import {
  axiosInstance,
  apiResponseHaveData,
  isAPIServedSuccessfully,
} from "@MEUtils/axiosInstance";
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

const getSchoolAdmissions = createAsyncThunk(
  "admissionForm/getSchoolAdmissions",
  async (payload, { getState, rejectWithValue }) => {
    try {
      let admissionForms = [];
      let response = await axiosInstance.get(admissionApplicationAPIRoute, {
        state: getState(),
      });

      if (apiResponseHaveData(response)) {
        admissionForms = formatSchoolAdmissionsData(response.data);

        return {
          error: "",
          admissionForms,
        };
      } else {
        return {
          error:
            response?.message || "Admissions information is not available.",
          admissionForms,
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Admissions information could not be retrieved. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

const addAdmissionApplication = createAsyncThunk(
  "admissionForm/addAdmissionApplication",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      let response = await axiosInstance.post(
        admissionApplicationAPIRoute,
        payload,
        {
          state: getState(),
        }
      );

      if (isAPIServedSuccessfully(response)) {
        dispatch(getSchoolAdmissions());
        return {
          error: "",
        };
      } else {
        return {
          error: "",
        };
      }
    } catch (error) {
      console.log("error in adding admission application", error);
      const errMsg =
        (error && (error.message || error.error)) ||
        "Adding admission application failed. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

const updateAdmissionApplicationStatus = createAsyncThunk(
  "admissionForm/updateAdmissionApplicationStatus",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      let response = await axiosInstance.put(
        `${admissionApplicationAPIRoute}/${payload.admissionFormId}/status`,
        { status: payload.status },
        {
          state: getState(),
        }
      );

      if (isAPIServedSuccessfully(response)) {
        dispatch(getSchoolAdmissions());
        return {
          error: "",
        };
      } else {
        return {
          error: "",
        };
      }
    } catch (error) {
      console.log("error in updating admission application status", error);
      const errMsg =
        (error && (error.message || error.error)) ||
        "Updating admission application status failed. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

export {
  getSchoolAdmissions,
  addAdmissionApplication,
  getSchoolAcademicClasses,
  updateAdmissionApplicationStatus,
};
