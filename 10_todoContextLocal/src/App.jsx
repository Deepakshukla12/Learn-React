
/**
 * This is the main component of the Todo application.
 * 
 * - It uses `useState` to manage the list of todos.
 * - It defines core functions: addTodo, updateTodo, deleteTodo, toggleComplete for managing todos.
 * - It uses `useEffect` to:
 *   1. Load todos from localStorage on initial render.
 *   2. Save todos to localStorage whenever they change.
 * - It wraps the application inside `TodoProvider` to make the todos and related functions
 *   available globally using React Context API.
 * - The UI includes a TodoForm (for adding/updating todos) and dynamically renders TodoItem components for each todo.
 */

import { useEffect, useState } from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [
      { id: Date.now(), ...todo }, ...prev
    ]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map(
      (prevTodo) => (prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo)
    ));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter(
      (prevTodo) => (prevTodo.id !== id)
    ));
  };

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map(
      (prevTodo) => (prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)
    ));
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      // If todos exist in localStorage, set them to state
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    // Whenever todos change, update localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, toggleComplete, updateTodo }}>
      <div className="bg-[#172832] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
