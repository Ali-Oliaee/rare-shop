import { Route, Routes } from "react-router-dom";
import "./App.css";
import { theme } from "./core/Theme";
import Home from "./pages/Home";
import { ThemeProvider } from "@emotion/react";
function App() {
   return (
      <ThemeProvider theme={theme}>
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </ThemeProvider>
   );
}

export default App;
