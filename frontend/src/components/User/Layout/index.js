import React from "react";
import UserHeader from "../Header";
import Footer from "../Footer/Footer";
const UserLayout = ({ children }) => {
   return (
      <>
         <UserHeader />
           <div style={{margin:40,padding:20, background: "#c09d7e"}}>{children}</div>
         <Footer />
      </>
   );
};

export default UserLayout;
