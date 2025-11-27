import {
  ListItem,
  IconButton,
  Checkbox,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TodoCardProps } from './TodoCard.types';
import { ImportantBadge, TodoItem } from './TodoCard.style';
import { CustomCheckbox } from 'components/Checkbox';
import { useMobileMenu } from 'src/hooks/useMobileMenu';

export function TodoCard({ todo, onUpdateTodo, onDeleteTodo }: TodoCardProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const { anchorEl, menuOpen, handleMenuOpen, handleMenuClose } = useMobileMenu();

  return (
    <TodoItem
      role="listitem"
      aria-label={`Задача: ${todo.name}. ${todo.isCompleted ? 'Выполнена' : 'Активна'}. ${
        todo.isImportant ? 'Важная' : 'Обычная'
      }`}
      tabIndex={0}>
      <Box display="flex" flexDirection="column" width="100%">
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Box display="flex" alignItems="center" gap={1} width="100%">
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

            <Box>
              <Typography
                component="h3"
                variant="h3"
                noWrap={false}
                style={{ wordWrap: 'break-word', overflowWrap: 'break-word', wordBreak: 'break-word' }}
                fontWeight={500}
                title="Задача"
                id={`todoTitle${todo.id}`}>
                {todo.name}
              </Typography>
            </Box>
            {todo.isImportant && (
              <ImportantBadge ml={1}>
                <Typography component="span" variant="body2">
                  Важная
                </Typography>
              </ImportantBadge>
            )}
          </Box>

          {isMobile ? (
            <Box>
              <IconButton aria-label="Действия с задачей" onClick={handleMenuOpen}>
                <MoreVertIcon />
              </IconButton>

              <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
                <MenuItem
                  onClick={() => {
                    onUpdateTodo(Number(todo.id), {
                      isImportant: !todo.isImportant,
                    }),
                      handleMenuClose();
                  }}>
                  <GradeIcon
                    color="secondary"
                    fontSize="small"
                    style={{ marginRight: 1, opacity: todo.isImportant ? 1 : 0.3 }}
                  />
                  {todo.isImportant ? 'Сделать неважной' : 'Сделать важной'}
                </MenuItem>

                <MenuItem onClick={() => navigate(`todos/${todo.id}/edit`)}>
                  <EditIcon fontSize="small" style={{ marginRight: 1 }} />
                  Редактировать
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    onDeleteTodo(Number(todo.id));
                    handleMenuClose();
                  }}>
                  <DeleteOutlineIcon color="error" fontSize="small" />
                  Удалить
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box display="flex">
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
          )}
        </Box>
        <Box ml={1}>
          <Typography
            fontWeight={200}
            component="p"
            style={{ wordWrap: 'break-word' }}
            aria-describedby={`todoTitle${todo.id}`}>
            {todo.info}
          </Typography>
        </Box>
      </Box>
    </TodoItem>
  );
}
