import { ReactNode } from 'react';
import { StyleContainer } from './LayoutStyles';
import { Header } from 'components/Hedaer';
export function Layout({ children }: { children: ReactNode }) {
  return (
    <StyleContainer maxWidth="md">
      <Header />
      {children}
    </StyleContainer>
  );
}
