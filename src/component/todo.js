import React from 'react';

const Todo  = ({todo ,setTodos}) => {
const deleteHandler = () => {
   console.log('dele');
} 
const completedHandler = () => {
    
} 
return (
    <div className="todo">
        <li className="todo-item" > {todo.text}</li>
        <button className="complete-btn" onClick={deleteHandler}>
            <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn"  onClick={completedHandler}>
            <i className="fas fa-trash"></i>
        </button>
    </div>
);
}

export default Todo;
