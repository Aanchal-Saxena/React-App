import { createContext, useContext } from "react";

/**
 * context to manage todo state and actions (like add, update, delete, and toggle complete)
 */
export const TodoContext = createContext({
    todos: [ // initial state with a default todo item
        {
            id: 1,
            todo: "Todo msg", 
            completed: false, 
        }
    ],
    addTodo: (todo) => {}, // for adding a todo
    updateTodo: (id, todo) => {}, // for updating a todo by its ID
    deleteTodo: (id) => {}, // for deleting a todo by its ID
    toggleComplete: (id) => {} // toggling the completion status of a todo
})

/**
 * Custom hook to access the TodoContext in other components.
 * This hook provides easy access to the todos and related actions.
 * 
 * @returns {{
*   todos: Array<{id: number, todo: string, completed: boolean}>,
*   addTodo: function(string): void,
*   updateTodo: function(number, string): void,
*   deleteTodo: function(number): void,
*   toggleComplete: function(number): void
* }} The todo state and functions for managing todos.
*/
export const useTodo = () => {
    return useContext(TodoContext); // Returns the context value (todos and functions) to components that use this hook
}






