import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { BASE_URL } from "../../../core/constants";

export default function ProductCard({ data }) {
   return (
      <Card
         sx={{
            display: "flex",
            background: "#F4D7C0",
            borderRadius: 0,
            padding: 1,
         }}
      >
         <CardMedia
            component="img"
            sx={{ width: 200, height: 220 }}
            image={BASE_URL + data.image}
            alt="عکس کالا"
         />
         <Box>
            <CardContent sx={{ flex: "1 0 auto" }}>
               <Typography component="div" variant="h5">
                  {data.name}
               </Typography>
               <Typography
                  // mt={5}
                  variant="subtitle1"
                  color="blue"
                  component="div"
               >
                  {data.price.toLocaleString("fa")}
               </Typography>
            </CardContent>
         </Box>
      </Card>
   );
}
