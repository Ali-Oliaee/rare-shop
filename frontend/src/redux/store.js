import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./reducers/adminSlice";
import loadingReducer from "./reducers/LoadingSlice";

export const store = configureStore({
   reducer: {
      admin: adminReducer,
      loading: loadingReducer,
   },
});
