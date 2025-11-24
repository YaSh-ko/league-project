import { List } from '@mui/material';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useEffect, useState } from 'react';
import { TodoCard } from '../todoCard/TodoCard';
import { TodosListProps } from './TodosList.types';
import { useDeleteTodoMutation } from 'api/todosApi';
export function TodosList({ todos, isFetching, onUpdateTodo, onDeleteTodo }: TodosListProps) {
  const [debounceFetching, setDebounceFetching] = useState(false);
  const [parentAnimate] = useAutoAnimate({
    duration: 400, // ← увеличил время анимации
    easing: 'ease-in-out',
  });
  const [listAnimate] = useAutoAnimate({
    duration: 400, // ← увеличил время анимации
    easing: 'ease-in-out',
  });
  useEffect(() => {
    if (isFetching) {
      setDebounceFetching(true);
    } else {
      const timerId = setTimeout(() => {
        setDebounceFetching(false);
      }, 300);
      return () => clearTimeout(timerId);
    }
  }, [isFetching]);

  // if (debounceFetching) {
  //   return <p>Обновляем...</p>;
  // }
  return (
    <div ref={parentAnimate}>
      {todos.length ? (
        <List aria-label="Список задач" ref={listAnimate}>
          {todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo} />
          ))}
        </List>
      ) : (
        <p>Задач пока нет!</p>
      )}
    </div>
  );
}
