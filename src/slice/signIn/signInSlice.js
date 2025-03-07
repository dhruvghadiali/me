import { createSlice } from "@reduxjs/toolkit";
import { validateUser } from "@MERedux/signIn/signInAction";
import { responseMessage } from "@MEUtils/responseMessage";

export const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    isValidUser: false,
    loader: false,
    error: "",
  },
  reducers: {
    resetSignInFormState: (state, _) => {
      state.isValidUser = false;
      state.loader = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(validateUser.pending, (state, _) => {
        state.isValidUser = false;
        state.loader = true;
        state.error = "";
      })
      .addCase(validateUser.fulfilled, (state, action) => {
        state.loader = false;
        state.isValidUser = action.payload.isValidUser;
        state.error = action.payload.error;
      })
      .addCase(validateUser.rejected, (state, action) => {
        state.isValidUser = false;
        state.loader = false;
        state.error = action.payload.message || responseMessage.somethingWentWrong;
      });
  },
});

export const { resetSignInFormState } = signInSlice.actions;

export default signInSlice.reducer;
