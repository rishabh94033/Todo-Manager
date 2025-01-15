import Appbar from "../components/appbar";
import useTodos from "../hooks";
import Todo from "./todo";

export default function Todos(){
    const {todos}= useTodos();
    return(
        <div>
            <Appbar/>
        <div className="ml-40 mr-40 mt-10">
            {todos.map((todo)=>(
                <Todo key={todo.id}title={todo.title} description={todo.description} completed={todo.completed}/>
            ))}
        </div>
        </div>
    )
}