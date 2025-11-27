import { boolean, object, string } from 'yup';

export const todoCreateSchema = object({
  name: string().required('Поле имя обязательно').min(4, 'Минимум 4 символа').max(50, 'Максимум 50 символов'),
  info: string().min(4, 'Минимум 4 символа').max(200, 'Максимум 200 символов'),
  isImportant: boolean().default(false),
});

export const todoUpdateSchema = todoCreateSchema.shape({
  isCompleted: boolean(),
});
