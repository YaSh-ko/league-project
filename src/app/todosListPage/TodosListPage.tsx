import { useMemo, useState } from 'react';
import { TodosList } from './components/todoList/TodosList';
import { Filters } from './components/filters/Filters';
import { TodoFilter } from './components/filters/Filters.types';
import { useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoMutation } from 'api/todosApi';
import { GetTodoParams, UpdateTodoDto } from 'types/todo.types';

export function TodosListPage() {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [filter, setFilter] = useState<TodoFilter>('all');
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
  const { data: todos = [], error, isLoading, isFetching } = useGetTodosQuery(queryParams);

  const sortedTodos = useMemo(() => {
    if (!todos.length) return [];

    const sortedByImportant = [...todos].sort((a, b) => Number(b.isImportant) - Number(a.isImportant));
    return sortedByImportant.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
  }, [todos]);

  const handlerUpdateTodo = (id: number, todo: UpdateTodoDto) => {
    updateTodo({ id, todo });
  };

  const handlerDeleteTodo = (id: number) => {
    deleteTodo(id);
  };

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <div>
      <Filters filter={filter} onChooseFilter={setFilter} search={search} onChangeSearch={setSearch} />
      <TodosList
        todos={sortedTodos}
        isFetching={isFetching}
        onUpdateTodo={handlerUpdateTodo}
        onDeleteTodo={handlerDeleteTodo}
      />
    </div>
  );
}
