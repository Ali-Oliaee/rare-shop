import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { makeStyles } from "@mui/styles";
import Editor from "./Editor";
const style = {};
const useStyle = makeStyles({
   root: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 500,
      height: 500,
      background: "white",
      border: "2px solid #000",
      boxShadow: 24,
      padding: 40,
      "& .MuiFormControl-root": {
         width: "100%",
         marginTop: 20,
         marginBottom: 20,
      },
      "& .MuiButton-root": {
         background: "black",
         marginBottom: 30,
      },
   },
   buttonStyle: {
      marginRight: "70rem",
      marginTop: "2rem",
   },
   fileButton: {
      float: "left",
      marginBottom: 20,
   },
});
const MyModal = (props) => {
   const {
      newProduct,
      setNewProduct,
      buttonName,
      handleUploadFile,
      handleFileSelect,
      imageAdress,
      addProduct
   } = props
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const classes = useStyle();

   const saveClickHandler = () => {
      handleClose()
      setNewProduct()
   }
   return (
      <div>
         <Button style={{ background: "black", marginBottom: 20 }} onClick={handleOpen}>
            {buttonName}
         </Button>

         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box className={classes.root}>
              <input value={imageAdress}/>
               <button onClick={handleUploadFile}>upload</button>
               <Button
                  className={classes.fileButton}
                  variant="contained"
                  component="label"
               >
                  افزودن عکس
                  <input type="file" hidden onChange={handleFileSelect} />
               </Button>
               <TextField
                  className={classes.inputName}
                  label="نام کالا"
                  name="name"
                  variant="standard"
                  value={newProduct?.name}
                  // focused
                  onChange={(e) => setNewProduct({...newProduct, [e.target.name]:e.target.value})}
               />
               <FormControl
                  name="categoryId"
                  fullWidth
                  value={newProduct?.categoryId}
                  onChange={(e) =>
                     setNewProduct({
                        ...newProduct,
                        [e.target.name]: e.target.value,
                     })
                  }
               >
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                     دسته بندی
                  </InputLabel>
                  <NativeSelect
                     defaultValue={1}
                     inputProps={{
                        name: "categoryId",
                        id: "uncontrolled-native",
                     }}
                  >
                     <option></option>
                     <option value={1}>پوشاک</option>
                     <option value={2}>کیف و کفش </option>
                     <option value={3}>اکسسوری</option>
                  </NativeSelect>
               </FormControl>
               <Editor />
               <Button onClick={saveClickHandler} variant="contained" component="label">
                  ذخیره
               </Button>
            </Box>
         </Modal>
      </div>
   );
};

export default MyModal;
