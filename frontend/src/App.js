import { Route, Routes } from "react-router-dom";
import "./App.css";
import { theme } from "./core/Theme";
import Home from "./pages/User/Home";
import { ThemeProvider } from "@emotion/react";
import { routes } from "./route/Routes";
function App() {
   return (
      <ThemeProvider theme={theme}>
         <Routes>
            {routes.map((rout, index) => (
               <Route path={rout.path} element={rout.component} />
            ))}
         </Routes>
      </ThemeProvider>
   );
}

export default App;
