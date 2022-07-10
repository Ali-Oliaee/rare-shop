import React from "react";
import styled from "styled-components";
const MyFooter = styled("footer")`
   width: 100%;
   height: 30vh;
   background: #90dbf4;
`;
const MyUl = styled("ul")`
   margin: 0;
   list-style: none;
   padding: 2rem;
`;
const MyLi = styled("li")`
   text-decoration: none;
   color: #fbff12;
   font-size: 18px;
`;
const Footer = () => {
   return (
      <MyFooter>
         <MyUl>
            <MyLi>About Us</MyLi>
            <MyLi>Contact Us</MyLi>
            <MyLi>Stores</MyLi>
         </MyUl>
      </MyFooter>
   );
};

export default Footer;
