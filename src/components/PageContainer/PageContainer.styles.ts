import styled from '@emotion/styled';
import { Container, Theme } from '@mui/system';

export const StyledContainer = styled(Container)(({ theme }: { theme?: Theme }) => ({
  backgroundColor: theme?.palette.background.paper,
  paddingTop: theme?.spacing(4),
  paddingBottom: theme?.spacing(4),
  borderRadius: 15,
  boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)',
  maxWidth: 'md',
}));
