import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Icon } from "@mui/material";
import MyModal from "./Modal";
import { AdminApi } from "../../../api/AdminApi";
const Edit = ({ id }) => {
   const [selectedFile, setSelectedFile] = useState();
   const [updatedData, setUpdatedData] = useState([]);

   const imageUpdating = async () => {
      const fd = new FormData();
      fd.append("image", selectedFile);
      const res = await AdminApi.upload(fd);
   };

   const handleUpdatedData = (event) => {
      setSelectedFile(event.target.files[0]);
   };
   // const updateData = () => {
   //    const res = await AdminApi.upload(fd);
  
   // }
   useEffect(() => {
      imageUpdating()
   }, [selectedFile]);
   return (
      <div>
         <MyModal
            buttonName={<EditIcon />}
            handleUpdatedData={handleUpdatedData}
            updatedData={updatedData}
            setUpdatedData={setUpdatedData}
         />
      </div>
   );
};

export default Edit;
