import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "../operations.js";
import {
  isRejected,
  isPending,
  handlePending,
  handleRejected,
} from "./slicesTools.js";

export const phonebookSlice = createSlice({
  name: "phonebook",
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    filter: "",
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id,
        );
      })
      .addMatcher(isPending, handlePending)
      .addMatcher(isRejected, handleRejected);
  },
});

export const { setFilter } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
