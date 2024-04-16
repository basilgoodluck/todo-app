import "../styles/todo.css"
export default function Todo(props) {
  return (
    <div className="todo--main">
      <div>
        <div className="toggle-check-btn"></div>
        <h1 className="todo">{props.todo}</h1>
      </div>
      <div>
        <div className="edit"></div>
        <div className="delete"></div>
      </div>
    </div>
  )
}
