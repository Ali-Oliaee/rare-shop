import React from "react";
import { Navigate } from "react-router-dom";

const WithAuth = (Component) => {
   return localStorage.getItem("token") ? (
      <Component></Component>
   ) : (
      <Navigate to="/auth/login" />
   );
};

export default WithAuth;
