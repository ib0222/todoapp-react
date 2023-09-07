import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Todos({todos,onDeleteTodo,done,onEditTodo}) {
  return (
    <div className='todos-container'>

    {todos.map((todo,index) => (
      <div className='todo' key={index}>
      <p style={done?{textDecoration:'line-through'}:{textDecoration:'no'}}>{todo.message}</p>
      <hr/>
      <div className='edit-note'>
        <button ><CheckCircleIcon color='action' /></button>
        <button onClick={() => onEditTodo(index)}><EditIcon color='primary'/></button>
        <button onClick={() => {onDeleteTodo(index)}}><DeleteIcon sx={{ color: 'red' }}/></button>
      </div>
    </div>
    ))}
      
      
      
    </div>
  )
}

export default Todos