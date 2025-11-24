import { createAsyncThunk } from "@reduxjs/toolkit";

import { signUpSendOTPAPIPayload } from "@MEUtils/apiPayload";
import {
  SIGN_UP_FORM_STATUS,
  HTTP_STATUS_CODES,
  API_RESPONSE_MESSAGES,
} from "@MEHelpers/enums";
import { signUpSendOTPAPIResponse } from "@MEUtils/apiResponse";

import {
  signUpAPIRoute,
  signUpSendOTPAPIRoute,
  signUpOTPVerificationAPIRoute,
} from "@MEUtils/apiRoutes";
import {
  axiosInstance,
  apiResponseHaveData,
  isAPIServedSuccessfully,
} from "@MEUtils/axiosInstance";

import _ from "lodash";

/**
 * Action Name: registerUser
 * Description: This action will used for adding new user details in DB and pass required parameters in payload object.
 * Parameters: (Variable Name : Payload)
 *  - @param {<String>} first_name    - User first name
 *  - @param {<String>} last_name     - User last name
 *  - @param {<String>} email         - User email
 *  - @param {<String>} phone_number  - User whatsapp phone number
 *  - @param {<String>} username      - Unique username
 *  - @param {<String>} password      - User password
 * Returns:
 *  - @returns {<object>} API will return user details
 * Logic:
 *  - Step 1: Call API for storing user details in DB.
 *  - Step 2: On Success call sendOtp action for sending OTP to register email and phone number and store (userId, currentSignUpFormStatus, error) in redux store.
 *            On Error store error message on redux store.
 * Usage:
 *  - This action usage is only for signup new user.
 *  - This action will call from signup from.
 */
export const registerUser = createAsyncThunk(
  "signUp/registerUser",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      let response = await axiosInstance.post(signUpAPIRoute, payload, {
        autoLogoutOnUnauthorized: false,
      });

      if (apiResponseHaveData(response)) {
        dispatch(sendOtp(signUpSendOTPAPIPayload({ id: response.data[0].id })));
        return {
          error: "",
          userId: response.data[0].id || "",
          currentSignUpFormStatus: SIGN_UP_FORM_STATUS.RE,
        };
      } else {
        return {
          error: response.message || API_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG,
          userId: "",
          currentSignUpFormStatus: SIGN_UP_FORM_STATUS.RE,
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) || "Sign-up request failed";
      return rejectWithValue({ error: errMsg });
    }
  }
);

/**
 * Action Name: sendOtp
 * Description: This action will used for request backend for send OTP to new register user.
 * Parameters: (Variable Name : Payload)
 *  - @param {<String>} user_id - User id
 * Returns:
 *  - @returns {<object>} API will return verification token
 * Logic:
 *  - Step 1: Call API for send OTP to email and phone number.
 *  - Step 2: On Success call store (verificationToken, currentSignUpFormStatus, error) in redux store.
 *            On Error store error message on redux store.
 * Usage:
 *  - This action usage is only for request backend service to send OTP to new register user.
 *  - This action will call from registerUser redux action (Only in success response and if user details are present).
 */
export const sendOtp = createAsyncThunk(
  "signUp/sendOtp",
  async (payload, { rejectWithValue, getState }) => {
    try {
      let response = await axiosInstance.post(signUpSendOTPAPIRoute, payload, {
        autoLogoutOnUnauthorized: false,
      });

      if (apiResponseHaveData(response)) {
        return {
          error: "",
          verificationToken: response.data[0].verification_token || "",
          currentSignUpFormStatus: SIGN_UP_FORM_STATUS.VE,
        };
      } else {
        return {
          error: response.message || API_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG,
          verificationToken: "",
          currentSignUpFormStatus: SIGN_UP_FORM_STATUS.RE,
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Sign-up OTP request failed";
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
 *  - This action will call from signup from (OTP Verification form).
 */
export const verifyOtp = createAsyncThunk(
  "signUp/verifyOtp",
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
          currentSignUpFormStatus: SIGN_UP_FORM_STATUS.SU,
        };
      } else {
        return {
          error: response.message || API_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG,
          currentSignUpFormStatus: SIGN_UP_FORM_STATUS.ER,
        };
      }
    } catch (error) {
      const errMsg =
        (error && (error.message || error.error)) ||
        "Sign-up OTP verification request failed";
      return rejectWithValue({ error: errMsg });
    }
  }
);
