import { createAsyncThunk } from "@reduxjs/toolkit";

import { signUpFormState } from "@MEUtils/enums";
import { signUpSendOTPAPIPayload } from "@MEUtils/apiPayload";

import {
  signUpAPIRoute,
  signUpSendOTPAPIRoute,
  signUpOTPVerificationAPIRoute,
} from "@MEUtils/apiRoutes";
import {
  isMockEnvironment,
  getMockAPIResponse,
  defaultAPIErrorResponse,
  isAPIServedSuccessfully,
} from "@MEUtils/utilityFunctions";

import axios from "axios";

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
 */
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
          let userDetail = response.data[0] ? response.data[0] : {};
          dispatch(sendOtp(signUpSendOTPAPIPayload(userDetail)));
          return {
            error: "",
            currentSignUpFormStatus: signUpFormState.RE,
            userId: userDetail && userDetail.id ? userDetail.id : "",
          };
        } else {
          return {
            userId: "",
            currentSignUpFormStatus: signUpFormState.RE,
            error: response.message || defaultAPIErrorResponse.message,
          };
        }
      } else {
        return {
          userId: "",
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
 */
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
          let details = response.data[0] ? response.data[0] : {};
          return {
            error: "",
            currentSignUpFormStatus: signUpFormState.VE,
            verificationToken:
              details && details.verification_token
                ? details.verification_token
                : "",
          };
        } else {
          return {
            verificationToken: "",
            currentSignUpFormStatus: signUpFormState.RE,
            error: response.message || defaultAPIErrorResponse.message,
          };
        }
      } else {
        return {
          verificationToken: "",
          currentSignUpFormStatus: signUpFormState.RE,
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
      return rejectWithValue(defaultAPIErrorResponse);
    }
  }
);
