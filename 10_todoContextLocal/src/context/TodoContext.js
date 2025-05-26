/**
 * This file sets up a Context for managing the state of a Todo app globally.
 *
 * ✅ `TodoContext`: Created with default values including a sample todo item and placeholder functions.
 
 * ✅ `useTodo`: A custom hook that wraps `useContext` to simplify access to the context.
 *    - Instead of importing and using `useContext(TodoContext)` in every component,
 *      `useTodo` provides a clean and reusable way to access everything inside the TodoContext.
 *    - This includes the entire `todos` array and the four functions: `addTodo`, `deleteTodo`,
 *      `toggleComplete`, and `updateTodo`.
 *    - This allows any component using `useTodo()` to **access and manipulate the complete todo state**
 *      without the need for prop drilling or multiple imports.
 
 * ✅ `TodoProvider`: The provider component used to supply todo state and functions to the entire app.
 *
 * Note:
 * - This file only defines the structure of the context.
 * - The actual implementation of `addTodo`, `deleteTodo`, `toggleComplete`, and `updateTodo`
 *   is passed down from a parent component (like `App.js`) when wrapping children in `<TodoProvider>`.
 */

import { createContext, useContext } from "react";

// Create Context with default shape (for autocomplete/type reference)
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
    updateTodo: (id, todo) => {},
});

// Custom hook to access the TodoContext from any component
export const useTodo = () => {
    return useContext(TodoContext);
};

// Export provider to wrap components that need access to the context
export const TodoProvider = TodoContext.Provider;
