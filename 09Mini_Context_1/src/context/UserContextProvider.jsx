// This component defines a Context Provider for `UserContext`.
// It uses the `useState` hook to manage the `user` state globally.
// The `UserContext.Provider` wraps around `children`, allowing any nested
// component to access or update the `user` state using the `useContext` hook.
// This avoids prop drilling by providing a shared state at a higher level in the component tree.

import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    return (
        <>
            <UserContext.Provider value={{user, setUser}}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default UserContextProvider;
