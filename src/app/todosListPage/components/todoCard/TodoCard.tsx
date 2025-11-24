import { ListItem, IconButton, Checkbox, Box, Typography } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router-dom';
import { TodoCardProps } from './TodoCard.types';
import { TodoItem } from './TodoCardStyle';
import { CustomCheckbox } from 'components/Checkbox';

export function TodoCard({ todo, onUpdateTodo, onDeleteTodo }: TodoCardProps) {
  const navigate = useNavigate();

  return (
    <TodoItem aria-label={`Задача: ${todo.name}. ${todo.isCompleted} ? Выполенена : Активна`}>
      <Box display="flex" flexDirection="column" width="100%">
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Box display="flex" alignItems="center">
            <CustomCheckbox
              checked={todo.isCompleted}
              onChange={() =>
                onUpdateTodo(Number(todo.id), {
                  isCompleted: !todo.isCompleted,
                })
              }
            />

            <Typography variant="h5" fontWeight={500} sx={{ ml: 1 }}>
              {todo.name}
            </Typography>
          </Box>
          <Box>
            <IconButton
              onClick={() =>
                onUpdateTodo(Number(todo.id), {
                  isImportant: !todo.isImportant,
                })
              }>
              {todo.isImportant ? <GradeIcon color="secondary" /> : <GradeOutlinedIcon color="secondary" />}
            </IconButton>
            <IconButton onClick={() => navigate(`todos/${todo.id}/edit`)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => onDeleteTodo(Number(todo.id))}>
              <DeleteOutlineIcon color="error" />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <Typography fontWeight={200} variant="body1" sx={{ ml: 1 }}>
            {todo.info}
          </Typography>
        </Box>
      </Box>
    </TodoItem>
  );
}
