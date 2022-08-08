import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './style.scss'

function Footer() {
  return (
    <div className="footer">
      <Button linkComponent={Link} to="/about">About</Button>
      <Button linkComponent={Link} to="/contact">Contact</Button>
      <Button linkComponent={Link} to="/stores">Stores</Button>
    </div>
  )
}

export default Footer
