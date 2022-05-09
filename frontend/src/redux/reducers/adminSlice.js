import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
   name: "admin",
   initialState: {},
   reducers: {
      setLoading: (state, action) => {
         return action.payload;
      },
   },
});
export const { setLoading } = adminSlice.actions;
export default adminSlice.reducer