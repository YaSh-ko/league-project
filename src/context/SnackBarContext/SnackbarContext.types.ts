export type SnackbarContextType = {
  showSnackbar: (message: string) => void;
};

export type SnackbarState = {
  open: boolean;
  message: string;
  key: number;
};
