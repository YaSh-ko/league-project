import { useNavigate } from 'react-router-dom';
import { Container, Snackbar } from '@mui/material';
import { useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm/AddTodoForm';
import { useCreateTodoMutation } from 'api/todosApi';
import { CreateTodoDto } from 'types/todo.types';
import { PageContainer } from 'components/PageContainer';
export function AddTodoPage() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [createTodo] = useCreateTodoMutation();
  const handlerSubmit = async (newTodo: CreateTodoDto) => {
    try {
      await createTodo(newTodo).unwrap();
      setSnackbarOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <PageContainer>
      <AddTodoForm onSubmit={handlerSubmit} />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Задача успешно создана!"
      />
    </PageContainer>
  );
}
