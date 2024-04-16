import TodoTracker from "./todoTracker";
import "../styles/todoBody.css"
import { useState } from "react";
import TodoWrapper from './todoWrapper'
import TodoForm from "./todoForm";


export default function TodoBody() {
  const [value, setValue] = useState("")

  function updateInput (e) {
    setValue(e.target.value)
  }

  let todoADD
  function handleSubmit (e) {
    e.preventDefault()
    todoADD = value
  }
  return (
    <div className="todoBody--main">
      <TodoTracker />
      <TodoForm 
        updateInput = {updateInput}
        inputValue={value}
        handleSubmit={handleSubmit}
      />
      <TodoWrapper 
        todoADD = {todoADD}
      />
    </div>
  )
}