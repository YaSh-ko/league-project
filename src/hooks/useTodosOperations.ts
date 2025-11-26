import { useCreateTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } from 'api/todosApi';
import { useSnackbar } from 'src/context';
import { CreateTodoDto, UpdateTodoDto } from 'types/todo.types';

export function useTodosOperations() {
  const [updateTodo, { isLoading: isEditing }] = useUpdateTodoMutation();
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();
  const [createTodo, { isLoading: isCreating }] = useCreateTodoMutation();

  const { showSnackbar } = useSnackbar();

  const handleUpdateTodo = async (id: number, todo: UpdateTodoDto) => {
    try {
      await updateTodo({ id, todo });
      showSnackbar('Задача успешно обновлена!');
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      showSnackbar('Задача успешно удалена!');
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const handleCreateTodo = async (newTodo: CreateTodoDto) => {
    try {
      await createTodo(newTodo).unwrap();
      showSnackbar('Задача успешно добавлена!');
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return {
    handleUpdateTodo,
    isEditing,
    handleDeleteTodo,
    isDeleting,
    handleCreateTodo,
    isCreating,
  };
}
