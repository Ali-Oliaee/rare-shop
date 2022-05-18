import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Icon } from "@mui/material";
import MyModal from "./Modal";
const Edit = ({ id }) => {
   const [selectedFile, setSelectedFile] = useState()
   const editHandler = (id) => {

   };
   const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0]);
      console.log(selectedFile);
   };
   return (
      <div>
         <Icon onClick={() => editHandler(id)}>
            {/* <EditIcon /> */}
         </Icon>
            <MyModal buttonName={<EditIcon /> }handleFileSelect={handleFileSelect} />
      </div>
   );
};

export default Edit;
