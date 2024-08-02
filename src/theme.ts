import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans JP',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 960,
      xl: 1280,
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#ff1744',
    },
  },
});

export default theme;
