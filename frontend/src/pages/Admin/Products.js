import React from "react";
import AllProducts from "../../components/Admin/ProductsTable/index";
import AdminLayout from "../../components/Admin/Layout";
import { UserApi } from "../../api/UserApi";
const Products = () => {

   return (
      <AdminLayout>
         <AllProducts />
      </AdminLayout>
   );
};

export default Products;
