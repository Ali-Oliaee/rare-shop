import { TextField, Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Image from "../../../assets/pic/nudewallpaper.jpeg";
const useStyle = makeStyles({
   root: {
      padding: 80,
      backgroundColor: "#a88d77d5",
   },
   bodyStyle: {
      width: "100vw",
      height: "100vh",
      backgroundImage: `url(${Image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
   },
});

const Login = () => {
   const classes = useStyle();
   return (
      <div className={classes.bodyStyle}>
         <Typography textAlign="center" pt={5} variant="h2" xs={12}>
            خوش آمدید
         </Typography>
         <Grid className={classes.root} xs={5} m="auto" container spacing={2}>
            <Grid item xs={12} m={"auto"}>
               <TextField
                  sx={{
                     width: "100%",
                     bgcolor: "neutral_light.main",
                     border: "1px solid black",
                  }}
                  id="filled-password-input"
                  label="username"
                  type="text"
                  autoComplete="current-password"
                  variant="filled"
               />
            </Grid>
            <Grid item xs={12} m={"auto"}>
               <TextField
                  sx={{
                     width: "100%",
                     bgcolor: "neutral_light.main",
                     border: "1px solid black",
                  }}
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

// import React from "react";
// import { useFormik } from "formik";

// const SignupForm = () => {
//    const formik = useFormik({
//       initialValues: {
//          firstName: "",
//          lastName: "",
//          email: "",
//       },
//       onSubmit: (values) => {
//          alert(JSON.stringify(values, null, 2));
//       },
//    });
//    return (
//       <form onSubmit={formik.handleSubmit}>
//          {/* <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.firstName}
//       /> */}
//          <TextField
//             sx={{
//                width: "100%",
//                bgcolor: "neutral_light.main",
//                border: "1px solid black",
//             }}
//             id="filled-password-input"
//             label="username"
//             type="text"
//             autoComplete="current-password"
//             variant="filled"
//          />
//          <label htmlFor="lastName">Last Name</label>
//          <input
//             id="lastName"
//             name="lastName"
//             type="text"
//             onChange={formik.handleChange}
//             value={formik.values.lastName}
//          />
//          <label htmlFor="email">Email Address</label>
//          <input
//             id="email"
//             name="email"
//             type="email"
//             onChange={formik.handleChange}
//             value={formik.values.email}
//          />
//          <button type="submit">Submit</button>
//       </form>
//    );
// };
//  const register = (e) => {
//    e.preventDefault();
//    setButtonLoading(true);

//    let { phone, password } = formState;
//    if (!phone || !password) {
//       return alert("لطفا اطلاعات را کامل وارد کنید.");
//    }

//    if (password.length < 8) {
//       return alert("رمز عبور باید حداقل 8 رقم باشد.");
//    }

//    AdminApi.login({
//       phone: phone,
//       password: password,
//    })
//       .then((res) => {
//          const token = res.headers["x-auth-token"];
//          localStorage.setItem(TOKEN_LOCAL_KEY, token);
//          dispatch(setUser(res.data.user));
//          toast.success("ورود با موفقیت انجام شد");
//          setButtonLoading(false);
//       })
//       .catch((err) => {
//          toast.error(err?.response?.data?.message);
//          setButtonLoading(false);
//       });
// };