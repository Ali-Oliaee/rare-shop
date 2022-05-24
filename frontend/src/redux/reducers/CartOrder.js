import { createSlice } from "@reduxjs/toolkit";

export const CartOrders = createSlice({
  name: "cart",
  initialState:"",
},{
  reducers: {
    setCartProducts: (state, action) => {
      return action.payload
    }
  }
});

export const { setCartProducts } = CartOrders.actions;
export default CartOrders.reducer
