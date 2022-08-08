import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './style.scss'

function Footer() {
  return (
    <div className="footer">
      <Button component={Link} to="/about">About</Button>
      <Button component={Link} to="/contact">Contact</Button>
      <Button component={Link} to="/stores">Stores</Button>
    </div>
  )
}

export default Footer
