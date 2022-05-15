import Home from "../pages/User/Home";
import Product from "../pages/User/Product";
import Payment from "../pages/User/Payment";
import AllProducts from "../pages/User/Products";
import Cart from "../pages/User/Cart";
import Login from "../components/Admin/Login";
import UserLayout from "../components/User/Layout";
// import Adminpanel from "../pages/Admin/AdminPanel";
import Inventory from "../pages/Admin/Inventory";
import Order from "../pages/Admin/Order";
import Products from "../pages/Admin/Products";

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
      path: "/product/id",
      component: (
         <UserLayout>
            <Product />
         </UserLayout>
      ),
      isPrivate: false,
   },
   {
      path: "/products/clothes",
      component: (
         <UserLayout>
            <AllProducts/>
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
   // {
   //    path: "/adminPanel",
   //    component: <Adminpanel />,
   //    isPrivate: false,
   //    layout: "admin",
   // },
   {
      path: "/dashboard/products",
      component: Products,
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
];
