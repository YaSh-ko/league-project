import { createTheme } from '@mui/material';
export const lightTheme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#121A2C',
      contrastText: '#F4F4F4',
    },
    secondary: {
      main: '#F4F4F4',
      contrastText: '#000000',
    },
    background: {
      default: '#E9EAEC',
      paper: '#F4F4F4',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          overflowY: 'scroll',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderRadius: 8,
        },
      },
    },
  },
});
