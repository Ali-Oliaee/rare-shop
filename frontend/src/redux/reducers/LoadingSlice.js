import { createSlice } from "@reduxjs/toolkit";

export const LoadingSlice = createSlice({
  name: 'loading',
  initialState:{
    loadingStatus: false,
  },
  reducers: {
    startLoading: (state, action) => {
      return action.payload
    },
    endLoading: (state, action) => {
      return action.payload
    },
  }
})
// export const { setLoading } = LoadingSlice.actions;
// export default LoadingSlice.reducer

