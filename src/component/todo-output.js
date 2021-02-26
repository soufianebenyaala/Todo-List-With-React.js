import React from 'react';
import Todo from './todo';

const todo_output= ({todos, setTodos}) => {
  console.log(todos);

  return (
    <div className="todo-container">
      <ul className="todo-list"> 
      {
          todos.map( (todo) => (
            <Todo todo={todo} setTodos={setTodos} />
         ))}
      </ul>
    </div>
  );
}

export default todo_output;