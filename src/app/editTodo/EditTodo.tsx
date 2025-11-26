import { useParams } from 'react-router-dom';
import { TodoForm } from 'components/TodoForm';
import { useGetTodoByIdQuery } from 'api/todosApi';
import { PageContainer } from 'components/PageContainer';
import { useEditTodo } from 'src/hooks/useEditTodo';

export function EditTodo() {
  const { id } = useParams<{ id: string }>();
  const todoId = Number(id);
  const { data: todo, error, isLoading } = useGetTodoByIdQuery(todoId);
  const { handleEditTodo, isEditing } = useEditTodo();

  if (isLoading) return <div>Загрузка задачи...</div>;
  if (error) return <div>Ошибка загрузки</div>;
  if (!todo) return <div>Задача не найдена</div>;

  return (
    <PageContainer>
      <TodoForm
        onSubmit={handleEditTodo}
        todoId={todoId}
        defaultValues={{
          name: todo.name,
          info: todo.info,
          isImportant: todo.isImportant,
          isCompleted: todo.isCompleted,
        }}
        isSubmitting={isEditing}
        isEdit={true}
      />
    </PageContainer>
  );
}
