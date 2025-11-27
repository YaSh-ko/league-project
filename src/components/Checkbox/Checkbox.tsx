import React from 'react';
import { Checkbox } from '@mui/material';
import { Box } from '@mui/system';
import { CheckboxProps } from './Checkbox.types';
import { CheckboxBase, CheckIconStyled } from './Checkbox.style';
export function CustomCheckbox({ name, label, checked, onChange }: CheckboxProps) {
  return (
    <Checkbox
      inputProps={{
        'aria-label': label,
      }}
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
