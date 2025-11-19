import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Todo, createTodoDto, filters, updateTodoDto } from 'types/Todo';
const API_URL = 'https://tasks-service-maks1394.amvera.io';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Todo'],
  endpoints: (build) => ({
    getTodos: build.query<Todo[], filters>({
      query: (filters) => {
        const params = new URLSearchParams();
        if (filters.isCompleted) params.append('isCompleted', String(filters.isCompleted));
        return `/tasks?${params}`;
      },
      providesTags: ['Todo'],
    }),
    getTodoById: build.query<Todo, number>({
      query: (id) => `/tasks/${id}`,
    }),
    createTodo: build.mutation<Todo, createTodoDto>({
      query: (todo) => ({
        url: '/tasks',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todo'],
    }),
    updateTodo: build.mutation<Todo, updateTodoDto>({
      query: (todo) => ({
        url: `/tasks/${todo.id}`,
        method: 'PATCH',
        body: todo,
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const { useGetTodosQuery, useGetTodoByIdQuery, useCreateTodoMutation, useUpdateTodoMutation } = todosApi;
