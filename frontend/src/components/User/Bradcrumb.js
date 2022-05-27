import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
   event.preventDefault();
   console.info("You clicked a breadcrumb.");
}

export default function Breadcrumb({ category }) {
 
   return (
      <div role="presentation" onClick={handleClick}>
         <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
               همه کالا ها
            </Link>
            <Link
               underline="hover"
               color="inherit"
               href="/material-ui/getting-started/installation/"
            >
               {}
               {category}
            </Link>
            {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
         </Breadcrumbs>
      </div>
   );
}
