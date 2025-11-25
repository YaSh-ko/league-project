import { createContext, useContext, useState, ReactNode } from 'react';
import { Snackbar } from '@mui/material';
import { SnackbarContextType, SnackbarState } from './SnackbarContext.types';

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: '',
    key: 0,
  });

  const showSnackbar = (message: string) => {
    if (snackbar) {
      hideSnackbar();
      setTimeout(() => setSnackbar({ open: true, message, key: Date.now() }), 50);
    } else {
      setSnackbar({ open: true, message, key: Date.now() });
    }
  };

  const hideSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        key={snackbar.key}
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={hideSnackbar}
        message={snackbar.message}></Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};
