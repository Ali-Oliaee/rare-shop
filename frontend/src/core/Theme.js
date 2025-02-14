import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  direction: 'rtl',
  palette: {
    neutral_light: {
      main: '#fff',
      contrastText: '#000',
    },
    neutral_dark: {
      main: '#000',
      contrastText: '#fff',
    },
    light_nude: {
      main: '#F4D7C0',
      contrastText: '#000',
    },
    lighter_nude: {
      main: '#FCF1E6',
      contrastText: '#000',
    },
    medium_nude: {
      main: '#E6BC98',
      contrastText: '#000',
    },
    dirt_nude: {
      main: '#c09d7e',
      contrastText: '#000',
    },
    skin_nude: {
      main: '#BB906D',
      contrastText: '#000',
    },
    main_nude: {
      main: '#A16E4B',
      contrastText: '#000',
    },
    chocolatee: {
      main: '#533825',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'iran-sans',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 620,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})

export default theme
