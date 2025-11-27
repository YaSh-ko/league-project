import { useState } from 'react';
import { TodoFilterType } from 'app/TodosListPage/components/Filters';
import { GetTodoParams } from 'types/todo.types';

export function useTodosFilters() {
  const [filter, setFilter] = useState<TodoFilterType>('all');
  const [search, setSearch] = useState<string>('');

  const queryParams: GetTodoParams = {
    ...(filter === 'all'
      ? {}
      : filter === 'important'
      ? { isImportant: true }
      : filter === 'completed'
      ? { isCompleted: true }
      : { isCompleted: false }),
    ...{ name_like: search },
  };

  return {
    filter,
    search,
    setFilter,
    setSearch,
    queryParams,
  };
}
