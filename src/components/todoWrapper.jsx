import TodoTracker from "./todoTracker";
import "../styles/todoWrapper.css"
import TodoForm from "./todoForm";
import Todo from "./todo";
import { useState } from "react";


export default function TodoWrapper() {

  const [data, setTask] = useState({
    task: "",
    todo: "",
  })
  const getTask = function (e) {
    {}
    setTask(data => ({
      ...data,
      [e.target.name]: e.target.value
    }))
  }
  const addTodo = function () {
    return <Todo />
        
  }

  return (
    <div className="todoWrapper--main">
      <TodoTracker />
      <TodoForm 
        task = {data.task}
        getTask = {getTask}
      />
    </div>
  )
}

