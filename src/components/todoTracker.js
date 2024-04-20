import React from 'react'

export default function TodoTracker(props) {
  return (
    <div className='todoTracker--main'>
      <div className='info--text'>
        <h1>TRACK PROGRESS</h1>
        <p>Keep it up</p>
      </div>
      <div className='score'>
        <h1>0/{props.totalTodos}</h1>
      </div>
    </div>
  )
}

