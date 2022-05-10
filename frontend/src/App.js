import { Route, Routes } from "react-router-dom";
import "./App.css";
import { theme } from "./core/Theme";
import { ThemeProvider } from "@emotion/react";
import { routes } from "./route/Routes";
import WithAuth from "./route/WithAuth";

function App() {
   return (
      <ThemeProvider theme={theme}>

         <Routes>
            {routes.map((rout, index) => {
               if (rout.isPrivate) {
                 return WithAuth(rout.component);
                 
               } else {
                 return <Route
                     key={rout.path}
                     path={rout.path}
                     element={rout.component}
                  />;
               }
            })}
         </Routes>

      </ThemeProvider>
   );
}

export default App;
