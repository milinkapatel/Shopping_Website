import { configureStore } from "@reduxjs/toolkit";
import itemsSlice, { itemsAction } from "./itemSlice";
import fetchStatusSlice, { fetchStatusAction } from "./fetchStatusSlice";
import bagSlice, { bagAction } from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export { itemsAction, fetchStatusAction, bagAction };
export default myntraStore;
