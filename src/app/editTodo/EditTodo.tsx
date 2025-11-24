import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { TodoForm } from 'components/todoForm/TodoForm';
import { useGetTodoByIdQuery, useUpdateTodoMutation } from 'api/todosApi';
import { UpdateTodoDto } from 'types/todo.types';
import { PageContainer } from 'components/PageContainer';
import { useSnackbar } from 'src/context/SnackBarContext/SnackBarContext';

export function EditTodo() {
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const todoId = Number(id);
  const { data: todo, error, isLoading } = useGetTodoByIdQuery(todoId);
  const [updateTodo, { isLoading: isUpdating }] = useUpdateTodoMutation();

  const handlerSubmit = async (data: UpdateTodoDto & { id: number }) => {
    try {
      await updateTodo({ id: Number(id), todo: data }).unwrap();
      showSnackbar('Задача успешно отредактирована!');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) return <div>Загрузка задачи...</div>;
  if (error) return <div>Ошибка загрузки</div>;
  if (!todo) return <div>Задача не найдена</div>;

  return (
    <PageContainer>
      <TodoForm
        onSubmit={handlerSubmit}
        todoId={todoId}
        defaultValues={{
          name: todo.name,
          info: todo.info,
          isImportant: todo.isImportant,
          isCompleted: todo.isCompleted,
        }}
        isSubmitting={isUpdating}
        isEdit={true}
      />
    </PageContainer>
  );
}
