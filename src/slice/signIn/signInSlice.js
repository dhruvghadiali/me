import { createSlice } from "@reduxjs/toolkit";

import { SIGN_IN_SCREEN_STATUS, API_RESPONSE_MESSAGES } from "@MEHelpers/enums";
import { validateUser, sendOtp, verifyOtp } from "@MERedux/signIn/signInAction";

export const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    user: {},
    token: "",
    error: "",
    emailOtp: "",
    loader: false,
    phoneNumberOtp: "",
    verificationToken: "",
    currentSignInScreenStatus: SIGN_IN_SCREEN_STATUS.SI,
  },
  reducers: {
    resetSignInFormState: (state, _) => {
      state.user = {};
      state.token = "";
      state.error = "";
      state.loader = false;
      state.currentSignInScreenStatus = SIGN_IN_SCREEN_STATUS.SI;
    },
    resetSignInVerificationFormState: (state, _) => {
      state.emailOtp = "";
      state.phoneNumberOtp = "";
    },
    changeSignInFormState: (state, action) => {
      state.currentSignInScreenStatus = action.payload;
    },
    setEmailOtp: (state, action) => {
      state.emailOtp = action.payload;
    },
    setPhoneNumberOtp: (state, action) => {
      state.phoneNumberOtp = action.payload;
    },
    setLogin: (state, action) => {
      state.user = action.payload.userData;
      state.token = action.payload.token;
    },
    signOutUser: (state, _) => {
      state.user = {};
      state.currentSignInScreenStatus = SIGN_IN_SCREEN_STATUS.SI;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(validateUser.pending, (state, _) => {
        state.user = {};
        state.token = "";
        state.error = "";
        state.loader = true;
      })
      .addCase(validateUser.fulfilled, (state, action) => {
        state.loader = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = action.payload.error;
        state.currentSignInScreenStatus =
          action.payload.currentSignInScreenStatus;
      })
      .addCase(validateUser.rejected, (state, action) => {
        state.loader = false;
        state.error =
          action.payload.error || API_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG;
      })
      .addCase(sendOtp.pending, (state, _) => {
        state.loader = true;
        state.error = "";
        state.emailOtp = "";
        state.phoneNumberOtp = "";
        state.verificationToken = "";
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.loader = false;
        state.error = action.payload.error;
        state.verificationToken = action.payload.verificationToken;
        state.currentSignInScreenStatus =
          action.payload.currentSignInScreenStatus;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loader = false;
        state.error =
          action.payload.error || API_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG;
      })
      .addCase(verifyOtp.pending, (state, _) => {
        state.loader = true;
        state.error = "";
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loader = false;
        state.error = action.payload.error;
        state.currentSignInScreenStatus =
          action.payload.currentSignInScreenStatus;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loader = false;
        state.error =
          action.payload.error || API_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG;
        state.currentSignInScreenStatus = SIGN_IN_SCREEN_STATUS.ER;
      });
  },
});

export const {
  setLogin,
  signOutUser,
  setEmailOtp,
  setPhoneNumberOtp,
  resetSignInFormState,
  changeSignInFormState,
  resetSignInVerificationFormState,
} = signInSlice.actions;

export default signInSlice.reducer;
