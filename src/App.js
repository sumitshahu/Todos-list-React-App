import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import { useState } from 'react';
import AddTodo from './MyComponents/AddTodo';


import About from './MyComponents/About';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';

function App() {
  let onDelete = (todo) => {
    console.log("i am on delete" + todo.title);
    setTodo(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const [todos, setTodo] = useState([]);

  const addTodo = (title, desc) => {
    let sno = todos.length + 1;
    let myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodo([...todos, myTodo]);
  }
  return (

    <>
      <Router>
        <Header title="My Todos List" search={true} />

        <Routes>

          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todo={todos} onDelete={onDelete} />
            </>
          }>
    
          </Route>
          <Route exact path="/about" element={<About />}>
          </Route>
        </Routes>

        <Footer />

      </Router>
    </>
  );
}

export default App;
