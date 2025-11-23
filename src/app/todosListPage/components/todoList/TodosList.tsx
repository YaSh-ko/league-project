import { List } from '@mui/material';
import { TodoCard } from '../todoCard/TodoCard';
import { TodosListProps } from './TodosList.types';

export function TodosList({ todos, isFetching, onUpdateTodo }: TodosListProps) {
  if (todos.length === 0) {
    return <p>Задча пока нет!</p>;
  }

  // if (isFetching) {
  //   return <p>Обновляем...</p>;
  // }
  return (
    <List aria-label="Список задач">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} onUpdateTodo={onUpdateTodo} />
      ))}
    </List>
  );
}
