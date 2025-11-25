import { ThemeProvider } from '@mui/material';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { lightTheme, darkTheme } from 'src/theme';

export interface ThemeContextType {
  mode: 'light' | 'dark';
  toggleTheme?: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleTheme: undefined,
});

const useThemeMode = () => useContext(ThemeContext);

function ThemeModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeModeProvider, useThemeMode };
