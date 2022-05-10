import React, { useState } from "react";
import AdminLayout from "../../components/Admin/Layout";
import Orders from "../../components/Admin/Orders/Orders";

const Order = () => {
   return (
      <AdminLayout>
         <Orders />
      </AdminLayout>
   );
};

export default Order;
