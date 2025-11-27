import { useNavigate } from 'react-router-dom';
import { useTodosOperations } from './useTodosOperations';
import { UpdateTodoDto } from 'types/todo.types';

export function useEditTodo() {
  const navigate = useNavigate();
  const { handleUpdateTodo, isEditing } = useTodosOperations();

  const handleEditTodo = async (id: number, todo: UpdateTodoDto) => {
    const success = await handleUpdateTodo(id, todo);
    if (success) {
      navigate('/');
    }
  };

  return {
    handleEditTodo,
    isEditing,
  };
}
