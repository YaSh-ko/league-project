import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from '@mui/material';
import { useCreateTodoMutation } from 'api/todosApi';
import { CreateTodoDto } from 'types/todo.types';
import { CustomTextField } from 'components/TextField';
import { CustomCheckbox } from 'components/Checkbox';

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
    console.log(newTodo);
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
    <Container>
      <form onSubmit={handlerSubmit}>
        <CustomTextField name="name" label="Название задачи" value={newTodo.name} onChange={handlerChange} />
        <CustomTextField name="info" label="Описание задачи" value={newTodo.info} onChange={handlerChange} />
        <CustomCheckbox name="isImportant" checked={newTodo.isImportant} onChange={handlerChange} />

        <Button type="submit" variant="contained" color="primary">
          Добавить
        </Button>
      </form>
    </Container>
  );
}
