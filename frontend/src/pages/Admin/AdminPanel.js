import React, { useState } from "react";
import AllProducts from "../../components/Admin/ProductsTable/index";
import AdminLayout from "../../components/Admin/Layout";
import Orders from "../../components/Admin/Orders/Orders";
import Inventories from "components/Admin/Inventories/Inventories";
import { Outlet } from "react-router-dom";

const Adminpanel = () => {
   const [active, setActive] = useState(false);
   return (
      <AdminLayout>
         <Inventories active={active} />
         <Orders active={active} />
         <AllProducts active={active} />
         <Outlet />
      </AdminLayout>
   );
};

export default Adminpanel;
