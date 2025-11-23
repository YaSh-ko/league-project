import { ToggleButton, Box, TextField } from '@mui/material';
import { FiltersProps } from './Filters.types';

export function Filters({ filter, onChooseFilter, search, onChangeSearch }: FiltersProps) {
  const filterStyle = {
    backgroundColor: 'background.paper',
    color: 'text.primary',
    border: '1px solid',
    borderColor: 'divider',
    textTransform: 'none',
    borderRadius: 2,
    boxShadow: '0 0px 4px rgba(0,0,0,0.1)',
    px: 2,
    py: 1,
    '&.Mui-selected': {
      backgroundColor: 'primary.main',
      color: 'primary.contrastText',
      '&:hover': {
        backgroundColor: 'primary.dark',
      },
    },
    '&:hover': {
      backgroundColor: 'action.hover',
    },
  };
  return (
    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
      <TextField
        variant="outlined"
        placeholder="Название задачи"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeSearch(e.target.value)}
        size="small"
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            boxShadow: '0 0px 4px rgba(0,0,0,0.1)',
          },
        }}
      />
      <ToggleButton value="all" selected={filter === 'all'} onClick={() => onChooseFilter('all')} sx={filterStyle}>
        Все
      </ToggleButton>

      <ToggleButton
        value="important"
        selected={filter === 'important'}
        onClick={() => onChooseFilter('important')}
        sx={filterStyle}>
        Важные
      </ToggleButton>
      <ToggleButton
        value="active"
        selected={filter === 'active'}
        onClick={() => onChooseFilter('active')}
        sx={filterStyle}>
        Активные
      </ToggleButton>

      <ToggleButton
        value="completed"
        selected={filter === 'completed'}
        onClick={() => onChooseFilter('completed')}
        sx={filterStyle}>
        Выполненные
      </ToggleButton>
    </Box>
  );
}
