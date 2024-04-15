import "../styles/todo.css"
export default function Todo() {
  return (
    <div className="todo--main">
      <div>
        <div className="toggle-check-btn checked"></div>
        <h1 className="todo checked">Code 17 hours today</h1>
      </div>
      <div>
        <div className="edit"></div>
        <div className="delete"></div>
      </div>
    </div>
  )
}
