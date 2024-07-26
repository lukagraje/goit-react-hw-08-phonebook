import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../lib/client";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const response = await client.get("/contacts");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await client.post("/contacts", newContact);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await client.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
