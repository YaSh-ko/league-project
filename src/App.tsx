import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EditTodo } from './app/editTodo';
import { AddTodo } from './app/addTodo';
import { TodosList } from './app/todosList';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodosList />}></Route>
        <Route path="/todos/new" element={<AddTodo />}></Route>
        <Route path="/todos/:id/edit" element={<EditTodo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
