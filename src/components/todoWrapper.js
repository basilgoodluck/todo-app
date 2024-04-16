import React, { useState } from 'react'
import "../styles/todoWrapper.css"
import Todo from "./todo";


function TodoWrapper({todoADD}) {

  const [todos, setTodos] = useState([])

  function addTodo () {
    setTodos(()=>{return todos.push()})
  }

  return (
    <div className='todoWrapper'>
      {addTodo}
    </div>
  )
}

export default TodoWrapper
