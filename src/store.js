import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import loggerMiddleware from "@MERedux/middleware/logger";
import mockSlice from "@MERedux/mockSetup/mockSlice";

export default configureStore({
  reducer: {
    mock: mockSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk).concat(loggerMiddleware),
});
