import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { showCart: false, items: [] };

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    addItem(state, action) {
      const itemIndex = state.items.findIndex(cartItem => cartItem.title === action.payload.title);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      }else{
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeItem(state, action) {
      const itemIndex = state.items.findIndex(cartItem => cartItem.title === action.payload);
      if(itemIndex >= 0){
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity--;
        }else{
          state.items.splice(itemIndex, 1);
        }
      }
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
