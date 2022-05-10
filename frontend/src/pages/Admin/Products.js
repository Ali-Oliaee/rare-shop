import React, { useState } from "react";
import AllProducts from "../../components/Admin/ProductsTable/index";
import AdminLayout from "../../components/Admin/Layout";

const Products = () => {
   const [active, setActive] = useState(false);
   return (
      <AdminLayout>
         <AllProducts active={active} />
      </AdminLayout>
   );
};

export default Products;
