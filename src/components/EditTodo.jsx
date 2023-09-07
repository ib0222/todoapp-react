import React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

function EditTodo({ setEditWindow,selectedTodo }) {
  return (
    <div>
      <Dialog open={true}>
        <div className="close-open-buttons">
          <button>✅</button>
          <button onClick={() => setEditWindow(false)}>❌</button>
        </div>
        <DialogContent>
          <TextField
            value={selectedTodo.message}
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
