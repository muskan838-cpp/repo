import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  product: [],
};
const cart = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.product.push({
        Id: action.payload.Id,
        Image: action.payload.Image,
        name: action.payload.Name,
        price: action.payload.Price,
        numberOfProducts: action.payload.numberOfProducts,
        Size: action.payload.Size,
        offerPrice: action.payload.offerPrice,
      });
    },

    removeFromCart: (state, action) => {
      state.product = state.product.filter((val) => val.Id != action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cart.actions;
export default cart.reducer;
