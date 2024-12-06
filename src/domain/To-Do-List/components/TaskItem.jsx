import React, { useState } from "react";
import { useTodo } from "../../../contexts/ToDoContext";

/**
 * TaskItem component that displays a single todo item with edit, delete, and complete functionalities.
 * 
 * @param {Object} todo - The todo item to be displayed.
 * @returns {JSX.Element} The task item UI with edit and delete options.
 */
function TaskItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false); // State to toggle edit mode
  const [todoMsg, setTodoMsg] = useState(todo.todo); 
  const { updateTodo, deleteTodo, toggleComplete } = useTodo(); 

  /**
   * Updates the todo with the new message and exits edit mode.
   */
  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg }); // Update todo message
    setIsTodoEditable(false); // Disable edit mode
  };

  /**
   * Toggles the completion state of the todo.
   */
  const toggleCompleted = () => {
    toggleComplete(todo.id); // Toggle the completed state
  };

  return (
    <div
      className={`d-flex flex-wrap gap-1 align-items-center justify-content-between p-3 mb-3 rounded shadow-sm ${
        todo.completed ? "bg-info text-white" : "bg-light text-dark"
      }`}
    >
      <div className="d-flex flex-grow-1 justify-center">
        {/* Checkbox to mark the todo as completed */}
      <div className="form-check me-3">
        <input
          type="checkbox"
          className="form-check-input cursor-pointer"
          style={{border:"1px solid blue"}}
          checked={todo.completed}
          onChange={toggleCompleted} // Trigger completion toggle
        />
      </div>

      {/* Editable text input or span for the todo message */}
      <div className="flex-grow-1 me-3">
        {isTodoEditable ? (
          <input
            type="text"
            className="form-control bg-transparent border-dark"
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)} // Update todo message as user types
            style={{
              wordBreak: "break-word", 
              whiteSpace: "normal", 
              textAlign: "left", 
            }}
          />
        ) : (
          <span
            className={`text-truncate ${
              todo.completed ? "text-decoration-line-through" : ""
            }`}
            style={{
              wordBreak: "break-word", 
              whiteSpace: "normal", 
              textAlign: "left", 
              display: "block", 
            }}
          >
            {todoMsg}
          </span>
        )}
      </div>
      </div>

      {/* Action buttons */}
      <div className="d-flex gap-2 ms-auto">
        {/* Edit/Save button */}
        <button
          className="btn btn-warning btn-sm"
          onClick={() => {
            if (todo.completed) return; // Prevent edit if the todo is completed
            if (isTodoEditable) {
              editTodo(); // Save changes
            } else {
              setIsTodoEditable((prev) => !prev); // Toggle edit mode
            }
          }}
          disabled={todo.completed} // Disable button if todo is completed
        >
          {isTodoEditable ? "Save" : "Edit"}
        </button>

        {/* Delete button */}
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteTodo(todo.id)} // Delete task
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
