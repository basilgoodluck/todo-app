import React, { useState } from 'react'
import "../styles/todoWrapper.css"
import Todo from "./todo";


function TodoWrapper({addTodo}) {
    const [tasksList, setTasksList] = useState([])


  return (
    <div className='todoWrapper'>
      {tasksList.map(e=>{
        <Todo task={e}/>
      })}
    </div>
  )
}

export default TodoWrapper
