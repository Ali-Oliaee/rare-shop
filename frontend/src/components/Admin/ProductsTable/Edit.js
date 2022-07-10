import React, { useEffect, useState, useRef } from "react";
import EditIcon from "@mui/icons-material/Edit";
import MyModal from "./Modal";
import { AdminApi } from "../../../api/AdminApi";
import { ProductsApi } from "../../../api/Products";
const Edit = ({ row }) => {
   const [updatedData, setUpdatedData] = useState({});
   const imgRef = useRef();
   const preview = (file) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
         if (imgRef && imgRef.current) imgRef.current.src = e.target?.result;
      };
      fileReader.readAsDataURL(file);
   };

   const handleUploadFile = async (e) => {
      let files = e.target.files;
       preview(files[0]);
      let temp = [];
      Object.values(files).map((item) => {
         const fd = new FormData();
         fd.append("image", item);
         let tempRes = AdminApi.upload(fd);
         temp.push(tempRes);
      });
      const arrayResponse = await Promise.all(temp);
      setUpdatedData({
         ...updatedData,
         image: `/files/${arrayResponse[0].data.filename}`,
         images: arrayResponse.map((i) => `/files/${i.data.filename}`),
      });
   };
   // setUpdatedData({ ...updatedData, image: "/files/" + res.data.filename });
   const updateProduct = () => {
      const apiCall = async () => {
        await ProductsApi.patch(row.id,updatedData);
      };
      apiCall();
   };
   return (
      <div>
         <MyModal
            row={row}
            handleUploadFile={handleUploadFile}
            newProduct={updatedData}
            buttonName={<EditIcon sx={{color:"#6d23b6"}}/>}
            addProduct={updateProduct}
            setNewProduct={setUpdatedData}
            imgRef={imgRef}
            
         />
      </div>
   );
};

export default Edit;
