import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import signInSlice from "@MERedux/signIn/signInSlice";
import signUpSlice from "@MERedux/signUp/signUpSlice";
import mockSlice from "@MERedux/mockSetup/mockSlice";
import loggerMiddleware from "@MERedux/middleware/logger";

export default configureStore({
  reducer: {
    mock: mockSlice,
    signIn: signInSlice,
    signUp: signUpSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk).concat(loggerMiddleware),
});
