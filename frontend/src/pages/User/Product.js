import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../core/constants";
import styled from "styled-components";
import cardBg from "../../assets/pic/productDetailsBg.jpeg";
import { useParams } from "react-router-dom";
import { ProductsApi } from "../../api/Products";
const Card = styled("div")``;
const CardBody = styled("div")`
   display: flex;
   justify-content: center;
   //  background-image: url(${cardBg})
`;
const Image = styled("img")`
   height: 450px;
   width: 400px;
   border-radius: 10px;
   transition: width 2s ease-out;
   &:hover {
      width: 430px;
   }
`;
const CardContent = styled("div")`
   height: 320px;
   width: 500px;
   background: black;
   margin-top: 50px;
   border-radius: 10px 0 0 10px;
`;
const Cardtext = styled("div")``;
const CardName = styled("h1")`
   color: #e6bc98;
   margin-right: 40px;
`;
const CardP = styled("p")`
   color: #f4d7c0;
   margin-right: 40px;
   font-size: 23px;
`;
const CardButton = styled("button")`
   background: #f4d7c0;
   border: none;
   margin-right: 350px;
   margin-top: 50px;
   padding: 5px 10px;
   border-radius: 2px;
`;
const Select = styled.select`
   width: 5%;
   height: 35px;
   background: white;
   color: gray;
   padding-left: 5px;
   font-size: 14px;
   border: none;
   margin-left: 10px;

   option {
      color: black;
      background: white;
      display: flex;
      white-space: pre;
      min-height: 20px;
      padding: 0px 2px 1px;
   }
`;
export default function ProductDetails(props) {
   let { id } = useParams();
   const [productDetail, setProductDetail] = useState({});
   const getDetails = async () => {
      const res = await ProductsApi.get(id);
      setProductDetail(res.data);
   };

   useEffect(() => {
      getDetails();
   }, [id]);

   return (
      <Card>
         <CardBody>
            <Image src={BASE_URL + productDetail.image} />
            <CardContent>
               <Cardtext>
                  <CardName>{productDetail.name}</CardName>
                  <CardP>{"دسته بندی: پوشاک > شلوار "}</CardP>
                  <CardP>
                     {"قیمت: "}
                     {productDetail.price?.toLocaleString("fa")}
                  </CardP>
               </Cardtext>
               {/* <Select>
               
               </Select> */}
               <CardButton>افزودن به سبد خرید</CardButton>
            </CardContent>
         </CardBody>
         <CardP style={{ color: "black" }}>{productDetail.description}</CardP>
      </Card>
   );
}
