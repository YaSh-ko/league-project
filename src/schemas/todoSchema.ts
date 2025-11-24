import { boolean, object, string } from 'yup';
import type { InferType } from 'yup';

export const todoSchema = object({
  name: string().required().min(4, 'Минимум 4 символа').max(100, 'Максимум 100 символов'),
  info: string().max(300, 'Максимум 300 символов'),
  isImportant: boolean().default(false),
});

export type TodoFormData = InferType<typeof todoSchema>;
