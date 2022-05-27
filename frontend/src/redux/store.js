import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./reducers/adminSlice";
import loadingReducer from "./reducers/LoadingSlice";
import cartOrderReducer from "./reducers/CartSlice";
export const store = configureStore({
   devTools: true,
   reducer: {
      admin: adminReducer,
      loading: loadingReducer,
      cart: cartOrderReducer
   },
});
