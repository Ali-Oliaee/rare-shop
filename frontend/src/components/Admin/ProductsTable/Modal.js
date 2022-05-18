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
      "& .MuiFormControl-root":{
         width:"100%",
         marginTop:20,
         marginBottom:20,
      }
   },
   buttonStyle: {
      marginRight: "70rem",
      marginTop: "2rem",
   },
   fileButton:{
      float: "left",
      marginBottom:20,
   },
  
});
const MyModal = (props) => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const classes = useStyle();
   return (
      <div>
         <Button className={classes.buttonStyle} onClick={handleOpen}>
            {props.buttonName}
         </Button>

         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box className={classes.root}>
               <TextField value={""}></TextField>
               {/* <button onClick={handleUploadFile}>upload</button> */}
               <Button className={classes.fileButton} variant="contained" component="label">
                  افزودن عکس
                  <input type="file" hidden onChange={props.handleUpdatedData} />
               </Button>
               <TextField
               className={classes.inputName}
                  label="نام کالا"
                  variant="standard"
                  focused
               />
               <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                     دسته بندی
                  </InputLabel>
                  <NativeSelect
                     defaultValue={30}
                     inputProps={{
                        name: "age",
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
            <Button onClick={props.updateData} variant="contained" component="label">
             ذخیره
            </Button>
            </Box>
         </Modal>
      </div>
   );
};

export default MyModal;
