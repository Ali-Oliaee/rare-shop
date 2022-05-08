import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./reducers/adminSlice";
export const store = configureStore({
   reducer: {
      admin: adminReducer,
   },
});
