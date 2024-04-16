import React, { useState } from 'react'
import "../styles/todoWrapper.css"
import Todo from "./todo";


function TodoWrapper(props) {
    const [tasksList, setTasksList] = useState([])

    setTasksList(props.list.map((e)=>{
        return <Todo todo={e}/>
    }))
    

  return (
    <div className='todoWrapper'>
        {tasksList}
    </div>
  )
}

export default TodoWrapper
