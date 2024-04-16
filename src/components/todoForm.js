import React, { useState } from 'react'
import '../styles/todoForm.css'

export default function TodoForm({handleSubmit, inputValue, updateInput}) {

  return (
    <div className='todoForm--main'>
        <form onSubmit={handleSubmit}>
            <div><input type="text" placeholder='What is your goal today?' name='task' value={inputValue} onChange={updateInput}/></div>
            <button>+</button>
        </form>
    </div>
  )
}
