import { Container } from '@mui/system';
import { LayoutProps } from './Layout.types';
import { Header } from 'components/Hedaer/Header';
export function Layout({ children }: LayoutProps) {
  return (
    <Container sx={{ marginTop: '50px' }} maxWidth="md">
      <Header />
      {children}
    </Container>
  );
}
