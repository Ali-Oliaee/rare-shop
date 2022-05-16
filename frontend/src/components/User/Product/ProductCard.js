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
            sx={{ width: 280, height: 220, borderRadius: 3 }}
            image={BASE_URL + data.image}
            alt="عکس کالا"
         />
         <Box>
            <CardContent
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: 180,
                  fontSize: 20,
               }}
            >
               <Typography alignSelf="start" component="div" variant="span">
                  {data.name}
               </Typography>
               <Typography mt={10} ml={2}  fontSize={20} variant="subtitle1" component="div">
                  { " تومان "+ data.price.toLocaleString("fa")}
               </Typography>
            </CardContent>
         </Box>
      </Card>
   );
}
