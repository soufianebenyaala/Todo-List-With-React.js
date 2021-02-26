import React,{ useState } from 'react';
import './App.css';
import Todo_input from './component/todo-input';
import Todo_output from './component/todo-output';

function App() {
  const [inputText , setInputText] = useState("");
  const [todos , setTodos] = useState([]);
  
  return (
    <div className="App" >
      <header>
      <h1>Ed's Todo List </h1>
    </header>
      <Todo_input inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <Todo_output todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
