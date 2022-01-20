import React from "react";
//import components
import Todo from './Todo';


const TodoList = ({todos,setTodos,filterTodos,setEditngText}) =>{
    return (
       <div className="todo-container">
         <ul className="todo-list">
           {filterTodos.map((todo) => (
            <Todo 
               setTodos={setTodos} 
               todos={todos}
               key={todo.id}
               todo={todo} 
               text={todo.text}
               setEditngText={setEditngText}
            />
            ))}
         </ul>
      </div>
    );
};
export default TodoList;