import React, { useState } from 'react'
import "../styles/todoWrapper.css"
import Todo from "./todo";


function TodoWrapper({appendTodo}) {
    const [tasksList, setTasksList] = useState([])

   
    setTasksList(appendTodo.map(e=>{
      return <Todo todo={e}/>
    }))


  return (
    <div className='todoWrapper'>
      {tasksList}
    </div>
  )
}

export default TodoWrapper
