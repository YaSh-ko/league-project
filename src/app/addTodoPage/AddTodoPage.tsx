import { PageContainer } from 'components/PageContainer';
import { TodoForm } from 'components/TodoForm';
import { useTodosOperations } from 'src/hooks/useTodosOperations';

export function AddTodoPage() {
  const { handleCreateTodo, isCreating } = useTodosOperations();

  return (
    <PageContainer>
      <TodoForm onSubmit={handleCreateTodo} isEdit={false} isSubmitting={isCreating} />
    </PageContainer>
  );
}
