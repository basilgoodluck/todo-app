import React from 'react'
import "../styles/todoWrapper.css"
import Todo from "./todo";


function TodoWrapper() {

    const anArray = ["We are glad to have you", "Love the way you lie", "Who is not happy"]
    const funct = anArray.map((e)=>{
        return <Todo todo={e}/>
    })

  return (
    <div className='todoWrapper'>
        {funct} 
    </div>
  )
}

export default TodoWrapper
