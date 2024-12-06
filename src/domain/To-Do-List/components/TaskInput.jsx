import React, { useState } from "react";
import { useTodo } from "../../../contexts/ToDoContext";
import { validateTodo } from "../../../utils/validate-todo";

/**
 * TaskInput component to handle user input for adding a new to-do task
 * 
 * @returns {JSX.Element} The form for adding a new task with input validation
 */
function TaskInput() {
  const [todo, setTodo] = useState(""); // State to track the to-do input value
  const [error, setError] = useState(""); // State to track error message
  const { addTodo } = useTodo(); 

  /**
   * Handles form submission to add a new to-do item.
   * 
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleAdd = (e) => {
    e.preventDefault();
    const validationError = validateTodo(todo);
    if (validationError) {
      setError(validationError);
      return;
    }
    addTodo({ todo, completed: false });
    setTodo("");
    setError("");
  };

  return (
    <div className="">
      <form onSubmit={handleAdd} className="d-flex">
        <input
          type="text"
          placeholder="Jot Something Down..."
          className="form-control me-2"
          value={todo}
          onChange={(e) => setTodo(e.target.value)} // Update the input value as user types
        />
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
      
      {/* Show error if validation fails */}
      {error && (
        <div className="text-danger mt-2">
          <small>{error}</small> {/* Display the error message to the user */}
        </div>
      )}
    </div>
  );
}

export default TaskInput;
