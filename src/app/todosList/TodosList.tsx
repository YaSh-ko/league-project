import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetTodosQuery } from 'api/todosApi';

export function TodosList() {
  const [filters, setFilters] = useState({
    isCompleted: false,
  });
  const { data: todos, error, isLoading, isFetching, refetch } = useGetTodosQuery(filters);
  const navigate = useNavigate();
  const handleClick = () => {
    refetch();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  return (
    <div>
      <button onClick={handleClick}>{isFetching ? 'Обновляем' : 'Получить'}</button>
      <label htmlFor="">
        Заверешенные
        <input type="checkbox" name="isCompleted" checked={filters.isCompleted} onChange={handleChange} />
      </label>

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
