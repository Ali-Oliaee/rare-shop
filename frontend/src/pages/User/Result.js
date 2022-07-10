import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { PaymentSuccess } from "../../components/User/Payment/Success";
import { PaymentFailed } from "../../components/User/Payment/Failure";
import { OrdersApi } from "../../api/OrdersApi";
import { clearCart } from "../../redux/reducers/CartSlice";

function ResultPage(props) {
   const [searchParams, setSearchParams] = useSearchParams();
   const dispatch = useDispatch();

   const currentParams = Object.fromEntries([...searchParams]);
   const sendData = async (id) => {
      await OrdersApi.patch(id, {
         orderStatus: 2,
      });
   };
   useEffect(() => {
      if (currentParams.result === "success") {
         let id = localStorage.getItem("orderId");
         sendData(id);
         dispatch(clearCart())
      }
   }, [searchParams]);
   setTimeout(() => {
      if (currentParams.result === "success"){
         window.location.replace("/")
      }else {
         window.location.replace("/checkout/cart")     
      }
   }, 10000);
   return (
      <div>
         {currentParams.result === "success" ? (
            <>
               <PaymentSuccess />
               <h2 style={{color: "green", textAlign:"center"}}>{"با تشکر از پرداخت شما سفارش شما ثبت شده و جهت هماهنگی با شما تماس خواهیم گرفت :)"}</h2>
            </>
         ) : (
            <>
               <PaymentFailed />
               <h2 style={{color: "red", textAlign:"center"}}>{"پرداخت شما موفقیت آمیز نبود سفارش شما در انتظار پرداخت است :)"}</h2>
            </>
         )}
      </div>
   );
}

export default ResultPage;
