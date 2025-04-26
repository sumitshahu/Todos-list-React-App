import React from 'react'
import TodoItem from './TodoItem'
const Todos = (props) => {

  return (
    <div>
        <h3> TODO LIST</h3>
        {
            props.todo.length==0?"No todos left":
           props.todo.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                  
           })
        }
    </div>
  )
}

export default Todos
