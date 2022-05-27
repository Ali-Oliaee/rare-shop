import React from "react";
import { Navigate } from "react-router-dom";

const WithAuth = (Component) => {
   return localStorage.getItem("token")//&& redux
    ? (
      <Component></Component>
   ) : (
      <Component></Component>
      // <Navigate to="/auth/login" />
   );
};

export default WithAuth;
