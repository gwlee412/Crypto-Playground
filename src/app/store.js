import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../features/apiSlice";
import counterReducer from "../features/counterSlice";
import boughtReducer from "../features/buyAmountSlice";

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    counter: counterReducer,
    bought: boughtReducer,
  },
});
