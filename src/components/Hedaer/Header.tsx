import { Typography, Button, IconButton, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { StyledAppBar, StyledToolbar } from './HeaderStyles';
import { useThemeMode } from 'src/context/ThemeContext/ThemeContext';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isListPage = location.pathname === '/';
  const { mode, toggleTheme } = useThemeMode();

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Typography variant="h4" fontWeight="bold" color="text.primary">
          TaskManager
        </Typography>

        <Box display="flex" gap={2}>
          <IconButton onClick={toggleTheme}>
            {mode === 'light' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
          </IconButton>

          {isListPage ? (
            <Button variant="contained" onClick={() => navigate('todos/new')}>
              + Добавить задачу
            </Button>
          ) : (
            <Button variant="contained" onClick={() => navigate('/')}>
              Вернуться к списку
            </Button>
          )}
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
}
