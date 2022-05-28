import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
   root:{
         display: "flex",
         listStyle: "none",
         justifyContent: "center",
         marginTop: 0,
         "& li a": {
           textDecoration: "none",
           margin: "0 1rem",
           padding: "1rem",
           cursor: "pointer",
           fontSize: 20,
           color: "white",
         },
         "& li a:hover" :{
           color: "#856047"
         }
       }
       
   
})
const Header = () => {
   const classes = useStyle()
   const [active, setActive] = useState(1);
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
               <ul className={classes.root}>
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
