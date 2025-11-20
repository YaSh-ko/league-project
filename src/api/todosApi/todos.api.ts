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
        if (filters?.query) {
          const filtersParams = filters.query;
          if (filtersParams.name_like !== undefined) params.append('name_like', filtersParams.name_like);
          if (filtersParams.isCompleted !== undefined) params.append('isCompleted', String(filtersParams.isCompleted));
          if (filtersParams.isImportant !== undefined) params.append('isImportant', String(filtersParams.isImportant));
        }
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Todo', id: id }],
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
