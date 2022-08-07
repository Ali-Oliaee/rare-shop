import React from 'react'
import Lottie from 'react-lottie'
import successAnim from '../../../assets/animations/basket-success.json'

function PaymentSuccess() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: successAnim,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  )
}

export default PaymentSuccess
