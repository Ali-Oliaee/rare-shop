import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Header.scss";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
const UserHeader = () => {
   const [badgeCounter, setBadgeCounter] = useState(0);
   const countOfOrders = useSelector((state) => state.cart.length);
   useEffect(() => {
      setBadgeCounter(countOfOrders);
   }, [countOfOrders]);
   return (
      <>
         <AppBar sx={{ background: "black" }} position="static">
            <Container maxWidth="xl">
               <Toolbar disableGutters>
                  <Box sx={{ flexGrow: 1, display: "flex" }}>
                     <Link to="/dashboard/products" className="link-style">
                        <Button
                           sx={{
                              my: 2,
                              display: "block",
                              color: "white",
                              fontSize: 20,
                           }}
                        >
                           مدیریت
                        </Button>
                     </Link>
                     <Link to="/checkout/cart" className="link-style">
                        <Badge
                           style={{
                              marginTop: 30,
                              marginRight: 17,
                           }}
                           color="secondary"
                           badgeContent={badgeCounter}
                           showZero
                        >
                           <ShoppingCartIcon />
                        </Badge>
                     </Link>
                  </Box>
                  <Link to="/" className="link-style">
                     <Typography
                        className="logo-shop"
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ marginTop: "auto", fontSize: 24 }}
                     >
                        Rare Shop
                     </Typography>
                  </Link>
               </Toolbar>
               <ul className="links-ul">
                  <li>
                     <Link to="/products/1">پوشاک</Link>
                  </li>
                  <li>
                     <Link to="/products/2">کیف و کفش</Link>
                  </li>
                  <li>
                     <Link to="/products/3">اکسسوری</Link>
                  </li>
               </ul>
            </Container>
         </AppBar>
      </>
   );
};
export default UserHeader;
