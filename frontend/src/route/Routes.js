import Home from "../pages/User/Home";
import Product from "../pages/User/Product";
import Payment from "../pages/User/Payment";
import Cart from "../pages/User/Cart";
import Login from "../components/Admin/Login";
import UserLayout from "../components/User/Layout";
import Inventory from "../pages/Admin/Inventory";
import Order from "../pages/Admin/Order";
import ProductsTable from "../pages/Admin/Products";
import AllProducts from "../pages/User/AllProducts";

export const routes = [
   {
      path: "/",
      component: (
         <UserLayout>
            <Home />
         </UserLayout>
      ),
      isPrivate: false,
   },

   {
      path: "/products/clothes",
      component: (
         <UserLayout>
            <AllProducts cat={1} />
         </UserLayout>
      ),
      isPrivate: false,
   },
   {
      path: "/products/shoes-bag",
      component: (
         <UserLayout>
            <AllProducts cat={2} />
         </UserLayout>
      ),
      isPrivate: false,
   },
   {
      path: "/products/accessory",
      component: (
         <UserLayout>
            <AllProducts cat={3} />
         </UserLayout>
      ),
      isPrivate: false,
   },
   {
      path: "/payment",
      component: <Payment />,
      isPrivate: false,
   },
   {
      path: "/cart",
      component: (
         <UserLayout>
            <Cart />
         </UserLayout>
      ),
      isPrivate: false,
   },
   {
      path: "/auth/login",
      component: <Login />,
      isPrivate: false,
      layout: "user",
   },
   {
      path: "/dashboard/products",
      component: ProductsTable,
      isPrivate: true,
      layout: "admin",
   },
   {
      path: "/dashboard/inventory",
      component: <Inventory />,
      isPrivate: false,
      layout: "admin",
   },
   {
      path: "/dashboard/order",
      component: <Order />,
      isPrivate: false,
      layout: "admin",
   },
   {
      path: "/product/:id",
      component: (
         <UserLayout>
            <Product />
         </UserLayout>
      ),
      isPrivate: false,
      layout: "admin",
   },
];
