import AdminActionTypes from "../types/AdminTypes";

const INITIAL_STATE = {
  info: {
    role: null,
  },
};

const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AdminActionTypes.SET_USER:
      return { info: action.payload };
    default:
      return state;
  }
};

export default adminReducer;