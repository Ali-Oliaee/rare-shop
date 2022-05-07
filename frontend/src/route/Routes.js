import Home from "../pages/Home";
import Product from "../pages/User/Product";
import Payment from "../pages/User/Payment";
import Cart from "../pages/User/Cart";
import Login from "../components/Admin/Login/Login";
import Paneladmin from "../components/Admin/Panel/PanelAdmin";
const routes = [
   {
      path: "/home",
      component: <Home />,
      isPrivate: false,
      layout: "user",
   },
   {
      path: "/product/id", ///////code spliting
      component: <Product />,
      isPrivate: false,
      layout: "user",
   },
   {
      path: "/payment",
      component: <Payment />,
      isPrivate: false,
      layout: "user",
   },
   {
      path: "/cart",
      component: <Cart />,
      isPrivate: false,
      layout: "user",
   },
   {
      path: "/login",
      component: <Login />,
      isPrivate: false,
      layout: "user",
   },
   {
      path: "/adminPanel",
      component: <Paneladmin />,
      isPrivate: false,
      layout: "admin",
   },
];
