import { Route, Routes } from "react-router-dom";
import "./App.css";
import { theme } from "./core/Theme";
import { ThemeProvider } from "@emotion/react";
import { routes } from "./route/Routes";
import WithAuth from "./route/WithAuth";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

// Create rtl cache
const cacheRtl = createCache({
   key: "muirtl",
   stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
   return (
      <CacheProvider value={cacheRtl}>
         <ThemeProvider theme={theme}>
            <Routes>
               {routes.map((rout, index) => {
                  if (rout.isPrivate) {
                     return (
                        <Route
                           path={rout.path}
                           element={WithAuth(rout.component)}
                        />
                     );
                  } else {
                     return (
                        <Route
                           key={rout.path}
                           path={rout.path}
                           element={rout.component}
                        />
                     );
                  }
               })}
            </Routes>
         </ThemeProvider>
      </CacheProvider>
   );
}

export default App;
