/**
 * Retrieves data from local storage.
 * 
 * @param {string} key - The key of the data to retrieve.
 * @returns {any} - The parsed data or null if no data exists.
 */
export const getFromLocalStorage = (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(`Error retrieving key "${key}" from local storage:`, error);
      return null;
    }
  };
  
  /**
   * Saves data to local storage.
   * 
   * @param {string} key - The key under which to save the data.
   * @param {any} value - The data to save.
   */
  export const saveToLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving key "${key}" to local storage:`, error);
    }
  };
  
  /**
   * Removes data from local storage.
   * 
   * @param {string} key - The key of the data to remove.
   */
  export const removeFromLocalStorage = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing key "${key}" from local storage:`, error);
    }
  };
  