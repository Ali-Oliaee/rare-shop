import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Icon } from "@mui/material";
import MyModal from "./Modal";
import { AdminApi } from "../../../api/AdminApi";
import { ProductsApi } from "../../../api/Products";
const Edit = ({ id }) => {
   const [selectedFile, setSelectedFile] = useState(null);
   const [updatedData, setUpdatedData] = useState({
      
   });
   const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0]);
   };

   const handleUploadFile = async () => {
      const fd = new FormData();
      fd.append("image", selectedFile);
      await AdminApi.upload(fd).then((res) => {
         setUpdatedData({
            ...updatedData,
            image: "/files/" + res.data.filename,
         });
      });
   };

   const updateData = () => {
      const apiCall = async () => {
         let res = await ProductsApi.patch(id,updatedData);
         console.log(res.data);
      };
      apiCall();
   };

   useEffect(() => {
      updateData();
   }, [selectedFile]);
   return (
      <div>
         <MyModal
            imageAdress={selectedFile?.filename}
            handleUploadFile={handleUploadFile}
            newProduct={updatedData}
            setNewProduct={setUpdatedData}
            buttonName={<EditIcon />}
            handleFileSelect={handleFileSelect}
            addProduct={updateData}
         />
      </div>
   );
};

export default Edit;
