/*
  - The <Provider> component from react-redux wraps the whole app and makes the Redux store available
    to any nested components that need to access the Redux state or dispatch actions.

  - The Redux store is imported from './app/store' and passed to the Provider.

  This setup connects React with Redux Toolkit to manage global state in the app.
*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
