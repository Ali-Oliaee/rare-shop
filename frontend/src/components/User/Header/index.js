import { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import { useSelector } from 'react-redux'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import { Badge, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import menuItems from './menu-items'
import './style.scss'

function ResponsiveAppBar() {
  const [badgeCounter, setBadgeCounter] = useState(0)
  const countOfOrders = useSelector((state) => state.cart.cartItems.length)
  useEffect(() => {
    setBadgeCounter(countOfOrders)
  }, [countOfOrders, badgeCounter])
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (index, event) => setAnchorEl({ [index]: event.currentTarget })
  const handleClose = () => setAnchorEl(null)
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget)
  const handleCloseNavMenu = () => setAnchorElNav(null)

  return (
    <AppBar position="static" className="header">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {Object.keys(menuItems).map((item, index) => (
              <div key={item}>
                <Button color="inherit" onClick={(e) => handleClick(index, e)}>
                  {item}
                  <i className="fas fa-caret-down" />
                </Button>
                <Menu
                  anchorEl={anchorEl && anchorEl[index]}
                  open={anchorEl && Boolean(anchorEl[index])}
                  onClose={handleClose}
                  getContentAnchorEl={null}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                  {menuItems[item].map((menuitems) => (
                    <MenuItem
                      key={menuitems}
                      selected={menuitems === item}
                      onClick={handleClose}
                    >
                      <Link to={menuitems.path}>{menuitems.title}</Link>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ))}
            <Button linkComponent={Link} to="/products/category/4">
              لوازم آرایش
            </Button>
          </Box>
          <Tooltip title="مدیریت" className="header-icon">
            <Button linkComponent={Link} to="/dashboard/products">
              <ManageAccountsIcon />
            </Button>
          </Tooltip>
          <Tooltip title="سبد خرید" className="header-icon">
            <Button linkComponent={Link} to="/checkout/cart">
              <Badge badgeContent={badgeCounter} showZero color="secondary">
                <LocalGroceryStoreIcon />
              </Badge>
            </Button>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
