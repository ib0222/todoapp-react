import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function Todos({
  todos,
  onDeleteTodo,
  setEditWindow,
  setSelectedTodo,
  getDoneTodo,
  done
}) {

  return (
    <div className="todos-container">
      {todos.map((todo, index) => (
        <div className={`todo ${todo.animationClass}`} key={index}>
          <p style={todo.done ? { textDecoration: "line-through" } : {}}>
            {todo.message}
          </p>
          <hr />
          <div className="edit-note">
            <button onClick={() => getDoneTodo(todo.id)}>
              <CheckCircleIcon color={todo.done ? "success" : "action"} />
            </button>
            <button
              onClick={() => {
                setEditWindow(true);
                setSelectedTodo(todo);
              }}
            >
              <EditIcon color="primary" />
            </button>
            <button
              onClick={() => {
                onDeleteTodo(index);
              }}
            >
              <DeleteIcon sx={{ color: "red" }} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todos;
