import { AppBar, styled, Toolbar } from '@mui/material';

const StyledAppBar = styled(AppBar)`
  margin-bottom: 40px;
  padding: 0;
  background: transparent;
  box-shadow: none;

  .MuiToolbar-root {
    padding-left: 0;
    padding-right: 0;
  }
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export { StyledAppBar, StyledToolbar };
