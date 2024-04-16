import React from 'react'
import '../styles/todoTracker.css'

export default function TodoTracker() {
  return (
    <div className='todoTracker--main'>
      <div className='info--text'>
        <h1>TRACK PROGRESS</h1>
        <p>Keep it up</p>
      </div>
      <div className='score'>
        <h1>1/3</h1>
      </div>
    </div>
  )
}

