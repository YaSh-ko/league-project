import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Todo, CreateTodoDto, UpdateTodoDto, GetTodoParams } from 'types/todo.types';
const API_URL = 'https://tasks-service-maks1394.amvera.io';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Todo'],
  endpoints: (build) => ({
    getTodos: build.query<Todo[], GetTodoParams>({
      query: (filters) => {
        const params = new URLSearchParams();
        console.log(filters);
        if (filters.name_like !== undefined) params.append('name_like', filters.name_like);
        if (filters.isCompleted !== undefined) params.append('isCompleted', String(filters.isCompleted));
        if (filters.isImportant !== undefined) params.append('isImportant', String(filters.isImportant));
        console.log(params);
        return `/tasks?${params}`;
      },
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Todo' as const, id })), { type: 'Todo', id: 'LIST' }]
          : [{ type: 'Todo', id: 'LIST' }],
    }),
    getTodoById: build.query<Todo, number>({
      query: (id) => `/tasks/${id}`,
      providesTags: (result, error, id) => [{ type: 'Todo', id: id }],
    }),
    createTodo: build.mutation<Todo, CreateTodoDto>({
      query: (todo) => ({
        url: '/tasks',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: [{ type: 'Todo', id: 'LIST' }],
    }),
    updateTodo: build.mutation<Todo, { id: number; todo: UpdateTodoDto }>({
      query: ({ id, todo }) => ({
        url: `/tasks/${id}`,
        method: 'PATCH',
        body: todo,
      }),
      invalidatesTags: [{ type: 'Todo', id: 'LIST' }],
    }),
    deleteTodo: build.mutation<Todo, number>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Todo', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodoByIdQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
