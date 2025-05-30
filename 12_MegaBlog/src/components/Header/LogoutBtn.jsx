
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import ConfirmLogout from '../ConfirmLogout'

function LogoutBtn() {
    const dispatch = useDispatch();
    const [confirm, setConfirm] = useState(false);

    const logoutHandler = () => {
      setConfirm(true);
    } 

    const confirmLogout = () => {
        authService.logout().then(() => {
            dispatch(logout());
            dispatch(clearPosts());
        })
    }

    const cancelLogout = () => {
      setConfirm(false);
    }

  return (
    <div>
      <button
        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}>
        Logout
      </button>

      <ConfirmLogout 
        isOpen={confirm}
        title="Logout"
        message="Are you sure you want to logout?"
        onConfirm={confirmLogout}
        onCancel={cancelLogout}
        />
    </div>
  )
}

export default LogoutBtn
