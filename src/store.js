import { configureStore } from "@reduxjs/toolkit";

import mockSlice from "@MERedux/mockSetup/mockSlice";
import signInSlice from "@MERedux/signIn/signInSlice";
import signUpSlice from "@MERedux/signUp/signUpSlice";
import schoolSlice from "@MERedux/school/schoolSlice";
import profileSlice from "@MERedux/profile/profileSlice";
import loggerMiddleware from "@MERedux/middleware/logger";
import admissionFormSlice from "@MERedux/admissionForm/admissionFormSlice";
import forgottenPasswordSlice from "@MERedux/forgottenPassword/forgottenPasswordSlice";

export default configureStore({
  reducer: {
    mock: mockSlice,
    signIn: signInSlice,
    signUp: signUpSlice,
    school: schoolSlice,
    profile: profileSlice,
    admissionForm: admissionFormSlice,
    forgottenPassword: forgottenPasswordSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});
