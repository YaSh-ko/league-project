import React from 'react';
import { Checkbox, Box, IconButton, backdropClasses } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { CheckboxProps } from './Checkbox.types';
const checkboxStyle = {
  width: '24px',
  aspectRatio: 1,
  border: '2px solid gray',
  borderRadius: '5px',
};

const activeCheckboxStyle = {
  ...checkboxStyle,
  clipPath: 'polygon(80% 0, 80% 45%, 100% 45%, 100% 100%, 0 100%, 0 0)',
  position: 'relative',
  overflow: 'visible',
  borderColor: 'green',
};
export function CustomCheckbox({ name, label, checked, onChange }: CheckboxProps) {
  return (
    <Checkbox
      name={name}
      checked={checked}
      onChange={onChange}
      icon={<Box sx={checkboxStyle}></Box>}
      checkedIcon={
        <Box sx={{ position: 'relative' }}>
          <Box sx={activeCheckboxStyle} />
          <CheckIcon sx={{ position: 'absolute', bottom: 3, left: 4, color: 'green' }} />
        </Box>
      }></Checkbox>
  );
}
