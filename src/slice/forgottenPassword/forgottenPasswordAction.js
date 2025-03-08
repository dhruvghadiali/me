import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  isMockEnvironment,
  getMockAPIResponse,
  defaultAPIErrorResponse,
  isAPIServedSuccessfully
} from "@MEUtils/utilityFunctions";

import axios from "axios";

export const checkUserInformation = createAsyncThunk(
  "forgottenPassword/checkUserInformation",
  async (_, { rejectWithValue, getState }) => {
    try {
      let response;
      if (isMockEnvironment) {
        response = await getMockAPIResponse(
          getState().mock.apiResponseStatus,
          "checkUserInformation"
        );
      } else {
        /**
         * API call part.
         */
        response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        ); // process.env.REACT_APP_API_BASE_URL + signinAPIRoute;
      }

      if(isAPIServedSuccessfully(response.status)){
        if (response && response.data && response.data.length > 0) {
          return {
            users: response.data,
            error: "",
          };
        } else {
          return {
            users:  [],
            error: response.message || defaultAPIErrorResponse.message,
          };
        }
      }else{
        return {
          users:  [],
          error: response.message || defaultAPIErrorResponse.message,
        };
      }
      
    } catch (error) {
      return rejectWithValue(defaultAPIErrorResponse);
    }
  }
);

export const sendOtp = createAsyncThunk(
  "forgottenPassword/sendOtp",
  async (_, { rejectWithValue, getState }) => {
    try {
      let response;
      if (isMockEnvironment) {
        response = await getMockAPIResponse(
          getState().mock.apiResponseStatus,
          "sendOtp"
        );
      } else {
        /**
         * API call part.
         */
        response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        ); // process.env.REACT_APP_API_BASE_URL + signinAPIRoute;
      }

      if (response && response.data && response.data.length > 0) {
        return {
          error: "",
        };
      } else {
        return {
          isValidUser: false,
          error: response.message || defaultAPIErrorResponse.message,
        };
      }
    } catch (error) {
      return rejectWithValue(defaultAPIErrorResponse);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "forgottenPassword/resetPassword",
  async (_, { rejectWithValue, getState }) => {
    try {
      let response;
      if (isMockEnvironment) {
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

      if (response && response.data && response.data.length > 0) {
        return {
          isValidUser: true,
          error: "",
        };
      } else {
        return {
          isValidUser: false,
          error: response.message || defaultAPIErrorResponse.message,
        };
      }
    } catch (error) {
      return rejectWithValue(defaultAPIErrorResponse);
    }
  }
);
