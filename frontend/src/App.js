import { Route, Routes } from "react-router-dom";
import "./App.css";
import { theme } from "./core/Theme";
import { ThemeProvider } from "@emotion/react";
import { routes } from "./route/Routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
   return (
      <ThemeProvider theme={theme}>
<<<<<<< HEAD
         <Provider store={store}>
            <Routes>
               {routes.map((rout) => (
                  <Route path={rout.path} element={rout.component} />
               ))}
            </Routes>
         </Provider>
=======
         <Routes>
            {routes.map((rout, index) => (
               <Route key={rout.path} path={rout.path} element={rout.component} />
            ))}
         </Routes>
>>>>>>> feat/admin-table
      </ThemeProvider>
   );
}

export default App;
