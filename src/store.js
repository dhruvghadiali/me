import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import loggerMiddleware from "@MERedux/middleware/logger";

export default configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk).concat(loggerMiddleware),
});
