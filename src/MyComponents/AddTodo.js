import React from 'react'
import { useState } from 'react'
const AddTodo = (props) => {
    const [title, setTitle]=useState("");
    const [desc, setDesc]=useState("");

    const submit=(e)=>{
      e.preventDefault();
      if(!title || !desc){
        alert("Title or desc cannot be blank");
      }
      else{
        props.addTodo(title,desc);
      }
    }
  return (
    <div>
        <h3>ADD Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">TODO Title</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Desciption</label>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
  </div>
  
    <button type="submit" className="btn btn-success">Submit</button>
</form>
    </div>
  )
}

export default AddTodo
