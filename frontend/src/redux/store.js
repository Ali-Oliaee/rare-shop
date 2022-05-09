<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./reducers/adminSlice"
export const store = configureStore({
   reducer: {
      admin: adminReducer,
   },
});
=======
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./rootReducer"

const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
>>>>>>> feat/orders
