import { createSlice } from "@reduxjs/toolkit";
import { registerUser, verifyOtp } from "@MERedux/signUp/signUpAction";
import { responseMessage } from "@MEUtils/responseMessage";
import { signUpAlertState } from "@MEUtils/enums";

export const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    loader: false,
    error: "",
    currentSignUpAlertStatus: signUpAlertState.RE,
    emailOtp: "",
    phoneNumberOtp: "",
  },
  reducers: {
    resetSignUpFormState: (state, _) => {
      state.currentSignUpAlertStatus = signUpAlertState.RE;
      state.loader = false;
      state.error = "";
    },
    resetSignUpVerificationFormState: (state, _) => {
      state.emailOtp = "";
      state.phoneNumberOtp = "";
    },
    changeSignUpAlertState: (state, action) => {
      state.currentSignUpAlertStatus = action.payload;
    },
    setEmailOtp: (state, action) => {
      state.emailOtp = action.payload;
    },
    setPhoneNumberOtp: (state, action) => {
      state.phoneNumberOtp = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, _) => {
        state.loader = true;
        state.error = "";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loader = false;
        state.error = action.payload.error;
        state.currentSignUpAlertStatus = signUpAlertState.VE;
        state.emailOtp = "";
        state.phoneNumberOtp = "";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loader = false;
        state.error =
          action.payload.message || responseMessage.somethingWentWrong;
        state.currentSignUpAlertStatus = signUpAlertState.RE;
      })
      .addCase(verifyOtp.pending, (state, _) => {
        state.loader = true;
        state.error = "";
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loader = false;
        state.error = action.payload.error;
        state.currentSignUpAlertStatus = signUpAlertState.SU;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loader = false;
        state.error =
          action.payload.message || responseMessage.somethingWentWrong;
        state.currentSignUpAlertStatus = signUpAlertState.ER;
      });
  },
});

export const {
  setEmailOtp,
  setPhoneNumberOtp,
  resetSignUpFormState,
  changeSignUpAlertState,
  resetSignUpVerificationFormState,
} = signUpSlice.actions;

export default signUpSlice.reducer;
