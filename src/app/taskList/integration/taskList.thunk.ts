import { createAsyncThunk } from '@reduxjs/toolkit';
import { TodoRequestAgent } from 'api/tasks.api';

const todoApi = new TodoRequestAgent();

const fetchTodos = createAsyncThunk('todo/fetchAll', async (_, thunkAPI) => {
  try {
    const todos = todoApi.getAllTodos();
    return todos;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export { fetchTodos };
