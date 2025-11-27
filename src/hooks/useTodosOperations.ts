import { useCreateTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } from 'api/todosApi';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from 'constants/constants.api';
import { useSnackbar } from 'src/context';
import { CreateTodoDto, UpdateTodoDto } from 'types/todo.types';
import { errorHanlder } from 'utils/errorHandler';

export function useTodosOperations() {
  const [updateTodo, { isLoading: isEditing }] = useUpdateTodoMutation();
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();
  const [createTodo, { isLoading: isCreating }] = useCreateTodoMutation();

  const { showSnackbar } = useSnackbar();

  const handleUpdateTodo = async (id: number, todo: UpdateTodoDto) => {
    try {
      await updateTodo({ id, todo }).unwrap();
      showSnackbar(SUCCESS_MESSAGES.UPDATE_TODO, 'success');
      return true;
    } catch (error) {
      const errorMessage = errorHanlder(error, ERROR_MESSAGES.UPDATE_TODO);
      showSnackbar(errorMessage, 'error');
      return false;
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id).unwrap();
      showSnackbar(SUCCESS_MESSAGES.DELETE_TODO, 'success');
      return true;
    } catch (error) {
      const errorMessage = errorHanlder(error, ERROR_MESSAGES.DELETE_TODO);
      showSnackbar(errorMessage, 'error');
      return false;
    }
  };

  const handleCreateTodo = async (newTodo: CreateTodoDto) => {
    try {
      await createTodo(newTodo).unwrap();
      showSnackbar(SUCCESS_MESSAGES.CREATE_TODO, 'success');
      return true;
    } catch (error) {
      const errorMessage = errorHanlder(error, ERROR_MESSAGES.CREATE_TODO);
      showSnackbar(errorMessage, 'error');
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
