import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
function EditTodo({ setEditWindow, selectedTodo, onEditTodo }) {
  const [editedTodo, setEditedTodo] = useState(selectedTodo.message);

  const handleApprove = () => {
    // Update the todos array with the edited value
    onEditTodo(selectedTodo.id, editedTodo);

    // Close the edit window
    setEditWindow(false);
  };

  return (
    <div>
      <Dialog open={true}>
        <div className="close-open-buttons">
          <button onClick={() => handleApprove()}>✅</button>
          <button onClick={() => setEditWindow(false)}>❌</button>
        </div>
        <DialogContent>
          <TextField
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
            margin="dense"
            id="name"
            label="Edit ToDo"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditTodo;
