import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Header from './components/Header'
import Todos from './components/Todos'
import EditTodo from './components/EditTodo'
function App() {
  const [inputValue,setInputValue] = useState("")
  const [todos,setTodos] = useState([]);

  const [done,setDone] = useState(false);
  const [editWindow,setEditWindow] = useState(false);

  function addTodo(){
    setTodos([...todos,{message:inputValue,done:null}])
    console.log(todos)
    setInputValue("")
  }
  function deleteTodo(indexToDelete) {
    const updatedTodos = [...todos];
    updatedTodos.splice(indexToDelete, 1);
    setTodos(updatedTodos);
  }

  return (
    <>
     <Header/>
     <AddTodo inputValue={inputValue} setInputValue={setInputValue} onAddTodo={addTodo}/>
     <Todos todos={todos} onDeleteTodo={deleteTodo} done={done} setDone={setDone} setEditWindow={setEditWindow} editWindow={editWindow}/>
     {editWindow && <EditTodo/>}
    </>
  )
}

export default App
