import TodoTracker from "./todoTracker";
import "../styles/todoWrapper.css"
import TodoForm from "./todoForm";
import Todo from "./todo";
import { useState } from "react";


export default function TodoWrapper() {

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

    formData.todoList.push(formData.task)
  }

  const addTodo = function () {
    formData.todoList.map(e=>{
      return <Todo todo={e} />
    })
  }
  
  return (
    <div className="todoWrapper--main">
      <TodoTracker />
      <TodoForm 
        task = {formData.task}
        getTask = {getTask}
        handleSubmit = {handleSubmit}
      />
      {addTodo}
    </div>
  )
}

