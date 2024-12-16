import { configureStore } from "@reduxjs/toolkit";
import cardReducers from "./control/cardSlice";

export const store = configureStore({
  reducer: {
    card: cardReducers,
  },
});
