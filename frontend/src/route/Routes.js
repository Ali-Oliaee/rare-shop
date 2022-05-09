import Home from "../pages/User/Home";
import Product from "../pages/User/Product";
import Payment from "../pages/User/Payment";
import Cart from "../pages/User/Cart";
import Login from "../components/Admin/Login";
import UserLayout from "../components/User/Layout";
import Adminpanel from "../pages/Admin/AdminPanel";
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
      path: "/login",
      component: <Login />,
      isPrivate: false,
      layout: "user",
   },
   {
      path: "/adminPanel",
      component: <Adminpanel />,
      isPrivate: true,
      layout: "admin",
   },
];
