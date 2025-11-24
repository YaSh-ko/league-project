import { Todo, UpdateTodoDto } from 'types/todo.types';

export interface TodosListProps {
  todos: Todo[];
  isFetching: boolean;
  onUpdateTodo: (id: number, todo: UpdateTodoDto) => void;
  onDeleteTodo: (id: number) => void;
}
