import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import loginSlice from "@MERedux/login/loginSlice";
import mockSlice from "@MERedux/mockSetup/mockSlice";
import loggerMiddleware from "@MERedux/middleware/logger";

export default configureStore({
  reducer: {
    mock: mockSlice,
    login: loginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk).concat(loggerMiddleware),
});
