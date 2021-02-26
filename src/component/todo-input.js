import React from 'react';


const todo_input = ({setInputText , setTodos, todos , inputText}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
            ...todos, 
             {text: inputText , completed : false, id: Math.random() * 1000}
      ]);
      setInputText(""); 

  }
  return (
<form>
      <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default todo_input;