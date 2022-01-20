import React from "react";


const Form = ({setInputText , todos,setTodos,inputText,setStatus,setEditngText}) => {
   //Here I can  write javascript code and function
  const inputTextHandler =(e)=>{
    setInputText(e.target.value);
  };
  const editHandler = (e) => {
    
  }
  const sumbmiTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {text:inputText,completed:false,id:Math.random()*1000}
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }
    return (
    <form>
      <input 
      value={inputText} 
      onChange={inputTextHandler}
       type="text"
        className="todo-input" />
      <button 
      onClick={sumbmiTodoHandler}
       className="todo-button"
        type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <button
      onClick={editHandler}
       className="edit-button"
        type="edit">
        <i className="fa-pencil-square-o"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}
export default Form;