import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  formatStudentProfileData,
  flattenLocationData,
  formateAcademicClassesAPIResponse,
} from "@MEUtils/apiResponse";
import {
  axiosInstance,
  apiResponseHaveData,
  isAPIServedSuccessfully,
} from "@MEUtils/axiosInstance";
import {
  statesAPIRoute,
  addressesAPIRoute,
  parentProfileAPIRoute,
  studentProfileAPIRoute,
  siblingProfileAPIRoute,
  addressProfileAPIRoute,
  academicClassesAPIRoute,
  emergencyContactProfileAPIRoute,
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

        return {
          error: "",
          profile,
        };
      } else {
        profile = formatStudentProfileData({});
        return {
          error: response?.message || "Profile information is not available.",
          profile,
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Profile information could not be retrieved. Please try again.";
      return rejectWithValue({
        error: errMsg,
        profile: formatStudentProfileData({}),
      });
    }
  }
);

const getLocations = createAsyncThunk(
  "profile/getLocations",
  async (payload, { getState, rejectWithValue }) => {
    try {
      let states = [];
      let districts = [];
      let cities = [];
      let areaNames = [];
      let zipcodes = [];

      let response = await axiosInstance.get(statesAPIRoute, {
        state: getState(),
        callPublicAPI: true,
      });

      if (apiResponseHaveData(response)) {
        return {
          error: "",
          states: flattenLocationData(response.data).states,
          districts: flattenLocationData(response.data).districts,
          cities: flattenLocationData(response.data).cities,
          areaNames: flattenLocationData(response.data).areaNames,
          zipcodes: flattenLocationData(response.data).zipcodes,
        };
      } else {
        return {
          error: response?.message || "States information is not available.",
          states,
          districts,
          cities,
          areaNames,
          zipcodes,
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Zipcodes information could not be retrieved. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

const getAcademicClasses = createAsyncThunk(
  "profile/getAcademicClasses",
  async (payload, { getState, rejectWithValue }) => {
    try {
      let academicClasses = [];

      let response = await axiosInstance.get(academicClassesAPIRoute, {
        state: getState(),
        callPublicAPI: true,
      });

      if (apiResponseHaveData(response)) {
        return {
          error: "",
          academicClasses: formateAcademicClassesAPIResponse(response.data),
        };
      } else {
        return {
          error:
            response?.message ||
            "Academic classes information is not available.",
          academicClasses,
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Academic classes information could not be retrieved. Please try again.";
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

      if (isAPIServedSuccessfully(response)) {
        // Refresh profile after successful addition
        await dispatch(getStudentProfile());
        return {};
      } else {
        return {
          error:
            response?.message ||
            "Student profile information could not be added. Please try again.",
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

const addFatherProfile = createAsyncThunk(
  "profile/addFatherProfile",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      let response = await axiosInstance.post(parentProfileAPIRoute, payload, {
        state: getState(),
      });

      if (isAPIServedSuccessfully(response)) {
        // Refresh profile after successful addition
        await dispatch(getStudentProfile());
        return {};
      } else {
        return {
          error:
            response?.message ||
            "Father profile information could not be added. Please try again.",
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Father profile information could not be added. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

const addFatherProfileOverrideAddress = createAsyncThunk(
  "profile/addFatherProfileOverrideAddress",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      let response = await axiosInstance.post(addressesAPIRoute, payload, {
        state: getState(),
      });

      if (isAPIServedSuccessfully(response)) {
        dispatch(getStudentProfile());
        return {};
      } else {
        return {
          error:
            response?.message ||
            "Father profile information could not be added. Please try again.",
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Father profile information could not be added. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

const addMotherProfile = createAsyncThunk(
  "profile/addMotherProfile",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      let response = await axiosInstance.post(parentProfileAPIRoute, payload, {
        state: getState(),
      });

      if (isAPIServedSuccessfully(response)) {
        // Refresh profile after successful addition
        await dispatch(getStudentProfile());
        return {};
      } else {
        return {
          error:
            response?.message ||
            "Mother profile information could not be added. Please try again.",
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Mother profile information could not be added. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

const addMotherProfileOverrideAddress = createAsyncThunk(
  "profile/addMotherProfileOverrideAddress",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      let response = await axiosInstance.post(addressesAPIRoute, payload, {
        state: getState(),
      });

      if (isAPIServedSuccessfully(response)) {
        dispatch(getStudentProfile());
        return {};
      } else {
        return {
          error:
            response?.message ||
            "Mother profile information could not be added. Please try again.",
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Mother profile information could not be added. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

const addSiblingProfile = createAsyncThunk(
  "profile/addSiblingProfile",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      let response = await axiosInstance.post(siblingProfileAPIRoute, payload, {
        state: getState(),
      });

      if (isAPIServedSuccessfully(response)) {
        // Refresh profile after successful addition
        await dispatch(getStudentProfile());
        return {};
      } else {
        return {
          error:
            response?.message ||
            "Sibling profile information could not be added. Please try again.",
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Sibling profile information could not be added. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

const addAddressProfile = createAsyncThunk(
  "profile/addAddressProfile",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      let response = await axiosInstance.post(addressProfileAPIRoute, payload, {
        state: getState(),
      });

      if (isAPIServedSuccessfully(response)) {
        // Refresh profile after successful addition
        await dispatch(getStudentProfile());
        return {};
      } else {
        return {
          error:
            response?.message ||
            "Address profile information could not be added. Please try again.",
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Address profile information could not be added. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

const addEmergencyContactProfile = createAsyncThunk(
  "profile/addEmergencyContactProfile",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      let response = await axiosInstance.post(
        emergencyContactProfileAPIRoute,
        payload,
        {
          state: getState(),
        }
      );

      if (isAPIServedSuccessfully(response)) {
        // Refresh profile after successful addition
        await dispatch(getStudentProfile());
        return {};
      } else {
        return {
          error:
            response?.message ||
            "Emergency contact profile information could not be added. Please try again.",
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Emergency contact profile information could not be added. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

const updatedStudentProfile = createAsyncThunk(
  "profile/updatedStudentProfile",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      const { id, data } = payload;
      let response = await axiosInstance.put(
        `${studentProfileAPIRoute}/${id}`,
        data,
        {
          state: getState(),
        }
      );

      if (isAPIServedSuccessfully(response)) {
        // Refresh profile after successful update
        await dispatch(getStudentProfile());
        return {};
      } else {
        return {
          error:
            response?.message ||
            "Student profile information could not be updated. Please try again.",
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Profile information could not be updated. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

const updatedFatherProfile = createAsyncThunk(
  "profile/updatedFatherProfile",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      const { id, data } = payload;
      let response = await axiosInstance.put(
        `${parentProfileAPIRoute}/${id}`,
        data,
        {
          state: getState(),
        }
      );

      if (isAPIServedSuccessfully(response)) {
        return {};
      } else {
        return {
          error:
            response?.message ||
            "Father profile information could not be updated. Please try again.",
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Father profile information could not be updated. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

const updatedFatherProfileOverrideAddress = createAsyncThunk(
  "profile/updatedFatherProfileOverrideAddress",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      const { id, data } = payload;
      let response = await axiosInstance.put(
        `${addressesAPIRoute}/${id}`,
        data,
        {
          state: getState(),
        }
      );

      if (isAPIServedSuccessfully(response)) {
        dispatch(getStudentProfile());
        return {};
      } else {
        return {
          error:
            response?.message ||
            "Father profile override address information could not be updated. Please try again.",
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Father profile override address information could not be updated. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

const updatedMotherProfile = createAsyncThunk(
  "profile/updatedMotherProfile",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      const { id, data } = payload;
      let response = await axiosInstance.put(
        `${parentProfileAPIRoute}/${id}`,
        data,
        {
          state: getState(),
        }
      );

      if (isAPIServedSuccessfully(response)) {
        return {};
      } else {
        return {
          error:
            response?.message ||
            "Mother profile information could not be updated. Please try again.",
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Mother profile information could not be updated. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

const updatedMotherProfileOverrideAddress = createAsyncThunk(
  "profile/updatedMotherProfileOverrideAddress",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      const { id, data } = payload;
      let response = await axiosInstance.put(
        `${addressesAPIRoute}/${id}`,
        data,
        {
          state: getState(),
        }
      );

      if (isAPIServedSuccessfully(response)) {
        dispatch(getStudentProfile());
        return {};
      } else {
        return {
          error:
            response?.message ||
            "Mother profile override address information could not be updated. Please try again.",
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Mother profile override address information could not be updated. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

const updatedSiblingProfile = createAsyncThunk(
  "profile/updatedSiblingProfile",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      const { id, data } = payload;
      let response = await axiosInstance.put(
        `${siblingProfileAPIRoute}/${id}`,
        data,
        {
          state: getState(),
        }
      );

      if (isAPIServedSuccessfully(response)) {
        dispatch(getStudentProfile());
        return {};
      } else {
        return {
          error:
            response?.message ||
            "Sibling profile information could not be updated. Please try again.",
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Sibling profile information could not be updated. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

const updatedAddressProfile = createAsyncThunk(
  "profile/updatedAddressProfile",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      const { id, data } = payload;
      let response = await axiosInstance.put(
        `${addressProfileAPIRoute}/${id}`,
        data,
        {
          state: getState(),
        }
      );

      if (isAPIServedSuccessfully(response)) {
        dispatch(getStudentProfile());
        return {};
      } else {
        return {
          error:
            response?.message ||
            "Address profile information could not be updated. Please try again.",
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Address profile information could not be updated. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

const updatedEmergencyContactProfile = createAsyncThunk(
  "profile/updatedEmergencyContactProfile",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      const { id, data } = payload;
      let response = await axiosInstance.put(
        `${emergencyContactProfileAPIRoute}/${id}`,
        data,
        {
          state: getState(),
        }
      );

      if (isAPIServedSuccessfully(response)) {
        dispatch(getStudentProfile());
        return {};
      } else {
        return {
          error:
            response?.message ||
            "Emergency contact profile information could not be updated. Please try again.",
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Emergency contact profile information could not be updated. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

export {
  getLocations,
  addFatherProfile,
  addMotherProfile,
  getStudentProfile,
  addStudentProfile,
  addSiblingProfile,
  addAddressProfile,
  getAcademicClasses,
  updatedMotherProfile,
  updatedFatherProfile,
  updatedStudentProfile,
  updatedSiblingProfile,
  updatedAddressProfile,
  addEmergencyContactProfile,
  updatedEmergencyContactProfile,
  addFatherProfileOverrideAddress,
  addMotherProfileOverrideAddress,
  updatedFatherProfileOverrideAddress,
  updatedMotherProfileOverrideAddress,
};
