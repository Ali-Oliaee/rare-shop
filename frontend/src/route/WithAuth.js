import React from "react";
import { Navigate } from "react-router-dom";
import { setAdminInfo } from "../redux/reducers/adminSlice";
import { useSelector, useDispatch } from "react-redux";
const WithAuth = (Component) => {
   // const admin = useSelector(state => state.admin.value)
   // console.log(admin);
   console.log(localStorage.getItem("token"));
   return localStorage.getItem("token")//&& dispatch(loginAdmin)
    ? (
      Component
   ) : (
      <Navigate to="/auth/login" />
   );
};

export default WithAuth;
