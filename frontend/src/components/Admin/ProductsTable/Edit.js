import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Icon } from "@mui/material";
import MyModal from "./Modal";
import { AdminApi } from "../../../api/AdminApi";
import { ProductsApi } from "../../../api/Products";
const Edit = ({ id }) => {
   const [selectedFile, setSelectedFile] = useState(null);
   const [updatedData, setUpdatedData] = useState([]);

   const imageUpdating = async () => {
      const fd = new FormData();
      fd.append("image", selectedFile);
      const res = await AdminApi.upload(fd);
   };

   const handleUpdatedData = (event) => {
      setSelectedFile(event.target.files[0]);
   };
   const updateData = async() => {
      if(selectedFile) {
         const fd = new FormData();
         fd.append("data", updatedData)
          await ProductsApi.patch(id,null, fd);
      }else{
         await ProductsApi.patch(id,updateData);
      }

   }
   useEffect(() => {
      imageUpdating()
   }, [selectedFile]);
   return (
      <div>
         <MyModal
            imageAdress={selectedFile?.filename}
            buttonName={<EditIcon />}
            handleUpdatedData={handleUpdatedData}
            updatedData={updatedData}
            setUpdatedData={setUpdatedData}
            updateData={updateData}
         />
      </div>
   );
};

export default Edit;
