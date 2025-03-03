import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import loggerMiddleware from "@MERedux/middleware/logger";
import mockSlice from "@MERedux/mockSetup/mockSlice";
import loginSlice from "@MERedux/login/loginSlice";

export default configureStore({
  reducer: {
    mock: mockSlice,
    login: loginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk).concat(loggerMiddleware),
});
