import { configureStore } from "@reduxjs/toolkit";

import mockSlice from "@MERedux/mockSetup/mockSlice";
import signInSlice from "@MERedux/signIn/signInSlice";
import signUpSlice from "@MERedux/signUp/signUpSlice";
import schoolSlice from "@MERedux/school/schoolSlice";
import loggerMiddleware from "@MERedux/middleware/logger";
import admissionFormSlice from "@MERedux/admissionForm/admissionFormSlice";
import forgottenPasswordSlice from "@MERedux/forgottenPassword/forgottenPasswordSlice";

export default configureStore({
  reducer: {
    mock: mockSlice,
    signIn: signInSlice,
    signUp: signUpSlice,
    forgottenPassword: forgottenPasswordSlice,
    school: schoolSlice,
    admissionForm: admissionFormSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});
