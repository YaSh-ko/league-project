import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { TodosList } from './components/TodoList';
import { Filters, TodoFilterType } from './components/Filters';
import { useGetTodosQuery } from 'api/todosApi';
import { useTodosFilters } from 'src/hooks/useTodosFilters';
import { useTodosOperations } from 'src/hooks/useTodosOperations';
import { useTodosSort } from 'src/hooks/useTodosSort';

export function TodosListPage() {
  const { filter, search, setFilter, setSearch, queryParams } = useTodosFilters();
  const { data: todos = [], error, isLoading, isFetching } = useGetTodosQuery(queryParams);
  const sortedTodos = useTodosSort(todos);
  const { handleUpdateTodo, handleDeleteTodo } = useTodosOperations();
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isFetching) {
      timeoutId = setTimeout(() => setShowLoading(true), 300);
    } else {
      setShowLoading(false);
    }
    return () => clearTimeout(timeoutId);
  }, [isFetching]);

  const filterOptions: { value: TodoFilterType; label: string }[] = [
    { value: 'all', label: 'Все задачи' },
    { value: 'important', label: 'Важные' },
    { value: 'active', label: 'Активные' },
    { value: 'completed', label: 'Выполненные' },
  ];

  return (
    <Box>
      {/* Фильтры */}
      <Filters
        filter={filter}
        onChooseFilter={setFilter}
        search={search}
        onChangeSearch={setSearch}
        filterOptions={filterOptions}
      />

      {/* Область задач + статус */}
      <Box aria-live="polite" aria-atomic="true" mt={2}>
        {isLoading && (
          <Typography textAlign="center" color="text.secondary" py={4}>
            Загрузка...
          </Typography>
        )}
        {error && (
          <Typography textAlign="center" color="text.secondary" py={4}>
            Ошибка загрузки
          </Typography>
        )}
        {!isLoading && !error && (
          <TodosList
            todos={sortedTodos}
            showLoading={showLoading}
            onUpdateTodo={handleUpdateTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        )}
      </Box>
    </Box>
  );
}
