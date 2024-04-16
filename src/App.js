import React from 'react'
import Header from './components/header'
import "./app.css"
import TodoBody from './components/todoBody'

const App = () => {
  return (
    <div className='app--main'>
      <Header />
      <TodoBody />
    </div>
  )
}

export default App
