import React, { useState } from 'react'

export default function TodoForm({addTodo}) {

  const [value, setValue] = useState("")

  function updateInput (e) {
    setValue(e.target.value)
  }

  function handleSubmit (e) {
      e.preventDefault()
      addTodo(value)
    }
  return (
  
  
    <div className='todoForm--main'>
        <form onSubmit={handleSubmit}>
            <div><input type="text" placeholder='What is your goal today?' name='task' value={value} onChange={updateInput}/></div>
            <button>+</button>
        </form>
    </div>
  )
}
