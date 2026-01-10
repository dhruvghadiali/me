import { createAsyncThunk } from "@reduxjs/toolkit";

import { signOutUser } from "@MERedux/signIn/signInSlice";
import { axiosInstance, isAPIServedSuccessfully } from "@MEUtils/axiosInstance";
import {
  updateUsernameAPIRoute,
  updatePasswordAPIRoute,
} from "@MEUtils/apiRoutes";

const updatedUsername = createAsyncThunk(
  "settings/updatedUsername",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      let response = await axiosInstance.put(
        `${updateUsernameAPIRoute}`,
        payload,
        {
          state: getState(),
        }
      );

      if (isAPIServedSuccessfully(response)) {
        dispatch(signOutUser());
        return {};
      } else {
        return {
          error:
            response?.message ||
            "Username could not be updated. Please try again.",
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Username could not be updated. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

const updatedPassword = createAsyncThunk(
  "settings/updatedPassword",
  async (payload, { getState, rejectWithValue, dispatch }) => {
    try {
      let response = await axiosInstance.put(
        `${updatePasswordAPIRoute}`,
        payload,
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
            "Password could not be updated. Please try again.",
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Password could not be updated. Please try again.";
      return rejectWithValue({ error: errMsg });
    }
  }
);

export { updatedUsername, updatedPassword };
