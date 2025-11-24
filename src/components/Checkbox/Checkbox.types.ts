import { ChangeEventHandler } from 'react';

export interface CheckboxProps {
  name?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
