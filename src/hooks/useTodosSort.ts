import { useMemo } from 'react';
import { Todo } from 'types/todo.types';

export function useTodosSort(todos: Todo[]) {
  const sortedTodos = useMemo(() => {
    if (!todos.length) return [];

    const sortedByImportant = [...todos].sort((a, b) => Number(b.isImportant) - Number(a.isImportant));
    return sortedByImportant.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
  }, [todos]);

  return sortedTodos;
}
