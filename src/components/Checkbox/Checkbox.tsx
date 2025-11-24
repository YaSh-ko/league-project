import React from 'react';
import { Checkbox } from '@mui/material';
import { Box } from '@mui/system';
import { CheckboxProps } from './Checkbox.types';
import { CheckboxBase, CheckIconStyled } from './CheckboxStyle';
export function CustomCheckbox({ name, checked, onChange }: CheckboxProps) {
  console.log(checked);
  return (
    <Checkbox
      name={name}
      checked={checked}
      onChange={onChange}
      icon={<CheckboxBase />}
      checkedIcon={
        <Box overflow="visible">
          <CheckboxBase checked />
          <CheckIconStyled checked />
        </Box>
      }
    />
  );
}
