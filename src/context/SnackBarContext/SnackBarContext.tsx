import { createContext, useContext, useState, ReactNode } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { SnackbarContextType, SnackbarState, SnackbarType } from './SnackbarContext.types';

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: '',
    type: 'info',
    key: 0,
  });

  const showSnackbar = (message: string, type: SnackbarType = 'info') => {
    hideSnackbar();
    setTimeout(() => setSnackbar({ open: true, message, type, key: Date.now() }), 50);
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
        message={snackbar.message}>
        <Alert
          severity={snackbar.type} // ← используем тип для цвета
          onClose={hideSnackbar}
          variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
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
