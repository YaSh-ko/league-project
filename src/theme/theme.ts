import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#121A2C',
      contrastText: '#F4F4F4',
    },
    secondary: {
      main: '#FFC107',
    },
    success: {
      main: '#4caf50',
    },
    error: {
      main: '#E53935',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#121A2C',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          overflowY: 'scroll',
        },
        body: {
          backgroundColor: '#f5f5f5',
        },
      },
    },

    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          border: '1px solid',
          borderColor: theme.palette.divider,
          borderRadius: theme.shape.borderRadius,
          textTransform: 'none',
          boxShadow: '0 0px 4px rgba(0,0,0,0.1)',
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          },
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        }),
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          padding: '8px 16px',
          transition: 'all 0.2s ease-in-out',
        },
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            borderRadius: 25,
            backgroundColor: '#121A2C',
            color: '#F4F4F4',
            boxShadow: '0 2px 4px rgba(25, 118, 210, 0.2)',
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            borderRadius: 8,
            backgroundColor: '#F4F4F4', // ✅ исправил опечатку bacgriundColor → backgroundColor
            color: '#121A2C',
          },
        },
      ],
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            transition: 'all 0.2s ease-in-out',
            boxShadow: '0 0px 4px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
  },
});
