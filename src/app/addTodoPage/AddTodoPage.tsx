import { useCreateTodoMutation } from 'api/todosApi';
import { CreateTodoDto } from 'types/todo.types';
import { PageContainer } from 'components/PageContainer';
import { TodoForm } from 'components/todoForm/TodoForm';
import { useSnackbar } from 'src/context/SnackBarContext/SnackBarContext';

export function AddTodoPage() {
  const { showSnackbar } = useSnackbar();
  const [createTodo] = useCreateTodoMutation();
  const handlerSubmit = async (newTodo: CreateTodoDto) => {
    try {
      await createTodo(newTodo).unwrap();
      showSnackbar('Задача успешно добавлена!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageContainer>
      <TodoForm onSubmit={handlerSubmit} isEdit={false} />
    </PageContainer>
  );
}
