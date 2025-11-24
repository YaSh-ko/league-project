import React from 'react';
import { TextField } from '@mui/material';

import { TextFieldProps } from './TextField.types';

const textFiledStyle = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'secondary.main',
    borderRadius: 2,
    boxShadow: '0 0px 4px rgba(0,0,0,0.1)',
  },
};

export function CustomTextField({
  name,
  label,
  placeholder,
  inputType,
  value,
  color = 'primary',
  onChange,
  errorText,
}: TextFieldProps) {
  return (
    <TextField
      name={name}
      variant="outlined"
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      color={color === 'primary' ? 'primary' : 'secondary'}
      sx={textFiledStyle}></TextField>
  );
}
