import { Box, styled, ToggleButton } from '@mui/material';

export const ResponsiveToggleButton = styled(ToggleButton)(({ theme }) => ({
  flex: '1 1 auto',
  minWidth: 'auto',
  [theme.breakpoints.down('md')]: {
    flex: '1 1 auto',
  },
  [theme.breakpoints.down('sm')]: {
    flex: '1 1 50px',
  },
}));
