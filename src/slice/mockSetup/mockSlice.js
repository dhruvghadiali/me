import { createSlice } from "@reduxjs/toolkit";

export const mockSlice = createSlice({
  name: "mock",
  initialState: {
    apiResponseStatus: 200,
  },
  reducers: {
    setApiResponseStatus: (state, action) => {
      state.apiResponseStatus = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setApiResponseStatus } = mockSlice.actions;

export default mockSlice.reducer;
