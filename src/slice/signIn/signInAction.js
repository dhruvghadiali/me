import { createAsyncThunk } from "@reduxjs/toolkit";

import { setAuthData } from "@MEHelpers/authHelpers";
import {
  signInAPIResponse,
  signInSendOTPAPIResponse,
} from "@MEUtils/apiResponse";
import { axiosInstance, apiResponseHaveData } from "@MEUtils/axiosInstance";
import { SIGN_IN_SCREEN_STATUS, API_RESPONSE_MESSAGES } from "@MEHelpers/enums";
import {
  signInAPIRoute,
  signUpSendOTPAPIRoute,
  signUpOTPVerificationAPIRoute,
} from "@MEUtils/apiRoutes";
import { isAPIServedSuccessfully } from "@MEUtils/utilityFunctions";

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
 *  - Step 2: On Success call store (user, token, error, currentSignInScreenStatus) in redux store and store (user & token) in local storage.
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

/**
 * Action Name: sendOtp
 * Description: This action will used for request backend for send OTP to new register user who tries to sign in.
 * Parameters: (Variable Name : Payload)
 *  - @param {<String>} user_id - User id
 * Returns:
 *  - @returns {<object>} API will return verification token
 * Logic:
 *  - Step 1: Call API for send OTP to email and phone number.
 *  - Step 2: On Success call store (verificationToken, currentSignInScreenStatus, error) in redux store.
 *            On Error store error message on redux store.
 * Usage:
 *  - This action usage is only for request backend service to send OTP to new register user who tries to sign in.
 *  - This action will call from sendOtp redux action (Only in success response and if user details are present).
 */
export const sendOtp = createAsyncThunk(
  "signIn/sendOtp",
  async (payload, { rejectWithValue, getState }) => {
    try {
      let response = await axiosInstance.post(signUpSendOTPAPIRoute, payload, {
        autoLogoutOnUnauthorized: false,
      });

      if (apiResponseHaveData(response)) {
        return {
          error: "",
          verificationToken: signInSendOTPAPIResponse(response.data[0]),
          currentSignInScreenStatus: SIGN_IN_SCREEN_STATUS.AV,
        };
      } else {
        return {
          verificationToken: "",
          error: response.message || API_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG,
          currentSignInScreenStatus: SIGN_IN_SCREEN_STATUS.ANV,
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) || "Send OTP request failed";
      return rejectWithValue({ error: errMsg });
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
 *  - Step 1: Call API to verify OTP for email and phone number.
 *  - Step 2: On Success call store (currentSignUpFormStatus, error) in redux store.
 *            On Error store error message on redux store.
 * Usage:
 *  - This action usage is only for request backend service to validate email and phone number OTP for new register user.
 *  - This action will call from signIn form (OTP Verification form).
 */
export const verifyOtp = createAsyncThunk(
  "signIn/verifyOtp",
  async (payload, { rejectWithValue, getState }) => {
    try {
      let response = await axiosInstance.post(
        signUpOTPVerificationAPIRoute,
        payload,
        { autoLogoutOnUnauthorized: false }
      );

      if (isAPIServedSuccessfully(response)) {
        return {
          error: "",
          currentSignInScreenStatus: SIGN_IN_SCREEN_STATUS.SU,
        };
      } else {
        return {
          error: response.message || API_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG,
          currentSignInScreenStatus: SIGN_IN_SCREEN_STATUS.ER,
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Sign-in OTP verification request failed";
      return rejectWithValue({ error: errMsg });
    }
  }
);
