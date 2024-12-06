/**
 * Validates a to-do task input.
 * 
 * @param {string} input - The task string to validate.
 * @returns {string} Error message, or an empty string if valid.
 */
export const validateTodo = (input) => {
    if (!input.trim()) return "Please enter a valid task.";
    if (input.length < 3) return "Task must be at least 3 characters long.";
    return "";
  };
  