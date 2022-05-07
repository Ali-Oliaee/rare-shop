import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const AdminLayout = ({ children }) => {
   return (
      <>
         <Header />
           <div>{children}</div>
         <Footer />
      </>
   );
};

export default AdminLayout;
