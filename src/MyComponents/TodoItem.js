import React from 'react'

const TodoItem = ({todo,onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <h4>{todo.desc}</h4>

      <button className="btn btn-danger" onClick={()=>onDelete(todo)}>Delete</button>
    </div>
  )
}

export default TodoItem
