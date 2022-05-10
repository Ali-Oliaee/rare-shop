import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
   const [anchorElNav, setAnchorElNav] = React.useState(null);
   const [anchorElUser, setAnchorElUser] = React.useState(null);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };
   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   return (
      <>
         <AppBar sx={{ background: "black" }} position="static">
            <Container maxWidth="xl">
               <Toolbar disableGutters>
                  <Box
                     sx={{
                        flexGrow: 1,
                        display: { xs: "flex", md: "none" },
                     }}
                  >
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
                  </Box>

                  <Typography
                     className="logo-shop"
                     variant="h6"
                     noWrap
                     component="div"
                     sx={{ marginTop: "auto", fontSize: 24 }}
                  >
                     Rare Shop
                  </Typography>
               </Toolbar>
               <ul className="links-ul">
                  <li>
                     <Link to="/dashboard/products">کالا ها</Link>
                  </li>
                  <li>
                     <Link to="/dashboard/inventory">موجودی و قیمت ها</Link>
                  </li>
                  <li>
                     <Link to="/dashboard/order">سفارش ها</Link>
                  </li>
               </ul>
            </Container>
         </AppBar>
      </>
   );
};
export default Header;
