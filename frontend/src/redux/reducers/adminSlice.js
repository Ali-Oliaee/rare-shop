import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: 'admin',
  initialState:{
    adminInfo: {},
  },
  reducers: {
    setAdminInfo: (state, action) => {
      return action.payload
    },
    
  }
})
export const { setAdminInfo } = adminSlice.actions;
export default adminSlice.reducer

