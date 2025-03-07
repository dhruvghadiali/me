import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "@MERedux/signUp/signUpAction";
import { responseMessage } from "@MEUtils/responseMessage";
import { signUpAlertState } from "@MEUtils/enums";

export const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    loader: false,
    error: "",
    currentSignUpAlertStatus: signUpAlertState.RE,
  },
  reducers: {
    resetSignUpFormState: (state, _) => {
      state.currentSignUpAlertStatus = signUpAlertState.RE;
      state.loader = false;
      state.error = "";
    },
    changeSignUpAlertState: (state, action) => {
      state.currentSignUpAlertStatus = action.payload;
    },
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
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loader = false;
        state.error =
          action.payload.message || responseMessage.somethingWentWrong;
        state.currentSignUpAlertStatus = signUpAlertState.RE;
      });
  },
});

export const { resetSignUpFormState, changeSignUpAlertState } =
  signUpSlice.actions;

export default signUpSlice.reducer;
