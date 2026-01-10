import { createSlice } from "@reduxjs/toolkit";

import {
  updatedPassword,
  updatedUsername,
} from "@MERedux/settings/settingsAction";

import _ from "lodash";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    displayAlertDialog: false,
    updateUsernameLoader: false,
    updateUsernameError: "",
    updatePasswordLoader: false,
    updatePasswordError: "",
  },
  reducers: {
    toggleAlertDialog: (state, action) => {
      state.displayAlertDialog = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updatedPassword.pending, (state, _) => {
        state.updatePasswordLoader = true;
        state.updatePasswordError = "";
      })
      .addCase(updatedPassword.fulfilled, (state, action) => {
        state.updatePasswordLoader = false;
        state.updatePasswordError = action.payload.error || "";
        state.displayAlertDialog = false;
      })
      .addCase(updatedPassword.rejected, (state, action) => {
        state.updatePasswordLoader = false;
        state.updatePasswordError = action.payload.error;
      })
      .addCase(updatedUsername.pending, (state, _) => {
        state.updateUsernameLoader = true;
        state.updateUsernameError = "";
      })
      .addCase(updatedUsername.fulfilled, (state, action) => {
        state.updateUsernameLoader = false;
        state.updateUsernameError = action.payload.error || "";
      })
      .addCase(updatedUsername.rejected, (state, action) => {
        state.updateUsernameLoader = false;
        state.updateUsernameError = action.payload.error;
      });
  },
});

export const {
  toggleAlertDialog
} = settingsSlice.actions;

export default settingsSlice.reducer;
