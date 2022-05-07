import React from "react";
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
