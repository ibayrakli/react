import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../courseItems";

const initialState = {
  cardItems: courseItems,
  quantity: 5,
  total: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    clearCard: (state) => {
      state.cardItems = [];
    },
    removeItem: (state, action) => {
      // console.log(action);
      const itemId = action.payload;
      state.cardItems = state.cardItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cardItem = state.cardItems.find(
        (item) => item.id == action.payload
      );
      cardItem.quantity += 1;
    },
    decrease: (state, action) => {
      const cardItem = state.cardItems.find(
        (item) => item.id == action.payload
      );

      if (cardItem.quantity > 0) cardItem.quantity -= 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      let quantity = 0;

      state.cardItems.forEach((item) => {
        total += item.quantity * item.price;
        quantity += item.quantity;
      });

      state.quantity = quantity;
      state.total = total;
    },
  },
});

// console.log(cardSlice);
export const { clearCard, removeItem, increase, decrease, calculateTotal } =
  cardSlice.actions;
export default cardSlice.reducer;
