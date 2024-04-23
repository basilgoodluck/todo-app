import React, { useState } from 'react'

export default function EditTodoForm({editTodo, task}) {

  const [value, setValue] = useState(task.task)
  
  const handleSubmit = e =>{
    e.preventDefault()
    editTodo(value, task.id) 
    setValue("")
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
