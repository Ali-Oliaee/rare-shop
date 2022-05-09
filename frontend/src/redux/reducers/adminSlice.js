import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
<<<<<<< HEAD
  name: 'admin',
  initialState:{
    loadingStatus: false,
  },
  reducers: {
    setLoading: (state, action) => {
      return action.payload
    },
    
  }
})
export const { setLoading } = adminSlice.actions;

export default adminSlice.reducer;
=======
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
>>>>>>> feat/admin-table
