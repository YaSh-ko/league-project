import { AlertColor } from '@mui/material';

export type SnackbarContextType = {
  showSnackbar: (message: string, type?: SnackbarType) => void;
};

export type SnackbarState = {
  open: boolean;
  message: string;
  type: SnackbarType;
  key: number;
};

export type SnackbarType = AlertColor;
