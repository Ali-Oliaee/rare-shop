import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../core/constants";
import styled from "styled-components";
import cardBg from "../../assets/pic/productDetailsBg.jpeg";
import { useParams } from "react-router-dom";
import { ProductsApi } from "../../api/Products";
import Imagegallery from "../../components/User/ImageGallery";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
const Card = styled("div")``;
const CardBody = styled("div")`
   display: flex;
   justify-content: center;
   //  background-image: url(${cardBg})
`;
const Image = styled("img")`
   height: 450px;
   width: 370px;
   border-radius: 10px;
   transition: width 2s ease-out;
   &:hover {
      width: 400px;
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
   cursor: pointer;
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
const ImageListStyled = styled(ImageList)`
   margin: 10px;
   width: 100px;
   height: 300px;
`;
const ImageListItemStyled = styled(ImageListItem)`
   margin: 10px;
`;
const Gallery = styled("div")`
   position: "reletive";
   top: 50%;
   left: 50%;
   transform: translate(-30%, -100%);
`;
export default function ProductDetails(props) {
   let { id } = useParams();
   const [productDetail, setProductDetail] = useState({});
   const [images, setImages] = useState([]);
   const [show, setShow] = useState(false);

   const getDetails = async () => {
      const res = await ProductsApi.get(id);
      setProductDetail(res.data);
      const gallery = (res.data?.images)
         .split("'")
         .slice(1, -1)
         .filter((el) => el !== ",");
      setImages(gallery);
   };
   const handleShow = () => {
      setShow(!show);
   };
   useEffect(() => {
      getDetails();
   }, [id]);

   return (
      <>
         <Card
            style={{ zIndex: 5000, background: show ? "rgba(1,1,1,0.5)" : "" }}
         >
            <CardBody>
               <ImageListStyled onClick={handleShow} cols={1} rowHeight={100}>
                  {images?.map((item) => (
                     <ImageListItemStyled key={item + 1}>
                        <img
                           src={BASE_URL + `${item}`}
                           srcSet={
                              BASE_URL +
                              `${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`
                           }
                           alt={item}
                           loading="lazy"
                        />
                     </ImageListItemStyled>
                  ))}
               </ImageListStyled>
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
                  {productDetail.inventory ? (
                     <CardButton>افزودن به سبد خرید</CardButton>
                  ) : (
                     <CardButton disabled>موجود نیست</CardButton>
                  )}
               </CardContent>
            </CardBody>
            <CardP style={{ color: "black" }}>
               {productDetail.description}
            </CardP>
         </Card>

         {show && (
            <Gallery>
               {" "}
               <Imagegallery images={images} />
            </Gallery>
         )}
      </>
   );
}
