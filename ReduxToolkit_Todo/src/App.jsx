/*
  - It imports and renders two child components:
    1. AddTodo: A form component where users can type and add new todo items.
    2. Todos: A list component that displays all the current todos and allows editing, toggling, and deleting.

  - The app header shows a title "Redux Toolkit".

  - This component acts as a container, assembling the main UI for managing todos using Redux Toolkit state management.
*/
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <h1 className='text-4xl'>Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
