import { PageContainerProps } from './PageContainer.types';
import { StyledContainer } from './PageContainerStyles';

export function PageContainer({ children }: PageContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}
