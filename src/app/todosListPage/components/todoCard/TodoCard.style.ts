import styled from '@emotion/styled';
import { Box, ListItem, Theme } from '@mui/material';

const TodoItem = styled(ListItem)(({ theme }: { theme?: Theme }) => ({
  backgroundColor: theme?.palette.background.paper,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  borderRadius: 15,
  marginBottom: 16,
  padding: 16,
  transition: 'all 0.3s ease-in-out',
}));

const ImportantBadge = styled(Box)(({ theme }: { theme?: Theme }) => ({
  backgroundColor: theme?.palette.secondary.main,
  color: theme?.palette.primary.contrastText,
  padding: '2px 8px',
  borderRadius: 8,
  fontSize: '0.75rem',
  fontWeight: 500,
}));

export { TodoItem, ImportantBadge };
