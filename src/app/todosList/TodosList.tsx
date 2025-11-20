import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoFilters } from './TodoList.types';
import { useGetTodosQuery } from 'api/todosApi';

export function TodosList() {
  const [filters, setFilters] = useState<TodoFilters>({
    nameLike: '',
    isImportant: false,
    isCompleted: false,
  });
  const queryParams = Object.keys(filters).length
    ? {
        query: {
          name_like: filters.nameLike || undefined,
          isImportant: filters.isImportant || undefined,
          isCompleted: filters.isCompleted || undefined,
        },
      }
    : undefined;

  const { data: todos, error, isLoading, isFetching, refetch } = useGetTodosQuery(queryParams);
  const navigate = useNavigate();
  const handleClick = () => {
    refetch();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  return (
    <div>
      <button onClick={handleClick}>{isFetching ? 'Обновляем' : 'Получить'}</button>
      <label htmlFor="">
        Заверешенные
        <input type="checkbox" name="isCompleted" checked={filters.isCompleted} onChange={handleChange} />
      </label>
      <label htmlFor="">
        Заверешенные
        <input type="checkbox" name="isImportant" checked={filters.isImportant} onChange={handleChange} />
      </label>

      <input type="text" name="nameLike" value={filters.nameLike} onChange={handleChange} />
      {isLoading && 'Загрузка...'}

      {error && 'Ошибка'}

      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <span>{todo.name}</span>
            <button onClick={() => navigate(`/todos/${todo.id}/edit`)}>Реадкитровать</button>
          </li>
        ))}
      </ul>

      <button onClick={() => navigate('/todos/new')}>Добавить</button>
    </div>
  );
}
