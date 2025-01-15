import {BrowserRouter, Routes, Route} from "react-router-dom"
import Todos from "./pages/todos"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/edit" element={<Todos/>}/>  */}
      <Route path="/dashboard" element={<Todos/>}/> 
    </Routes>
  </BrowserRouter>
  )
}

export default App
