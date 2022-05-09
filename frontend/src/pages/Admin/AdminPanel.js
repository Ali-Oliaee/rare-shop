import AllProducts from "../../components/Admin/ProductsTable/index";
import AdminLayout from "../../components/Admin/Layout";
import Orders from "../../components/Admin/Orders/Orders";

const Adminpanel = () => {
   return (
      <AdminLayout>
         <Orders/>
         <AllProducts/>
      </AdminLayout>
   );
};

export default Adminpanel;
