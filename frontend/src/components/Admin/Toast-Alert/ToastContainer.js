import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Toastcontainer() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default Toastcontainer
