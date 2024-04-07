import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    page: "login",
    otpSend: false,
  },
  reducers: {
    setCurrentAuthPage: (state, action) => ({ ...state, page: action.payload }),
    setOtpSend: (state, action) => ({ ...state, otpSend: action.payload }),
  },
});

export const { setCurrentAuthPage, setOtpSend } = authSlice.actions;
export default authSlice.reducer;
