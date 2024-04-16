import TodoTracker from "./todoTracker";
import "../styles/todoBody.css"
import TodoForm from "./todoForm";
import { useState } from "react";
import TodoWrapper from './todoWrapper'


export default function TodoBody() {

  const [formData, setTask] = useState({
    task: "",
    todoItem: "",
  })
  const getTask = function (e) {
    setTask(data => ({
      ...data,
      [e.target.name]: e.target.value
    }))
    
  }
  let anArray = []

  const handleSubmit = function (e) {
    e.preventDefault()
    formData.todoItem = formData.task
    anArray.push(formData.todoItem)
}
  return (
    <div className="todoBody--main">
      <TodoTracker />
      <TodoForm 
        task = {formData.task}
        getTask = {getTask}
        handleSubmit={handleSubmit}
      />
      <TodoWrapper appendTodo={anArray}/>
    </div>
  )
}

