/* eslint-disable global-require */
import React from 'react'
import Lottie from 'react-lottie'

function Notfoundpage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require('../../assets/animations/404-error-doodle-animation.json'),
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

export default Notfoundpage
