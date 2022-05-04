import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: 'admin',
  initialState:{},
  reducers: {
    setAdmin: (state, action) => {
      return action.payload
    },
    
  }
})