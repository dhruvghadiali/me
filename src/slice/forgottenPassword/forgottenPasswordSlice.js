import { createSlice } from "@reduxjs/toolkit";

import { responseMessage } from "@MEUtils/responseMessage";
import { forgottenPasswordFormState } from "@MEUtils/enums";
import { checkUserInformation } from "@MERedux/forgottenPassword/forgottenPasswordAction";

export const forgottenPasswordSlice = createSlice({
  name: "forgottenPassword",
  initialState: {
    loader: false,
    error: "",
    users: [],
    selectedUserForSendOtp: {},
    currentForgottenPasswordFormState: forgottenPasswordFormState.UV,
  },
  reducers: {
    resetForgottenPasswordFormState: (state, _) => {
      state.error = "";
      state.users = [];
      state.loader = false;
      state.selectedUserForSendOtp = {};
      state.currentForgottenPasswordFormState = forgottenPasswordFormState.UV;
    },
    setSelectedUserForSendOtp: (state, action) =>
      (state.selectedUserForSendOtp = action.payload),
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkUserInformation.pending, (state, _) => {
        state.users = [];
        state.loader = true;
        state.error = "";
        state.selectedUserForSendOtp = {};
      })
      .addCase(checkUserInformation.fulfilled, (state, action) => {
        state.loader = false;
        state.selectedUserForSendOtp = {};
        state.users = action.payload.users;
        state.error = action.payload.error;
        state.currentForgottenPasswordFormState = forgottenPasswordFormState.SO;
      })
      .addCase(checkUserInformation.rejected, (state, action) => {
        state.users = [];
        state.loader = false;
        state.selectedUserForSendOtp = {};
        state.error =
          action.payload.message || responseMessage.somethingWentWrong;
      })
      .addCase(sendOtp.pending, (state, _) => {
        state.loader = true;
        state.error = "";
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.loader = false;
        state.error = action.payload.error;
        state.currentForgottenPasswordFormState = forgottenPasswordFormState.UV;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loader = false;
        state.error =
          action.payload.message || responseMessage.somethingWentWrong;
      })
      .addCase(resetPassword.pending, (state, _) => {
        state.loader = true;
        state.error = "";
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.users = [];
        state.loader = false;
        state.error = action.payload.error;
        state.selectedUserForSendOtp = {};
        state.currentForgottenPasswordFormState = forgottenPasswordFormState.SU;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.users = [];
        state.loader = false;
        state.selectedUserForSendOtp = {};
        state.error =
          action.payload.message || responseMessage.somethingWentWrong;
        state.currentForgottenPasswordFormState = forgottenPasswordFormState.ER;
      });
  },
});

export const { resetForgottenPasswordFormState, setSelectedUserForSendOtp } =
  forgottenPasswordSlice.actions;

export default forgottenPasswordSlice.reducer;
