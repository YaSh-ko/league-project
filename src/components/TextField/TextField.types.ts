import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

export interface TextFieldProps {
  name?: string;
  label?: string;
  placeholder?: string;
  inputType?: HTMLInputTypeAttribute;
  value?: string | number;
  color?: 'primary' | 'secondary';
  onChange?: ChangeEventHandler<HTMLInputElement>;
  errorText?: string;
}
