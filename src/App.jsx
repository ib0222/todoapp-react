import { useState, useEffect } from "react";
import "./App.css";
import { Alert } from "@mui/material";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todos from "./components/Todos";
import EditTodo from "./components/EditTodo";
import SignIn from "./components/SignIn";
import { auth, db } from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
function App() {
  const [signIn, setSignIn] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const [done, setDone] = useState(false);
  const [editWindow, setEditWindow] = useState(false);

  const [selectedTodo, setSelectedTodo] = useState(null);

  const [emptyTodo, setEmptyTodo] = useState(false);

  function addTodo() {
    if (inputValue.trim() !== "") {
      const newTodo = {
        message: inputValue,
        done: false,
        id: Math.floor(Math.random() * 10000),
      };
      setTodos([...todos, newTodo]);
      
      if (signIn) {
        updateFirestoreTodos([...todos, newTodo]);
      }
    } else {
      setEmptyTodo(true);
    }
    setTimeout(() => {
      setEmptyTodo(false);
    }, 1000);
    setInputValue("");
  }
  function deleteTodo(indexToDelete) {
    const updatedTodos = [...todos];
    updatedTodos.splice(indexToDelete, 1);
    setTodos(updatedTodos);
    if (signIn) {
      updateFirestoreTodos(updatedTodos);
    }
  }

  function getDoneTodo(idToToggleDone) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === idToToggleDone) {
          return { ...todo, done: !todo.done }; // Toggle the "done" property
        }
        return todo;
      });
    });
    if (signIn) {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === idToToggleDone) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
      updateFirestoreTodos(updatedTodos);
    }
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
    setEditWindow(false); // Close the edit window
    // Update the todos in Firestore (assuming user is logged in)
    if (signIn) {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === idToEdit) {
          return { ...todo, message: editedValue };
        }
        return todo;
      });
      updateFirestoreTodos(updatedTodos);
    }
  }
  async function updateFirestoreTodos(updatedTodos) {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "todos", user.uid);
      await setDoc(userDocRef, { todos: updatedTodos });
    }
  }

  // Function to retrieve user's todos from Firestore when signed in
  async function getUserTodos() {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "todos", user.uid);
      const docSnapshot = await getDoc(userDocRef);
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        const userTodos = userData.todos;
        setTodos(userTodos);
      }
    }
  }

  useEffect(() => {
    // Check if the user is signed in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setSignIn(true);
        getUserTodos(); // Retrieve user's todos from Firestore
      } else {
        setSignIn(false);
        setTodos([]); // Clear todos when not signed in
      }
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, []);

  return signIn ? (
    <>
      {emptyTodo && (
        <div className="alert-message">
          <Alert
            variant="filled"
            severity="error"
            style={{ width: "50%", display: "flex", justifyContent: "center" }}
          >
            Please add a todo!
          </Alert>
        </div>
      )}

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
        setEditWindow={setEditWindow}
        setSelectedTodo={setSelectedTodo}
        setDone={setDone}
        getDoneTodo={getDoneTodo}
      />
      {editWindow && (
        <EditTodo
          setEditWindow={setEditWindow}
          selectedTodo={selectedTodo}
          onEditTodo={editTodo}
        />
      )}
    </>
  ) : (
    <SignIn setSignIn={setSignIn} />
  );
}

export default App;
