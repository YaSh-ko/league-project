import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from './taskList.types';
import { fetchTodos } from './taskList.thunk';

const initialState: InitialState = {
  items: [{ id: 1, name: 'task', info: 'task', isCompleted: false, isImportant: false }],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.error = String(action.payload);
        state.loading = false;
      });
  },
});

export default todosSlice.reducer;
