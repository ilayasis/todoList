import React, {useState,useEffect} from 'react';
import './App.css';
//importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //State stuff
  const[inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const[status,setStatus] = useState("all");
  const[filterTodos,setFilterTodos] = useState([]);
  const[editingText,setEditngText] = useState("");

  //run once

  useEffect(() => {
    getLocalTodos();
  },[]);

  //useEffect
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[todos,status]);

  //functions
  const filterHandler = () =>{
    switch(status){
      case "completed":
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);  
        break;
    }
  };

//save to local
const saveLocalTodos = () => {
  localStorage.setItem("todos",JSON.stringify(todos));
};
const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos",JSON.stringify([]));
    } else {
     let todoLocal = JSON.parse(localStorage.getItem("todos"));
     setTodos(todoLocal);
    }
};

  return (
    <div className="App">
     <header>
        <h1>ilay's Shopping List</h1>
    </header>
    <Form 
       inputText={inputText}
       todos={todos}
       setTodos={setTodos}
       setInputText={setInputText}
       setStatus={setStatus}
       editingText={editingText}
       setEditngText={setEditngText}
    />
    <TodoList 
    editingText={editingText}
    setEditngText={setEditngText}
    filterTodos={filterTodos} 
    setTodos={setTodos}
     todos={todos}/>
    </div>
  );
}

export default App;
