import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  FORGOTTEN_PASSWORD_FORM_STATUS,
  API_RESPONSE_MESSAGES,
} from "@MEHelpers/enums";
import { axiosInstance, apiResponseHaveData, isAPIServedSuccessfully } from "@MEUtils/axiosInstance";
import {
  forgottenPasswordAPIResponse,
  forgottenPasswordSendOTPAPIResponse,
  forgottenPasswordOTPVerificationAPIResponse,
} from "@MEUtils/apiResponse";
import {
  forgottenPasswordAPIRoute,
  forgottenPasswordSendOTPAPIRoute,
  forgottenPasswordChangePasswordAPIRoute,
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
      let response = await axiosInstance.post(
          forgottenPasswordChangePasswordAPIRoute,
          payload,
          { autoLogoutOnUnauthorized: false }
        );

      
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
      const errMsg =
        (error && (error.message || error.error)) || "Reset password request failed";
      return rejectWithValue({ error: errMsg });
    }
  }
);
