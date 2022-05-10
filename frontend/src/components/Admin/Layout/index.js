import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
const AdminLayout = ({ children }) => {
   return (
      <>
         <Header />
           <div>{children}</div>
      </>
   );
};

export default AdminLayout;
