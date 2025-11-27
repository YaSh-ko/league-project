import { Typography, Button, IconButton, Box, useMediaQuery, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { StyledAppBar, StyledToolbar } from './Header.styles';
import { useThemeMode } from 'src/context/ThemeContext/ThemeContext';
import { useSnackbar } from 'src/context';

export function Header() {
  const location = useLocation();

  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const isListPage = location.pathname === '/';
  const { mode, toggleTheme } = useThemeMode();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Typography component="h1" variant="h1" color="text.primary" title="Приложение для управления задачами">
          TaskManager
        </Typography>

        <Box display="flex" gap={2}>
          <IconButton
            onClick={() => {
              toggleTheme();
              showSnackbar(`Тема успешно сменена на ${mode === 'light' ? 'темную' : 'светлую'}`);
            }}
            aria-label={`Сменить тему на ${mode === 'light' ? 'темную' : 'светлую'}`}>
            {mode === 'light' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
          </IconButton>

          {isListPage ? (
            <Button fullWidth variant="contained" onClick={() => navigate('todos/new')}>
              {isMobile ? 'Добавить' : '+ Добавить задачу'}
            </Button>
          ) : (
            <Button variant="contained" onClick={() => navigate('/')}>
              {isMobile ? 'Список' : 'Вернуться к списку'}
            </Button>
          )}
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
}
