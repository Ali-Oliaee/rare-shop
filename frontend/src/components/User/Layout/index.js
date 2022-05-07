import React from "react";
import UserHeader from "../Header";
import Footer from "../Footer/Footer";
const UserLayout = ({ children }) => {
   return (
      <>
         <UserHeader />
           <div>{children}</div>
         <Footer />
      </>
   );
};

export default UserLayout;
