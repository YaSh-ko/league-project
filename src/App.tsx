import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { EditTodoPage } from './app/editTodoPage';
import { AddTodoPage } from './app/addTodoPage';
import { TodosListPage } from './app/todosListPage';
import { SnackbarProvider } from './context/SnackBarContext';
import { ThemeModeProvider } from './context/ThemeContext';
import { Layout } from 'components/Layout';

export function App() {
  return (
    <ThemeModeProvider>
      <CssBaseline />

      <SnackbarProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <TodosListPage />
              </Layout>
            }
          />

          <Route
            path="/todos/new"
            element={
              <Layout>
                <AddTodoPage />
              </Layout>
            }
          />

          <Route
            path="/todos/:id/edit"
            element={
              <Layout>
                <EditTodoPage />
              </Layout>
            }
          />
        </Routes>
      </SnackbarProvider>
    </ThemeModeProvider>
  );
}
