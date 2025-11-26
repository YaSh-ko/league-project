import { ReactNode } from 'react';
import { Box } from '@mui/system';
import { StyleContainer } from './Layout.style';
import { Header } from 'components/Hedaer';
export function Layout({ children }: { children: ReactNode }) {
  return (
    <StyleContainer maxWidth="md">
      <Header />
      <Box component="main">{children}</Box>
    </StyleContainer>
  );
}
