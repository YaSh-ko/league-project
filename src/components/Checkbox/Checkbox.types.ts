import { ChangeEventHandler } from 'react';

export interface CheckboxProps {
  name?: string;
  label: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
