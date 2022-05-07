import { TextField, Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Image from "../../../assets/pic/nudewallpaper.jpeg"
const useStyle = makeStyles({
   root: {
      padding: 80,
      backgroundColor: "#a88d77d5",
   },
   bodyStyle:{
     width:"100vw",
     height:"100vh",
     backgroundImage: `url(${Image})`,
     backgroundRepeat: "no-repeat",
     backgroundSize:"cover"
   }
});
const Login = () => {
   const classes = useStyle();
   return (
      <div className={classes.bodyStyle}>
         <Typography textAlign="center"  pt={5} variant="h2" xs={12}>
            خوش آمدید
         </Typography>
         <Grid className={classes.root} xs={5} m="auto"  container spacing={2}>
            <Grid item xs={12} m={"auto"}>
               <TextField
                  sx={{ width: "100%", bgcolor:"neutral_light.main", border:"1px solid black"  }}
                  id="filled-password-input"
                  label="username"
                  type="text"
                  autoComplete="current-password"
                  variant="filled"
               />
            </Grid>
            <Grid item xs={12} m={"auto"}>
               <TextField
                  sx={{ width: "100%", bgcolor:"neutral_light.main", border:"1px solid black" }}
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
               />
            </Grid>
            <Grid item xs={12} m={"auto"}>
               <Button
                  color="neutral_dark"
                  sx={{ width: "100%", borderRadius: 0 }}
                  variant="contained"
               >
                  Login
               </Button>
            </Grid>
         </Grid>
      </div>
   );
};

export default Login;
