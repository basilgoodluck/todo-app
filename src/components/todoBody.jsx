import TodoTracker from "./todoTracker";
import "../styles/todoBody.css"
import TodoForm from "./todoForm";
import { useState } from "react";
import TodoWrapper from './todoWrapper'


export default function TodoBody() {

  const [formData, setTask] = useState({
    task: "",
    todoList: [],
  })
  const getTask = function (e) {
    setTask(data => ({
      ...data,
      [e.target.name]: e.target.value
    }))
    
  }
  
  const handleSubmit = function (e) {
    e.preventDefault()

}
  return (
    <div className="todoBody--main">
      <TodoTracker />
      <TodoForm 
        task = {formData.task}
        getTask = {getTask}
        handleSubmit={handleSubmit}
      />
      <TodoWrapper />
    </div>
  )
}

