import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/responses/ProductModel";

interface CartState {
  cartItems: ProductModel[];
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  } as CartState, 
  reducers: {
    addToCart: (state, action: PayloadAction<ProductModel>) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<ProductModel>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
