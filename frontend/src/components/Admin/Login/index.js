import React from "react";
import { AdminApi } from "../../../api/AdminApi";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
// const useStyle = makeStyles({
//    root: {
//       padding: 80,
//       backgroundColor: "#a88d77d5",
//       "& input[type='text']::placeholder": {
//          paddingRight: "10px",
//       },
//    },
//    bodyStyle: {
//       width: "100vw",
//       height: "100vh",
//       paddingTop: 140,
//       backgroundImage: `url(${Image})`,
//       backgroundRepeat: "no-repeat",
//       backgroundSize: "cover",
//    },
// });

// const Login = () => {
//    const [user, setUser] = useState({ username: "", password: "" });
//    const classes = useStyle();
//    const navigate = useNavigate();

//    const handleSubmit = async (e) => {
//       e.preventDefault();
//       localStorage.removeItem('token')
//       let res = await AdminApi.login(user);
//       res && localStorage.setItem("token", res.data.token);
//       navigate("/dashboard/products");
//    };

//    return (
//       <form onSubmit={handleSubmit} className={classes.bodyStyle}>
//       <Grid className={classes.root} xs={5} m="auto" container spacing={2}>
//          <Typography textAlign="center" m='auto' variant="h4" xs={12}>
//          پنل مدیریت
//          </Typography>
//             <Grid item xs={12} m={"auto"}>
//                <TextField
//                   sx={{
//                      width: "100%",
//                      bgcolor: "neutral_light.main",
//                      border: "1px solid black",
//                   }}
//                   id="filled-username-input"
//                   label="نام کاربری"
//                   type="text"
//                   autoComplete="current-password"
//                   variant="filled"
//                   value={user.username}
//                   onChange={(e) =>
//                      setUser({ ...user, username: e.target.value })
//                   }
//                   required
//                />
//             </Grid>
//             <Grid item xs={12} m={"auto"}>
//                <TextField
//                   sx={{
//                      width: "100%",
//                      bgcolor: "neutral_light.main",
//                      border: "1px solid black",
//                   }}
//                   label="رمز عبور"
//                   id="filled-password-input"
//                   type="password"
//                   autoComplete="current-password"
//                   variant="filled"
//                   value={user.password}
//                   onChange={(e) =>
//                      setUser({ ...user, password: e.target.value })
//                   }
//                   required
//                />
//             </Grid>
//             <Grid item xs={12} m={"auto"}>
//                <Button
//                   type="submit"
//                   color="neutral_dark"
//                   sx={{ width: "100%", borderRadius: 0 }}
//                   variant="contained"
//                >
//                   ورود
//                </Button>
//             </Grid>
//          </Grid>
//       </form>
//    );
// };

// export default Login;

import styled from "styled-components";

const FiledInput = styled("input")`
   width: "100%",
   bgcolor: "neutral_light.main",
   border: "1px solid black",
`;
const SignupSchema = Yup.object({
   username: Yup.string()
      .min(3, "نام کاربری باید شامل حداقل ۳ کارکتر باشد.")
      .max(50, "نام شما باید شامل حداکثر ۵۰ کارکتر باشد!")
      .required("پر کردن این فیلد ضروری است!"),
   password: Yup.string()
      .min(7, "کلمه عبور شما باید شامل حداقل 8 کارکتر باشد!")
      .max(50, "کلمه عبور شما باید شامل حداکثر 50 کارکتر باشد!")
      .required("پر کردن این فیلد ضروری است!"),
});
const Login = () => {
   const navigate = useNavigate();
   const formik = useFormik({
      initialValues: {
         username: "",
         password: "",
      },
      validationSchema: Yup.object({
         username: Yup.string()
            .min(3, "نام کاربری باید شامل حداقل ۳ کارکتر باشد.")
            .max(50, "نام شما باید شامل حداکثر ۵۰ کارکتر باشد!")
            .required("پر کردن این فیلد ضروری است!"),
         password: Yup.string()
            .min(3, "کلمه عبور شما باید شامل حداقل 8 کارکتر باشد!")
            .max(50, "کلمه عبور شما باید شامل حداکثر 50 کارکتر باشد!")
            .required("پر کردن این فیلد ضروری است!"),
      }),

      onSubmit: async (values, { setSubmitting }) => {
          setSubmitting(false);
         console.log(values);
         localStorage.removeItem("token");
          let res = await AdminApi.login(values)
            .then((res) => {
               const token = res.data.token;
               localStorage.setItem("token", token);
               // dispatch(setUser(res.data.user));
               // toast.success("ورود با موفقیت انجام شد");
               navigate("/dashboard/products");
            })
            .catch((err) => {
               //          toast.error(err?.response?.data?.message);
               //          setButtonLoading(false);
            });
      },
   });
   return (
      <form onSubmit={formik.handleSubmit}>
         <FiledInput
            type="text"
            placeholder="نام کاربری"
            id="username-input"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
         />
         <p className="error">
            {formik.touched.username &&
               formik.errors.username &&
               formik.errors.username}
         </p>
         <FiledInput
            type="text"
            placeholder="رمز عبور"
            id="password-input"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
         />
         <p className="error">
            {formik.errors.password &&
               formik.touched.password &&
               formik.errors.password}
         </p>

         <button type="submit">ورود</button>
      </form>
   );
};

export default Login;
