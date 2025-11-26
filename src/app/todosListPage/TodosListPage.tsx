import { Box } from '@mui/material';
import { TodosList } from './components/TodoList';
import { Filters } from './components/Filters';
import { useGetTodosQuery } from 'api/todosApi';
import { useTodosFilters } from 'src/hooks/useTodosFilters';
import { useTodosOperations } from 'src/hooks/useTodosOperations';
import { useTodosSort } from 'src/hooks/useTodosSort';

export function TodosListPage() {
  const { filter, search, setFilter, setSearch, queryParams } = useTodosFilters();
  const { data: todos = [], error, isLoading, isFetching } = useGetTodosQuery(queryParams);
  const sortedTodos = useTodosSort(todos);
  const { handleUpdateTodo, handleDeleteTodo } = useTodosOperations();

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <Box>
      <Filters filter={filter} onChooseFilter={setFilter} search={search} onChangeSearch={setSearch} />
      <TodosList
        todos={sortedTodos}
        isFetching={isFetching}
        onUpdateTodo={handleUpdateTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </Box>
  );
}
