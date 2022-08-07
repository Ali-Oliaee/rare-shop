import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
   root: {
      "& .MuiButton-root": {
         backgroundColor: "#bdb2ff",
         marginRight: "8rem",
         marginBottom: "10px",
         padding: "7px 9px",
         borderRadius: 0,
         color: "black"
      },
      "& .MuiButton-root:hover": {
         backgroundColor: "#bdb2ff",
         boxShadow: `-5px 5px 2px #FF99C8`
      },
   },
});
export default function ProductCard({ data }) {
   const classes = useStyle();
   return (
      <Link to={`/product/${data.id}`} className="link-style">
         <Card
            className={classes.root}
            sx={{
               // display: "flex",
               width: 270,
               background: "#FAF59A",
               border: "none",
               padding: 1,
               borderRadius: 4,
            }}
         >
            <CardMedia
               component="img"
               sx={{ width: 250, height: 250, borderRadius: 4 }}
               image={process.env.BASE_URL + data.image}
               alt="عکس کالا"
            />
            <Box>
               <CardContent
                  sx={{
                     display: "flex",
                     flexDirection: "column",
                     // width: 180,
                     fontSize: 20,
                  }}
               >
                  <Typography alignSelf="start" component="div" variant="span">
                     {data.name}
                  </Typography>
                  <Typography
                     mt={2}
                     ml={2}
                     fontSize={18}
                     variant="subtitle1"
                     component="div"
                  >
                     {`قیمت: ${data.price.toLocaleString("fa")} تومان`}
                  </Typography>
               </CardContent>
               <Button>افزودن به سبد خرید</Button>
            </Box>
         </Card>
      </Link>
   );
}
