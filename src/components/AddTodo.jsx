import AddIcon from "@mui/icons-material/Add";
function AddTodo({setInputValue,inputValue,onAddTodo}) {

    function handleInput(e){
        setInputValue(e.target.value)
    }


  return (
    <div className="addtodo-container">
      <input type="text" className="input-field" onChange={handleInput} value={inputValue}/>
      <button onClick={() => onAddTodo()}>
        <AddIcon />
      </button>
    </div>
  );
}

export default AddTodo;
