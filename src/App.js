import React from 'react'
import Header from './components/header'
import "./app.css"
import TodoWrapper from './components/todoWrapper'

const App = () => {
  return (
    <div className='app--main'>
      <Header />
      <TodoWrapper />
    </div>
  )
}

export default App
