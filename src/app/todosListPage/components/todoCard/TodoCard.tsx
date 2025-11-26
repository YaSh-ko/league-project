import { ListItem, IconButton, Checkbox, Box, Typography } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router-dom';
import { TodoCardProps } from './TodoCard.types';
import { TodoItem } from './TodoCard.style';
import { CustomCheckbox } from 'components/Checkbox';

export function TodoCard({ todo, onUpdateTodo, onDeleteTodo }: TodoCardProps) {
  const navigate = useNavigate();
  return (
    <TodoItem
      role="listitem"
      aria-label={`Задача: ${todo.name}. ${todo.isCompleted ? 'Выполнена' : 'Активна'}. ${
        todo.isImportant ? 'Важная' : 'Обычная'
      }`}
      tabIndex={0}>
      <Box display="flex" flexDirection="column" width="100%">
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Box display="flex" alignItems="center">
            <CustomCheckbox
              checked={todo.isCompleted}
              label={
                todo.isCompleted
                  ? ` Отметить задачу ${todo.name} как невыполненную`
                  : `Отметить задачу ${todo.name} как выполнена`
              }
              onChange={() =>
                onUpdateTodo(Number(todo.id), {
                  isCompleted: !todo.isCompleted,
                })
              }
            />

            <Box ml={1}>
              <Typography component="h3" variant="h3" fontWeight={500} title="Задача" id={`todoTitle${todo.id}`}>
                {todo.name}
              </Typography>
            </Box>
          </Box>
          <Box>
            <IconButton
              aria-label={
                todo.isImportant ? `Сделать задачу ${todo.name} неважной` : `Сделать задачу ${todo.name} важной`
              }
              onClick={() =>
                onUpdateTodo(Number(todo.id), {
                  isImportant: !todo.isImportant,
                })
              }>
              {todo.isImportant ? <GradeIcon color="secondary" /> : <GradeOutlinedIcon color="secondary" />}
            </IconButton>
            <IconButton
              aria-label={`Редактировать задачу ${todo.name}`}
              onClick={() => navigate(`todos/${todo.id}/edit`)}>
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label={`Удалить задачу ${todo.name}`}
              onClick={() => {
                onDeleteTodo(Number(todo.id));
              }}>
              <DeleteOutlineIcon color="error" />
            </IconButton>
          </Box>
        </Box>
        <Box ml={1}>
          <Typography fontWeight={200} variant="body1" aria-describedby={`todoTitle${todo.id}`}>
            {todo.info}
          </Typography>
        </Box>
      </Box>
    </TodoItem>
  );
}
