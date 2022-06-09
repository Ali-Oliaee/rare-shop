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
import SearchIcon from "@mui/icons-material/Search";
import Searchbox from "../SearchBox/SearchBox";

const UserHeader = () => {
   const [badgeCounter, setBadgeCounter] = useState(0);
   const [searchMode, setSearchMode] = useState(false);
   const countOfOrders = useSelector((state) => state.cart.cartItems.length);
   useEffect(() => {
      setBadgeCounter(countOfOrders);
   }, [countOfOrders, badgeCounter]);

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

                     <Button
                        onClick={() => setSearchMode(!searchMode)}
                        sx={{ color: "white", mt: 1 }}
                     >
                        <SearchIcon />
                     </Button>
                     {searchMode && <Searchbox />}
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
                     <Link to="/products/category/1">پوشاک</Link>
                  </li>
                  <li>
                     <Link to="/products/category/2">کیف و کفش</Link>
                  </li>
                  <li>
                     <Link to="/products/category/3">اکسسوری</Link>
                  </li>
               </ul>
               {/* <div>
                  <ul className="links-ul">
                     <li><Link to="/products/category/1">شلوار</Link></li>
                     <li><Link to="/products/category/1">تیشرت و شومیز</Link></li>
                     <li><Link to="/products/category/1">پیراهن</Link></li>
                  </ul>
                  <ul className="links-ul">
                     <li>کفش اسپرت</li>
                     <li>کفش مجلسی</li>
                     <li>کیف</li>
                  </ul>
                  <ul className="links-ul">
                     <li>عینک</li>
                     <li> گردنبند و دستبند</li>
                     <li>انگشتر و گوشواره</li>
                  </ul>
               </div> */}
            </Container>
         </AppBar>
      </>
   );
};
export default UserHeader;
