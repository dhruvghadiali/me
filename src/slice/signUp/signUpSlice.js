import { createSlice } from "@reduxjs/toolkit";

import { signUpFormState } from "@MEUtils/enums";
import { responseMessage } from "@MEUtils/responseMessage";
import { registerUser, verifyOtp, sendOtp } from "@MERedux/signUp/signUpAction";

export const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    loader: false,
    error: "",
    currentSignUpFormStatus: signUpFormState.RE,
    emailOtp: "",
    phoneNumberOtp: "",
    userId: "",
    verificationToken: "",
  },
  reducers: {
    resetSignUpFormState: (state, _) => {
      state.currentSignUpFormStatus = signUpFormState.RE;
      state.loader = false;
      state.error = "";
      state.userId = "";
      state.verificationToken = "";
    },
    resetSignUpVerificationFormState: (state, _) => {
      state.emailOtp = "";
      state.phoneNumberOtp = "";
    },
    changeSignUpFormState: (state, action) => {
      state.currentSignUpFormStatus = action.payload;
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
      .addCase(registerUser.pending, (state, _) => {
        state.loader = true;
        state.error = "";
        state.userId = "";
        state.verificationToken = "";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.error = action.payload.error;
        state.userId = action.payload.userId;
        state.currentSignUpFormStatus = action.payload.currentSignUpFormStatus;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loader = false;
        state.error =
          action.payload.message || responseMessage.somethingWentWrong;
        state.currentSignUpFormStatus = signUpFormState.RE;
      })
      .addCase(sendOtp.pending, (state, _) => {
        state.error = "";
        state.verificationToken = "";
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.loader = false;
        state.emailOtp = "";
        state.phoneNumberOtp = "";
        state.error = action.payload.error;
        state.verificationToken = action.payload.verificationToken;
        state.currentSignUpFormStatus = action.payload.currentSignUpFormStatus;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loader = false;
        state.error =
          action.payload.message || responseMessage.somethingWentWrong;
        state.currentSignUpFormStatus = signUpFormState.RE;
      })
      .addCase(verifyOtp.pending, (state, _) => {
        state.loader = true;
        state.error = "";
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loader = false;
        state.error = action.payload.error;
        state.currentSignUpFormStatus = action.payload.currentSignUpFormStatus;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loader = false;
        state.error =
          action.payload.message || responseMessage.somethingWentWrong;
        state.currentSignUpFormStatus = signUpFormState.ER;
      });
  },
});

export const {
  setEmailOtp,
  setPhoneNumberOtp,
  resetSignUpFormState,
  changesignUpFormState,
  resetSignUpVerificationFormState,
} = signUpSlice.actions;

export default signUpSlice.reducer;
