import { createAsyncThunk } from "@reduxjs/toolkit";
import { signinAPIRoute } from "@MEUtils/apiRoutes";
import {
  isMockEnvironment,
  getMockAPIResponse,
  defaultAPIErrorResponse
} from "@MEUtils/utilityFunctions";

import axios from "axios";

export const validateUser = createAsyncThunk(
  "login/validateUser",
  async (_, { rejectWithValue, getState }) => {
    try {
      let response;
      if (isMockEnvironment) {
        response = await getMockAPIResponse(
          getState().mock.apiResponseStatus,
          "login"
        );
      } else {
        /**
         * API call part.
         */
        response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        ); // process.env.REACT_APP_API_BASE_URL + signinAPIRoute;
      }

      if(response && response.data && response.data.length > 0) {
        return {
          isValidUser: true,
          error: "Valid User",
        };
      }else{
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
