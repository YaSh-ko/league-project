import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetTodoByIdQuery, useUpdateTodoMutation } from 'api/todosApi';
import { Todo, UpdateTodoDto } from 'types/todo.types';

export function EditTodo() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data: todo, error, isLoading } = useGetTodoByIdQuery(Number(id));
  const [updateTodo] = useUpdateTodoMutation();
  const [updatedTodo, setUpdatedTodo] = useState<UpdateTodoDto>({
    name: '',
    info: '',
    isImportant: false,
    isCompleted: false,
  });

  useEffect(() => {
    setUpdatedTodo((prev) => ({
      ...prev,
      name: todo?.name,
      info: todo?.info,
      isCompleted: todo?.isCompleted,
      isImportant: todo?.isImportant,
    }));
  }, [todo]);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setUpdatedTodo((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateTodo({ id: Number(id), todo: updatedTodo });
    navigate('/');
  };

  if (isLoading) return <div>Загрузка задачи...</div>;
  if (error) return <div>Ошибка загрузки</div>;
  if (!todo) return <div>Задача не найдена</div>;

  return (
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        name="name"
        onChange={handlerChange}
        value={updatedTodo.name}
        placeholder="Введите название задачи"
      />
      <input
        type="text"
        name="info"
        onChange={handlerChange}
        value={updatedTodo.info}
        placeholder="Введите описание задачи"
      />
      <input type="checkbox" name="isImportant" onChange={handlerChange} checked={updatedTodo.isImportant} />
      <input type="checkbox" name="isCompleted" onChange={handlerChange} checked={updatedTodo.isCompleted} />
      <button type="submit">Добавить</button>
    </form>
  );
}
