import { useEffect, useState } from 'react'
import {
  AppBar, Box, Toolbar, IconButton, Menu,
  Badge, Tooltip, Button, MenuItem, List,
  ListItem, ListItemText, Drawer, ListSubheader,
} from '@mui/material'
import { useSelector } from 'react-redux'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import menuItems from './menu-items'
import './style.scss'

function UserHeader({ window }) {
  const drawerWidth = 240
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)
  const container = window ? () => window().document.body : undefined
  const [badgeCounter, setBadgeCounter] = useState(0)
  const countOfOrders = useSelector((state) => state.cart.cartItems.length)
  useEffect(() => {
    setBadgeCounter(countOfOrders)
  }, [countOfOrders, badgeCounter])
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (index, event) => setAnchorEl({ [index]: event.currentTarget })
  const handleClose = () => setAnchorEl(null)

  const drawer = (
    <Box onClick={handleDrawerToggle} className="drawer">
      <Button component={Link} to="/" className="logo">
        Rare Shop
      </Button>
      <List subheader={<li />}>
        {Object.keys(menuItems).map((title) => (
          <li key={title}>
            <ul>
              <ListSubheader>{title}</ListSubheader>
              {menuItems[title].map((item) => (
                <ListItem key={item.title}>
                  <Button component={Link} to={item.path}>
                    <ListItemText primary={item.title} />
                  </Button>
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }} className="header">
      <AppBar component="nav" color="primary" position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sx: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            <Button component={Link} to="/" className="logo">
              Rare Shop
            </Button>
            {Object.keys(menuItems).map((item, index) => (
              <div key={item}>
                <Button color="inherit" onClick={(e) => handleClick(index, e)}>
                  {item}
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
                      <Button component={Link} to={menuitems.path}>{menuitems.title}</Button>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ))}
            <Button component={Link} to="/products/category/4">
              لوازم آرایش
            </Button>
          </Box>
          <div className="buttons-container">
            <Button component={Link} to="/checkout/cart">
              <Tooltip title="سبد خرید" className="header-icon">
                <Badge badgeContent={badgeCounter} showZero color="secondary">
                  <LocalGroceryStoreIcon />
                </Badge>
              </Tooltip>
            </Button>
            <Tooltip title="مدیریت" className="header-icon">
              <Button component={Link} to="/dashboard/products">
                <ManageAccountsIcon />
              </Button>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  )
}

export default UserHeader
