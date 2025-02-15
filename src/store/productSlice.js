// productSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selected: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      const index = state.selected.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index === -1) {
        state.selected.push({ ...action.payload, quantity: 1 });
      } else {
        state.selected[index].quantity += 1; // Увеличиваем количество
      }
    },
    removeProduct: (state, action) => {
      const productId = action.payload; // Получаем ID продукта
      const index = state.selected.findIndex(
        (product) => product.id === productId
      );

      if (index !== -1) {
        if (state.selected[index].quantity > 1) {
          state.selected[index].quantity -= 1; // Уменьшаем количество
        } else {
          // Удаляем товар из корзины, если количество равно 1
          state.selected = state.selected.filter(
            (product) => product.id !== productId
          );
        }
      }
    },
  },
});

export const { setProducts, addToCart, removeProduct } = productSlice.actions;
export default productSlice.reducer;
