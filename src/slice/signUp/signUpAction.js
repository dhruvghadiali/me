import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUpFormState } from "@MEUtils/enums";
import {
  isMockEnvironment,
  getMockAPIResponse,
  defaultAPIErrorResponse,
  isAPIServedSuccessfully
} from "@MEUtils/utilityFunctions";

import axios from "axios";

export const registerUser = createAsyncThunk(
  "signUp/registerUser",
  async (_, { rejectWithValue, getState }) => {
    try {
      let response;
      if (isMockEnvironment) {
        response = await getMockAPIResponse(
          getState().mock.apiResponseStatus,
          "signUp"
        );
      } else {
        /**
         * API call part.
         */
        response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        ); // process.env.REACT_APP_API_BASE_URL + signinAPIRoute;
      }

      if(isAPIServedSuccessfully(response)){
        if(response && response.data && response.data.length > 0) {
          return {
            error: "",
            currentSignUpFormStatus: signUpFormState.VE,
          };
        }else{
          return {
            error: response.message || defaultAPIErrorResponse.message,
            currentSignUpFormStatus: signUpFormState.RE,
          };
        }
      }else{
        return {
          error: response.message || defaultAPIErrorResponse.message,
          currentSignUpFormStatus: signUpFormState.RE,
        };
      }
    } catch (error) {
      return rejectWithValue(defaultAPIErrorResponse);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "signUp/verifyOtp",
  async (_, { rejectWithValue, getState }) => {
    try {
      let response;
      if (isMockEnvironment) {
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

      if(isAPIServedSuccessfully(response)){
        if(response && response.data && response.data.length > 0) {
          return {
            error: "",
            currentSignUpFormStatus: signUpFormState.SU,
          };
        }else{
          return {
            error: response.message || defaultAPIErrorResponse.message,
            currentSignUpFormStatus: signUpFormState.SU,
          };
        }
      }else{
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
