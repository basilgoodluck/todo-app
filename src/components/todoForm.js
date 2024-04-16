import React, { useState } from 'react'
import '../styles/todoForm.css'

export default function TodoForm({inputValue, updateInput}) {

  return (
    <div className='todoForm--main'>
        <form>
            <div><input type="text" placeholder='What is your goal today?' name='task' value={inputValue} onChange={updateInput}/></div>
            <button>+</button>
        </form>
    </div>
  )
}
