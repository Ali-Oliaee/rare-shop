import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Icon } from "@mui/material";
import { ProductsApi } from "../../../api/Products";
const Delete = ({ id, onFinish }) => {
   const deleteHandler = async (id) => {
     await ProductsApi.delete(id);
     onFinish()
   };
   return (
      <div>
         <Icon onClick={() => deleteHandler(id)}>
            <DeleteIcon />
         </Icon>
      </div>
   );
};

export default Delete;
