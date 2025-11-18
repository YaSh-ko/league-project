import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './taskList/integration/taskList.slice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
