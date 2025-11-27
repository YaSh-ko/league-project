import { Box, FormControl, MenuItem, Select, TextField, useMediaQuery, useTheme } from '@mui/material';
import { FiltersProps, TodoFilterType } from './Filters.types';
import { ResponsiveToggleButton } from './Filter.style';
import { HiddenHeading } from 'components/HiddenHeading/HiddenHeading';

export function Filters({ filter, onChooseFilter, search, onChangeSearch, filterOptions }: FiltersProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box component="section" aria-labelledby="filters" mb={2}>
      <HiddenHeading id="filters" level={2}>
        Фильтры задач
      </HiddenHeading>

      <Box display="flex" flexWrap="wrap" gap={2} alignItems="center">
        <Box flex={1} minWidth="260px">
          <TextField
            variant="outlined"
            aria-label="Задачи по названию"
            placeholder="Название задачи"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeSearch(e.target.value)}
            size="small"
            fullWidth
          />
        </Box>

        {isMobile ? (
          <Box flex={1}>
            <FormControl fullWidth size="small">
              <Select
                value={filter}
                onChange={(e) => onChooseFilter(e.target.value as TodoFilterType)}
                displayEmpty
                aria-label="Фильтр задач">
                {filterOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        ) : (
          <Box display="flex" justifyContent="space-between" gap={1} flex={1}>
            <ResponsiveToggleButton
              value="all"
              selected={filter === 'all'}
              aria-pressed={filter === 'all'}
              onClick={() => onChooseFilter('all')}
              aria-label="Показать все задачи">
              Все
            </ResponsiveToggleButton>

            <ResponsiveToggleButton
              value="important"
              selected={filter === 'important'}
              aria-pressed={filter === 'important'}
              onClick={() => onChooseFilter('important')}
              aria-label="Показать важные задачи">
              Важные
            </ResponsiveToggleButton>

            <ResponsiveToggleButton
              value="active"
              selected={filter === 'active'}
              aria-pressed={filter === 'active'}
              onClick={() => onChooseFilter('active')}
              aria-label="Показать активные задачи">
              Активные
            </ResponsiveToggleButton>

            <ResponsiveToggleButton
              value="completed"
              selected={filter === 'completed'}
              aria-pressed={filter === 'completed'}
              onClick={() => onChooseFilter('completed')}
              aria-label="Показать выполненные задачи">
              Выполненные
            </ResponsiveToggleButton>
          </Box>
        )}
      </Box>
    </Box>
  );
}
