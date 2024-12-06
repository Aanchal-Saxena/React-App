import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import { TodoContext } from "../../contexts/ToDoContext";
import { v4 as uuidv4 } from 'uuid';
import { getFromLocalStorage, saveToLocalStorage } from "../../utils/local-storage-utils"; // Import utilities

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All"); // Filter state to manage different types of tasks lile pending and completed
  const [notification, setNotification] = useState(""); 

  /**
   * Displays a notification message temporarily.
   * 
   * @param {string} message - The message to display.
   */
  const showNotification = (message) => {
    setNotification(message); // Set the notification message
    setTimeout(() => setNotification(""), 3000); // Clear the message after 3 seconds
  };

  /**
   * Adds a new todo item.
   * 
   * @param {Object} todo - The todo item to be added.
   */
  const addTodo = (todo) => {
    const id = uuidv4(); // Generate unique id for the new todo
    setTodos((prev) => [{ id: id, ...todo }, ...prev]); // Add new todo to the state
    showNotification("Task added successfully!");
  };

  /**
   * Updates an existing todo item
   * 
   * @param {string} id - The id of the todo to be updated.
   * @param {Object} todo - The updated todo data.
   */
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)) // Update the todo with the matching id
    );
    showNotification("Task updated successfully!");
  };

  /**
   * Deletes a todo item.
   * 
   * @param {string} id - The id of the todo to be deleted
   */
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id)); // Filter out the todo to be deleted
    showNotification("Task deleted successfully!");
  };

  /**
   * Toggles the completion state of a todo item.
   * 
   * @param {string} id - The id of the todo 
   */
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed } // Toggle the completed status
          : prevTodo
      )
    );
  };

  // Filter todos based on the selected filter option
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Completed") return todo.completed;
    if (filter === "Pending") return !todo.completed;
    return true; // "All" filter, show all tasks
  });

  // Load todos from localStorage on component mount
  useEffect(() => {
    const storedTodos = getFromLocalStorage("todos"); // Use utility function
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos); 
    }
  }, []);

  // Save todos to localStorage whenever the todos state changes
  useEffect(() => {
    saveToLocalStorage("todos", todos); // Use utility function
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className=" py-5 mx-2">
        <div className="container shadow-lg rounded-lg px-4 py-3 theme-color rounded">
          <h1 className="text-3xl font-bold text-center mb-5 text-white">Manage Your Todos</h1>
          
          {/* Notification */}
          {notification && (
            <div className="alert alert-info text-center" role="alert">
              {notification}
            </div>
          )}

          {/* Filter Options */}
          <div className="mb-4 d-flex justify-content-center gap-4">
            <button
              className={`btn ${filter === "All" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setFilter("All")} // Set filter to show all todos
            >
              All
            </button>
            <button
              className={`btn ${filter === "Completed" ? "btn-success" : "btn-outline-success"}`}
              onClick={() => setFilter("Completed")} // Set filter to show completed todos
            >
              Completed
            </button>
            <button
              className={`btn ${filter === "Pending" ? "btn-warning" : "btn-outline-warning"}`}
              onClick={() => setFilter("Pending")} // Set filter to show pending todos
            >
              Pending
            </button>
          </div>

          <div className="mb-4">
            <TaskInput /> {/* Input form for adding new todos */}
          </div>

          {/* Display filtered todos */}
          <div className="d-flex flex-column gap-3">
            {filteredTodos.map((todo) => (
              <TaskItem key={todo.id} todo={todo} /> // Display each filtered todo item
            ))}
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default ToDo;
