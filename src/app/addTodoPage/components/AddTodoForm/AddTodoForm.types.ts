import { CreateTodoDto } from 'types/todo.types';

export interface AddTodoFormProps {
  onSubmit: (data: CreateTodoDto) => void;
}
