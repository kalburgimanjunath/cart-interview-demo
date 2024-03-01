import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
    removeFromCart: (state, action) => {
      console.log(
        state.filter((item) => {
          return item.id == action.payload;
        })
      );
      return [
        ...state,
        state.filter((item) => {
          return item.id == action.payload.id;
        }),
      ];
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
