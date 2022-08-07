/* eslint-disable global-require */
import Lottie from 'react-lottie'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import './styles.scss'

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
    <div className="not-found-page">
      <h1>۴۰۴</h1>
      <p> صفحه مورد نظر یافت نشد</p>
      <Lottie options={defaultOptions} height={400} width={400} />
      <Link to="/">
        <Button variant="contained" color="primary" size="large">
          بازگشت به خانه
        </Button>
      </Link>
    </div>
  )
}

export default Notfoundpage
