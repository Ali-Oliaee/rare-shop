import React, { useState } from "react";
import AdminLayout from "../../components/Admin/Layout";
import Orders from "../../components/Admin/Orders/Orders";
import { AdminApi } from "../../api/AdminApi";
const Order = () => {
  
   return (
      <AdminLayout>
         <Orders />     
      </AdminLayout>
   );
};

export default Order;
