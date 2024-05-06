import React, { useState } from "react";
import "./index.css"; // Import CSS file for styling

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h1>To do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new to do"
        />
        <button className="add-btn m-5" onClick={handleAddTodo}>
          Add to list
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              id="a1"
              className="delete-btn"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
