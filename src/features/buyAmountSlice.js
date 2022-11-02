import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: [],
};

export const buyAmountSlice = createSlice({
  name: "bought",
  initialState,
  reducers: {
    buy: (state, action) => {
      state.amount.push(action.payload);
    },
  },
});

export const { buy } = buyAmountSlice.actions;

export default buyAmountSlice.reducer;
