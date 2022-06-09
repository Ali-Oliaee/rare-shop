import React from "react";
import Lottie from "react-lottie";
import failureAnim from "../../../assets/animations/basket-failed.json";
function PaymentFailed() {
   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: failureAnim,
      rendererSettings: {
         preserveAspectRatio: "xMidYMid slice",
      },
   };

   return (
      <div>
         <Lottie options={defaultOptions} height={400} width={400} />
      </div>
   );
}

export { PaymentFailed };
