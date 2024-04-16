import React from 'react'
import '../styles/todoForm.css'

export default function TodoForm(props) {
  return (
    <div className='todoForm--main'>
        <form onSubmit={props.handleSubmit}>
            <div><input type="text" placeholder='what is your goal today?' name='task' value={props.task} onChange={props.getTask}/></div>
            <button>+</button>
        </form>
    </div>
  )
}
