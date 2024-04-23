import React from 'react'
import Header from './components/header.js'
import "./App.css"
import TodoWrapper from './components/todoWrapper.js'

const App = () => {
  return (
    <div className='app--main'>
      <Header />
      <TodoWrapper />
    </div>
  )
}

export default App
