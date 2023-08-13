import { useState } from 'react';
import './App.css';
import Header from "./components/header"
import Form from "./components/form"
import Todolist from "./components/todolist"

function App() {
  const [todo,settodo]=useState("")
  const [todolist,settodolist]=useState([])
  return (
    <div className="App">
      <Header></Header>
      <Form todo={todo} settodo={settodo} todolist={todolist} settodolist={settodolist}></Form>
      <Todolist todolist={todolist} settodolist={settodolist}></Todolist>
    </div>
  );
}

export default App;
