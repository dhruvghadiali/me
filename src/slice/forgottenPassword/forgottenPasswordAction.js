import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  FORGOTTEN_PASSWORD_FORM_STATUS,
  API_RESPONSE_MESSAGES,
} from "@MEHelpers/enums";
import { axiosInstance, apiResponseHaveData } from "@MEUtils/axiosInstance";
import {
  forgottenPasswordAPIResponse,
  forgottenPasswordSendOTPAPIResponse,
  forgottenPasswordOTPVerificationAPIResponse,
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
  forgottenPasswordResetPasswordAPIRoute,
  forgottenPasswordOTPVerificationAPIRoute,
} from "@MEUtils/apiRoutes";

import axios from "axios";

export const checkUserInformation = createAsyncThunk(
  "forgottenPassword/checkUserInformation",
  async (payload, { rejectWithValue, getState }) => {
    try {
      let response = await axiosInstance.post(
        forgottenPasswordAPIRoute,
        payload,
        { autoLogoutOnUnauthorized: false }
      );

      if (apiResponseHaveData(response)) {
        return {
          users: forgottenPasswordAPIResponse(response.data),
          error: "",
          currentForgottenPasswordFormState: FORGOTTEN_PASSWORD_FORM_STATUS.UV,
        };
      } else {
        return {
          users: [],
          error: response.message || API_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG,
          currentForgottenPasswordFormState: FORGOTTEN_PASSWORD_FORM_STATUS.FA,
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Check user information request failed";
      return rejectWithValue({ error: errMsg });
    }
  }
);

export const sendOtp = createAsyncThunk(
  "forgottenPassword/sendOtp",
  async (payload, { rejectWithValue, getState }) => {
    try {
      let response = await axiosInstance.post(
        forgottenPasswordSendOTPAPIRoute,
        payload,
        { autoLogoutOnUnauthorized: false }
      );

      if (apiResponseHaveData(response)) {
        return {
          verificationToken: forgottenPasswordSendOTPAPIResponse(
            response.data[0]
          ),
          error: "",
          currentForgottenPasswordFormState: FORGOTTEN_PASSWORD_FORM_STATUS.SO,
        };
      } else {
        return {
          verificationToken: "",
          error: response.message || API_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG,
          currentForgottenPasswordFormState: FORGOTTEN_PASSWORD_FORM_STATUS.UV,
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) || "Send OTP request failed";
      return rejectWithValue({ error: errMsg });
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "forgottenPassword/verifyOtp",
  async (payload, { rejectWithValue, getState }) => {
    try {
      let response = await axiosInstance.post(
        forgottenPasswordOTPVerificationAPIRoute,
        payload,
        { autoLogoutOnUnauthorized: false }
      );

      if (apiResponseHaveData(response)) {
        return {
          resetPasswordToken: forgottenPasswordOTPVerificationAPIResponse(
            response.data[0]
          ),
          error: "",
          currentForgottenPasswordFormState: FORGOTTEN_PASSWORD_FORM_STATUS.RP,
        };
      } else {
        return {
          resetPasswordToken: "",
          error: response.message || API_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG,
          currentForgottenPasswordFormState: FORGOTTEN_PASSWORD_FORM_STATUS.SO,
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) || "Send OTP request failed";
      return rejectWithValue({ error: errMsg });
    }
  }
);

export const resetPassword = createAsyncThunk(
  "forgottenPassword/resetPassword",
  async (payload, { rejectWithValue, getState }) => {
    try {
      let response;
      if (isMockEnvironment()) {
        response = await getMockAPIResponse(
          getState().mock.apiResponseStatus,
          "resetPassword"
        );
      } else {
        response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}${forgottenPasswordResetPasswordAPIRoute}`,
          payload
        );

        if (response) response = response.data;
      }

      if (isAPIServedSuccessfully(response)) {
        return {
          error: "",
          currentForgottenPasswordFormState: FORGOTTEN_PASSWORD_FORM_STATUS.SU,
        };
      } else {
        return {
          error: response.message || defaultAPIErrorResponse.message,
          currentForgottenPasswordFormState: FORGOTTEN_PASSWORD_FORM_STATUS.ER,
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
