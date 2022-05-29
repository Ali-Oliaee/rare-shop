import { lazy, Suspense } from "react";
const Home = lazy(() => import("../pages/User/Home"));
const Product = lazy(() => import("../pages/User/Product"));
const Payment = lazy(() => import("../pages/User/Payment"));
const Cart = lazy(() => import("../pages/User/Cart"));
const Login = lazy(() => import("../components/Admin/Login"));
const UserLayout = lazy(() => import("../components/User/Layout"));
const Inventory = lazy(() => import("../pages/Admin/Inventory"));
const Order = lazy(() => import("../pages/Admin/Order"));
const ProductsTable = lazy(() => import("../pages/Admin/Products"));
const AllProducts = lazy(() => import("../pages/User/AllProducts"));

export const routes = [
   {
      path: "/",
      component: (
         <Suspense fallback={<div>loading...</div>}>
            <UserLayout>
               <Home />
            </UserLayout>
         </Suspense>
      ),
      isPrivate: false,
   },

   {
      path: "/products/:category",
      component: (
         <Suspense fallback={<div>loading...</div>}>
            <UserLayout>
               <AllProducts />
            </UserLayout>
         </Suspense>
      ),
      isPrivate: false,
   },
   {
      path: "/payment",
      component: <Payment />,
      isPrivate: false,
   },
   {
      path: "/checkout/cart",
      component: (
         <Suspense fallback={<div>loading...</div>}>
            <UserLayout>
               <Cart />
            </UserLayout>
         </Suspense>
      ),
      isPrivate: false,
   },
   {
      path: "/auth/login",
      component: (
         <Suspense fallback={<div>loading...</div>}>
            <Login />
         </Suspense>
      ),
      isPrivate: false,
   },
   {
      path: "/dashboard/products",
      component: (
         <Suspense fallback={<div>loading...</div>}>
            {<ProductsTable />}
         </Suspense>
      ),
      isPrivate: true,
   },
   {
      path: "/dashboard/inventory",
      component: (
         <Suspense fallback={<div>loading...</div>}>
            <Inventory />
         </Suspense>
      ),
      isPrivate: false,
   },
   {
      path: "/dashboard/order",
      component: (
         <Suspense fallback={<div>loading...</div>}>
            <Order />
         </Suspense>
      ),
      isPrivate: false,
   },
   {
      path: "/product/:id",
      component: (
         <Suspense fallback={<div>loading...</div>}>
            <UserLayout>
               <Product />
            </UserLayout>
         </Suspense>
      ),
      isPrivate: false,
   },
];
