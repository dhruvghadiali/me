import { createSlice } from "@reduxjs/toolkit";

import { responseMessage } from "@MEUtils/responseMessage";
import { forgottenPasswordFormState } from "@MEUtils/enums";
import {
  sendOtp,
  verifyOtp,
  resetPassword,
  checkUserInformation,
} from "@MERedux/forgottenPassword/forgottenPasswordAction";

export const forgottenPasswordSlice = createSlice({
  name: "forgottenPassword",
  initialState: {
    loader: false,
    error: "",
    otp: "",
    users: [],
    selectedUserForSendOtp: {},
    currentForgottenPasswordFormState: forgottenPasswordFormState.FA,
  },
  reducers: {
    resetForgottenPasswordFormState: (state, _) => {
      state.error = "";
      state.otp = "";
      state.users = [];
      state.loader = false;
      state.selectedUserForSendOtp = {};
      state.currentForgottenPasswordFormState = forgottenPasswordFormState.FA;
    },
    setSelectedUserForSendOtp: (state, action) => {
      state.selectedUserForSendOtp = action.payload;
    },
    setOtpValue: (state, action) => {
      state.otp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkUserInformation.pending, (state, _) => {
        state.users = [];
        state.otp = "";
        state.loader = true;
        state.error = "";
        state.selectedUserForSendOtp = {};
      })
      .addCase(checkUserInformation.fulfilled, (state, action) => {
        state.otp = "";
        state.loader = false;
        state.selectedUserForSendOtp = {};
        state.users = action.payload.users;
        state.error = action.payload.error;
        state.currentForgottenPasswordFormState =
          action.payload.currentForgottenPasswordFormState;
      })
      .addCase(checkUserInformation.rejected, (state, action) => {
        state.otp = "";
        state.users = [];
        state.loader = false;
        state.selectedUserForSendOtp = {};
        state.error =
          action.payload.message || responseMessage.somethingWentWrong;
      })
      .addCase(sendOtp.pending, (state, _) => {
        state.otp = "";
        state.loader = true;
        state.error = "";
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.otp = "";
        state.loader = false;
        state.error = action.payload.error;
        state.currentForgottenPasswordFormState =
          action.payload.currentForgottenPasswordFormState;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.otp = "";
        state.loader = false;
        state.error =
          action.payload.message || responseMessage.somethingWentWrong;
      })
      .addCase(verifyOtp.pending, (state, _) => {
        state.loader = true;
        state.error = "";
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loader = false;
        state.error = action.payload.error;
        state.currentForgottenPasswordFormState =
          action.payload.currentForgottenPasswordFormState;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loader = false;
        state.error =
          action.payload.message || responseMessage.somethingWentWrong;
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
          action.payload.message || responseMessage.somethingWentWrong;
        state.currentForgottenPasswordFormState = forgottenPasswordFormState.ER;
      });
  },
});

export const {
  resetForgottenPasswordFormState,
  setSelectedUserForSendOtp,
  setOtpValue,
} = forgottenPasswordSlice.actions;

export default forgottenPasswordSlice.reducer;
