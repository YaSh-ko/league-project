import { ReactNode } from 'react';

export interface HiddenHeadingProps {
  children: ReactNode;
  id?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}
