// This component allows the user to add a new todo item.
// It uses React's useState to manage the input field state,
// and useDispatch from react-redux to dispatch an action to add the todo to the Redux store.

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice' 

function AddTodo() {

    // Local state to keep track of input value
    const [input, setInput] = useState('')

    // useDispatch hook gives access to the dispatch function
    const dispatch = useDispatch()

    // Handler function when the form is submitted
    const addTodoHandler = (e) => {
        e.preventDefault() // Prevents the default form submit behavior (page refresh)
        dispatch(addTodo(input)) // Dispatches the addTodo action with the current input
        setInput('') // Clears the input field after adding
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 w-[400px] rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input} // Binds input value to component state
                onChange={(e) => setInput(e.target.value)} // Updates state when user types
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo
