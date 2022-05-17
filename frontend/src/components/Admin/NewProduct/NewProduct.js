import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Edit from "@mui/icons-material/Edit";
import Editor from "../Editor";
const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 400,
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
};

export default function NewProductModal() {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return (
      <div>
         <Button onClick={handleOpen}>کالای جدید</Button>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <TextField value={""}></TextField>
               <Button variant="contained" component="label">
                  افزودن عکس
                  <input type="file" hidden />
               </Button>
               <TextField
                  label="نام کالا"
                  variant="standard"
                  color="warning"
                  focused
               />
               <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                     Age
                  </InputLabel>
                  <NativeSelect
                     defaultValue={30}
                     inputProps={{
                        name: "age",
                        id: "uncontrolled-native",
                     }}
                  >
                     <option value={10}>Ten</option>
                     <option value={20}>Twenty</option>
                     <option value={30}>Thirty</option>
                  </NativeSelect>
               </FormControl>
               <Editor />
            </Box>
         </Modal>
      </div>
   );
}
