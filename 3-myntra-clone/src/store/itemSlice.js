import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const itemsAction = itemsSlice.actions;

export default itemsSlice;
