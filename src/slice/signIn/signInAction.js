import { createAsyncThunk } from "@reduxjs/toolkit";

import { signInAPIResponse } from "@MEUtils/apiResponse";
import { setAuthData } from "@MEHelpers/authHelpers";
import { axiosInstance, apiResponseHaveData } from "@MEUtils/axiosInstance";
import {
  SIGN_IN_SCREEN_STATUS,
  HTTP_STATUS_CODES,
  API_RESPONSE_MESSAGES,
} from "@MEHelpers/enums";
import {
  signInAPIRoute,
  signUpSendOTPAPIRoute,
  signUpOTPVerificationAPIRoute,
} from "@MEUtils/apiRoutes";
import { signInSendOTPAPIResponse } from "@MEUtils/apiResponse";
import {
  isMockEnvironment,
  getMockAPIResponse,
  defaultAPIErrorResponse,
  isAPIServedSuccessfully,
} from "@MEUtils/utilityFunctions";

import _ from "lodash";

/**
 * Action Name: validateUser
 * Description: This action will used for request backend to validate existing user credentials.
 * Parameters: (Variable Name : Payload)
 *  - @param {<String>} username  - User unique username
 *  - @param {<String>} password  - User unique password
 * Returns:
 *  - @returns {<object>} API will return user details
 * Logic:
 *  - Step 1: Call API to validate user credentials.
 *  - Step 2: On Success call store user details redux store and local storage.
 *            On Error store error message on redux store.
 * Usage:
 *  - This action usage is only for request backend service to validate existing user credentials.
 *  - This action will call from sign in form.
 */
export const validateUser = createAsyncThunk(
  "signIn/validateUser",
  async (payload, { rejectWithValue, getState }) => {
    try {
      let response = await axiosInstance.post(signInAPIRoute, payload, {
        autoLogoutOnUnauthorized: false,
      });

      if (apiResponseHaveData(response)) {
        response = signInAPIResponse(response.data[0]);

        if (response && response.isAccountVerified) {
          setAuthData(response, response.token);
          return {
            user: response,
            token: response.token,
            error: "",
            currentSignInScreenStatus: SIGN_IN_SCREEN_STATUS.SI,
          };
        } else {
          return {
            user: response,
            token: "",
            error: "",
            currentSignInScreenStatus: SIGN_IN_SCREEN_STATUS.ANV,
          };
        }
      } else {
        return {
          user: {},
          token: "",
          error:
            (response && response.message) ||
            API_RESPONSE_MESSAGES.SIGNIN_FAILED,
          currentSignInScreenStatus: SIGN_IN_SCREEN_STATUS.ER,
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) || "Sign-in request failed";
      return rejectWithValue({ error: errMsg });
    }
  }
);

export const sendOtp = createAsyncThunk(
  "signIn/sendOtp",
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
            currentSignInFormStatus: SIGN_IN_SCREEN_STATUS.AV,
            verificationToken: signInSendOTPAPIResponse(response.data[0]),
          };
        } else {
          return {
            verificationToken: "",
            currentSignInFormStatus: SIGN_IN_SCREEN_STATUS.ANV,
            error: response.message || defaultAPIErrorResponse.message,
          };
        }
      } else {
        return {
          verificationToken: "",
          currentSignInFormStatus: SIGN_IN_SCREEN_STATUS.ANV,
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

/**
 * Action Name: verifyOtp
 * Description: This action will used for request backend to validate email and phone number OTP for new register user.
 * Parameters: (Variable Name : Payload)
 *  - @param {<String>} user_id             - User id
 *  - @param {<String>} verification_token  - OTP verification token
 *  - @param {<number>} email_otp           - Email OTP
 *  - @param {<number>} phone_otp           - Phone number OTP
 * Returns:
 *  - @returns {<object>} API will return empty data
 * Logic:
 *  - Step 1: Check application environment. (Mock environment will give mock response)
 *  - Step 2: Call API to verify OTP for email and phone number.
 *  - Step 3: On Success call store (currentSignUpFormStatus, error) in redux store.
 *            On Error store error message on redux store.
 * Usage:
 *  - This action usage is only for request backend service to validate email and phone number OTP for new register user.
 *  - This action will call from signup from (OTP Verification form).
 */
export const verifyOtp = createAsyncThunk(
  "signUp/verifyOtp",
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
          `${process.env.REACT_APP_API_BASE_URL}${signUpOTPVerificationAPIRoute}`,
          payload
        );

        if (response) response = response.data;
      }

      if (isAPIServedSuccessfully(response)) {
        if (response && response.data && response.data.length > 0) {
          return {
            error: "",
            currentSignInFormStatus: SIGN_IN_SCREEN_STATUS.SU,
          };
        } else {
          return {
            error: response.message || defaultAPIErrorResponse.message,
            currentSignInFormStatus: SIGN_IN_SCREEN_STATUS.SU,
          };
        }
      } else {
        return {
          error: response.message || defaultAPIErrorResponse.message,
          currentSignInFormStatus: SIGN_IN_SCREEN_STATUS.ER,
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
