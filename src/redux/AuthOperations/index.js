import { createAsyncThunk } from "@reduxjs/toolkit";
import { client, setAuthHeader, clearAuthHeader } from "../../lib/client";

const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await client.post("/users/signup", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const response = await client.post("/users/login", credentials);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await client.post("/users/logout");
    clearAuthHeader();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("No token!");
  }  
  try {
    setAuthHeader(persistedToken);
    const response = await client.get("/users/current");
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export { login, logOut, refreshUser, register };
