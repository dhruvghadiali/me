import { createAsyncThunk } from "@reduxjs/toolkit";

import { forgottenPasswordFormState } from "@MEUtils/enums";

import {
  forgottenPasswordAPIResponse,
  forgottenPasswordSendOTPAPIResponse,
} from "@MEUtils/apiResponse";
import {
  isMockEnvironment,
  getMockAPIResponse,
  defaultAPIErrorResponse,
  isAPIServedSuccessfully,
} from "@MEUtils/utilityFunctions";
import {
  forgottenPasswordAPIRoute,
  forgottenPasswordSendOTPAPIRoute,
  forgottenPasswordOTPVerificationAPIRoute,
} from "@MEUtils/apiRoutes";

import axios from "axios";

export const checkUserInformation = createAsyncThunk(
  "forgottenPassword/checkUserInformation",
  async (payload, { rejectWithValue, getState }) => {
    try {
      let response;
      if (isMockEnvironment()) {
        response = await getMockAPIResponse(
          getState().mock.apiResponseStatus,
          "checkUserInformation"
        );
      } else {
        response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}${forgottenPasswordAPIRoute}`,
          payload
        );

        if (response) response = response.data;
      }

      if (isAPIServedSuccessfully(response)) {
        if (response && response.data && response.data.length > 0) {
          return {
            users: forgottenPasswordAPIResponse(response.data),
            currentForgottenPasswordFormState: forgottenPasswordFormState.UV,
            error: "",
          };
        } else {
          return {
            users: [],
            error: response.message || defaultAPIErrorResponse.message,
            currentForgottenPasswordFormState: forgottenPasswordFormState.FA,
          };
        }
      } else {
        return {
          users: [],
          error: response.message || defaultAPIErrorResponse.message,
          currentForgottenPasswordFormState: forgottenPasswordFormState.FA,
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
  "forgottenPassword/sendOtp",
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
          `${process.env.REACT_APP_API_BASE_URL}${forgottenPasswordSendOTPAPIRoute}`,
          payload
        );

        if (response) response = response.data;
      }

      if (isAPIServedSuccessfully(response)) {
        if (response && response.data && response.data.length > 0) {
          return {
            error: "",
            verificationToken: forgottenPasswordSendOTPAPIResponse(
              response.data[0]
            ),
            currentForgottenPasswordFormState: forgottenPasswordFormState.SO,
          };
        } else {
          return {
            verificationToken: "",
            error: response.message || defaultAPIErrorResponse.message,
            currentForgottenPasswordFormState: forgottenPasswordFormState.UV,
          };
        }
      } else {
        return {
          verificationToken: "",
          error: response.message || defaultAPIErrorResponse.message,
          currentForgottenPasswordFormState: forgottenPasswordFormState.UV,
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
  "forgottenPassword/verifyOtp",
  async (payload, { rejectWithValue, getState }) => {
    try {
      let response;
      if (isMockEnvironment()) {
        response = await getMockAPIResponse(
          getState().mock.apiResponseStatus,
          "verifyOtp"
        );
      } else {
        response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}${forgottenPasswordOTPVerificationAPIRoute}`,
          payload
        );

        if (response) response = response.data;
      }

      if (isAPIServedSuccessfully(response)) {
        return {
          error: "",
          currentForgottenPasswordFormState: forgottenPasswordFormState.RP,
        };
      } else {
        return {
          error: response.message || defaultAPIErrorResponse.message,
          currentForgottenPasswordFormState: forgottenPasswordFormState.SO,
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

export const resetPassword = createAsyncThunk(
  "forgottenPassword/resetPassword",
  async (_, { rejectWithValue, getState }) => {
    try {
      let response;
      if (isMockEnvironment()) {
        response = await getMockAPIResponse(
          getState().mock.apiResponseStatus,
          "resetPassword"
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
        return {
          error: "",
          currentForgottenPasswordFormState: forgottenPasswordFormState.SU,
        };
      } else {
        return {
          error: response.message || defaultAPIErrorResponse.message,
          currentForgottenPasswordFormState: forgottenPasswordFormState.ER,
        };
      }
    } catch (error) {
      return rejectWithValue(defaultAPIErrorResponse);
    }
  }
);
