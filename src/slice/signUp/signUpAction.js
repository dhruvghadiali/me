import { createAsyncThunk } from "@reduxjs/toolkit";

import { SIGN_UP_FORM_STATUS } from "@MEHelpers/enums";
import { signUpSendOTPAPIPayload } from "@MEUtils/apiPayload";
import { signUpSendOTPAPIResponse } from "@MEUtils/apiResponse";

import {
  signUpAPIRoute,
  signUpSendOTPAPIRoute,
  signUpOTPVerificationAPIRoute,
} from "@MEUtils/apiRoutes";
import { axiosInstance } from "@MEUtils/axiosInstance";
import {
  isMockEnvironment,
  getMockAPIResponse,
  defaultAPIErrorResponse,
  isAPIServedSuccessfully,
} from "@MEUtils/utilityFunctions";

import axios from "axios";
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
 *  - Step 1: Check application environment. (Mock environment will give mock response)
 *  - Step 2: Call API for storing user details in DB.
 *  - Step 3: On Success call sendOtp action for sending OTP to register email and phone number and store (userId, currentSignUpFormStatus, error) in redux store.
 *            On Error store error message on redux store
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

      if (
        response &&
        response.data &&
        Array.isArray(response.data) &&
        _.size(response.data) > 0
      ) {
        dispatch(sendOtp(signUpSendOTPAPIPayload({ id: response.data[0].id })));
        return {
          error: "",
          userId: response.data[0].id || "",
          currentSignUpFormStatus: SIGN_UP_FORM_STATUS.VE,
        };
      } else {
        return {
          error: response.message || defaultAPIErrorResponse.message,
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
 *  - Step 1: Check application environment. (Mock environment will give mock response)
 *  - Step 2: Call API for send OTP to email and phone number.
 *  - Step 3: On Success call store (verificationToken, currentSignUpFormStatus, error) in redux store.
 *            On Error store error message on redux store.
 * Usage:
 *  - This action usage is only for request backend service to send OTP to new register user.
 *  - This action will call from registerUser action (Success response).
 */
export const sendOtp = createAsyncThunk(
  "signUp/sendOtp",
  async (payload, { rejectWithValue, getState }) => {
    try {
      let response = await axiosInstance.post(signUpSendOTPAPIRoute, payload, {
        autoLogoutOnUnauthorized: false,
      });

      if(response && response.data && Array.isArray(response.data) && _.size(response.data) > 0) {
        return {
          error: "",
          verificationToken:
            response.data[0].verification_token || "",
        };
      }else{
        return {
          error: response.message || defaultAPIErrorResponse.message,
          verificationToken: "",
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
