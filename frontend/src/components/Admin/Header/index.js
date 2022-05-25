import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { ThemeProvider } from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
   const [anchorElNav, setAnchorElNav] = useState(null);
   const [anchorElUser, setAnchorElUser] = useState(null);
   const [active, setActive] = useState(1);

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
   const handleClickChange = () => {
      setActive(!active);
   };
   const isActiveStyle = () => {
    
      return {
         color: "#856047",
         textDecoration: "none",
      };
   };
   const notActiveStyle = () => {
      return {
         color: "white",
         textDecoration: "none",
      };
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

                  <NavLink
                     to="/"
                     className="link-style"
                  >
                     <Typography
                        className="logo-shop"
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ marginTop: "auto", fontSize: 24 }}
                     >
                        Rare Shop
                     </Typography>
                  </NavLink>
               </Toolbar>
               <ul className="links-ul">
                  <li onClick={() => setActive(1)}>
                     <NavLink
                        style={active === 1 ? isActiveStyle : notActiveStyle}
                        to="/dashboard/products"
                     >
                        کالا ها
                     </NavLink>
                  </li>
                  <li  onClick={() => setActive(2)}>
                     <NavLink
                        style={active === 2 ? isActiveStyle : notActiveStyle}
                        to="/dashboard/inventory"
                     >
                        موجودی و قیمت ها
                     </NavLink>
                  </li>
                  <li  onClick={() => setActive(3)}>
                     <NavLink
                        style={active === 3 ? isActiveStyle : notActiveStyle}
                        to="/dashboard/order"
                     >
                        سفارش ها
                     </NavLink>
                  </li>
               </ul>
              
            </Container>
         </AppBar>
      </>
   );
};
export default Header;
