import styled from '@emotion/styled';
import { ListItem } from '@mui/material';
import { Theme } from '@mui/material/styles';

const TodoItem = styled(ListItem)(({ theme }: { theme?: Theme }) => ({
  backgroundColor: theme?.palette.background.paper,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  borderRadius: 15,
  marginBottom: 16,
  padding: 16,
  transition: 'all 0.3s ease-in-out',
}));

export { TodoItem };
