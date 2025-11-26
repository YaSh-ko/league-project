import { createTheme, PaletteMode, responsiveFontSizes } from '@mui/material';

export const createAppTheme = (mode: PaletteMode) => {
  // Сначала создаем базовую тему
  const theme = createTheme({
    typography: {
      fontFamily: '"Montserrat", sans-serif',
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
      h1: { fontSize: 48, fontWeight: 800, '@media (max-width:400px)': { fontSize: 26 } },
      h2: { fontSize: 32, fontWeight: 600 },
      h3: { fontSize: 24, fontWeight: 600 },
      h4: { fontSize: 22, fontWeight: 500 },
      h5: { fontSize: 20, fontWeight: 500 },
      h6: { fontSize: 16, fontWeight: 500 },
    },

    shape: { borderRadius: 8 },

    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // LIGHT
            primary: { main: '#121A2C', contrastText: '#F4F4F4' },
            secondary: { main: '#FFC107' },
            background: { default: '#f5f5f5', paper: '#ffffff' },
            text: { primary: '#121A2C' },
          }
        : {
            // DARK
            primary: { main: '#FFC107' },
            background: { default: '#121212', paper: '#1E1E1E' },
            text: { primary: '#ffffff' },
          }),
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: { overflowY: 'scroll' },
          body: {
            backgroundColor: mode === 'light' ? '#f5f5f5' : '#121212',
          },
        },
      },

      MuiTextField: {
        variants: [
          {
            props: { size: 'small' },
            style: {
              '& .MuiInputBase-root': {
                height: '50px',
              },
            },
          },
        ],
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
            maxHeight: '50px',
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
            style: ({ theme }) => ({
              borderRadius: 25,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }),
          },
        ],
      },
    },
  });

  // Затем делаем шрифты адаптивными
  return responsiveFontSizes(theme);
};

export const lightTheme = createAppTheme('light');
export const darkTheme = createAppTheme('dark');
