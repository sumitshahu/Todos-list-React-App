import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import { useState } from 'react';
import AddTodo from './MyComponents/AddTodo';
function App() {
  let onDelete=(todo)=>{
    console.log("i am on delete"+todo.title);
    setTodo(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos, setTodo]=useState([]);

  const addTodo=(title,desc)=>{
    let sno=todos.length+1;
    let myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodo([...todos,myTodo])
    setTodo([...todos, myTodo]);
  }
  return (
    <>
       <Header title="My Todos List" search={true}/>
        <AddTodo addTodo={addTodo}/>
       <Todos todo={todos} onDelete={onDelete}/>
       <Footer/>
        
    </> 
  );
}

export default App;
