import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
   name: "cart",
   initialState:[],
   reducers: {
      setCartProducts: (state, action) => {
         localStorage.setItem("cart",JSON.stringify([...state, { ...action.payload}]))
         return [...state, { ...action.payload}];

      },
      removeCartProducts:(state, action) => {
       const notRemovedItems = state.filter(el => el !== action.payload)
        return {
          notRemovedItems
        };
     },
   },
});

export const { setCartProducts } = CartSlice.actions;
export default CartSlice.reducer;
