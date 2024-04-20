import React, { useState } from 'react'

export default function EditTodoForm({editTodo}) {

  const [value, setValue] = useState("")
  
  const handleSubmit = e =>{
    e.preventDefault()
    editTodo(value)
    setValue('')    
  }

  return (
    <div className='todoForm--main'>
        <form onSubmit={handleSubmit}>
            <div><input type="text" placeholder='Update task' name='task' value={value} onChange={(e)=>{setValue(e.target.value)}}/></div>
            <button>Update</button>
        </form>
    </div>
  )
}
