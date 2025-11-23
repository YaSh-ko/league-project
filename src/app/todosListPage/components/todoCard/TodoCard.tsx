import { ListItem, IconButton, Checkbox, Box, Typography } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router-dom';
import { TodoCardProps } from './TodoCard.types';
import { CustomCheckbox } from 'components/Checkbox';

export function TodoCard({ todo, onUpdateTodo }: TodoCardProps) {
  const navigate = useNavigate();

  const cardStyle = {
    backgroundColor: 'background.paper',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    borderRadius: 3,
    mb: 2,
    p: 2,
    transition: 'all 1s ease-in-out',
  };
  return (
    <ListItem sx={cardStyle} aria-label={`Задача: ${todo.name}. ${todo.isCompleted} ? Выполенена : Активна`}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
              {todo.isImportant ? (
                <GradeIcon sx={{ color: '#FFC107' }} />
              ) : (
                <GradeOutlinedIcon sx={{ coloe: '#FFC107' }} />
              )}
            </IconButton>
            <IconButton onClick={() => navigate(`todos/${todo.id}/edit`)}>
              <EditIcon sx={{ color: 'primary' }} />
            </IconButton>
            <IconButton>
              <DeleteOutlineIcon sx={{ color: '#E53935' }} />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <Typography fontWeight={200} variant="body1" sx={{ ml: 1 }}>
            {todo.info}
          </Typography>
        </Box>
      </Box>
    </ListItem>
  );
}
