import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodosList from 'app/taskList/TaskList';
import { AddTask } from 'app/addTask/AddTask';
import { EditTask } from 'app/editTask/EditTask';

console.log(process.env.PUBLIC_URL);

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodosList />}></Route>
        <Route path="/tasks/new" element={<AddTask />}></Route>
        <Route path="/tasks/:id/edit" element={<EditTask />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
