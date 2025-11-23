import { Todo, UpdateTodoDto } from 'types/todo.types';

export interface TodoCardProps {
  todo: Todo;
  onUpdateTodo: (id: number, todo: UpdateTodoDto) => void;
}
