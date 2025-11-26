import { Typography } from '@mui/material';
import { HiddenHeadingProps } from './HiddenHeading.types';

export function HiddenHeading({ children, id, level = 2 }: HiddenHeadingProps) {
  return (
    <Typography
      component={`h${level}`}
      id={id}
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        margin: '-1px',
        border: 0,
        padding: 0,
        whiteSpace: 'nowrap',
        clipPath: 'inset(100%)',
        clip: 'rect(0 0 0 0)',
        overflow: 'hidden',
      }}>
      {children}
    </Typography>
  );
}
