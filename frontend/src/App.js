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
         <Provider store={store}>
            <Routes>
               {routes.map((rout) => (
                  <Route path={rout.path} element={rout.component} />
               ))}
            </Routes>
         </Provider>
      </ThemeProvider>
   );
}

export default App;
