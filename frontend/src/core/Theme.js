import { createTheme } from "@mui/material/styles";
import IRANSansWeb_Black from "../assets/fonts/IRANSansWeb_Black.ttf"
export let theme = createTheme({
   direction: 'rtl',
   palette: {
      // #FBF8CC,
      // #FCF6BD
      // #e9ff70,
      // #deff0a
      // #fbff12,
      // #ffe45e,
      // #ffea00, 
      // #FDE4CF,
      // #FFCFD2,
      // #F1C0E8,
      // #E4C1F9,
      // #CFBAF0,
      // #bdb2ff,
      // #9381ff,
      // #6d23b6,
      // #FF99C8,
      // #ff5d8f,
      // #B9FBC0,
      // #98F5E1,
      // #8EECF5,
      // #90DBF4,
      // #A3C4F3,
      // #147df5
   

      neutral_light: {
         main: "#fff",
         contrastText: "#000",
      },
      neutral_dark: {
         main: "#000",
         contrastText: "#fff",
      },
      light_nude: {
         main: "#F4D7C0",
         contrastText: "#000",
      },
      lighter_nude: {
         main: "#FCF1E6",
         contrastText: "#000",
      },
      medium_nude: {
         main: "#E6BC98",
         contrastText: "#000",
      },
      dirt_nude: {
         main: "#c09d7e",
         contrastText: "#000",
      },
      skin_nude: {
         main: "#BB906D",
         contrastText: "#000",
      },
      main_nude: {
         main: "#A16E4B",
         contrastText: "#000",
      },
      chocolatee: {
         main: "#533825",
         contrastText: "#fff",
      },
   },
   typography: {
      fontFamily: 'iran-sans'
    }
 
});
