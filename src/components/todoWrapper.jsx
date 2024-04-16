import TodoTracker from "./todoTracker";
import "../styles/todoWrapper.css"
import TodoForm from "./todoForm";
// import Todo from "./todo";
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
  const addTodo = function (e) {
    e.preventDefault()

    formData.todoList.push(formData.task)
    console.log(formData.todoList)
  }
  


  return (
    <div className="todoWrapper--main">
      <TodoTracker />
      <TodoForm 
        task = {formData.task}
        getTask = {getTask}
        addTodo = {addTodo}
      />
    </div>
  )
}

