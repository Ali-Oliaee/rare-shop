// <<<<<<< HEAD
// import { configureStore } from "@reduxjs/toolkit";
// import adminReducer from "./reducers/adminSlice"
// export const store = configureStore({
//    reducer: {
//       admin: adminReducer,
//    },
// });
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./rootReducer"

// const middlewares = [logger]
// , applyMiddleware(...middlewares)
const store = createStore(rootReducer)

export default store

