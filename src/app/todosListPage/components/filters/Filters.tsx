import { ToggleButton, Box, TextField } from '@mui/material';
import { FiltersProps } from './Filters.types';

export function Filters({ filter, onChooseFilter, search, onChangeSearch }: FiltersProps) {
  return (
    <Box display="flex" gap={1} mb={2} height={40}>
      <TextField
        variant="outlined"
        placeholder="Название задачи"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeSearch(e.target.value)}
        size="small"
      />
      <ToggleButton value="all" selected={filter === 'all'} onClick={() => onChooseFilter('all')}>
        Все
      </ToggleButton>

      <ToggleButton value="important" selected={filter === 'important'} onClick={() => onChooseFilter('important')}>
        Важные
      </ToggleButton>
      <ToggleButton value="active" selected={filter === 'active'} onClick={() => onChooseFilter('active')}>
        Активные
      </ToggleButton>

      <ToggleButton value="completed" selected={filter === 'completed'} onClick={() => onChooseFilter('completed')}>
        Выполненные
      </ToggleButton>
    </Box>
  );
}
