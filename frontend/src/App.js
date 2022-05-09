import { Route, Routes } from "react-router-dom";
import "./App.css";
import { theme } from "./core/Theme";
import { ThemeProvider } from "@emotion/react";
import { routes } from "./route/Routes";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { store } from "./redux/store";
=======
import WithAuth from "./route/WithAuth";
>>>>>>> feat/orders
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
>>>>>>> feat/admin-table
      </ThemeProvider>
   );
}

export default App;
