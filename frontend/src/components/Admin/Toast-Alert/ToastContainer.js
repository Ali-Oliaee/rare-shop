import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastcontainer = () => {
   return (
      <div>
         <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
      </div>
   );
};

export default Toastcontainer;
