import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  product:[{
    
        Image: "",
    name: "",
    price: ""}
],
};
const cart = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart:(state,action) =>{
        state.product.push({Image:action.payload.Image,
            name:action.payload.name,
            price:action.payload.price})
    },
},
});

export const { addToCart} = cart.actions;
export default cart.reducer;
