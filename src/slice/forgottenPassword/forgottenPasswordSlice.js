import { createSlice } from "@reduxjs/toolkit";

import { API_RESPONSE_MESSAGES } from "@MEHelpers/enums";
import { FORGOTTEN_PASSWORD_FORM_STATUS } from "@MEHelpers/enums";
import {
  sendOtp,
  verifyOtp,
  resetPassword,
  checkUserInformation,
} from "@MERedux/forgottenPassword/forgottenPasswordAction";

export const forgottenPasswordSlice = createSlice({
  name: "forgottenPassword",
  initialState: {
    emailOtp: "",
    phoneNumberOtp: "",
    error: "",
    users: [],
    loader: false,
    verificationToken: "",
    resetPasswordToken: "",
    selectedUserForSendOtp: {},
    currentForgottenPasswordFormState: FORGOTTEN_PASSWORD_FORM_STATUS.FA,
  },
  reducers: {
    resetForgottenPasswordFormState: (state, _) => {
      state.emailOtp = "";
      state.phoneNumberOtp = "";
      state.error = "";
      state.users = [];
      state.loader = false;
      state.verificationToken = "";
      state.resetPasswordToken = "";
      state.selectedUserForSendOtp = {};
      state.currentForgottenPasswordFormState = FORGOTTEN_PASSWORD_FORM_STATUS.FA;
    },
    setSelectedUserForSendOtp: (state, action) => {
      state.selectedUserForSendOtp = action.payload;
    },
    setEmailOtp: (state, action) => {
      state.emailOtp = action.payload;
    },
    setPhoneNumberOtp: (state, action) => {
      state.phoneNumberOtp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkUserInformation.pending, (state, _) => {
        state.emailOtp = "";
        state.phoneNumberOtp = "";
        state.error = "";
        state.verificationToken = "";
        state.resetPasswordToken = "";
        state.loader = true;
        state.users = [];
        state.selectedUserForSendOtp = {};
      })
      .addCase(checkUserInformation.fulfilled, (state, action) => {
        state.emailOtp = "";
        state.phoneNumberOtp = "";
        state.verificationToken = "";
        state.resetPasswordToken = "";
        state.loader = false;
        state.selectedUserForSendOtp = {};
        state.users = action.payload.users;
        state.error = action.payload.error;
        state.currentForgottenPasswordFormState =
          action.payload.currentForgottenPasswordFormState;
      })
      .addCase(checkUserInformation.rejected, (state, action) => {
        state.emailOtp = "";
        state.phoneNumberOtp = "";
        state.verificationToken = "";
        state.resetPasswordToken = "";
        state.users = [];
        state.loader = false;
        state.selectedUserForSendOtp = {};
        state.error =
          action.payload.error || API_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG;
      })
      .addCase(sendOtp.pending, (state, _) => {
        state.emailOtp = "";
        state.phoneNumberOtp = "";
        state.error = "";
        state.verificationToken = "";
        state.resetPasswordToken = "";
        state.loader = true;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.emailOtp = "";
        state.phoneNumberOtp = "";
        state.resetPasswordToken = "";
        state.loader = false;
        state.error = action.payload.error;
        state.verificationToken = action.payload.verificationToken;
        state.currentForgottenPasswordFormState =
          action.payload.currentForgottenPasswordFormState;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.emailOtp = "";
        state.phoneNumberOtp = "";
        state.resetPasswordToken = "";
        state.verificationToken = "";
        state.loader = false;
        state.error =
          action.payload.error || API_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG;
      })
      .addCase(verifyOtp.pending, (state, _) => {
        state.loader = true;
        state.error = "";
        state.resetPasswordToken = "";
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loader = false;
        state.resetPasswordToken = action.payload.resetPasswordToken;
        state.error = action.payload.error;
        state.currentForgottenPasswordFormState =
          action.payload.currentForgottenPasswordFormState;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loader = false;
        state.error =
          action.payload.error || API_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG;
      })
      .addCase(resetPassword.pending, (state, _) => {
        state.loader = true;
        state.error = "";
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loader = false;
        state.error = action.payload.error;
        state.currentForgottenPasswordFormState =
          action.payload.currentForgottenPasswordFormState;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loader = false;
        state.error =
          action.payload.error || API_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG;
        state.currentForgottenPasswordFormState = FORGOTTEN_PASSWORD_FORM_STATUS.ER;
      });
  },
});

export const {
  resetForgottenPasswordFormState,
  setSelectedUserForSendOtp,
  setEmailOtp,
  setPhoneNumberOtp,
} = forgottenPasswordSlice.actions;

export default forgottenPasswordSlice.reducer;
