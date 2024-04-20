import React, { useState } from 'react'

export default function TodoForm({addTodo}) {

  const [value, setValue] = useState("")
  
  const handleSubmit = e =>{
    e.preventDefault()
    addTodo(value)
    setValue('')    
  }

  return (
    <div className='todoForm--main'>
        <form onSubmit={handleSubmit}>
            <div><input type="text" placeholder='What is your goal today?' name='task' value={value} onChange={(e)=>{setValue(e.target.value)}}/></div>
            <button>Add</button>
        </form>
    </div>
  )
}
