import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const WithAuth = (Component) => {
   const admin = useSelector((state) => state.admin);
   return localStorage.getItem("token") && admin ? (
      Component
   ) : (
      <Navigate to="/auth/login" />
   );
};

export default WithAuth;
