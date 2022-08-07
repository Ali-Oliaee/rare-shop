/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import adminReducer from './reducers/adminSlice'
import loadingReducer from './reducers/LoadingSlice'
import cartOrderReducer from './reducers/CartSlice'
// import categoryReducer from "./reducers/CategorySlice";

const reducers = combineReducers({
  admin: adminReducer,
  loading: loadingReducer,
  cart: cartOrderReducer,
  // category: categoryReducer
})
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)
// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  devTools: true,
  reducer: persistedReducer,
})
