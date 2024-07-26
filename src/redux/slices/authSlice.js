  import { createSlice } from "@reduxjs/toolkit";
  import { refreshUser, logOut, login, register } from "../AuthOperations";

  const initialState = {
    loading: false,
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  };

  export const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(register.pending, (state) => {
          state.loading = true;
        })
        .addCase(register.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          state.error = null;
        })
        .addCase(register.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(login.pending, (state) => {
          state.loading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          state.error = null;
        })
        .addCase(login.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(logOut.fulfilled, (state) => {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
          state.error = null;
        })
        .addCase(refreshUser.pending, (state) => {
          state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isLoggedIn = true;
          state.isRefreshing = false;
          state.error = null;
        })
        .addCase(refreshUser.rejected, (state, action) => {
          state.isRefreshing = false;
          state.error = action.payload; 
        });
    },
  });

  export const authReducer = authSlice.reducer;
