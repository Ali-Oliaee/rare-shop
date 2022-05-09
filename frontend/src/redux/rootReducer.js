import { combineReducers } from "redux";
import adminReducer from "./reducers/AdminLoginSlice";
import loadingReducer from "./reducers/LoadingSlice"

const rootReducer = combineReducers({
  user: adminReducer,
  loading:loadingReducer
});

export default rootReducer;