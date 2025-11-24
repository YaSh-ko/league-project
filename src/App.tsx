import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { EditTodo } from './app/editTodo';
import { AddTodoPage } from './app/addTodoPage';
import { TodosListPage } from './app/todosListPage';
import { lightTheme } from './theme/theme';
import { Layout } from 'components/Layout/Layout';
export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <TodosListPage />
              </Layout>
            }></Route>
          <Route
            path="/todos/new"
            element={
              <Layout>
                <AddTodoPage />
              </Layout>
            }></Route>
          <Route
            path="/todos/:id/edit"
            element={
              <Layout>
                <EditTodo />
              </Layout>
            }></Route>
        </Routes>
      </CssBaseline>
    </ThemeProvider>
  );
}
