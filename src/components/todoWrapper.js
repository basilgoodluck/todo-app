import TodoTracker from "./todoTracker";
import { useState } from "react";
import TodoForm from "./todoForm";


export default function TodoWapper() {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos], {todo})
  }

  return ( 
    <div className="todoWrapper--main">
      <TodoTracker />
      <TodoForm
        addTodo={addTodo}
      />
    </div>
  )
}