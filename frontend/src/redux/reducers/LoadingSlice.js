import LoadingActionTypes from "../types/LoadingType";

const INITIAL_STATE = {
    status:false
};

const loadingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LoadingActionTypes.START:
        return { status: true };
      case LoadingActionTypes.END:
        return { status: false };
      default:
        return state;
    }
  };
  
  export default loadingReducer;