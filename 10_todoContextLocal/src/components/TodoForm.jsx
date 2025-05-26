
/**
 * This component renders a form to add a new todo item.
 * 
 * - It uses `useState` to manage the input value for the todo.
 * - It consumes the `addTodo` function from the global context via `useTodo`.
 * - On form submission, it:
 *   1. Prevents default form behavior.
 *   2. Validates the input (ignores empty submissions).
 *   3. Adds a new todo using `addTodo` with a unique `id`, current input `todo`, and default `completed: false`.
 *   4. Resets the input field after submission.
 */

import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo({ id: Date.now(), todo: todo, completed: false });
        setTodo("");
    }

    return (
        <form className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
