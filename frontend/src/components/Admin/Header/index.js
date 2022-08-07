/* eslint-disable jsx-a11y/click-events-have-key-events */
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles({
  root: {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'center',
    marginTop: 0,
    '& li a': {
      textDecoration: 'none',
      margin: '0 1rem',
      padding: '1rem',
      cursor: 'pointer',
      fontSize: 20,
      color: 'white',
    },
    '& li a:hover': {
      color: '#F4ED64',
    },
  },
})
function Header() {
  const classes = useStyle()
  const isActiveStyle = {
    color: '#F4ED64',
    textDecoration: 'none',
  }

  return (
    <AppBar sx={{ background: '#90dbf4' }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <NavLink to="/" className="link-style">
            <Typography
              className="logo-shop"
              variant="h6"
              noWrap
              component="div"
              sx={{ marginTop: 'auto', fontSize: 24 }}
            >
              Rare Shop
            </Typography>
          </NavLink>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div
            onClick={() => {
              localStorage.removeItem('token')
            }}
          >
            <NavLink to="/" className="link-style">
              <Typography
                className="logo-shop"
                variant="h6"
                noWrap
                component="p"
                sx={{ marginTop: 'auto', fontSize: 18 }}
              >
                خروج از سایت
              </Typography>
            </NavLink>
          </div>
        </Toolbar>
        <ul className={classes.root}>
          <li>
            <NavLink
              to="/dashboard/products"
              style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
            >
              کالا ها
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/inventory"
              style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
            >
              موجودی و قیمت ها
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/order"
              style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
            >
              سفارش ها
            </NavLink>
          </li>
        </ul>
      </Container>
    </AppBar>
  )
}
export default Header
