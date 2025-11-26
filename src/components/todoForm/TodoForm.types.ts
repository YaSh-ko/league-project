import { CreateTodoDto, UpdateTodoDto } from 'types/todo.types';

export interface TodoFormBaseProps {
  defaultValues?: CreateTodoDto | UpdateTodoDto;
  isSubmitting?: boolean;
  isEdit?: boolean;
}

export interface AddTodoFormProps extends TodoFormBaseProps {
  onSubmit: (data: CreateTodoDto) => void;
}

export interface EditTodoFormProps extends TodoFormBaseProps {
  onSubmit: (id: number, data: UpdateTodoDto) => void;
  todoId: number;
}

export type TodoFormProps = AddTodoFormProps | EditTodoFormProps;
