import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todos from "./components/Todos";
import EditTodo from "./components/EditTodo";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const [done, setDone] = useState(false);
  const [editWindow, setEditWindow] = useState(false);

  const [selectedTodo, setSelectedTodo] = useState(null);

  function addTodo() {
    setTodos([
      ...todos,
      {
        message: inputValue,
        done: false,
        id: Math.floor(Math.random() * 10000),
      },
    ]);
    console.log(todos);
    setInputValue("");
  }
  function deleteTodo(indexToDelete) {
    const updatedTodos = [...todos];
    updatedTodos.splice(indexToDelete, 1);
    setTodos(updatedTodos);
  }

  function editTodo(idToEdit, editedValue) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === idToEdit) {
          return { ...todo, message: editedValue };
        }
        return todo;
      });
    });
    setEditWindow(true); // Close the edit window
  }

  return (
    <>
      <Header />
      <AddTodo
        inputValue={inputValue}
        setInputValue={setInputValue}
        onAddTodo={addTodo}
      />
      <Todos
        todos={todos}
        onDeleteTodo={deleteTodo}
        done={done}
        setDone={setDone}
        setEditWindow={setEditWindow}
        editWindow={editWindow}
        onEditTodo={editTodo}
        setSelectedTodo={setSelectedTodo}
      />
      {editWindow && (
        <EditTodo
          setEditWindow={setEditWindow}
          selectedTodo={selectedTodo}
          onEditTodo={editTodo}
        />
      )}
    </>
  );
}

export default App;
