import { fetchTodos } from './integration/taskList.thunk';
import { useAppDispatch, useAppSelector } from 'app/hooks';

function TodosList() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.todos);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <button onClick={() => dispatch(fetchTodos())}>Получить</button>
      <ul>
        {items.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodosList;
