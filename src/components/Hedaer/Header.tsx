import { Toolbar, AppBar, Typography, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isListPage = location.pathname === '/';
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        mb: 5,
        py: 0,
        '& .MuiToolbar-root': {
          px: 0,
        },
      }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          TaskManager
        </Typography>

        {isListPage ? (
          <Button variant="contained" color="primary" onClick={() => navigate('todos/new')}>
            + Добавить задачу
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={() => navigate('/')}>
            Вернуться к списку
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
