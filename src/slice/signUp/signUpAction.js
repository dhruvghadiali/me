import { createAsyncThunk } from "@reduxjs/toolkit";

import { signUpFormState } from "@MEUtils/enums";
import { signUpSendOTPAPIPayload } from "@MEUtils/apiPayload";
import { signUpAPIRoute, signUpSendOTPAPIRoute } from "@MEUtils/apiRoutes";
import {
  isMockEnvironment,
  getMockAPIResponse,
  defaultAPIErrorResponse,
  isAPIServedSuccessfully,
} from "@MEUtils/utilityFunctions";

import axios from "axios";

export const registerUser = createAsyncThunk(
  "signUp/registerUser",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      let response;
      if (isMockEnvironment()) {
        response = await getMockAPIResponse(
          getState().mock.apiResponseStatus,
          "signUp"
        );
      } else {
        response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}${signUpAPIRoute}`,
          payload
        );

        if (response) response = response.data;
      }

      if (isAPIServedSuccessfully(response)) {
        if (response && response.data && response.data.length > 0) {
          dispatch(sendOtp(signUpSendOTPAPIPayload(response.data[0])));
          return {
            error: "",
          };
        } else {
          return {
            error: response.message || defaultAPIErrorResponse.message,
          };
        }
      } else {
        return {
          error: response.message || defaultAPIErrorResponse.message,
        };
      }
    } catch (error) {
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        return rejectWithValue({ message: error.response.data.message });
      }
      return rejectWithValue(defaultAPIErrorResponse);
    }
  }
);

export const sendOtp = createAsyncThunk(
  "signUp/sendOtp",
  async (payload, { rejectWithValue, getState }) => {
    try {
      let response;
      if (isMockEnvironment()) {
        response = await getMockAPIResponse(
          getState().mock.apiResponseStatus,
          "sendOtp"
        );
      } else {
        response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}${signUpSendOTPAPIRoute}`,
          payload
        );

        if (response) response = response.data;
      }

      if (isAPIServedSuccessfully(response)) {
        if (response && response.data && response.data.length > 0) {
          return {
            error: "",
            currentSignUpFormStatus: signUpFormState.VE,
          };
        } else {
          return {
            error: response.message || defaultAPIErrorResponse.message,
            currentSignUpFormStatus: signUpFormState.RE,
          };
        }
      } else {
        return {
          error: response.message || defaultAPIErrorResponse.message,
          currentSignUpFormStatus: signUpFormState.RE,
        };
      }
    } catch (error) {
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        return rejectWithValue({ message: error.response.data.message });
      }
      return rejectWithValue(defaultAPIErrorResponse);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "signUp/verifyOtp",
  async (_, { rejectWithValue, getState }) => {
    try {
      let response;
      if (isMockEnvironment()) {
        response = await getMockAPIResponse(
          getState().mock.apiResponseStatus,
          "verifyOtp"
        );
      } else {
        /**
         * API call part.
         */
        response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        ); // process.env.REACT_APP_API_BASE_URL + signinAPIRoute;
      }

      if (isAPIServedSuccessfully(response)) {
        if (response && response.data && response.data.length > 0) {
          return {
            error: "",
            currentSignUpFormStatus: signUpFormState.SU,
          };
        } else {
          return {
            error: response.message || defaultAPIErrorResponse.message,
            currentSignUpFormStatus: signUpFormState.SU,
          };
        }
      } else {
        return {
          error: response.message || defaultAPIErrorResponse.message,
          currentSignUpFormStatus: signUpFormState.ER,
        };
      }
    } catch (error) {
      return rejectWithValue(defaultAPIErrorResponse);
    }
  }
);
