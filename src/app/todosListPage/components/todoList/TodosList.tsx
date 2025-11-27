import { Box, List, Typography, CircularProgress } from '@mui/material';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { TodoCard } from '../TodoCard/TodoCard';
import { TodosListProps } from './TodosList.types';
import { HiddenHeading } from 'components/HiddenHeading/HiddenHeading';

export function TodosList({ todos, showLoading, onUpdateTodo, onDeleteTodo }: TodosListProps) {
  const [listAnimate] = useAutoAnimate({ duration: 400, easing: 'ease-in-out' });
  const [cardAnimate] = useAutoAnimate({ duration: 400, easing: 'ease-in-out' });
  return (
    <Box component="section" aria-labelledby="todos" position="relative" minHeight={200}>
      <HiddenHeading id="todos" level={2}>
        Задачи
      </HiddenHeading>

      <Box ref={listAnimate} style={{ opacity: showLoading ? 0.7 : 1, transition: 'opacity 0.3s' }}>
        {todos.length > 0 ? (
          <List role="list" ref={cardAnimate} tabIndex={0}>
            {todos.map((todo) => (
              <TodoCard key={todo.id} todo={todo} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo} />
            ))}
          </List>
        ) : (
          !showLoading && (
            <Typography variant="body1" textAlign="center" color="text.secondary" py={4}>
              Задач пока нет
            </Typography>
          )
        )}
      </Box>

      {showLoading && (
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          display="flex"
          justifyContent="center"
          bgcolor="background.default"
          paddingTop={20}
          borderRadius={2}
          style={{ opacity: 0.6 }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}
