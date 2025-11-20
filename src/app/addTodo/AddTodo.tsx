import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateTodoMutation } from 'api/todosApi';
import { CreateTodoDto } from 'types/todo.types';

export function AddTodo() {
  const navigate = useNavigate();
  const [newTodo, setNewToodo] = useState<CreateTodoDto>({
    name: '',
    info: '',
    isImportant: false,
  });

  const [createTodo] = useCreateTodoMutation();
  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(newTodo);
    navigate('/');
  };

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;

    setNewToodo((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        name="name"
        onChange={handlerChange}
        value={newTodo.name}
        placeholder="Введите название задачи"
      />
      <input
        type="text"
        name="info"
        onChange={handlerChange}
        value={newTodo.info}
        placeholder="Введите описание задачи"
      />
      <input type="checkbox" name="isImportant" onChange={handlerChange} checked={newTodo.isImportant} />

      <button type="submit">Добавить</button>
    </form>
  );
}
