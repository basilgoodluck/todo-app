import TodoTracker from "./todoTracker";
import { useState } from "react";
import TodoForm from "./todoForm";
import Todo from "./todo"
import {v4 as uuidv4} from "uuid"
import EditTodoForm from "./editTodoForm";
uuidv4();


export default function TodoWapper() {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    if(todo === ''){
      return
    }
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])

  }
  const toggleCompleted = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
  }
  const toggleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const editTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditiing} : todo))
  }

  const editTask = (task, id) =>{
    setTodos(todos.map(todo => todo.id === id ? {task, isEditiing: !todo.isEditiing} : todo))
  }
  return ( 
    <div className="todoWrapper--main">
      <TodoTracker 
        totalTodos = {todos.length}
      />
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm
            editTodo={editTask}
            task={todo}
          />
        ) : (
          <Todo 
            task = {todo} 
            key={index} 
            toggleCompleted = {toggleCompleted}
            completed = {todos.completed}
            toggleDelete = {toggleDelete}
            editTodo = {editTodo}
          />
        )
        
      ))}
    </div>
  )
}