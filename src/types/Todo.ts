type Todo = {
  readonly id: number;
  name: string;
  info: string;
  isCompleted: boolean;
  isImportant: boolean;
};

type createTodoDto = {
  name: string;
  info?: string;
  isImportant?: boolean;
};

type updateTodoDto = Pick<Todo, 'id'> & Partial<Todo>;

type filters = {
  name?: string;
  isCompleted?: boolean;
  isImportant?: boolean;
};

export type { createTodoDto, Todo, updateTodoDto, filters };
