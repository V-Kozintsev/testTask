import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.js";
import productSlice from "./productSlice.js";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
  },
});

export default store;
