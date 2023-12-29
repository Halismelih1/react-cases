import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const storeInLocalStorage = (data: any): void => {
    localStorage.setItem("cart", JSON.stringify(data));
  };
  

const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.carts.find((item:any) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        state.carts.push({ ...action.payload, totalPrice: action.payload.price * quantity });
      }

      storeInLocalStorage(state.carts);
    },

    removeFromCart: (state, action) => {
      state.carts = state.carts.filter((item:any) => item.id !== action.payload);
      storeInLocalStorage(state.carts);
    },

    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
    },

    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal:any, cartItem:any) => {
        return (cartTotal += cartItem.price * cartItem.quantity);
      }, 0);
      state.itemCount = state.carts.length;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
