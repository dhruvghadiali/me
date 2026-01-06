import { createAsyncThunk } from "@reduxjs/toolkit";

import { formatStudentProfileData, flattenLocationData } from "@MEUtils/apiResponse";
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

export {
  getLocations,
  addFatherProfile,
  addMotherProfile,
  getStudentProfile,
  addStudentProfile,
  updatedMotherProfile,
  updatedFatherProfile,
  updatedStudentProfile,
  addFatherProfileOverrideAddress,
  addMotherProfileOverrideAddress,
  updatedFatherProfileOverrideAddress,
  updatedMotherProfileOverrideAddress,
};
