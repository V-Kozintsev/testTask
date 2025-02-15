import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { quantity: 0 },
  reducers: {
    add: (state) => {
      state.quantity += 1;
    },
    remove: (state) => {
      if (state.quantity) {
        state.quantity -= 1;
      }
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
