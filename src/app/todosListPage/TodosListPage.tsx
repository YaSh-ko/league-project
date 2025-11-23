import { useState } from 'react';
import { TodosList } from './components/todoList/TodosList';
import { Filters } from './components/filters/Filters';
import { TodoFilter } from './components/filters/Filters.types';
import { useGetTodosQuery, useUpdateTodoMutation } from 'api/todosApi';
import { GetTodoParams, UpdateTodoDto } from 'types/todo.types';

export function TodosListPage() {
  const [updateTodo] = useUpdateTodoMutation();
  const [filter, setFilter] = useState<TodoFilter>('all');
  const [search, setSearch] = useState<string>('');

  const queryParams: GetTodoParams = {
    ...(filter === 'all' ? {} : filter === 'important' ? { isImportant: true } : { isCompleted: true }),
    ...{ name_like: search },
  };
  const { data: todos = [], error, isLoading, isFetching } = useGetTodosQuery(queryParams);

  const handlerUpdateTodo = (id: number, todo: UpdateTodoDto) => {
    console.log(id, todo);
    updateTodo({ id, todo });
  };

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <div>
      <Filters filter={filter} onChooseFilter={setFilter} search={search} onChangeSearch={setSearch} />
      <TodosList todos={todos} isFetching={isFetching} onUpdateTodo={handlerUpdateTodo} />
    </div>
  );
}
