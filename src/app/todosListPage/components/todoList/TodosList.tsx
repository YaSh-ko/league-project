import { Box, List, Typography } from '@mui/material';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { TodoCard } from '../TodoCard/TodoCard';
import { TodosListProps } from './TodosList.types';
import { HiddenHeading } from 'components/HiddenHeading/HiddenHeading';

export function TodosList({ todos, isFetching, onUpdateTodo, onDeleteTodo }: TodosListProps) {
  const [parentAnimate] = useAutoAnimate({
    duration: 400, // ← увеличил время анимации
    easing: 'ease-in-out',
  });
  const [listAnimate] = useAutoAnimate({
    duration: 400, // ← увеличил время анимации
    easing: 'ease-in-out',
  });
  return (
    <Box ref={parentAnimate} role="section" aria-labelledby="todos">
      <HiddenHeading id="todos" level={2}>
        Задачи
      </HiddenHeading>
      {todos.length ? (
        <List role="list" aria-label="Задачи" ref={listAnimate} tabIndex={0}>
          {todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo} />
          ))}
        </List>
      ) : (
        <p>Задач пока нет!</p>
      )}
    </Box>
  );
}
