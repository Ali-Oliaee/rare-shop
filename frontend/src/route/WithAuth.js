import React from "react";
import { Navigate } from "react-router-dom";

const WithAuth = (Component) => {
   console.log(<Component />);

   return localStorage.getItem("token") ? (
      <Component></Component>
   ) : (
      <Navigate to="/login" />
   );
};

export default WithAuth;
