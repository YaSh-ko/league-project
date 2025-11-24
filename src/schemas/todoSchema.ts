import { boolean, object, string } from 'yup';

export const todoCreateSchema = object({
  name: string().required().min(4, 'Минимум 4 символа').max(100, 'Максимум 100 символов'),
  info: string().max(300, 'Максимум 300 символов'),
  isImportant: boolean().default(false),
});

export const todoUpdateSchema = todoCreateSchema.shape({
  isCompleted: boolean(),
});
