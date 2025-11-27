import { Box, List, Typography, CircularProgress } from '@mui/material';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { TodoCard } from '../TodoCard/TodoCard';
import { TodosListProps } from './TodosList.types';
import { HiddenHeading } from 'components/HiddenHeading/HiddenHeading';

export function TodosList({ todos, showLoading, onUpdateTodo, onDeleteTodo }: TodosListProps) {
  const [cardsAnimate] = useAutoAnimate({ duration: 400, easing: 'ease-in-out' });

  return (
    <Box role="section" aria-labelledby="todos">
      <HiddenHeading id="todos" level={2}>
        Задачи
      </HiddenHeading>

      <Box position="relative" minHeight={200}>
        <Box
          style={{
            opacity: showLoading ? 0.7 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}>
          {todos.length ? (
            <List role="list" ref={cardsAnimate} tabIndex={0}>
              {todos.map((todo) => (
                <TodoCard key={todo.id} todo={todo} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo} />
              ))}
            </List>
          ) : (
            !showLoading && (
              <Typography variant="body1" component="p" textAlign="center" color="text.secondary" py={4}>
                Задач пока нет!
              </Typography>
            )
          )}
        </Box>

        {showLoading && (
          <Box
            position="absolute"
            borderRadius="8px"
            top={0}
            left={0}
            right={0}
            bottom={0}
            display="flex"
            justifyContent="center"
            bgcolor="background.default"
            paddingTop={20}
            zIndex={1}
            style={{ opacity: 0.6 }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Box>
  );
}
