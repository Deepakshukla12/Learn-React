// This code sets up the Redux store for our React application using Redux Toolkit.
// The `configureStore` function is used to create the store, which holds the global state of the app.
// We import the `todoReducer` from our todo feature (todoSlice), which handles the logic for updating todo-related state.
// The reducer is then passed to `configureStore`, allowing our app to manage todo-related state globally.

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
});
