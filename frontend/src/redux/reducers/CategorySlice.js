import { createSlice } from "@reduxjs/toolkit";

export const CategorySlice = createSlice({
   name: "category",
   initialState: {
      category: {},
   },
   reducers: {
      setCategoryName: (state, action) => {
         return action.payload;
      },
   },
});
export const { setCategoryName } = CategorySlice.actions;
export default CategorySlice.reducer;
