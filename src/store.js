import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import mockSlice from "@MERedux/mockSetup/mockSlice";
import signInSlice from "@MERedux/signIn/signInSlice";
import signUpSlice from "@MERedux/signUp/signUpSlice";
import loggerMiddleware from "@MERedux/middleware/logger";
import forgottenPasswordSlice from "@MERedux/forgottenPassword/forgottenPasswordSlice";

export default configureStore({
  reducer: {
    mock: mockSlice,
    signIn: signInSlice,
    signUp: signUpSlice,
    forgottenPassword: forgottenPasswordSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk).concat(loggerMiddleware),
});
