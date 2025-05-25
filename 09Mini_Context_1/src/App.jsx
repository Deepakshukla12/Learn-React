
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {

  return (
    <>
      <UserContextProvider>
        <h1> Hello! this is context API </h1>
        <h2>Login to see your profile</h2>
        <Login />
        <br />
        <br />
        <h2>See your Profile</h2>
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
