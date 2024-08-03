import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans JP, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Noto Sans JP';
          font-style: normal;
          font-weight: 400;
          src: local('Noto Sans JP Regular'), local('NotoSansJP-Regular'), url('/fonts/NotoSansJP-Regular.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Noto Sans JP';
          font-style: normal;
          font-weight: 700;
          src: local('Noto Sans JP Bold'), local('NotoSansJP-Bold'), url('/fonts/NotoSansJP-Bold.woff2') format('woff2');
        }
      `,
    },
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
