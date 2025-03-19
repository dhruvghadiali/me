import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  isMockEnvironment,
  getMockAPIResponse,
  defaultAPIErrorResponse,
} from "@MEUtils/utilityFunctions";

import axios from "axios";

export const validateUser = createAsyncThunk(
  "signIn/validateUser",
  async (_, { rejectWithValue, getState }) => {
    try {
      let response;
      if (isMockEnvironment()) {
        response = await getMockAPIResponse(
          getState().mock.apiResponseStatus,
          "signIn"
        );
      } else {
        console.log("API call");
        /**
         * API call part.
         */
        response = await axios.post("http://localhost:3000/signin"); // process.env.REACT_APP_API_BASE_URL + signinAPIRoute;
      }

      console.log("API call", response, process.env.NODE_ENV);
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
      console.log("API call", error);
      return rejectWithValue(defaultAPIErrorResponse);
    }
  }
);
