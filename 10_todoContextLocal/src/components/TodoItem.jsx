
/**
 * This component represents a single todo item.
 * 
 * Features:
 * - Uses `useState` to manage:
 *    1. Edit mode (`isTodoEditable`)
 *    2. Editable text input value (`todoMsg`)
 * - Uses `useTodo` hook to access:
 *    1. `updateTodo` - update an existing todo message
 *    2. `deleteTodo` - remove the todo item
 *    3. `toggleComplete` - toggle the completed status
 * 
 * Functionalities:
 * - Users can:
 *    ✔️ Mark todo as complete/incomplete
 *    ✏️ Edit the todo message if not completed
 *    💾 Save the edited message
 *    ❌ Delete the todo
 * - The UI changes dynamically based on the completed status and edit mode.
 */

import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    };

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    };

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black 
                ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit or Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else {
                        setIsTodoEditable((prev) => !prev);
                    }
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
