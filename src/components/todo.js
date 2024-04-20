import { BiSolidEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";


export default function Todo(props) {

  return (
    <div className={`todo--main ${props.task.completed ? 'checked' : ''}`}>
      <div>
        <div className="toggle-check-btn" onClick={() => props.toggleCompleted(props.task.id)}></div>
        <h1 className={`todo  ${props.task.completed ? 'checked' : ''}`} >{props.task.task}</h1>
      </div>
      <div className="btn--main">
        <div className="edit" onClick={props.editTodo}>
          <BiSolidEdit />
        </div>
        <div className="delete" onClick={() => props.toggleDelete(props.task.id)}>
          <BsTrash />
        </div>
      </div>
    </div>
  )
}
