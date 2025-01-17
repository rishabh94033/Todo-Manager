import {BrowserRouter, Routes, Route} from "react-router-dom"
import Todos from "./pages/todos"
import Newtodo from "./pages/newtodo"
import EditTodo from "./pages/edittodo"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/new" element={<Newtodo/>}/> 
      <Route path="/dashboard" element={<Todos/>}/> 
      <Route path="/edit" element={<EditTodo/>}/> 
    </Routes>
  </BrowserRouter>
  )
}

export default App
