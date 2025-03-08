import { createSlice } from "@reduxjs/toolkit";
import { registerUser, verifyOtp } from "@MERedux/signUp/signUpAction";
import { responseMessage } from "@MEUtils/responseMessage";
import { signUpFormState } from "@MEUtils/enums";

export const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    loader: false,
    error: "",
    currentSignUpFormStatus: signUpFormState.RE,
    emailOtp: "",
    phoneNumberOtp: "",
  },
  reducers: {
    resetSignUpFormState: (state, _) => {
      state.currentSignUpFormStatus = signUpFormState.RE;
      state.loader = false;
      state.error = "";
    },
    resetSignUpVerificationFormState: (state, _) => {
      state.emailOtp = "";
      state.phoneNumberOtp = "";
    },
    changesignUpFormState: (state, action) => {
      state.currentSignUpFormStatus = action.payload;
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
        state.currentSignUpFormStatus = signUpFormState.VE;
        state.emailOtp = "";
        state.phoneNumberOtp = "";
      })
      .addCase(registerUser.rejected, (state, action) => {
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
        state.currentSignUpFormStatus = signUpFormState.SU;
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
