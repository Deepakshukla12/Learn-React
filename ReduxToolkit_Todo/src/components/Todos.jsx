// This component displays the list of todos from the Redux store.
// It allows users to:
// - Mark a todo as completed/uncompleted (toggleComplete action)
// - Edit a todo's text (updateTodo action)
// - Delete a todo (removeTodo action)
// It uses `useSelector` to read todos from the store, and `useDispatch` to dispatch actions to update the global state.

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  toggleComplete,
  updateTodo,
} from "../features/todo/todoSlice";

function Todos() {
  // Get the current todos list from Redux state
  const todos = useSelector((state) => state.todos);
  
  // Get the dispatch function to send actions to Redux store
  const dispatch = useDispatch();
  
  // Track which todo is currently being edited
  const [editId, setEditId] = useState(null);
  
  // Hold the text value while editing a todo
  const [editText, setEditText] = useState("");

  // Handle saving the edited todo text
  const handleUpdate = (id) => {
    // Find the todo we want to update
    const todo = todos.find((t) => t.id === id);

    // If the todo is currently marked as completed,
    // toggleComplete action is dispatched to unmark it.
    // This logic assumes that editing a completed todo automatically marks it as incomplete.
    if (todo.completed) {
      dispatch(toggleComplete(id));
    }

    // Dispatch updateTodo action with payload containing:
    // - id of the todo to update
    // - newText which is the edited text from input
    // The reducer will find the todo by id and update its text with newText.
    dispatch(updateTodo({ id, newText: editText }));

    // Exit edit mode and clear the edit text input
    setEditId(null);
    setEditText("");
  };

  return (
    <ul className="list-none">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`mt-4 flex justify-between items-center px-4 py-2 rounded ${
            todo.completed ? "bg-green-700" : "bg-zinc-800"
          }`}
        >
          {/* Left side: checkbox and todo text or input for editing */}
          <div className="flex items-center gap-3 text-white">
            {/* Checkbox to toggle todo completion */}
            <input
              type="checkbox"
              checked={todo.completed}
              // When checkbox changes, dispatch toggleComplete with the todo id
              // The reducer will flip the 'completed' boolean value for this todo
              onChange={() => dispatch(toggleComplete(todo.id))}
            />

            {/* Show input box if editing this todo, otherwise show text */}
            {editId === todo.id ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)} // Update editText state as user types
                className="bg-gray-700 text-white px-2 py-1 rounded"
              />
            ) : (
              <span className={todo.completed ? "line-through" : ""}>
                {todo.text}
              </span>
            )}
          </div>

          {/* Right side: Edit/Save and Delete buttons */}
          <div className="flex gap-2">
            {editId === todo.id ? (
              // Show Save button when editing
              <button
                onClick={() => handleUpdate(todo.id)} // Save edited todo on click
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Save
              </button>
            ) : (
              // Show Edit button when not editing
              <button
                onClick={() => {
                  setEditId(todo.id);       // Enter edit mode for this todo
                  setEditText(todo.text);   // Populate input with current text
                }}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
            )}

            {/* Delete button to remove todo */}
            <button
              onClick={() => dispatch(removeTodo(todo.id))} // Dispatch removeTodo action
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              🗑
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
